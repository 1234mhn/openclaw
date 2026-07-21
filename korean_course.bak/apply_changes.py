#!/usr/bin/env python3
"""Apply Lesson 15 + CSS fix to index.html"""

import re

with open('/root/.openclaw/workspace/korean_course/index.html', 'r') as f:
    html = f.read()

# ============================================================
# 1. Banner: 14课 -> 15课 (subtitle)
# ============================================================
html = html.replace(
    '· 11集 / 14课</div>',
    '· 11集 / 15课</div>',
    1
)

# ============================================================
# 2. Banner: total lessons number
# ============================================================
html = html.replace(
    '<div class="num" style="color:#f39c12;">14</div><div class="lbl">总课数</div>',
    '<div class="num" style="color:#f39c12;">15</div><div class="lbl">总课数</div>',
    1
)

# ============================================================
# 3. CSS: video-wrap top:52px -> top:0
# ============================================================
html = html.replace(
    '.pg .video-wrap{position:sticky;top:52px;z-index:5;background:#000}',
    '.pg .video-wrap{position:sticky;top:0;z-index:5;background:#000}',
    1
)

# ============================================================
# 4. TOTAL_LESSONS + UNLOCKED
# ============================================================
html = html.replace(
    'var TOTAL_LESSONS=14,UNLOCKED=[1,2,3,4,5,6,7,8,9,10,11,12,13];',
    'var TOTAL_LESSONS=15,UNLOCKED=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];',
    1
)

# ============================================================
# 5. Lesson card: add lesson 15 after lesson 14 in ep-content
# ============================================================
lesson15_card = '''
<div class="lesson" data-lesson="15" onclick="openLesson(15)">
  <span class="num red">15</span>
  <div class="info">
    <div class="title">一起去吃饭吧</div>
    <div class="sub">어, 그래요 / 같이 밥 먹어요</div>
  </div>
  <span class="tag red">待学</span>
</div>'''

# Insert after lesson 14's </div> closing tag (the one after <span class="tag red">待学</span>)
pattern = '''<span class="tag red">待学</span>
</div>
</div>
</div>
</div>
<div class="footer">楠楠大管家 · 韩语学习系统</div>'''
replacement = '''<span class="tag red">待学</span>
</div>
''' + lesson15_card + '''
</div>
</div>
</div>
</div>
<div class="footer">楠楠大管家 · 韩语学习系统</div>'''
html = html.replace(pattern, replacement, 1)

# ============================================================
# 6. LESSONS[15] data
# ============================================================
lessons15 = '''15:{title:'第15课 \\u00b7 \\u4e00\\u8d77\\u53bb\\u5403\\u996d\\u5427',video:'https://korean-video-1433876150.cos.ap-guangzhou.myqcloud.com/media/korean_course/videos/scene15_eat.mp4',vocab:[['\\ubc30','\\u809a\\u5b50/\\u80c3(stomach)'],['\\uace0\\ud504\\ub2e4','\\u997f(hungry)'],['\\ub4e4\\uc5b4\\uac00\\ub2e4','\\u8fdb\\u53bb(go in)'],['\\ubc25','\\u996d(rice/meal)'],['\\uba39\\ub2e4','\\u5403(eat)'],['\\uc804\\uc5d0','\\u4e4b\\u524d(before)'],['\\ubabb \\uba39\\ub2e4','\\u6ca1\\u80fd\\u5403(couldn\\'t eat)'],['\\uc624\\ub298','\\u4eca\\u5929(today)'],['\\ubbf8\\uc548\\ud558\\ub2e4','\\u5bf9\\u4e0d\\u8d77(sorry)'],['\\uc0ac\\ub2e4','\\u8bf7\\u5ba2/\\u4e70(buy/treat)'],['\\uadfc\\ucc98','\\u9644\\u8fd1(nearby)'],['\\uc2dd\\ub2f9','\\u9910\\u5385(restaurant)'],['\\uac78\\uc5b4\\uac00\\ub2e4','\\u8d70\\u8fc7\\u53bb(walk)'],['\\ucd94\\ub2e4','\\u51b7(cold)'],['\\ub450\\ub974\\ub2e4','\\u56f4\\u4e0a(wrap)']],lines:['\\uc5b4, \\uadf8\\ub798\\uc694, \\ub098 \\ubc30\\ub3c4 \\ub108\\ubb34 \\uace0\\ud30c\\uc694.','\\uc6b0\\ub9ac \\uc5b4\\ub514 \\ub4e4\\uc5b4\\uac00\\uc11c \\ubc25 \\uba39\\uc5b4\\uc694.','\\ubc25\\uc744 \\uba39\\uc790\\uace0\\uc694?','\\uc6b0\\ub9ac \\uc804\\uc5d0 \\uac19\\uc774 \\ubc25 \\uba39\\uc5b4 \\uc8fc\\uae30\\ub85c \\ud558\\uace0 \\ubabb \\uba39\\uc5c8\\uc5c8\\uc7a4\\uc544\\uc694.','\\uadf8\\ub54c \\ubabb \\uba39\\uc740 \\uac70 \\uc624\\ub298 \\uac19\\uc774 \\uba39\\uc5b4 \\uc904\\uac8c\\uc694.','\\uadf8\\ub798\\uc694. \\uadf8\\ub54c\\ub294 \\uc81c\\uac00 \\ubbf8\\uc548\\ud588\\uc73c\\ub2c8\\uae4c \\ubc25\\uc740 \\ub0b4\\uac00 \\uc0b4\\uac8c\\uc694.','\\uadfc\\ucc98\\uc5d0 \\uc544\\ub294 \\uc2dd\\ub2f9\\uc774 \\uc788\\uc5b4\\uc694.','\\uac78\\uc5b4\\uac00\\ub294 \\ub3d9\\uc548 \\ucd94\\uc6b8 \\ud14c\\ub2c8\\uae4c \\uc774\\uac70 \\ub458\\ub7ec\\uc694.']},'''

