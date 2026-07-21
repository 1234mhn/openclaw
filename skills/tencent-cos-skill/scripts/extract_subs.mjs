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

async function main() {
  // Extract Korean SDH subtitle (track ID 3 in mkvextract = stream 0:4)
  // mkvextract supports: mkvextract tracks input.mkv [ID]:output.srt 
  // Track numbers from mkvinfo: track ID for mkvmerge & mkvextract
  
  // Let me use ffmpeg with -ss 0 to extract ALL subtitles, then filter locally
  // This avoids seeking
  console.log('Extracting ALL Korean subtitles...');
  const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  
  // Use ffmpeg to extract subtitle tracks (no seeking needed with -ss 0)
  const ff = spawn('ffmpeg', [
    '-i', 'pipe:0', '-ss', '0',
    '-map', '0:s:1', // Korean SDH
    '-c:s', 'srt',
    '/tmp/ep03_l22_all_kr.srt',
    '-y'
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  
  stream.pipe(ff.stdin);
  
  await new Promise((resolve) => ff.on('exit', resolve));
  
  // Check result
  const stats = await import('fs').then(fs => {
    try { return fs.statSync('/tmp/ep03_l22_all_kr.srt'); } catch(e) { return null; }
  });
  console.log(`File size: ${stats ? stats.size : 'NOT FOUND'} bytes`);
  
  // If empty or not found, try Chinese
  console.log('Extracting ALL Chinese subtitles...');
  const stream2 = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  const ff2 = spawn('ffmpeg', [
    '-i', 'pipe:0', '-ss', '0',
    '-map', '0:s:3', // Chinese Simplified 
    '-c:s', 'srt',
    '/tmp/ep03_l22_all_cn.srt',
    '-y'
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  
  stream2.pipe(ff2.stdin);
  await new Promise((resolve) => ff2.on('exit', resolve));
  
  const stats2 = await import('fs').then(fs => {
    try { return fs.statSync('/tmp/ep03_l22_all_cn.srt'); } catch(e) { return null; }
  });
  console.log(`CN file size: ${stats2 ? stats2.size : 'NOT FOUND'} bytes`);
}

main().catch(err => { console.error(err); process.exit(1); });
