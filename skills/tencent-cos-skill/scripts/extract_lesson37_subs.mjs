#!/usr/bin/env node
// Extract EP4 subtitles for lesson 37 (episode 845-910s)
import { spawn } from 'child_process';
import { createRequire } from 'module';
import { writeFileSync, existsSync, statSync } from 'fs';

const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');

const cos = new COS({
  SecretId: process.env.TENCENT_COS_SECRET_ID,
  SecretKey: process.env.TENCENT_COS_SECRET_KEY
});

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E04 - 第 4 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";
const bucket = 'korean-video-1433876150';
const region = 'ap-guangzhou';
const startSec = 845;
const endSec = 910;

async function extractSub(ffmpegMap, outputFile, label) {
  console.log(`Extracting ${label} (${startSec}s-${endSec}s)...`);
  const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  
  return new Promise((resolve) => {
    const ff = spawn('ffmpeg', [
      '-i', 'pipe:0',
      '-ss', String(startSec),
      '-to', String(endSec),
      '-map', ffmpegMap,
      '-c:s', 'srt',
      '-f', 'srt',
      'pipe:1',
      '-y'
    ], { stdio: ['pipe', 'pipe', 'inherit'] });
    
    stream.pipe(ff.stdin);
    
    const chunks = [];
    ff.stdout.on('data', chunk => chunks.push(chunk));
    ff.stdout.on('end', () => {
      const content = Buffer.concat(chunks).toString('utf8');
      writeFileSync(outputFile, content);
      console.log(`  Done: ${content.length} bytes -> ${outputFile}`);
      resolve();
    });
    ff.on('exit', (code) => {
      if (!ff.stdout.readableEnded) {
        const content = Buffer.concat(chunks).toString('utf8');
        writeFileSync(outputFile, content);
        console.log(`  Exit(${code}): ${content.length} bytes -> ${outputFile}`);
        resolve();
      }
    });
  });
}

async function main() {
  console.log('Extracting lesson 37 subtitles (845-910s)...');
  await extractSub('0:s:2', '/tmp/ep04_lesson37_kr.srt', 'Korean HI');
  await extractSub('0:s:3', '/tmp/ep04_lesson37_cn.srt', 'Chinese Simplified');
  await extractSub('0:s:5', '/tmp/ep04_lesson37_en.srt', 'English SDH');
  
  console.log('\n=== Results ===');
  for (const f of ['/tmp/ep04_lesson37_kr.srt', '/tmp/ep04_lesson37_cn.srt']) {
    const size = existsSync(f) ? statSync(f).size : 0;
    console.log(`\n--- ${f} (${size} bytes) ---`);
    if (size > 0) {
      const data = require('fs').readFileSync(f, 'utf8');
      console.log(data);
    }
  }
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1); });