html = html.replace(
    '14:{title:\'第14课 · 拍摄现场散步\',video:\'https://korean-video-1433876150.cos.ap-guangzhou.myqcloud.com/media/korean_course/videos/scene14_ep2_27min.mp4\',vocab:[[\'차무희\',\'车茂熙(人名)\'],[\'스태프\',\'工作人员(staff)\'],[\'드라마\',\'电视剧(drama)\'],[\'알아보다\',\'认出来\'],[\'춥다\',\'冷\'],[\'얇다\',\'薄\'],[\'백화점\',\'百货商店\'],[\'신상\',\'新款\'],[\'브랜드\',\'品牌(brand)\'],[\'마네킹\',\'人体模特(mannequin)\'],[\'칭찬\',\'称赞\'],[\'피곤하다\',\'累\'],[\'얼다\',\'冻\']],lines:[\'차무희 씨?\',\'나가요.\',\'기다리기 지루했죠? 미안해요.\',\'아니에요, 재미있던데요?\',\'스태프들이 그렇게 많은 줄 몰랐어요.\',\'드라마나 영화 스태프들은 더 많아요.\',\'근데 괜찮아요? 이렇게 다녀도?\',\'아직 차무희는 잘 못 알아봐요.\',\'도라미라고 해야 알아보지.\',\'춥지 않아요? 옷이 너무 얇아 보이는데.\',\'이게 백화점에도 없는 신상이에요.\',\'나한테만 특별하게 미리 입으라고 보내 준 건데.\',\'얼어 죽어도 입어 줘야죠.\',\'아, 마케팅.\',\'걸어 다니는 마네킹이네요.\',\'칭찬으로 들을게요.\',\'피곤할 텐데 빨리 얘기하고 들어가서 쉬셔야겠네요.\']},\n};',
    '14:{title:\'第14课 · 拍摄现场散步\',video:\'https://korean-video-1433876150.cos.ap-guangzhou.myqcloud.com/media/korean_course/videos/scene14_ep2_27min.mp4\',vocab:[[\'차무희\',\'车茂熙(人名)\'],[\'스태프\',\'工作人员(staff)\'],[\'드라마\',\'电视剧(drama)\'],[\'알아보다\',\'认出来\'],[\'춥다\',\'冷\'],[\'얇다\',\'薄\'],[\'백화점\',\'百货商店\'],[\'신상\',\'新款\'],[\'브랜드\',\'品牌(brand)\'],[\'마네킹\',\'人体模特(mannequin)\'],[\'칭찬\',\'称赞\'],[\'피곤하다\',\'累\'],[\'얼다\',\'冻\']],lines:[\'차무희 씨?\',\'나가요.\',\'기다리기 지루했죠? 미안해요.\',\'아니에요, 재미있던데요?\',\'스태프들이 그렇게 많은 줄 몰랐어요.\',\'드라마나 영화 스태프들은 더 많아요.\',\'근데 괜찮아요? 이렇게 다녀도?\',\'아직 차무희는 잘 못 알아봐요.\',\'도라미라고 해야 알아보지.\',\'춥지 않아요? 옷이 너무 얇아 보이는데.\',\'이게 백화점에도 없는 신상이에요.\',\'나한테만 특별하게 미리 입으라고 보내 준 건데.\',\'얼어 죽어도 입어 줘야죠.\',\'아, 마케팅.\',\'걸어 다니는 마네킹이네요.\',\'칭찬으로 들을게요.\',\'피곤할 텐데 빨리 얘기하고 들어가서 쉬셔야겠네요.\']},\n' + lessons15,
    1
)

