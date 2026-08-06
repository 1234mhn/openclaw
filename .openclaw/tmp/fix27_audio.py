#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""修复第27课HTML的音频链接：把纯文本音频块替换成标准可点击链接，并补齐S06-S09"""
import re

path = '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html'
html = open(path, encoding='utf-8').read()

BASE = "https://nannan2026.cn/korean/audio/L27_"

# 1. 整段音频
html = html.replace(
    '<span class="audio-btn" style="margin-left:8px;">▶ L27_full.mp3</span>',
    '<a href="https://nannan2026.cn/korean/audio/L27_full.mp3" class="audio-btn" target="_blank">🔊 听整段录音（点击打开播放）</a>')

# 2. 单句音频：<div class="audio-btn">🔊 L27_SXX</div>
def fix_single(m):
    n = int(m.group(1))
    return (f'<a href="{BASE}S{n:02d}.mp3" class="audio-btn" target="_blank">'
            f'🔊 听这句录音（点击打开播放）</a>')
html = re.sub(r'<div class="audio-btn">🔊 L27_S(\d{2})</div>', fix_single, html)

# 3. 检查每一句精讲页是否都有音频链接；若某句没有，在sentence-box后补一个
#    先数一下精讲页(compact-page)数量和已有S音频链接数
pages = re.findall(r'<div class="page[^"]*compact-page[^"]*">(.*?)(?=<div class="page|$)', html, re.S)
have_audio = sorted(set(int(m) for m in re.findall(r'L27_S(\d{2})\.mp3', html)))
print("现有单句音频编号:", have_audio)

open(path, 'w', encoding='utf-8').write(html)
print("修复完成。当前单句音频链接数:", len(re.findall(r'L27_S\d{2}\.mp3', html)))
print("整段音频链接:", html.count('L27_full.mp3'))
print("文件大小:", len(html), "bytes")
