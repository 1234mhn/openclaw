#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""补齐第27课精讲6-9页缺失的单句音频链接"""
import re

path = '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html'
html = open(path, encoding='utf-8').read()

BASE = "https://nannan2026.cn/korean/audio"
# 需要补齐的：精讲6->S06, 7->S07, 8->S08, 9->S09
pages = re.split(r'(?=<div class="page)', html)
out_pages = []
fixed = 0
for p in pages:
    t = re.search(r'台词精讲 (\d+)/9', p)
    if t and not re.search(r'L27_S\d{2}\.mp3', p):
        n = int(t.group(1))  # 6,7,8,9
        link = (f'<a href="{BASE}/L27_S{n:02d}.mp3" class="audio-btn" target="_blank">'
                f'🔊 听这句录音（点击打开播放）</a>')
        # 在句子框架区块(sf-card容器)结束后插入音频，或在第一个detail-block后
        # 找">📐 句子框架"所在div结束位置之后插入更稳妥：在页内第一个 <div class="detail-block"> 之前插
        if '<div class="detail-block">' in p:
            p = p.replace('<div class="detail-block">', link + '\n  <div class="detail-block">', 1)
            fixed += 1
        else:
            # 兜底：在 sentence-box 结束后插入
            m = re.search(r'(</div>\s*</div>\s*(?=<div class="detail-block'))', p)
            p = p + link
            fixed += 1
    out_pages.append(p)

html2 = "".join(out_pages)
open(path, 'w', encoding='utf-8').write(html2)
print(f"补齐了 {fixed} 个音频链接")
print("当前单句音频:", sorted(set(re.findall(r'L27_S(\d{2})\.mp3', html2))))
print("总音频链接:", len(re.findall(r'L27_S\d{2}\.mp3', html2)), "+ 整段:", html2.count('L27_full.mp3'))
