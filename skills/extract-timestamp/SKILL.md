---
name: extract-timestamp
description: 专业视频时间戳提取工具，精准抓取视频、字幕、文本内各类时间节点，高效为视频剪辑打点
user-invocable: true
metadata:
  openclaw:
    emoji: ⏱️
    requires:
      bins: ["grep", "ffmpeg"]
---

# 时间戳提取大师
专注精准提取视频、字幕、纯文本中的时间节点，适配视频剪辑场景。

## 支持格式
视频：mp4、mov、mkv、avi、flv
字幕：srt、vtt
时间格式：HH:MM 、 HH:MM:SS

## 调用方式
```bash
bash scripts/extract_timestamp.sh <视频/字幕文件>
```

## 配合video-cut-lossless使用
1. 先用本skill提取时间戳定位场景
2. 再用无损裁剪skill裁剪视频片段
3. 最后转写确认台词内容
