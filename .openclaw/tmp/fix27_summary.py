#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""第27课补[重点句型+重点单词]同页，插在精讲之后、场景迁移之前"""
import re

path = '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html'
html = open(path, encoding='utf-8').read()

# 重点句型（9个，从精讲提取）
patterns = [
    ("-시길 바라다", "祝……（正式祝愿）", "축제 같은 여행이 되시길 바랍니다"),
    ("말이 되다 / 말이 안 되다", "说得通 / 说不通", "그게 말이 돼요?"),
    ("-(으)세요", "请……（敬语命令式）", "이 보세요 / 이봐요"),
    ("-는 입장에서", "站在……的立场", "도라미를 아는 입장에서"),
    ("-ㄹ 수 있겠어요?", "能……吗？（反问，实指不能）", "혼자 잘 못할 수 있겠어요?"),
    ("-는 겁니다", "强调说明「就是……的」", "빠져주는 겁니다"),
    ("-아/어 놓고", "明明……却……", "원해 놓고 왜 뾰족한 말"),
    ("-네요", "感叹/惊讶语气", "무책히네요"),
    ("-(이)든 -(이)든", "不管……还是……", "뾰족이든 삐족이든"),
]
pattern_rows = "\n".join(
    f'    <tr>\n      <td>{a}</td>\n      <td>{b}</td>\n      <td>{c}</td>\n    </tr>'
    for a, b, c in patterns)

# 重点单词（6个带联想记忆）
words = [
    ("축제", "庆典/节日", "축(祝)+제(典) → 汉字词；韩语也有 '잔치(宴席)'"),
    ("무책하다", "不负责任的", "무(无)+책(责) → 没责任心 ⇔ 책임감 있다(有责任感)"),
    ("입장", "立场/角度", "입(立)+장(场) → 站的位置→立场 ⇔ 관점(观点)"),
    ("둥글둥글", "圆滑/委婉", "둥글다(圆)的重叠 → 圆滑处事 ⇔ 삐죽삐죽(尖刻)"),
    ("뾰족하다", "尖锐/尖刻", "뾰족(尖) → 话很冲 ⇔ 부드럽다(温和)"),
    ("걱정", "担心/牵挂", "汉字词；搭配 걱정하다 / 걱정되다 / 걱정스럽다"),
]
word_rows = "\n".join(
    f'    <tr>\n      <td>{a}</td>\n      <td>{b}</td>\n      <td>{c}</td>\n    </tr>'
    for a, b, c in words)

summary_page = f'''<!-- ===== PAGE: 重点句型 + 重点单词（同页）===== -->
<div class="page">
  <div class="header-bar">
    <span class="header-left">第27课 · 说不出口的担心</span>
    <span>重点句型 · 重点单词</span>
  </div>
  <div class="sec-title">⭐ 重点句型</div>
  <table>
    <tr>
      <th>句型</th>
      <th>意思</th>
      <th>本课例句</th>
    </tr>
{pattern_rows}
  </table>
  <div class="sec-title" style="margin-top:14px;">📚 重点单词</div>
  <table class="vocab-table">
    <tr>
      <th>单词</th>
      <th>意思</th>
      <th>联想记忆</th>
    </tr>
{word_rows}
  </table>
</div>
'''

# 定位"场景迁移"page开始，在它前面插入汇总页
start = html.find('场景迁移')
seg_start = html.rfind('<div class="page', 0, start) if start > 0 else -1
if seg_start > 0:
    new_html = html[:seg_start] + summary_page + '\n' + html[seg_start:]
    open(path, 'w', encoding='utf-8').write(new_html)
    print("已在精讲后、场景迁移前插入[重点句型+重点单词]页")
    print("新HTML:", len(new_html), "bytes")
else:
    print("未定位到插入点!")