# ============================================================
# 7. pageLesson15 HTML
# ============================================================
page15 = '''<div class="pg" id="pageLesson15">
<div class="top">
  <span class="back" onclick="goHome()">← 返回</span>
  <h2>第15课 · 一起去吃饭吧</h2>
  <button class="quiz-btn" onclick="toggleQuiz(15)">测验模式</button>
</div>
<div class="content" id="content15">
<div class="sec">📝 台词（点击展开讲解）</div>

<div class="line" data-time-start="0" data-time-end="1.5">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">1. \\uc5b4, \\uadf8\\ub798\\uc694, \\ub098 \\ubc30\\ub3c4 \\ub108\\ubb34 \\uace0\\ud30c\\uc694.</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'\\uc5b4, \\uadf8\\ub798\\uc694, \\ub098 \\ubc30\\ub3c4 \\ub108\\ubb34 \\uace0\\ud30c\\uc694.')">🔊</button>
  </div>
  <p class="cn">→ 嗯，好吧，我也饿坏了。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Uh, okay, I\\'m really hungry too.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">\\uc5b4 — 嗯(uh) ｜ \\uadf8\\ub798\\uc694 — 好吧/那样(okay) ｜ \\ubc30 — 肚子(stomach) ｜ \\uace0\\ud504\\ub2e4 — 饿(hungry) ｜ \\ub108\\ubb34 — 太/非常(very)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 배가 고파요 — 肚子饿(I\\'m hungry)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 나도 배고파요 — 我也饿了(I\\'m hungry too)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-도：助词，表示"也"，배도(배+도) → "肚子也(饿了)"</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 나도 좋아요 — 我也喜欢(I like it too)</span></div>
    <div class="phon"><b>🎵 音变</b> 고파요[고파요] ｜ 发音不变 ｜ 그래요[그래요]</div>
  </div>
</div>

<div class="line" data-time-start="1.5" data-time-end="3">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">2. \\uc6b0\\ub9ac \\uc5b4\\ub514 \\ub4e4\\uc5b4\\uac00\\uc11c \\ubc25 \\uba39\\uc5b4\\uc694.</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'\\uc6b0\\ub9ac \\uc5b4\\ub514 \\ub4e4\\uc5b4\\uac00\\uc11c \\ubc25 \\uba39\\uc5b4\\uc694.')">🔊</button>
  </div>
  <p class="cn">→ 我们找个地方进去吃饭吧。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Let\\'s go somewhere and eat.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">\\uc6b0\\ub9ac — 我们(we) ｜ \\uc5b4\\ub514 — 哪里(where) ｜ \\ub4e4\\uc5b4\\uac00\\ub2e4 — 进去(go in) ｜ \\ubc25 — 饭/餐(meal) ｜ \\uba39\\ub2e4 — 吃(eat)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 밥 먹어요 — 吃饭(eat a meal)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 우리 같이 밥 먹어요 — 我们一起吃饭吧(Let\\'s eat together)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-아/어서：连接词尾，表示先后顺序或方式，"…然后…/找个地方…"</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 가게에 들어가서 물건을 샀어요 — 进店里买了东西</span></div>
    <div class="phon"><b>🎵 音变</b> 들어가서[드러가서] ｜ 들어가다 → [드러가다] 连音化</div>
  </div>
</div>

<div class="line" data-time-start="5" data-time-end="6">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">3. \\ubc25\\uc744 \\uba39\\uc790\\uace0\\uc694?</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'\\ubc25\\uc744 \\uba39\\uc790\\uace0\\uc694?')">🔊</button>
  </div>
  <p class="cn">→ 吃饭？</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ You want to eat?</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">\\ubc25 — 饭(rice/meal) ｜ -\\uc744 — (宾格助词) ｜ \\uba39\\ub2e4 — 吃(eat) ｜ -\\uc790\\uace0 \\ud558\\ub2e4 — 提议说(suggest that)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 밥 먹자 — 吃饭吧(Let\\'s eat)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 영화 보자고 했어요 — 说一起看电影吧</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-자고요？：-자고(间接引用提议) + -요(敬语)，反问确认，"你是说…？"</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 같이 가자고요? — 说一起走？</span></div>
    <div class="phon"><b>🎵 音变</b> 먹자고요[먹짜고요] ｜ ㅈ + ㄱ → 紧音化</div>
  </div>
</div>

<div class="line" data-time-start="9.5" data-time-end="13">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">4. \\uc6b0\\ub9ac \\uc804\\uc5d0 \\uac19\\uc774 \\ubc25 \\uba39\\uc5b4 \\uc8fc\\uae30\\ub85c \\ud558\\uace0 \\ubabb \\uba39\\uc5c8\\uc5c8\\uc7a4\\uc544\\uc694.</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'\\uc6b0\\ub9ac \\uc804\\uc5d0 \\uac19\\uc774 \\ubc25 \\uba39\\uc5b4 \\uc8fc\\uae30\\ub85c \\ud558\\uace0 \\ubabb \\uba39\\uc5c8\\uc5c8\\uc7a4\\uc544\\uc694.')">🔊</button>
  </div>
  <p class="cn">→ 我们之前说好一起吃饭，不是没吃成嘛。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ We agreed to eat together before, but we couldn\\'t, remember?</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">\\uc804\\uc5d0 — 之前(before) ｜ \\uac19\\uc774 — 一起(together) ｜ \\uba39\\uc5b4 \\uc8fc\\ub2e4 — 请吃(feed) ｜ -\\uae30\\ub85c \\ud558\\ub2e4 — 决定做…(decide to) ｜ \\ubabb \\uba39\\ub2e4 — 没能吃(couldn\\'t eat) ｜ -\\uc7a4\\uc544\\uc694 — 不是吗</span></div>
    <div class="ex">💬 短语 <span class="c">→ 밥 먹기로 했어요 — 说好要吃饭</span></div>
    <div class="ex">💬 造句 <span class="c">→ 전에 만나기로 했었잖아요 — 之前不是说好见面的嘛</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-기로 하다：表示"决定/说好做某事"。-잖아요：反问语气，"不是…嘛"</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 같이 가기로 했잖아요 — 不是说好一起去的嘛</span></div>
    <div class="phon"><b>🎵 音变</b> 먹었었잖아요[머거써쨔나요] ｜ ㅆ + ㅈ → ㅉ 紧音化</div>
  </div>
</div>

<div class="line" data-time-start="13" data-time-end="16">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">5. \\uadf8\\ub54c \\ubabb \\uba39\\uc740 \\uac70 \\uc624\\ub298 \\uac19\\uc774 \\uba39\\uc5b4 \\uc904\\uac8c\\uc694.</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'\\uadf8\\ub54c \\ubabb \\uba39\\uc740 \\uac70 \\uc624\\ub298 \\uac19\\uc774 \\uba39\\uc5b4 \\uc904\\uac8c\\uc694.')">🔊</button>
  </div>
  <p class="cn">→ 上次没吃上的，今天我陪你吃。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ What we couldn\\'t eat back then, I\\'ll eat with you today.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">\\uadf8\\ub54c — 那时(back then) ｜ \\ubabb \\uba39\\ub2e4 — 没能吃(couldn\\'t eat) ｜ \\uc624\\ub298 — 今天(today) ｜ -\\uae7c\\uc694 — 我会…(will) ｜ \\uba39\\uc5b4 \\uc8fc\\ub2e4 — 给吃/陪着吃</span></div>
    <div class="ex">💬 短语 <span class="c">→ 못 먹은 거 — 没吃成的</span></div>
    <div class="ex">💬 造句 <span class="c">→ 그 일은 제가 할게요 — 那件事我来做</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)ㄴ 거：动词冠词形+的，名词化。-(아/어) 줄게요：表示为对方做某事的意志，"我来为你…"</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 도와줄게요 — 我来帮你</span></div>
    <div class="phon"><b>🎵 音变</b> 먹은[머근] ｜ ㄱ + 은 → ㄱ连音 ｜ 줄게요[줄께요] ｜ ㄱ → ㄲ</div>
  </div>
</div>

<div class="line" data-time-start="20" data-time-end="24">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">6. \\uadf8\\ub798\\uc694. \\uadf8\\ub54c\\ub294 \\uc81c\\uac00 \\ubbf8\\uc548\\ud588\\uc73c\\ub2c8\\uae4c \\ubc25\\uc740 \\ub0b4\\uac00 \\uc0b4\\uac8c\\uc694.</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'\\uadf8\\ub798\\uc694. \\uadf8\\ub54c\\ub294 \\uc81c\\uac00 \\ubbf8\\uc548\\ud588\\uc73c\\ub2c8\\uae4c \\ubc25\\uc740 \\ub0b4\\uac00 \\uc0b4\\uac8c\\uc694.')">🔊</button>
  </div>
  <p class="cn">→ 好吧。那次是我不对，今天我请客。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Okay. Since I was the one who was sorry back then, I\\'ll pay for the meal.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">\\uadf8\\ub798\\uc694 — 好吧(okay) ｜ \\uadf8\\ub54c — 那时 ｜ \\uc81c\\uac00 — 我(谦称/I) ｜ \\ubbf8\\uc548\\ud558\\ub2e4 — 对不起/抱歉(sorry) ｜ \\ubc25 — 饭 ｜ \\ub0b4\\uac00 — 我(I) ｜ \\uc0ac\\ub2e4 — 请客/买(buy/treat)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 밥을 살게요 — 我请客(I\\'ll treat you)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 오늘은 제가 낼게요 — 今天我请客</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-았/었으니까：表示原因"因为…了，所以…"。-ㄹ게요：表态意志，"我会…的"</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 시간이 늦었으니까 빨리 가요 — 因为晚了，快走吧</span></div>
    <div class="phon"><b>🎵 音变</b> 미안했으니까[미아내써니까] ｜ ㅎ脱落 ｜ 살게요[살께요] ｜ ㄱ→ㄲ</div>
  </div>
</div>

<div class="line" data-time-start="33" data-time-end="35">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">7. \\uadfc\\ucc98\\uc5d0 \\uc544\\ub294 \\uc2dd\\ub2f9\\uc774 \\uc788\\uc5b4\\uc694.</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'\\uadfc\\ucc98\\uc5d0 \\uc544\\ub294 \\uc2dd\\ub2f9\\uc774 \\uc788\\uc5b4\\uc694.')">🔊</button>
  </div>
  <p class="cn">→ 附近有我认识的餐厅。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ There\\'s a restaurant I know nearby.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">\\uadfc\\ucc98 — 附近(nearby) ｜ \\uc54c\\ub2e4 — 知道/认识(know) ｜ \\uc2dd\\ub2f9 — 餐厅(restaurant) ｜ \\uc788\\ub2e4 — 有/在(there is/be)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 아는 식당 — 认识的餐厅</span></div>
    <div class="ex">💬 造句 <span class="c">→ 근처에 좋은 카페가 있어요 — 附近有家不错的咖啡厅</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-는：冠词形语尾，修饰名词。"아는" = "认识的"（动词알다的冠词形）</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 제가 아는 사람이에요 — 是我认识的人</span></div>
    <div class="phon"><b>🎵 音变</b> 있어요[이써요] ｜ ㅆ 紧音化 ｜ 근처[근처] 发音不变</div>
  </div>
</div>

<div class="line" data-time-start="35" data-time-end="37">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">8. \\uac78\\uc5b4\\uac00\\ub294 \\ub3d9\\uc548 \\ucd94\\uc6b8 \\ud14c\\ub2c8\\uae4c \\uc774\\uac70 \\ub458\\ub7ec\\uc694.</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'\\uac78\\uc5b4\\uac00\\ub294 \\ub3d9\\uc548 \\ucd94\\uc6b8 \\ud14c\\ub2c8\\uae4c \\uc774\\uac70 \\ub458\\ub7ec\\uc694.')">🔊</button>
  </div>
  <p class="cn">→ 走路上会冷，这个先围着吧。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ It\\'ll be cold while walking, so wrap this around you.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">\\uac78\\uc5b4\\uac00\\ub2e4 — 走过去(walk) ｜ \\ub3d9\\uc548 — 期间(during/while) ｜ \\ucd94\\ub2e4 — 冷(cold) ｜ -\\uae7c \\ud14c\\ub2c8\\uae4c — 应该会…所以 ｜ \\uc774\\uac70 — 这个(this) ｜ \\ub450\\ub974\\ub2e4 — 围上(wrap)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 걸어가다 — 走路去</span></div>
    <div class="ex">💬 造句 <span class="c">→ 날씨가 추울 테니까 옷을 많이 입어요 — 天气应该冷，多穿点</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)ㄹ 테니까：推测+原因，"应该会…所以…"</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 비가 올 테니까 우산 가져가세요 — 要下雨了，带伞去吧</span></div>
    <div class="phon"><b>🎵 音变</b> 추울[추울] ｜ 테니까[테니까] ｜ 둘러요[둘러요] ｜ 发音不变</div>
  </div>
</div>

<div class="sec">💡 小贴士</div>
<p class="tip">✨ 本课重点：① -잖아요：反问语气"不是…嘛" ② -기로 하다：决定做某事 ③ -(으)ㄹ 테니까：推测+原因 ④ -아/어 줄게요：为对方做某事的意志 ⑤ -도：也</p>

<div class="sec" onclick="toggleVocab(this)" style="cursor:pointer;user-select:none">
<span style="display:inline-block;transition:transform .2s">▶</span> 📌 单词
</div>
<div id="vocab15" style="display:none">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 20px;margin:8px 0">
<div style="font-size:13px;padding:3px 0"><b>\\ubc30</b> — 肚子/胃(stomach)</div>
<div style="font-size:13px;padding:3px 0"><b>\\uace0\\ud504\\ub2e4</b> — 饿(hungry)</div>
<div style="font-size:13px;padding:3px 0"><b>\\ub4e4\\uc5b4\\uac00\\ub2e4</b> — 进去(go in)</div>
<div style="font-size:13px;padding:3px 0"><b>\\ubc25</b> — 饭(rice/meal)</div>
<div style="font-size:13px;padding:3px 0"><b>\\uba39\\ub2e4</b> — 吃(eat)</div>
<div style="font-size:13px;padding:3px 0"><b>\\uc804\\uc5d0</b> — 之前(before)</div>
<div style="font-size:13px;padding:3px 0"><b>\\ubabb \\uba39\\ub2e4</b> — 没能吃(couldn\\'t eat)</div>
<div style="font-size:13px;padding:3px 0"><b>\\uc624\\ub298</b> — 今天(today)</div>
<div style="font-size:13px;padding:3px 0"><b>\\ubbf8\\uc548\\ud558\\ub2e4</b> — 对不起/抱歉(sorry)</div>
<div style="font-size:13px;padding:3px 0"><b>\\uc0ac\\ub2e4</b> — 请客/买(buy/treat)</div>
<div style="font-size:13px;padding:3px 0"><b>\\uadfc\\ucc98</b> — 附近(nearby)</div>
<div style="font-size:13px;padding:3px 0"><b>\\uc2dd\\ub2f9</b> — 餐厅(restaurant)</div>
<div style="font-size:13px;padding:3px 0"><b>\\uac78\\uc5b4\\uac00\\ub2e4</b> — 走过去(walk)</div>
<div style="font-size:13px;padding:3px 0"><b>\\ucd94\\ub2e4</b> — 冷(cold)</div>
<div style="font-size:13px;padding:3px 0"><b>\\ub450\\ub974\\ub2e4</b> — 围上(wrap)</div>
</div>
</div>


<div class="sec" onclick="toggleGrammar(this)" style="cursor:pointer;user-select:none">
<span style="display:inline-block;transition:transform .2s">▶</span> 📖 语法总结
</div>
<div id="grammar15" style="display:none">
<div style="margin:8px 0">
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>① -잖아요</b>
<div style="font-size:13px;color:#555;margin:2px 0">反问语气，"不是…嘛"。用于提醒对方已知事实。</div>
<div style="font-size:12px;color:#888">→ 같이 가기로 했잖아요 (不是说好一起去的嘛)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>② -기로 하다</b>
<div style="font-size:13px;color:#555;margin:2px 0">接动词后，表示"决定/说好做某事"。</div>
<div style="font-size:12px;color:#888">→ 만나기로 했어요 (说好要见面)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>③ -(으)ㄹ 테니까</b>
<div style="font-size:13px;color:#555;margin:2px 0">推测+原因，"应该会…所以…"。前半句推测，后半句据此行动。</div>
<div style="font-size:12px;color:#888">→ 비가 올 테니까 우산 가져가세요 (要下雨了，带伞去吧)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>④ -아/어 줄게요</b>
<div style="font-size:13px;color:#555;margin:2px 0">表示为对方做某事的意志，"我来为你…"。</div>
<div style="font-size:12px;color:#888">→ 도와줄게요 (我来帮你)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>⑤ -도</b>
<div style="font-size:13px;color:#555;margin:2px 0">助词，表示"也"。"배도(肚子也)" → 肚子也(饿了)。</div>
<div style="font-size:12px;color:#888">→ 나도 좋아요 (我也喜欢)</div>
</div>
</div>
</div>

<script>
function toggleVocab(el){
  var arrow=el.querySelector('span');
  var content=el.nextElementSibling;
  if(content.style.display==='none'){
    content.style.display='block';
    arrow.style.transform='rotate(90deg)';
  }else{
    content.style.display='none';
    arrow.style.transform='rotate(0deg)';
  }
}

function toggleGrammar(el){
  var arrow=el.querySelector('span');
  var content=el.nextElementSibling;
  if(content.style.display==='none'){
    content.style.display='block';
    arrow.style.transform='rotate(90deg)';
  }else{
    content.style.display='none';
    arrow.style.transform='rotate(0deg)';
  }
}
</script>

<button class="done-toggle" data-lesson="15" onclick="toggleDone(15)">✓ 已完成学习</button>
<div class="sec">✏️ 笔记</div>
<textarea class="note-box" data-note="15" placeholder="在此输入笔记..."></textarea>
<span class="note-status" id="noteStatus15">✓ 已保存</span>
<button class="speak-practice-toggle" onclick="startPractice(15)">🎤 口语练习</button>
</div></div>'''

