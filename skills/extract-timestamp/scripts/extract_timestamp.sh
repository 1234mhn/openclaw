#!/bin/bash
INPUT="$1"
CONTENT="$2"

echo "⏱️时间戳提取大师 - 提取结果："
echo "-------------------------"

if [[ -f "$INPUT" ]];then
 suffix="${INPUT##*.}"
 if [[ $suffix =~ ^(mp4|mov|mkv|avi|flv)$ ]];then
 ffmpeg -i "$INPUT" -vf "select=eq(pict_type\,I)" -vsync vfr -f null - 2>&1 | grep -oE "time=([0-9]{2}:){2}[0-9]{2}" | cut -d= -f2 | sort -u
 elif [[ $suffix =~ ^(srt|vtt)$ ]];then
 grep -oE "[0-9]{2}:[0-9]{2}:[0-9]{2}" "$INPUT" | sort -u
 fi
else
 echo "$INPUT $CONTENT" | grep -oE "[0-9]{2}:[0-9]{2}(:[0-9]{2})?" | sort -u
fi

echo "-------------------------"
echo "✅提取任务完成"
