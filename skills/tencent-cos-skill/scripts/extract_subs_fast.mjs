import { spawn } from 'child_process';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');

const creds = JSON.parse(readFileSync('/root/.tccli/default.credential', 'utf8'));
const cos = new COS({ SecretId: creds.secretId, SecretKey: creds.secretKey });

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E03 - 第 3 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";
const bucket = 'korean-video-1433876150';
const region = 'ap-guangzhou';

async function extractSubs(trackId, outputFile, label) {
  return new Promise((resolve) => {
    console.log(`Extracting ${label}...`);
    const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
    
    // Extract subtitle from pipe - use ffmpeg with -ss 0 to avoid seeking
    // ffmpeg will output subtitle data as it streams through
    const ff = spawn('ffmpeg', [
      '-i', 'pipe:0',
      '-map', `0:s:${trackId}`,
      '-c:s', 'srt',
      '-f', 'srt',
      'pipe:1',
      '-y'
    ], { stdio: ['pipe', 'pipe', 'inherit'] });

    let outputData = Buffer.alloc(0);
    ff.stdout.on('data', (chunk) => {
      outputData = Buffer.concat([outputData, chunk]);
    });

    stream.pipe(ff.stdin);

    ff.on('exit', (code) => {
      console.log(`${label} ffmpeg exited: ${code}`);
      // Parse the SRT and filter for 33:49-34:51
      const text = outputData.toString('utf8');
      // Parse SRT entries
      const entries = [];
      const blocks = text.trim().split(/\n\n+/);
      for (const block of blocks) {
        const lines = block.trim().split('\n');
        if (lines.length < 3) continue;
        const timeLine = lines[1];
        const match = timeLine.match(/(\d{2}):(\d{2}):(\d{2}),(\d{3})\s*-->\s*(\d{2}):(\d{2}):(\d{2}),(\d{3})/);
        if (!match) continue;
        const startSec = parseInt(match[1])*3600 + parseInt(match[2])*60 + parseInt(match[3]) + parseInt(match[4])/1000;
        const endSec = parseInt(match[5])*3600 + parseInt(match[6])*60 + parseInt(match[7]) + parseInt(match[8])/1000;
        const textLines = lines.slice(2).join('\n');
        entries.push({ num: lines[0], start: startSec, end: endSec, text: textLines, raw: block });
      }
      
      // Filter for 33:49 (2029) to 34:51 (2091)
      const filtered = entries.filter(e => e.start >= 2029 && e.end <= 2091);
      
      if (filtered.length > 0) {
        console.log(`${label}: Found ${filtered.length} subtitle entries in 33:49-34:51`);
        const filteredText = filtered.map(e => e.raw).join('\n\n') + '\n';
        writeFileSync(outputFile, filteredText);
        console.log(`Saved to ${outputFile}: ${filteredText.length} bytes`);
        for (const e of filtered) {
          console.log(`  [${e.start.toFixed(2)}-${e.end.toFixed(2)}] ${e.text.replace(/\n/g, ' / ')}`);
        }
      } else {
        console.log(`${label}: No entries found in range. Total entries: ${entries.length}`);
        if (entries.length > 0) {
          console.log(`  Range: ${entries[0].start.toFixed(2)}-${entries[entries.length-1].end.toFixed(2)}`);
          // Save all for debugging
          writeFileSync(outputFile.replace('.srt', '_all.srt'), text);
          console.log(`Saved ALL subtitles to ${outputFile.replace('.srt', '_all.srt')}: ${text.length} bytes`);
        }
      }
      resolve();
    });

    ff.stdin.on('error', () => {});
    stream.on('error', (err) => {
      console.error(`${label} stream error:`, err.message);
      resolve();
    });
  });
}

async function main() {
  // Extract Korean SDH (track index 1)
  await extractSubs(1, '/tmp/ep03_l22_kr.srt', 'Korean SDH');
  // Extract Chinese Simplified (track index 3)
  await extractSubs(3, '/tmp/ep03_l22_cn.srt', 'Chinese Simplified');
  console.log('Done!');
}

main().catch(err => { console.error(err); process.exit(1); });
