// Extract just CN Simplified subtitle from EP4 using mkvextract via COS pipe
import { spawn } from 'child_process';
import { createRequire } from 'module';
import { existsSync } from 'fs';

const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');

const cos = new COS({
  SecretId: 'REDACTED',
  SecretKey: 'REDACTED'
});

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E04 - 第 4 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";
const bucket = 'korean-video-1433876150';
const region = 'ap-guangzhou';

async function main() {
  // Track 4 = Korean SDH (confirmed working from extract_subs.mjs pattern)
  // Track 6 = Chinese Simplified
  
  for (const { id, file, label } of [
    { id: 4, file: '/tmp/ep04_kr_sdh_fast.srt', label: 'KR SDH' },
    { id: 6, file: '/tmp/ep04_cn_fast.srt', label: 'CN Simplified' },
  ]) {
    console.log(`Extracting ${label} (track ${id})...`);
    const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
    
    await new Promise((resolve) => {
      const mkv = spawn('mkvextract', ['tracks', '-', `${id}:${file}`], {
        stdio: ['pipe', 'inherit', 'inherit']
      });
      stream.pipe(mkv.stdin);
      mkv.on('exit', () => {
        const size = existsSync(file) ? require('fs').statSync(file).size : 0;
        console.log(`  ${label}: ${size} bytes -> ${file}`);
        resolve();
      });
    });
  }
  
  console.log('Done!');
}

main().catch(err => { console.error(err); process.exit(1); });
