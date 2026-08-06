#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把重点句型+重点单词页 移到 精讲9/9之后、场景迁移之前"""
import re

path = '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html'
html = open(path, encoding='utf-8').read()

# 定位重点句型page(⭐重点句型)的整段 div
sum_start = html.rfind('<div class="page">', 0, html.find('⭐ 重点句型'))
sum_end = html.find('场景迁移')
# 回退到场景迁移 page 的 div 开头
scene_start = html.rfind('<div class="page', 0, sum_end)
# 精讲9/9 结束 = scene_start(场景迁移div) 之前
summary_block = html[sum_start:scene_start]

# 检查抓取是否正确
print("抓取的重点句型块预览:")
print(summary_block[:200])
print("...")
print("块长度:", len(summary_block))

# 从原位置删除
html_no_sum = html[:sum_start] + html[scene_start:]
# 重新在场景迁移前插入——即找到场景迁移page开头
new_scene_start = html_no_sum.find('场景迁移')
ns = html_no_sum.rfind('<div class="page', 0, new_scene_start)
final = html_no_sum[:ns] + summary_block + '\n' + html_no_sum[ns:]

open(path, 'w', encoding='utf-8').write(final)
print("已移动到精讲9/9之后、场景迁移之前")
