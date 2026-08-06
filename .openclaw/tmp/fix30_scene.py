#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""按新SOP重写第30课两个场景迁移对话（围绕本课'邀约'功能，自然有逻辑）"""
import re

path = '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html'
html = open(path, encoding='utf-8').read()

def line(sp, kr, cn, en):
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

# ========= 场景①：邀朋友一起去看极光（自然版，本课主题情境） =========
sc1 = [
    ("A","다음 달에 오로라 보러 가기로 했는데, 같이 갈래?","我决定下个月去看极光，你要一起去吗？","I decided to go see the aurora next month—do you want to come?"),
    ("B","오로라요? 같이 가면 정말 좋겠네요!","极光？能一起去就太好了！","The aurora? I'd love to go together!"),
    ("A","그런데 혼자 가는 건 좀 외로울까 봐 걱정돼요.","但我有点担心一个人去会孤单。","But I'm worried I'd feel lonely going alone."),
    ("B","그럼 같이 가는 김에 사진도 찍어 줘요!","那就一起去，顺便帮我拍照吧！","Then since we're going together, take photos for me too!"),
    ("A","좋아요! 당신이 같이 가 주면 더 재미있을 것 같아요.","好啊！你能一起去，一定会更有趣。","Great! It'll be more fun if you come with me."),
    ("B","그럼 저도 준비할게요. 즐겁고 설레는 여행이 되길 바라요!","那我也去准备。希望是一趟开心又心动的旅程！","Then I'll get ready too. I hope it's a joyful, thrilling trip!"),
]

# ========= 场景②：约朋友周末看电影（换生活场景，本课'邀约'功能） =========
sc2 = [
    ("A","이번 주말에 영화 보기로 했는데, 같이 볼래?","我这周末决定去看电影，一起看吗？","I decided to see a movie this weekend—want to watch together?"),
    ("B","같이요? 근데 제가 같이 가면 부담스럽지 않을까요?","一起？但我一起去不会让你有负担吗？","Together? But won't it be a burden if I come along?"),
    ("A","전혀요! 혼자 보면 심심할 것 같아서요.","完全不会！一个人看会觉得无聊。","Not at all! Watching alone would be boring."),
    ("B","그래도 혹시 싫으면 어떡해요? 걱정돼요.","但万一你其实不想我去怎么办？我有点担心。","But what if you don't actually want me to? I'm a bit worried."),
    ("A","싫을 리가 있겠어요? 같이 보는 김에 팝콘도 같이 먹어요.","怎么会不想？顺便一起吃点爆米花。","How could I not want you? We can share popcorn too."),
    ("B","그럼 같이 볼게요. 재미있는 영화면 좋겠어요!","那我一起看。希望是部有趣的电影！","Then I'll watch with you. I hope it's a fun movie!"),
]

# ========= 替换：定位"场景①"page内的两个scene-block =========
start = html.find('场景①')
# 找场景迁移page开头
page_start = html.rfind('<div class="page', 0, start)
# 找场景迁移page结束（footer-num 场景练习包 之后的 </div></div> 那段）
footer_idx = html.find('场景练习包 1/2', start)
# 场景迁移page到"场景日记"为止
scene_end = html.find('PAGE 18:')

new_scene = f'''<div class="page">
  <div class="header-bar">
    <span class="header-left">第30课 · 一起去看极光</span>
    <span>🎬 场景练习包</span>
  </div>
  <div class="sec-title">🗣️ 场景迁移 · 对话剧场</div>

  <div class="scene-block" style="margin-bottom:8px;">
    <div style="font-size:11px;color:#8b7355;font-weight:bold;margin-bottom:5px;">场景① · 邀朋友一起去看极光</div>
    <div style="line-height:1;">
{chr(10).join('    '+line(*l) for l in sc1)}
    </div>
  </div>

  <div class="scene-block">
    <div style="font-size:11px;color:#8b7355;font-weight:bold;margin-bottom:5px;">场景② · 约朋友看电影</div>
    <div style="line-height:1;">
{chr(10).join('    '+line(*l) for l in sc2)}
    </div>
  </div>
  <div class="footer-num">场景练习包 1/2</div>
</div>
'''

# 替换从 page_start 到 scene_end 的内容
new_html = html[:page_start] + new_scene + '\n' + html[scene_end:]
open(path, 'w', encoding='utf-8').write(new_html)
print("场景迁移已重写")
print("新HTML大小:", len(new_html))
