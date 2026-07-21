import { spawn } from 'child_process';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync, unlinkSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');

const creds = JSON.parse(readFileSync('/root/.tccli/default.credential', 'utf8'));
const cos = new COS({ SecretId: creds.secretId, SecretKey: creds.secretKey });

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E03 - 第 3 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";
const bucket = 'korean-video-1433876150';
const region = 'ap-guangzhou';

async function run() {
  console.log('Step 1: Stream segment with -c copy...');
  const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });

  const ff1 = spawn('ffmpeg', [
    '-ss', '33:49', '-i', 'pipe:0',
    '-t', '64',
    '-c', 'copy',
    '-map', '0:v:0', '-map', '0:a:0',
    '/tmp/ep03_raw_segment.mkv',
    '-y'
  ], { stdio: ['pipe', 'inherit', 'inherit'] });

  stream.pipe(ff1.stdin);

  const code1 = await new Promise((resolve) => {
    ff1.on('exit', resolve);
    stream.on('error', (err) => { console.error('Stream error:', err); ff1.kill(); resolve(1); });
  });
  console.log('Step 1 completed, code:', code1);

  if (code1 !== 0) {
    console.error('Step 1 failed. Trying alternative approach with COS download...');
    process.exit(code1);
  }

  console.log('Step 2: Transcode to 1080p SDR H264 AAC...');
  const ff2 = spawn('ffmpeg', [
    '-i', '/tmp/ep03_raw_segment.mkv',
    '-ss', '0', '-to', '62',
    '-vf', 'zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,format=yuv420p,scale=1920:1080',
    '-c:v', 'libx264', '-crf', '22', '-preset', 'fast',
    '-c:a', 'aac', '-b:a', '192k',
    '/root/.openclaw/workspace/korean_course/videos/ep03_l22.mp4',
    '-y'
  ], { stdio: 'inherit' });

  ff2.on('exit', (code) => {
    console.log('Step 2 exited with code', code);
    try { unlinkSync('/tmp/ep03_raw_segment.mkv'); } catch(e) {}
    process.exit(code || 0);
  });
}

run().catch(err => { console.error(err); process.exit(1); });
