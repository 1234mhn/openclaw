#!/usr/bin/env python3
"""Generate Korean TTS audio files for all dialog lines using gTTS."""
import hashlib, json, os, sys
from gtts import gTTS

HTML_FILE = "/root/.openclaw/workspace/korean_course/index.html"
AUDIO_DIR = "/root/.openclaw/workspace/korean_course/audio"
MAPPING_FILE = os.path.join(AUDIO_DIR, "mapping.json")

os.makedirs(AUDIO_DIR, exist_ok=True)

# Read HTML and extract all speak() calls
with open(HTML_FILE, "r") as f:
    html = f.read()

import re
lines = re.findall(r"speak\('([^']+)'", html)
lines = sorted(set(l.strip() for l in lines if l.strip()))
print(f"Total unique dialog lines: {len(lines)}")

existing = {}
if os.path.exists(MAPPING_FILE):
    with open(MAPPING_FILE, "r") as f:
        existing = json.load(f)

for text in lines:
    h = hashlib.md5(text.encode('utf-8')).hexdigest()[:12]
    filename = f"ko_{h}.mp3"
    filepath = os.path.join(AUDIO_DIR, filename)
    
    if os.path.exists(filepath) and filepath in existing.values():
        print(f"  ✓ 已存在: {text[:30]}...")
        existing[text] = filename
        continue
    
    print(f"  → 生成: {text[:30]}...", end=" ", flush=True)
    try:
        tts = gTTS(text=text, lang='ko', slow=False)
        tts.save(filepath)
        print(f"✓")
        existing[text] = filename
    except Exception as e:
        print(f"✗ 失败: {e}")
        continue

# Save mapping
with open(MAPPING_FILE, "w") as f:
    json.dump(existing, f, ensure_ascii=False, indent=2)

print(f"\n完成! 共处理 {len(existing)} 条台词, 音频文件在 {AUDIO_DIR}/")
