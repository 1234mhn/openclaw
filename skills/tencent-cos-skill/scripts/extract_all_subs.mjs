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

async function extractAllSubs(pipeIndex, outputFile, label) {
  // pipe: s:2 = Korean, s:3 = Chinese Simplified
  console.log(`Extracting ALL subtitles from s:${pipeIndex} (${label})...`);
  const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  
  await new Promise((resolve, reject) => {
    const ff = spawn('ffmpeg', [
      '-i', 'pipe:0',
      '-map', `0:s:${pipeIndex}`,
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
      const lines = content.trim().split('\n').filter(l => l.match(/^\d+:\d+:\d+/)).length;
      console.log(`  Done: ${content.length} bytes, ${lines} subtitle entries -> ${outputFile}`);
      resolve();
    });
    ff.stderr.on('data', d => process.stderr.write(d));
    ff.on('error', reject);
  });
}

async function main() {
  console.log('Starting subtitle extraction...');
  await extractAllSubs(2, '/tmp/scene04_ep04_full_kr.srt', 'Korean');
  console.log('Korean done. Starting Chinese...');
  await extractAllSubs(3, '/tmp/scene04_ep04_full_cn.srt', 'Chinese Simplified');
  console.log('All done!');
}

main().catch(console.error);
