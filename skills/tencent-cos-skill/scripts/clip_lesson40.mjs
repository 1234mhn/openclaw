#!/usr/bin/env node
// Clip lesson 40 from EP4 scene04 via CI Transcode (1829-1916s, i.e. 30:29-31:56)
import { createRequire } from 'module';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');
const __dirname = dirname(fileURLToPath(import.meta.url));

const SECRET_ID = process.env.TENCENT_COS_SECRET_ID;
const SECRET_KEY = process.env.TENCENT_COS_SECRET_KEY;
const REGION = "ap-guangzhou";
const BUCKET = "korean-video-1433876150";

const cos = new COS({ SecretId: SECRET_ID, SecretKey: SECRET_KEY });

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E04 - 第 4 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";

const clip = {
  lesson: 40,
  start: 1829,
  duration: 87,
  outObject: "media/korean_course/videos/scene04_lesson40_1829-1916.mp4"
};

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

console.log(`Submitting CI transcode job for lesson ${clip.lesson} (${clip.start}s-${clip.start+clip.duration}s) → ${clip.outObject}`);

cos.request({
  Method: "POST",
  Url: ciUrl,
  Key: "jobs",
  Body: bodyXml,
  ContentType: "application/xml",
  Headers: { "Content-Type": "application/xml" },
}, (err, data) => {
  if (err) {
    console.error("FAILED:", err.message || JSON.stringify(err));
    process.exit(1);
  } else {
    const body = typeof data.body === 'string' ? data.body : (data.body?.toString() || '');
    const jm = body.match(/<JobId>([^<]+)<\/JobId>/);
    console.log("Status:", data.statusCode);
    console.log("JobId:", jm ? jm[1] : 'unknown');
    console.log("Body:", body.substring(0, 800));
  }
});
