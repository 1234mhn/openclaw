// Extract EP4 subtitles for lessons 33-36 (scene04: 368-845s)
import { spawn } from 'child_process';
import { createRequire } from 'module';
import { writeFileSync } from 'fs';

const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');

const cos = new COS({
  SecretId: 'REDACTED',
  SecretKey: 'REDACTED'
});

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E04 - 第 4 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";
const bucket = 'korean-video-1433876150';
const region = 'ap-guangzhou';

async function extractSubs() {
  // Extract FULL Korean SDH subtitle track (track 4 = pipe 0:s:1)
  console.log('Extracting full Korean SDH subtitle...');
  const stream1 = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  
  await new Promise((resolve, reject) => {
    const ff = spawn('ffmpeg', [
      '-i', 'pipe:0',
      '-map', '0:s:1',  // Korean SDH
      '-c:s', 'srt',
      '-f', 'srt',
      'pipe:1',
      '-y'
    ], { stdio: ['pipe', 'pipe', 'inherit'] });
    
    stream1.pipe(ff.stdin);
    
    const chunks = [];
    ff.stdout.on('data', chunk => chunks.push(chunk));
    ff.stdout.on('end', () => {
      const content = Buffer.concat(chunks).toString('utf8');
      writeFileSync('/tmp/ep04_kr_sdh_full.srt', content);
      console.log(`Korean SDH: ${content.length} bytes`);
      resolve();
    });
    ff.on('error', reject);
  });

  // Extract full Chinese Simplified subtitle (track 6 = pipe 0:s:3)
  console.log('Extracting full Chinese subtitle...');
  const stream2 = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  
  await new Promise((resolve, reject) => {
    const ff = spawn('ffmpeg', [
      '-i', 'pipe:0',
      '-map', '0:s:3',  // Chinese Simplified
      '-c:s', 'srt',
      '-f', 'srt',
      'pipe:1',
      '-y'
    ], { stdio: ['pipe', 'pipe', 'inherit'] });
    
    stream2.pipe(ff.stdin);
    
    const chunks = [];
    ff.stdout.on('data', chunk => chunks.push(chunk));
    ff.stdout.on('end', () => {
      const content = Buffer.concat(chunks).toString('utf8');
      writeFileSync('/tmp/ep04_cn_simplified_full.srt', content);
      console.log(`Chinese: ${content.length} bytes`);
      resolve();
    });
    ff.on('error', reject);
  });

  // Extract Korean (hearing impaired, track 5 = pipe 0:s:2)
  console.log('Extracting Korean hearing impaired subtitle...');
  const stream3 = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  
  await new Promise((resolve, reject) => {
    const ff = spawn('ffmpeg', [
      '-i', 'pipe:0',
      '-map', '0:s:2',  // Korean HI
      '-c:s', 'srt',
      '-f', 'srt',
      'pipe:1',
      '-y'
    ], { stdio: ['pipe', 'pipe', 'inherit'] });
    
    stream3.pipe(ff.stdin);
    
    const chunks = [];
    ff.stdout.on('data', chunk => chunks.push(chunk));
    ff.stdout.on('end', () => {
      const content = Buffer.concat(chunks).toString('utf8');
      writeFileSync('/tmp/ep04_kr_hi_full.srt', content);
      console.log(`Korean HI: ${content.length} bytes`);
      resolve();
    });
    ff.on('error', reject);
  });

  console.log('All subtitles extracted!');
}

extractSubs().catch(err => { console.error(err); process.exit(1); });
