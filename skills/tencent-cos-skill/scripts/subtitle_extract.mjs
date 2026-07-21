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

async function extract() {
  // Extract Korean SDH subtitle (stream 0:4 = 0:s:1)
  console.log('Extracting Korean subtitle...');
  const stream1 = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  const ff1 = spawn('ffmpeg', [
    '-i', 'pipe:0',
    '-ss', '33:49',
    '-to', '34:51',
    '-map', '0:s:1',  // Korean SDH
    '-c:s', 'srt',
    '-f', 'srt',
    'pipe:1',
    '-y'
  ], { stdio: ['pipe', 'pipe', 'inherit'] });
  
  stream1.pipe(ff1.stdin);
  const krChunks = [];
  for await (const chunk of ff1.stdout) krChunks.push(chunk);
  const krContent = Buffer.concat(krChunks).toString('utf8');
  
  await new Promise(resolve => ff1.on('exit', resolve));
  writeFileSync('/tmp/ep03_l22_kr_sdh.srt', krContent);
  console.log(`Korean SDH subtitle extracted: ${krContent.length} bytes`);
  
  // Extract Korean HI subtitle (stream 0:5 = 0:s:2)
  console.log('Extracting Korean HI subtitle...');
  const stream2 = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  const ff2 = spawn('ffmpeg', [
    '-i', 'pipe:0',
    '-ss', '33:49',
    '-to', '34:51',
    '-map', '0:s:2',  // Korean HI
    '-c:s', 'srt',
    '-f', 'srt',
    'pipe:1',
    '-y'
  ], { stdio: ['pipe', 'pipe', 'inherit'] });
  
  stream2.pipe(ff2.stdin);
  const kr2Chunks = [];
  for await (const chunk of ff2.stdout) kr2Chunks.push(chunk);
  const kr2Content = Buffer.concat(kr2Chunks).toString('utf8');
  
  await new Promise(resolve => ff2.on('exit', resolve));
  writeFileSync('/tmp/ep03_l22_kr_hi.srt', kr2Content);
  console.log(`Korean HI subtitle extracted: ${kr2Content.length} bytes`);

  // Extract Chinese Simplified subtitle (stream 0:6 = 0:s:3)
  console.log('Extracting Chinese subtitle...');
  const stream3 = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  const ff3 = spawn('ffmpeg', [
    '-i', 'pipe:0',
    '-ss', '33:49',
    '-to', '34:51',
    '-map', '0:s:3',  // Chinese Simplified
    '-c:s', 'srt',
    '-f', 'srt',
    'pipe:1',
    '-y'
  ], { stdio: ['pipe', 'pipe', 'inherit'] });
  
  stream3.pipe(ff3.stdin);
  const cnChunks = [];
  for await (const chunk of ff3.stdout) cnChunks.push(chunk);
  const cnContent = Buffer.concat(cnChunks).toString('utf8');
  
  await new Promise(resolve => ff3.on('exit', resolve));
  writeFileSync('/tmp/ep03_l22_cn.srt', cnContent);
  console.log(`Chinese subtitle extracted: ${cnContent.length} bytes`);

  console.log('All subtitles extracted!');
}

extract().catch(err => { console.error(err); process.exit(1); });
