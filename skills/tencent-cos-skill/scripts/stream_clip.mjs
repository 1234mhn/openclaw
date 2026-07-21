import { spawn } from 'child_process';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');

const creds = JSON.parse(readFileSync('/root/.tccli/default.credential', 'utf8'));

const cos = new COS({
  SecretId: creds.secretId,
  SecretKey: creds.secretKey,
});

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E03 - 第 3 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";
const bucket = 'korean-video-1433876150';
const region = 'ap-guangzhou';

console.log('Getting stream from COS...');
const stream = cos.getObjectStream({
  Bucket: bucket,
  Region: region,
  Key: key,
});

console.log('Starting ffmpeg with pipe input...');
const ff = spawn('ffmpeg', [
  '-i', 'pipe:0',
  '-ss', '33:49',
  '-to', '34:51',
  '-map', '0:v:0',
  '-map', '0:a:0',
  '-vf', 'zscale=t=linear:npl=100,format=gbrpf32le,zscale=p=bt709,format=yuv420p,scale=1920:1080',
  '-c:v', 'libx264', '-crf', '22', '-preset', 'fast',
  '-c:a', 'aac', '-b:a', '192k',
  '/root/.openclaw/workspace/korean_course/videos/ep03_l22.mp4',
  '-y',
], { stdio: ['pipe', 'inherit', 'inherit'] });

stream.pipe(ff.stdin);

ff.on('exit', (code) => {
  console.log(`ffmpeg exited with code ${code}`);
  process.exit(code || 0);
});

stream.on('error', (err) => {
  console.error('Stream error:', err);
  ff.kill();
  process.exit(1);
});
