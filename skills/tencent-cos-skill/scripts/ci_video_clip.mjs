#!/usr/bin/env node
/**
 * CI 视频截取脚本 — 基于腾讯云数据万象(CI)的 Transcode + TimeInterval
 *
 * 用法：
 *   node ci_video_clip.mjs --key <COS路径> --start <开始时间> --duration <时长> [--format mp4]
 *
 * 示例：
 *   node ci_video_clip.mjs \
 *     --key "爱情怎么翻译全集/Can This Love Be Translated？ S01E01 - 第 1 集 - 2160p WEB-DL HDR10 H265 DDP 5.1 Atmos.mkv" \
 *     --start 00:05:00 --duration 00:00:30
 *
 * 凭证通过环境变量读取（与 cos_node.mjs 共用）：
 *   TENCENT_COS_SECRET_ID / TENCENT_COS_SECRET_KEY
 *   TENCENT_COS_REGION / TENCENT_COS_BUCKET
 *   TENCENT_COS_TOKEN（可选）
 */

import { createRequire } from "module";
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const COS = require("cos-nodejs-sdk-v5");

const __dirname = dirname(fileURLToPath(import.meta.url));

// ========== 读取凭证 ==========
function loadEnv() {
  const envPath = resolve(__dirname, "..", ".env");
  if (existsSync(envPath)) {
    const lines = readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      let value = trimmed.slice(eqIndex + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      process.env[key] = process.env[key] || value;
    }
  }
}

loadEnv();

const SECRET_ID = process.env.TENCENT_COS_SECRET_ID;
const SECRET_KEY = process.env.TENCENT_COS_SECRET_KEY;
const TOKEN = process.env.TENCENT_COS_TOKEN;
const REGION = process.env.TENCENT_COS_REGION || "ap-guangzhou";
const BUCKET = process.env.TENCENT_COS_BUCKET;

// 提前处理 --help，不检查凭证
if (process.argv.includes("--help")) {
  printHelp();
  process.exit(0);
}

if (!SECRET_ID || !SECRET_KEY) {
  console.error("❌ 缺少 COS 凭证，请设置 TENCENT_COS_SECRET_ID 和 TENCENT_COS_SECRET_KEY");
  process.exit(1);
}

// ========== 帮助信息 ==========
function printHelp() {
  console.log(`
用法: node ci_video_clip.mjs --key <COS路径> --start <开始时间> --duration <时长> [选项]

参数:
  --key        COS 中的视频路径（必需）
  --start      开始时间，格式 HH:MM:SS（必需）
  --duration   截取时长，格式 HH:MM:SS（必需）
  --format     输出格式，默认 mp4
  --output     输出文件名（可选，默认在原文件名后加 _clip）
  --help       显示帮助

示例:
  node ci_video_clip.mjs \
    --key "爱情怎么翻译全集/EP1.mkv" \
    --start 00:05:00 --duration 00:00:30
`);
}

// ========== 解析参数 ==========
function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {};
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case "--key": opts.key = args[++i]; break;
      case "--start": opts.start = args[++i]; break;
      case "--duration": opts.duration = args[++i]; break;
      case "--format": opts.format = args[++i] || "mp4"; break;
      case "--output": opts.output = args[++i]; break;
    }
  }
  if (!opts.key) throw new Error("缺少 --key 参数");
  if (!opts.start) throw new Error("缺少 --start 参数");
  if (!opts.duration) throw new Error("缺少 --duration 参数");
  return opts;
}

