#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从28课HTML提取 head/CSS 和 body 结尾，供27课分批拼装复用"""
import re

src = '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第28课_复利笔记_final.html'
html = open(src, encoding='utf-8').read()

# 提取 <!DOCTYPE ... </head> （含完整CSS）
head = html.split('<body>')[0]
# 提取 </body></html>
tail = '</body>\n</html>\n'

# 提取28课body里第一个page（封面）作为CSS里非核心部分参考——不，head已含全部CSS
open('/root/.openclaw/workspace/.openclaw/tmp/l27_head.html', 'w', encoding='utf-8').write(head)
open('/root/.openclaw/workspace/.openclaw/tmp/l27_tail.html', 'w', encoding='utf-8').write(tail)
print("head字节:", len(head))
print("head 含 sf-card:", head.count('sf-card'), "| 含 word-grid:", head.count('word-grid'), "| 含 @import:", head.count('@import'))
print("完成")
