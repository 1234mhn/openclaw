#!/usr/bin/env node
/**
 * Extract lesson 32 subtitles using COS stream + ffmpeg pipe
 */
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

async function extractSub(pipeSubIndex, outputFile, label) {
  console.log(`Extracting s:${pipeSubIndex} (${label}) for range 326-364...`);
  const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  
  return new Promise((resolve, reject) => {
    const ff = spawn('ffmpeg', [
      '-i', 'pipe:0',
      '-ss', '326',
      '-to', '364',
      '-map', `0:s:${pipeSubIndex}`,
      '-c:s', 'srt',
      '-f', 'srt',
      'pipe:1',
      '-y'
    ], { stdio: ['pipe', 'pipe', 'inherit'] });
    
    stream.pipe(ff.stdin);
    
    const chunks = [];
    let resolved = false;
    const timer = setTimeout(() => {
      if (!resolved) { resolved = true; console.log(`  ${label} TIMEOUT`); ff.kill(); reject(new Error('timeout')); }
    }, 900000); // 15 min timeout
    
    ff.stdout.on('data', chunk => chunks.push(chunk));
    ff.stdout.on('end', () => {
      if (resolved) return;
      resolved = true;
      clearTimeout(timer);
      const content = Buffer.concat(chunks).toString('utf8');
      writeFileSync(outputFile, content);
      const lines = content.trim().split('\n').filter(l => l.match(/^\d+:\d+:\d+/)).length || 0;
      console.log(`  Done: ${content.length} bytes, ${lines} entries -> ${outputFile}`);
      resolve();
    });
    ff.on('error', err => { if (!resolved) { resolved = true; clearTimeout(timer); reject(err); } });
    ff.on('exit', code => {
      if (!resolved && code === 0) {
        // Process ended but no stdout end event
        resolved = true;
        clearTimeout(timer);
        const content = Buffer.concat(chunks).toString('utf8');
        writeFileSync(outputFile, content);
        const lines = content.trim().split('\n').filter(l => l.match(/^\d+:\d+:\d+/)).length || 0;
        console.log(`  Exit(${code}): ${content.length} bytes, ${lines} entries -> ${outputFile}`);
        resolve();
      }
    });
    stream.on('error', err => { if (!resolved) { resolved = true; clearTimeout(timer); console.error(`  ${label} stream err:`, err.message); reject(err); } });
  });
}

async function main() {
  console.log('Starting subtitle extraction for lesson 32 (326-364s)...');
  console.log('This will take a few minutes as it reads through the full file...');
  
  // s:2 = Korean/hearing impaired (global stream 5)
  // s:3 = Chinese Simplified (global stream 6)
  await extractSub(2, '/tmp/scene04_lesson32_kr.srt', 'Korean');
  await extractSub(3, '/tmp/scene04_lesson32_cn.srt', 'Chinese');
  
  console.log('\n=== Results ===');
  const fs = await import('fs');
  for (const f of ['/tmp/scene04_lesson32_kr.srt', '/tmp/scene04_lesson32_cn.srt']) {
    const data = fs.readFileSync(f, 'utf8');
    console.log(`\n--- ${f} (${data.length} bytes) ---`);
    console.log(data.substring(0, 2000));
  }
}

main().catch(err => { console.error('Fatal:', err.message); process.exit(1); });
