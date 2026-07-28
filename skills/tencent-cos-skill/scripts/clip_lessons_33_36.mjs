#!/usr/bin/env node
// Batch clip lessons 33-36 from EP4 scene04
import { createRequire } from 'module';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');
const __dirname = dirname(fileURLToPath(import.meta.url));

const SECRET_ID = process.env.TENCENT_COS_SECRET_ID || "REDACTED";
const SECRET_KEY = process.env.TENCENT_COS_SECRET_KEY || "REDACTED";
const REGION = "ap-guangzhou";
const BUCKET = "korean-video-1433876150";

const cos = new COS({ SecretId: SECRET_ID, SecretKey: SECRET_KEY });

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E04 - 第 4 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";

const clips = [
  { lesson: 33, start: 368, duration: 22, outObject: "media/korean_course/videos/scene04_lesson33_368-390.mp4" },
  { lesson: 34, start: 544, duration: 56, outObject: "media/korean_course/videos/scene04_lesson34_544-600.mp4" },
  { lesson: 35, start: 629, duration: 41, outObject: "media/korean_course/videos/scene04_lesson35_629-670.mp4" },
  { lesson: 36, start: 722, duration: 123, outObject: "media/korean_course/videos/scene04_lesson36_722-845.mp4" },
];

let completed = 0;
let failed = 0;

clips.forEach(clip => {
  const bodyXml = `<?xml version="1.0" encoding="UTF-8"?>
<Request>
  <Tag>Transcode</Tag>
  <Input>
    <Object>${key}</Object>
  </Input>
  <Operation>
    <Transcode>
      <Container>
        <Format>mp4</Format>
      </Container>
      <Video>
        <Codec>h.264</Codec>
        <Width>1920</Width>
        <Height>1080</Height>
        <Fps>24</Fps>
      </Video>
      <Audio>
        <Codec>aac</Codec>
      </Audio>
      <TimeInterval>
        <Start>${clip.start}</Start>
        <Duration>${clip.duration}</Duration>
      </TimeInterval>
    </Transcode>
    <Output>
      <Bucket>${BUCKET}</Bucket>
      <Region>${REGION}</Region>
      <Object>${clip.outObject}</Object>
    </Output>
  </Operation>
</Request>`;

  const ciHost = `${BUCKET}.ci.${REGION}.myqcloud.com`;
  const ciUrl = `https://${ciHost}/jobs`;

  setTimeout(() => {
    cos.request({
      Method: "POST",
      Url: ciUrl,
      Key: "jobs",
      Body: bodyXml,
      ContentType: "application/xml",
      Headers: { "Content-Type": "application/xml" },
    }, (err, data) => {
      if (err) {
        console.log(`Lesson ${clip.lesson} FAILED:`, err.message || JSON.stringify(err));
        failed++;
      } else {
        const body = typeof data.body === 'string' ? data.body : (data.body?.toString() || '');
        const jm = body.match(/<JobId>([^<]+)<\/JobId>/);
        const jobId = jm ? jm[1] : 'unknown';
        console.log(`Lesson ${clip.lesson} (${clip.start}s-${clip.start+clip.duration}s) → jobId: ${jobId}`);
      }
      completed++;
      if (completed === clips.length) {
        console.log(`\nAll jobs submitted. ${completed} total, ${failed} failed.`);
      }
    });
  }, clip.lesson * 200); // stagger to avoid rate limits
});
