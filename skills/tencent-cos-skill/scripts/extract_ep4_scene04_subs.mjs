// Extract EP4 scene04 subtitles for lessons 33-36 (368-845s)
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
const startSec = 360;
const endSec = 850;

async function extractSub(ffmpegMap, outputFile, label) {
  console.log(`Extracting ${label} (${startSec}s-${endSec}s)...`);
  const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  
  await new Promise((resolve) => {
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
  });
}

async function main() {
  // Stream 0:4 = Korean SDH
  await extractSub('0:s:1', '/tmp/ep04_lesson33_36_kr.srt', 'Korean SDH');
  // Stream 0:5 = Korean hearing impaired
  await extractSub('0:s:2', '/tmp/ep04_lesson33_36_kr2.srt', 'Korean HI');
  // Stream 0:6 = Chinese Simplified
  await extractSub('0:s:3', '/tmp/ep04_lesson33_36_cn.srt', 'Chinese Simplified');
  // Stream 0:7 = Chinese Traditional (Forced)
  await extractSub('0:s:4', '/tmp/ep04_lesson33_36_cn2.srt', 'Chinese Traditional Forced');
  // Stream 0:18 = English SDH
  await extractSub('0:s:5', '/tmp/ep04_lesson33_36_en.srt', 'English SDH');
  
  console.log('All done!');
}

main().catch(err => { console.error(err); process.exit(1); });