// ========== 提交 CI 视频截取任务 ==========
async function submitClipJob(opts) {
  const cos = new COS({
    SecretId: SECRET_ID,
    SecretKey: SECRET_KEY,
    Token: TOKEN,
  });

  // 生成输出文件名
  const lastDot = opts.key.lastIndexOf(".");
  const base = lastDot === -1 ? opts.key : opts.key.substring(0, lastDot);
  const ext = opts.format || "mp4";
  const outObject = opts.output || `${base}_clip_${Date.now()}.${ext}`;

  // 构造 CI Transcode + TimeInterval 请求
  const ciHost = `${BUCKET}.ci.${REGION}.myqcloud.com`;
  const ciUrl = `https://${ciHost}/jobs`;

  const bodyXml = `<?xml version="1.0" encoding="UTF-8"?>
<Request>
  <Tag>Transcode</Tag>
  <Input>
    <Object>${opts.key}</Object>
  </Input>
  <Operation>
    <Transcode>
      <Container>
        <Format>${ext}</Format>
      </Container>
      <Video>
        <Codec>copy</Codec>
      </Video>
      <Audio>
        <Codec>copy</Codec>
      </Audio>
      <TimeInterval>
        <Start>${opts.start}</Start>
        <Duration>${opts.duration}</Duration>
      </TimeInterval>
    </Transcode>
    <Output>
      <Bucket>${BUCKET}</Bucket>
      <Region>${REGION}</Region>
      <Object>${outObject}</Object>
    </Output>
  </Operation>
</Request>`;

  console.log(`🚀 提交 CI 视频截取任务...`);
  console.log(`   源文件: ${opts.key}`);
  console.log(`   时间段: ${opts.start} ~ ${addTime(opts.start, opts.duration)}`);
  console.log(`   输出:   ${outObject}`);

  return new Promise((resolve, reject) => {
    cos.request(
      {
        Method: "POST",
        Url: ciUrl,
        Key: "jobs",
        Body: bodyXml,
        ContentType: "application/xml",
        headers: {
          "Content-Type": "application/xml",
        },
      },
      (err, data) => {
        if (err) {
          reject(new Error(`CI 请求失败: ${err.message || JSON.stringify(err)}`));
          return;
        }
        if (data.statusCode >= 400) {
          reject(new Error(`CI 请求失败，状态码: ${data.statusCode}, Body: ${data.body}`));
          return;
        }
        resolve(data);
      }
    );
  });
}

// ========== 工具函数 ==========
function toSeconds(t) {
  if (typeof t === "number" || /^\d+$/.test(t)) return Number(t);
  const [h, m, s] = t.split(":").map(Number);
  return h * 3600 + m * 60 + (s || 0);
}

function formatTime(totalSec) {
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function addTime(start, duration) {
  return formatTime(toSeconds(start) + toSeconds(duration));
}

// ========== 查询任务状态 ==========
async function queryJob(jobId, maxRetries = 60, intervalMs = 3000) {
  const cos = new COS({
    SecretId: SECRET_ID,
    SecretKey: SECRET_KEY,
    Token: TOKEN,
  });

  const ciHost = `${BUCKET}.ci.${REGION}.myqcloud.com`;

  for (let i = 0; i < maxRetries; i++) {
    await new Promise((r) => setTimeout(r, intervalMs));

    const result = await new Promise((resolve, reject) => {
      cos.request(
        {
          Method: "GET",
          Url: `https://${ciHost}/jobs/${jobId}`,
          Key: `jobs/${jobId}`,
        },
        (err, data) => {
          if (err) reject(err);
          else resolve(data);
        }
      );
    });

    const detail = result?.Response?.JobsDetail;
    const state = detail?.State || "Unknown";

    if (state === "Success") {
      const outputPath = detail?.Operation?.Output?.Object || "未知";
      console.log(`✅ 截取完成！`);
      console.log(`   输出文件: ${outputPath}`);
      console.log(`   COS路径: cos://${BUCKET}/${outputPath}`);
      return { state, outputPath };
    }

    if (state === "Failed") {
      console.error(`❌ 任务失败`);
      return { state: "Failed", outputPath: null };
    }

    process.stdout.write(`\r⏳ 处理中... ${i + 1}/${maxRetries}s`);
  }

  console.log(`\n⚠️ 超时，任务仍在处理中，请稍后查询`);
  return { state: "Timeout", outputPath: null, jobId };
}

// ========== 主流程 ==========
async function main() {
  try {
    const opts = parseArgs();
    const result = await submitClipJob(opts);

    // 从返回中提取 JobId
    let jobId = result?.Response?.JobsDetail?.JobId;
    if (!jobId) {
      const body = typeof result.body === "string" ? result.body : result.body?.toString();
      const jobIdMatch = body?.match(/<JobId>([^<]+)<\/JobId>/);
      jobId = jobIdMatch ? jobIdMatch[1] : null;
    }

    if (!jobId) {
      console.log("⚠️ 无法获取 JobId，请手动查询 CI 控制台");
      console.log("   返回数据:", body?.substring(0, 500));
      return;
    }

    console.log(`📋 JobId: ${jobId}`);
    console.log(`⏳ 等待处理完成...`);

    const finalState = await queryJob(jobId);
    if (finalState.state === "Success") {
      // 输出可直接用于页面的 URL
      const cdnUrl = `https://${BUCKET}.cos.${REGION}.myqcloud.com/${finalState.outputPath}`;
      console.log(`\n🔗 视频URL: ${cdnUrl}`);
      console.log(`📝 可嵌入页面: <video src="${cdnUrl}"></video>`);
    }
  } catch (err) {
    console.error(`❌ 错误: ${err.message}`);
    process.exit(1);
  }
}

main();
