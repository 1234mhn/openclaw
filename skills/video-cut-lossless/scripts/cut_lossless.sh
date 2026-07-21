#!/bin/bash
SRC="$1"
START="$2"
END="$3"
OUT="$4"
DURATION=$(echo "$END - $START" | bc)
FADE_OUT=$(echo "$DURATION - 0.2" | bc)

# 无损切割：视频原样copy，音频高质量编码+淡入淡出消除爆音
ffmpeg -ss "$START" -to "$END" -i "$SRC" \
  -c:v copy \
  -filter:a "afade=in:st=0:d=0.2,afade=out:st=$FADE_OUT:d=0.2" \
  -c:a aac -b:a 192k \
  -movflags +faststart \
  -y "$OUT" 2>/dev/null

if [ $? -eq 0 ]; then
  SIZE=$(ls -lh "$OUT" | awk '{print $5}')
  echo "✅ 无损剪辑完成！大小: $SIZE"
  echo "   视频: 原画质直拷"
  echo "   音频: 192k立体声+淡入淡出"
else
  echo "❌ 失败，检查路径和参数"
fi
