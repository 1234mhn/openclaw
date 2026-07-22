/**
 * 唱歌评测 - 录音保存服务器
 * 
 * 提供 API 端点用于保存/读取录音文件和进行服务端音频分析。
 * 
 * 启动方式： node server.js
 * 默认端口： 3420
 * 
 * 也可配合 OpenClaw 网关使用：在 openclaw.yaml 中添加 proxy routes
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PORT = process.env.PORT || 3420;
const RECORDINGS_DIR = path.join(__dirname, 'recordings');
const HTML_PATH = path.join(__dirname, 'index.html');

// Ensure recordings directory exists
if (!fs.existsSync(RECORDINGS_DIR)) {
  fs.mkdirSync(RECORDINGS_DIR, { recursive: true });
}

function parseFormData(body, contentType) {
  const boundary = contentType.split('boundary=')[1];
  if (!boundary) return null;

  const parts = body.split('--' + boundary);
  const result = {};

  for (const part of parts) {
    if (part.trim() === '' || part.trim() === '--') continue;

    const headerEnd = part.indexOf('\r\n\r\n');
    if (headerEnd === -1) continue;

    const headers = part.substring(0, headerEnd);
    const data = part.substring(headerEnd + 4);

    // Remove trailing \r\n-- before boundary
    const content = data.replace(/\r\n$/, '');

    const nameMatch = headers.match(/name="([^"]+)"/);
    const filenameMatch = headers.match(/filename="([^"]+)"/);

    if (nameMatch) {
      const fieldName = nameMatch[1];
      if (filenameMatch) {
        // File data (binary - store raw)
        result[fieldName] = {
          filename: filenameMatch[1],
          data: Buffer.from(content, 'binary')
        };
      } else {
        result[fieldName] = content.trim();
      }
    }
  }

  return result;
}

function getBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = url.pathname;

  try {
    // ── Helper: extract audio from multipart ──
    async function extractAudioFromRequest(req) {
      const contentType = req.headers['content-type'] || '';

      if (contentType.includes('multipart/form-data')) {
        const body = await getBody(req);
        const data = parseFormData(body.toString('binary'), contentType);
        if (!data || !data.audio) {
          return { error: 'Missing audio file in form data' };
        }
        return { buffer: data.audio.data, id: data.id || ('rec_' + Date.now()) };
      }

      // Raw audio body
      const body = await getBody(req);
      if (body.length === 0) {
        return { error: 'Empty request body' };
      }
      return { buffer: body, id: 'rec_' + Date.now() };
    }

    // ── Save recording ──
    if (pathname === '/api/save-recording' && req.method === 'POST') {
      const contentType = req.headers['content-type'] || '';

      if (contentType.includes('multipart/form-data')) {
        const body = await getBody(req);
        const data = parseFormData(body.toString('binary'), contentType);

        if (!data || !data.audio) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing audio file' }));
          return;
        }

        const audioData = data.audio.data;
        const id = data.id || ('rec_' + Date.now());
        const filename = id + '.webm';
        const filepath = path.join(RECORDINGS_DIR, filename);

        fs.writeFileSync(filepath, audioData);
        const size = fs.statSync(filepath).size;

        console.log(`[Save] Saved recording ${id} (${size} bytes) to ${filepath}`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          id,
          filename,
          path: filepath,
          size
        }));
      } else {
        // JSON mode for data URL
        const body = await getBody(req);
        try {
          const json = JSON.parse(body.toString());
          if (json.id && json.dataUrl) {
            const base64Data = json.dataUrl.replace(/^data:audio\/\w+;base64,/, '');
            const buffer = Buffer.from(base64Data, 'base64');
            const filename = json.id + '.webm';
            const filepath = path.join(RECORDINGS_DIR, filename);

            fs.writeFileSync(filepath, buffer);
            console.log(`[Save] Saved recording ${json.id} from JSON (${buffer.length} bytes)`);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, id: json.id }));
            return;
          }
        } catch (e) {
          // Not JSON or missing fields
        }

        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Unsupported content type or format' }));
      }
      return;
    }

    // ── Analyze audio (server-side with librosa) ──
    if (pathname === '/api/analyze' && req.method === 'POST') {
      const extracted = await extractAudioFromRequest(req);
      if (extracted.error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: extracted.error }));
        return;
      }

      const id = extracted.id;
      const filename = id + '.webm';
      const filepath = path.join(RECORDINGS_DIR, filename);

      // Save audio file
      fs.writeFileSync(filepath, extracted.buffer);
      const size = fs.statSync(filepath).size;
      console.log(`[Analyze] Saved ${id} (${size} bytes) for analysis`);

      // Call Python analysis script
      const analyzeScript = path.join(__dirname, 'analyze.py');

      try {
        const pythonOutput = execSync(
          `python3 "${analyzeScript}" "${filepath}"`,
          { timeout: 60000, maxBuffer: 10 * 1024 * 1024, encoding: 'utf-8' }
        );

        let result;
        try {
          result = JSON.parse(pythonOutput.trim());
        } catch (parseErr) {
          console.error('[Analyze] JSON parse error:', parseErr.message);
          console.error('[Analyze] Raw output:', pythonOutput);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            error: '分析结果解析失败',
            error_detail: 'Python 脚本返回了非 JSON 格式的输出'
          }));
          return;
        }

        if (result.error) {
          console.log('[Analyze] Analysis returned error:', result.error);
          res.writeHead(422, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
          return;
        }

        console.log(`[Analyze] Completed for ${id} — overall score: ${result.overallScore}`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result));
      } catch (execErr) {
        console.error('[Analyze] Python exec error:', execErr.message);

        // Try to extract Python's stderr for error detail
        let detail = execErr.stderr ? execErr.stderr.toString() : execErr.message;

        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          error: '服务端分析失败',
          error_detail: detail
        }));
      }

      return;
    }

    // ── Get recording file ──
    if (pathname.startsWith('/api/save-recording/') && req.method === 'GET') {
      const id = path.basename(pathname);
      const candidatePaths = [
        path.join(RECORDINGS_DIR, id + '.webm'),
        path.join(RECORDINGS_DIR, id),
        path.join(RECORDINGS_DIR, id.replace(/^rec_/, '') + '.webm'),
      ];

      let foundPath = null;
      for (const p of candidatePaths) {
        if (fs.existsSync(p)) {
          foundPath = p;
          break;
        }
      }

      if (!foundPath) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Recording not found', id }));
        return;
      }

      const stat = fs.statSync(foundPath);
      res.writeHead(200, {
        'Content-Type': 'audio/webm',
        'Content-Length': stat.size,
        'Content-Disposition': `inline; filename="${path.basename(foundPath)}"`
      });
      fs.createReadStream(foundPath).pipe(res);
      return;
    }

    // ── List saved recordings ──
    if (pathname === '/api/list-recordings' && req.method === 'GET') {
      const files = fs.readdirSync(RECORDINGS_DIR)
        .filter(f => f.endsWith('.webm'))
        .map(f => {
          const stat = fs.statSync(path.join(RECORDINGS_DIR, f));
          return {
            filename: f,
            size: stat.size,
            mtime: stat.mtime,
            id: f.replace('.webm', '')
          };
        })
        .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ recordings: files }));
      return;
    }

    // ── Serve the HTML page ──
    if (fs.existsSync(HTML_PATH)) {
      const html = fs.readFileSync(HTML_PATH, 'utf-8');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('index.html not found');
    }

  } catch (err) {
    console.error('[Error]', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: err.message }));
  }
});

server.listen(PORT, () => {
  console.log(`\n  🎤 唱歌评测服务器已启动`);
  console.log(`  🌐 打开浏览器访问: http://localhost:${PORT}`);
  console.log(`  📁 录音保存路径: ${RECORDINGS_DIR}\n`);
});