# Insert pageLesson15 before practiceModal
insert_marker = '''<button class="speak-practice-toggle" onclick="startPractice(14)">🎤 口语练习</button>
</div></div>
<div id="practiceModal" class="practice-modal">'''
html = html.replace(insert_marker, '''<button class="speak-practice-toggle" onclick="startPractice(14)">🎤 口语练习</button>
</div></div>
''' + page15 + '''
<div id="practiceModal" class="practice-modal">''', 1)

# ============================================================
# 8. LESSON_TIMES[15]
# ============================================================
times15 = '''  15:[
  {start:0,end:1.5},{start:1.5,end:3},{start:5,end:6},{start:9.5,end:13},{start:13,end:16},{start:20,end:24},{start:33,end:35},{start:35,end:37},
  ],'''

html = html.replace(
    '  14:[\n  {start:4.5,end:5.7},{start:5.9,end:6.7},{start:16,end:18},{start:18,end:20},{start:21,end:23},{start:23,end:25},{start:28,end:31},{start:33,end:36},{start:36,end:38},{start:39,end:42},{start:43,end:45},{start:45,end:47},{start:48,end:49},{start:49,end:51},{start:52,end:53},{start:55,end:56},{start:60,end:64},\n  ],\n};',
    '  14:[\n  {start:4.5,end:5.7},{start:5.9,end:6.7},{start:16,end:18},{start:18,end:20},{start:21,end:23},{start:23,end:25},{start:28,end:31},{start:33,end:36},{start:36,end:38},{start:39,end:42},{start:43,end:45},{start:45,end:47},{start:48,end:49},{start:49,end:51},{start:52,end:53},{start:55,end:56},{start:60,end:64},\n  ],\n' + times15 + '\n};',
    1
)

# ============================================================
# Write result
# ============================================================
with open('/root/.openclaw/workspace/korean_course/index.html', 'w') as f:
    f.write(html)

print("Done! File written.")
print(f"File size: {len(html)} bytes")
