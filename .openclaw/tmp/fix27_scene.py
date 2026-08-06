#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把第27课的场景迁移/场景日记/口语挑战改成第30课模板标准格式"""
import re

path = '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html'
html = open(path, encoding='utf-8').read()

# ========== 1. 场景迁移：三语分行（韩/中/英各一行） ==========
dialogue_a = [
    ("A","이번 여행 혼자 가는 거야?","这次旅行一个人去吗？","Are you going on this trip alone?"),
    ("B","응, 혼자 가려고.","嗯，打算一个人去。","Yeah, I'm planning to go alone."),
    ("A","말도 안 통하는 외국에서 혼자 잘 못할 수 있겠어?","在语言不通的外国一个人能过好吗？","Can you really manage alone in a country where you can't speak the language?"),
    ("B","걱정하지 않아도 돼요. 다 알아서 할게.","不用担心，我会自己安排好的。","Don't worry, I'll take care of everything."),
    ("A","…그래도 조심해. 연락 자주 해.","……还是小心点，多联系。","Still, be careful. Keep in touch."),
    ("B","알겠어. 걱정해 줘서 고마워.","好的，谢谢你担心我。","Got it. Thanks for worrying about me."),
]
dialogue_b = [
    ("A","요즘 표정이 좋지 않아 보여요.","最近你的表情看起来不太好。","You haven't been looking great lately."),
    ("B","그래요? 별거 아니에요.","是吗？没什么事。","Really? It's nothing."),
    ("A","아는 입장에서 그냥 지나치기가 어렵네요.","作为了解你的人，很难就这样略过不管。","Knowing you, I can't just let it go."),
    ("B","사실은… 많이 불안했어요. 근데 말하기가 어려웠어요.","其实……很不安。但很难开口说。","Actually… I've been really anxious. But it was hard to say."),
    ("A","말하지 않아도 돼요. 옆에 있을게요.","不用说也没关系，我陪着你。","You don't have to say it. I'll stay by your side."),
]

def scene_line(sp, kr, cn, en):
    color = '#c4873a' if sp == 'A' else '#3a7a4f'
    icon = '🍊' if sp == 'A' else '🥝'
    return (
        f'    <div style="margin:1.5px 0;">\n'
        f'      <div style="font-size:11px;color:{color};font-weight:bold;">{icon} {sp}：</div>\n'
        f'      <div style="font-size:12.5px;font-weight:bold;margin-left:14px;line-height:1.42;">{kr}</div>\n'
        f'      <div style="font-size:11.5px;color:#555;margin-left:14px;line-height:1.32;">{cn}</div>\n'
        f'      <div style="font-size:10.5px;color:#999;font-style:italic;margin-left:14px;line-height:1.25;">{en}</div>\n'
        f'    </div>'
    )

scene_page = f'''<!-- ===== 场景迁移(标准三语分行) ===== -->
<div class="page">
  <div class="header-bar">
    <span class="header-left">第27课 · 说不出口的担心</span>
    <span>🎬 场景练习包</span>
  </div>
  <div class="sec-title">🗣️ 场景迁移 · 对话剧场</div>

  <div class="scene-block" style="margin-bottom:8px;">
    <div style="font-size:11px;color:#8b7355;font-weight:bold;margin-bottom:5px;">场景① · 担心朋友一个人出行</div>
    <div style="line-height:1;">
{chr(10).join('    '+scene_line(*l) for l in dialogue_a)}
    </div>
  </div>

  <div class="scene-block">
    <div style="font-size:11px;color:#8b7355;font-weight:bold;margin-bottom:5px;">场景② · 说不出口的牵挂</div>
    <div style="line-height:1;">
{chr(10).join('    '+scene_line(*l) for l in dialogue_b)}
    </div>
  </div>
</div>
'''

