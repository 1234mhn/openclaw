import { spawn } from 'child_process';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');

const creds = JSON.parse(readFileSync('/root/.tccli/default.credential', 'utf8'));
const cos = new COS({ SecretId: creds.secretId, SecretKey: creds.secretKey });

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E03 - 第 3 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";
const bucket = 'korean-video-1433876150';
const region = 'ap-guangzhou';

async function main() {
  console.log('Piping COS stream to mkvextract...');
  const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
  
  // mkvextract tracks - 4:output.srt extracts track 4 (Korean SDH) from stdin
  const mkv = spawn('mkvextract', ['tracks', '-', '4:/tmp/ep03_l22_all_kr2.srt'], {
    stdio: ['pipe', 'inherit', 'inherit']
  });
  
  stream.pipe(mkv.stdin);
  
  await new Promise((resolve) => mkv.on('exit', resolve));
  
  const stats = await import('fs').then(fs => {
    try { return fs.statSync('/tmp/ep03_l22_all_kr2.srt'); } catch(e) { return null; }
  });
  console.log(`File size: ${stats ? stats.size : 'NOT FOUND'} bytes`);
}

main().catch(err => { console.error(err); process.exit(1); });
