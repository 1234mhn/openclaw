#!/usr/bin/env node
import { createRequire } from 'module';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

const require = createRequire(import.meta.url);
const COS = require('cos-nodejs-sdk-v5');
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load creds
const envPath = resolve(__dirname, '..', '.env');
const SECRET_ID = process.env.TENCENT_COS_SECRET_ID || "REDACTED";
const SECRET_KEY = process.env.TENCENT_COS_SECRET_KEY || "REDACTED";
const REGION = process.env.TENCENT_COS_REGION || "ap-guangzhou";
const BUCKET = process.env.TENCENT_COS_BUCKET || "korean-video-1433876150";

const cos = new COS({ SecretId: SECRET_ID, SecretKey: SECRET_KEY });

const key = "爱情怎么翻译全集/Can This Love Be Translated？ S01E04 - 第 4 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv";
const outObject = "media/korean_course/videos/scene04_lesson32_326-364.mp4";

// Method 1: Transcode with re-encoding + TimeInterval in seconds
const bodyXml1 = `<?xml version="1.0" encoding="UTF-8"?>
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
        <Start>326</Start>
        <Duration>38</Duration>
      </TimeInterval>
    </Transcode>
    <Output>
      <Bucket>${BUCKET}</Bucket>
      <Region>${REGION}</Region>
      <Object>${outObject}</Object>
    </Output>
  </Operation>
</Request>`;

const ciHost = `${BUCKET}.ci.${REGION}.myqcloud.com`;
const ciUrl = `https://${ciHost}/jobs`;

console.log("=== Method 1: h.264 + TimeInterval in seconds ===");
cos.request({
  Method: "POST",
  Url: ciUrl,
  Key: "jobs",
  Body: bodyXml1,
  ContentType: "application/xml",
  Headers: { "Content-Type": "application/xml" },
}, (err, data) => {
  if (err) {
    console.log("Error:", err.message || JSON.stringify(err));
  } else {
    const body = typeof data.body === 'string' ? data.body : (data.body?.toString() || '');
    console.log("Status:", data.statusCode);
    console.log("Body:", body.substring(0, 1500));
    const jm = body.match(/<JobId>([^<]+)<\/JobId>/);
    if (jm) console.log("JobId:", jm[1]);
  }
});