# ========== 2. 场景日记（中文提示+横线） ==========
diary = [
    ("① 朋友要一个人去旅行，我很担心。","친구가 혼자 여행 간다고 해서 걱정이 돼요.","My friend is going on a trip alone, so I'm worried."),
    ("② 在语言不通的外国，我能一个人过得好吗？","말도 안 통하는 외국에서 혼자 잘할 수 있을까?","In a foreign country where I can't speak the language, can I manage alone?"),
    ("③ 明明了解你，怎么能那么不负责任？","아는 입장에서 어쩜 그렇게 무책할 수 있어?","Knowing you, how can you be so irresponsible?"),
    ("④ 明明是你要的，为什么说那么尖锐的话？","네가 그걸 원해 놓고 왜 그렇게 뾰족한 말을 해?","You wanted this yourself, so why say something so sharp?"),
    ("⑤ 这次我会好好听你说，是担心这件事吧。","이번엔 잘 들어줄게. 걱정이라는 거지?","This time I'll listen properly. It's about worry, right?"),
]
diary_html = []
for prompt, kr, en in diary:
    diary_html.append(
        f'  <div style="margin:8px 0;">\n'
        f'    <div class="diary-prompt" style="font-size:12px;font-weight:bold;">{prompt}</div>\n'
        f'    <div class="diary-blank-line">________________（한국어）</div>\n'
        f'    <div class="diary-blank-line">________________（English）</div>\n'
        f'  </div>')
diary_page_upper = f'''<!-- ===== 场景日记(标准中文提示+横线) ===== -->
<div class="page">
  <div class="header-bar">
    <span class="header-left">第27课 · 说不出口的担心</span>
    <span>📝 场景日记</span>
  </div>
  <div class="sec-title">📝 场景日记 · 用今天的句型写下来</div>
  <div style="font-size:11px;color:#8b7355;margin-bottom:10px;">每句中文提示下面写两行：第一行韩语，第二行英语</div>
{chr(10).join(diary_html)}
  <div style="margin-top:20px;padding:8px 12px;background:#f8f6f2;border-radius:4px;border-left:3px solid #c4b998;">
    <div style="font-size:10px;color:#8b7355;font-weight:bold;margin-bottom:4px;">参考答案</div>
    <div class="answer-item">① {diary[0][1]} / {diary[0][2]}</div>
    <div class="answer-item">② {diary[1][1]} / {diary[1][2]}</div>
    <div class="answer-item">③ {diary[2][1]} / {diary[2][2]}</div>
    <div class="answer-item">④ {diary[3][1]} / {diary[3][2]}</div>
    <div class="answer-item">⑤ {diary[4][1]} / {diary[4][2]}</div>
  </div>
'''

# ========== 3. 口语挑战（自由发挥30秒） ==========
challenge_block = '''
  <div class="sec-title" style="margin-top:16px;">🎤 口语挑战</div>
  <div class="challenge-box">
    <div style="font-size:12px;color:#555;line-height:1.8;">
      不看原文，用今天学的句型说一段30秒的话（自由发挥）<br>
      <span style="font-size:11px;color:#8b7355;">提示：① 表达对朋友的担心 ② 说说你为什么放不下话 ③ 用「-길 바라다 / -(으)ㄹ 수 있겠어요? / -는 입장에서」造句</span>
    </div>
  </div>
</div>
'''

# ========== 4. 定位并替换 ==========
# 找到"场景迁移"page起 到 文件结尾(最后一页含口语挑战)
start = html.find('场景迁移')
if start == -1:
    print("未找到场景迁移板块!"); raise SystemExit(1)
# 回退到该page开头的 div
seg_start = html.rfind('<div class="page', 0, start)
# 末尾：从口语挑战页的最后 </div></div> 到 </body>
body_end = html.rfind('</body>')
# 替换 场景迁移+日记+口语 三页 为 新三页
new_html = html[:seg_start] + scene_page + diary_page_upper + challenge_block + '\n' + html[body_end:]
open(path, 'w', encoding='utf-8').write(new_html)
print("替换完成")
print("新HTML大小:", len(new_html))
