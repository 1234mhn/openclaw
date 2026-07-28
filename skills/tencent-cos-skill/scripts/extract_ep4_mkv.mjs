// Extract EP4 subtitles using mkvextract via COS pipe
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

// mkvextract uses 1-based track IDs matching the MKV container order
// From ffprobe: Stream #0:3=KR forced, #0:4=KR SDH, #0:5=KR HI, #0:6=CN Simplified
// mkvextract track numbers: 0:3=track 3, 0:4=track 4, etc.

async function extract() {
  console.log('Streaming MKV from COS and extracting subtitles...');
  
  for (const t of [
    { id: 4, file: '/tmp/ep04_kr_sdh.srt', label: 'Korean SDH (track 4)' },
  ]) {
    const stream = cos.getObjectStream({ Bucket: bucket, Region: region, Key: key });
    const outFile = t.file;
    
    console.log(`Extracting ${t.label} -> ${outFile}...`);
    
    await new Promise((resolve) => {
      const mkv = spawn('mkvextract', ['tracks', '-', `${t.id}:${outFile}`], {
        stdio: ['pipe', 'inherit', 'inherit']
      });
      stream.pipe(mkv.stdin);
      mkv.on('exit', (code) => {
        console.log(`  Exit code: ${code}, file: ${existsSync(outFile) ? require('fs').statSync(outFile).size + ' bytes' : 'NOT FOUND'}`);
        resolve();
      });
    });
  }
  
  console.log('All subtitles extracted!');
}

extract().catch(err => { console.error(err); process.exit(1); });
