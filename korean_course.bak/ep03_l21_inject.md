# Instructions for Claude Code

You MUST modify two files: ep3.html and index.html in /root/.openclaw/workspace/korean_course/

## File 1: ep3.html

### Change 1: Update TOTAL_LESSONS and course subtitle
Replace:
```
var TOTAL_LESSONS=0,UNLOCKED=[];
```
With:
```
var TOTAL_LESSONS=1,UNLOCKED=[];
```

Replace the banner subtitle:
```
<div class="sub">这爱情怎么翻译 · 12集 / 0课</div>
```
With:
```
<div class="sub">这爱情怎么翻译 · 12集 / 1课</div>
```

Replace the "总课数" span:
```
<div class="item"><div class="num" style="color:#f39c12;">0</div><div class="lbl">总课数</div></div>
```
With:
```
<div class="item"><div class="num" style="color:#f39c12;">1</div><div class="lbl">总课数</div></div>
```

Replace the placeholder content message:
```
<div style="font-size:11px;opacity:.5;margin-top:6px;">🎬 新剧情，即将上线</div>
```
With:
```
<div style="font-size:11px;opacity:.5;margin-top:6px;">🎬 新课程持续更新中</div>
```

### Change 2: Replace the placeholder section with lesson list
Replace the ep-content div (the one with the 🎬 placeholder):
```html
<div class="ep-content open" style="padding:30px 20px;text-align:center">
  <div style="font-size:48px;margin-bottom:16px">🎬</div>
  <div style="font-size:18px;font-weight:600;margin-bottom:8px;color:#333">第3集 · 新剧情</div>
  <div style="font-size:14px;color:#999;line-height:1.8">
    <p>内容制作中...</p>
    <p style="margin-top:8px">敬请期待 📺</p>
  </div>
</div>
```
With:
```html
<div class="ep-content open">
<div class="lesson" data-lesson="21" onclick="openLesson(21)">
  <span class="num red">21</span>
  <div class="info">
    <div class="title">第21课 · 症状を伝える</div>
    <div class="sub">병원에서의 대화</div>
  </div>
  <span class="tag red">待学</span>
</div>
</div>
```

### Change 3: Add LESSONS data
After the line `var LESSONS={};`, add:
```javascript
LESSONS[21]={
  title:'第21课 · 症状を伝える',
  video:'videos/ep03_l21.mp4',
  vocab:[
    ['불안하다','不安 (anxious)'],
    ['꾀병','装病 (faking illness)'],
    ['어지럽다','头晕 (dizzy)'],
    ['덜덜 떨리다','瑟瑟发抖 (tremble)'],
    ['뒤집어지다','翻转 (turn over)'],
    ['열이 나다','发烧 (have a fever)'],
    ['쓰러지다','倒下 (collapse)'],
    ['갖다 대다','贴上 (put against)'],
    ['장난','玩笑 (joke)'],
    ['통역하다','翻译 (interpret)'],
    ['입원','住院 (hospitalization)'],
    ['당장','立刻 (immediately)'],
    ['그대로','原样 (as is)'],
    ['행사','活动 (event)'],
    ['병원','医院 (hospital)']
  ],
  lines:[
    '불안한 거 말고는 뭐, 어디 다른 데 아픈 데는 없어요?',
    '뭐, 꾀병일까 봐요?',
    '어지럽고 덜덜 떨리고, 속도 뒤집어질 거 같고',
    '열도 나고 쓰러질 거 같거든요?',
    '갖다 대 봐요, 진짜 열나나',
    '왜 이래요?',
    '차무희 씨, 여기 병원이에요',
    '내가 들은 그대로 믿고 통역하면',
    '당신 행사고 뭐고 못 가고, 당장 입원입니다',
    '장난하지 마요'
  ],
  subtitle:'/root/.openclaw/workspace/korean_course/videos/subs/ep03_l21.vtt'
};
```

### Change 4: Add lesson page HTML
After all existing `</div></div></div>` at the end of the ep-content section, but BEFORE the <script> section (i.e. before `</div><div class="pg show" id="pageIndex">` ... wait, pageIndex is already there. Let me add the lesson page after the pageIndex div and before the script section.

Insert the lesson 21 page after `</div>` (closing of pageIndex) and before `<script>`:

```html
<!-- ===== 第21课 ===== -->
<div class="pg" id="pageLesson21">
<div class="top">
  <span class="back" onclick="goHome()">← 返回</span>
  <h2>第21课 · 病院での问诊</h2>
  <button class="quiz-btn" onclick="toggleQuiz(21)">测验模式</button>
</div>
<div class="content" id="content21">

<div class="sec">📝 台词（点击展开讲解）</div>

<!-- Line 1 -->
<div class="line" data-time-start="377.085" data-time-end="379.003">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">불안한 거 말고는 뭐, 어디 다른 데 아픈 데는 없어요?</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'불안한 거 말고는 뭐, 어디 다른 데 아픈 데는 없어요?')">🔊</button>
  </div>
  <p class="cn">→ 除了感到心慌，你还有别的症状吗？</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Besides feeling anxious, is there anywhere else that hurts?</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">불안하다 — 不安，焦虑(anxious) | 말고는 — 除了...(aside from) | 아프다 — 痛(hurt/sick)</span></div>
    <div class="ex">💬 短语 <span class="c">아픈 데 — 痛的地方 / 不舒服的地方 (the place that hurts)</span></div>
    <div class="ex">💬 造句 <span class="c">배 아픈 데 없어요? — 肚子不疼吗？(Does your stomach not hurt?)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)ㄴ 거 말고는 — "除了...之外"(aside from/besides) 名词化形式 + 말고는(除了)</span></div>
    <div class="ex">💬 语法例句 <span class="c">밥 먹은 거 말고는 아무것도 안 했어요 → 除了吃饭，我什么都没做 (I didn't do anything besides eat)</span></div>
    <div class="phon"><b>🎵 音变</b> 불안한[부란한] ㄴ插入连音 | 말고는[말고는] 无特殊 | 아픈[아픈] 无特殊</div>
  </div>
</div>

<!-- Line 2 -->
<div class="line" data-time-start="380.880" data-time-end="382.423">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">뭐, 꾀병일까 봐요?</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'뭐, 꾀병일까 봐요?')">🔊</button>
  </div>
  <p class="cn">→ 怎么，怕我装病吗？</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ What, are you afraid I'm faking it?</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">뭐 — 什么(what) | 꾀병 — 装病(faking illness) | -일까 봐 — 担心/怕...(afraid that... might be)</span></div>
    <div class="ex">💬 短语 <span class="c">꾀병일까 봐 — 怕是装病 (might be faking it)</span></div>
    <div class="ex">💬 造句 <span class="c">거짓말일까 봐 걱정했어요 → 我担心是谎言 (I was worried it might be a lie)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-일까 봐(서) — "担心/怕会..."(worried that it might be...) 表示对未来可能性的担忧</span></div>
    <div class="ex">💬 语法例句 <span class="c">비가 올까 봐 우산을 가져왔어요 → 怕下雨带了伞 (Brought umbrella in case it rains)</span></div>
    <div class="phon"><b>🎵 音变</b> 꾀병[꿰병] 紧音化(ㄲ发音) | 봐요[봐요] 无特殊</div>
  </div>
</div>

<!-- Line 3 -->
<div class="line" data-time-start="382.924" data-time-end="385.176">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">어지럽고 덜덜 떨리고, 속도 뒤집어질 거 같고</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'어지럽고 덜덜 떨리고, 속도 뒤집어질 거 같고')">🔊</button>
  </div>
  <p class="cn">→ 头晕、一直发抖，肚子也像要翻过来一样</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ I'm dizzy, shaking all over, and my stomach feels like it's turning inside out</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">어지럽다 — 头晕(dizzy) | 덜덜 — 瑟瑟发抖(onomatopoeia) | 떨리다 — 颤抖(tremble) | 속 — 肚子(stomach/guts) | 뒤집어지다 — 翻转(turn over)</span></div>
    <div class="ex">💬 短语 <span class="c">덜덜 떨리다 — 瑟瑟发抖 (trembling/shaking violently)</span></div>
    <div class="ex">💬 造句 <span class="c">너무 추워서 덜덜 떨려요 → 太冷了，我直发抖 (I'm so cold I'm trembling)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-고 — 并列连接词("...and...") | -(으)ㄹ 거 같다 — "好像要..."(it seems like/it's going to, 表推测)</span></div>
    <div class="ex">💬 语法例句 <span class="c">비가 올 거 같아요 → 好像要下雨了 (It looks like it's going to rain)</span></div>
    <div class="phon"><b>🎵 音变</b> 어지럽고[어지럽꼬] ㄱ紧音化 | 뒤집어질[뒤지버질] ㅂ→ㅇ音变(不规则) | 덜덜[덜덜] 无特殊</div>
  </div>
</div>

<!-- Line 4 -->
<div class="line" data-time-start="385.259" data-time-end="386.344">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">열도 나고 쓰러질 거 같거든요?</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'열도 나고 쓰러질 거 같거든요?')">🔊</button>
  </div>
  <p class="cn">→ 还发烧，感觉就要晕倒了</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ I have a fever too, and I feel like I'm going to collapse</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">열 — 发烧/热(fever/heat) | 나다 — 出现/发生(occur/happen) | 쓰러지다 — 倒下/collapse</span></div>
    <div class="ex">💬 短语 <span class="c">열이 나다 — 发烧 (have a fever) — 惯用搭配</span></div>
    <div class="ex">💬 造句 <span class="c">감기에 걸려서 열이 났어요 → 感冒发烧了 (I caught a cold and have a fever)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-거든요 — "因为/要知道..."(explanatory tone, 陈述理由时使用，带"你知道的"语气)</span></div>
    <div class="ex">💬 语法例句 <span class="c">오늘 좀 피곤하거든요 → 我今天有点累嘛 (You see, I'm a bit tired today)</span></div>
    <div class="phon"><b>🎵 音变</b> 열도[열또] ㄷ紧音化 | 쓰러질[쓰러질] 无特殊 | 같거든요[가꺼든요] ㅌ→ㄲ紧音化</div>
  </div>
</div>

<!-- Line 5 -->
<div class="line" data-time-start="389.806" data-time-end="390.848">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">갖다 대 봐요, 진짜 열나나</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'갖다 대 봐요, 진짜 열나나')">🔊</button>
  </div>
  <p class="cn">→ 来贴贴看，到底发不发烧</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Here, let me check if you really have a fever</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">갖다 대다 — 贴上去/靠近(put against/touch) | 보다 — (辅助动词)试着做(try doing) | 진짜 — 真的(really/truly)</span></div>
    <div class="ex">💬 短语 <span class="c">갖다 대 보다 — 贴近试试/检查一下 (hold it against to check)</span></div>
    <div class="ex">💬 造句 <span class="c">이거 한번 입어 봐요 → 这件试试穿看 (Try wearing this)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-아/어 보다 — "试着做..."(try doing... 尝试体) | -나 — 疑问词尾(疑问/不确定) "是不是..."</span></div>
    <div class="ex">💬 语法例句 <span class="c">이거 맞나? → 这个对吗？(Is this right?)</span></div>
    <div class="phon"><b>🎵 音变</b> 갖다[갇따] ㅆ→ㄷ+紧音化 | 대 봐요[대봐요] 连音 | 열나나[열라나] ㄴ连音</div>
  </div>
</div>

<!-- Line 6 -->
<div class="line" data-time-start="392.433" data-time-end="393.851">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">왜 이래요?</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'왜 이래요?')">🔊</button>
  </div>
  <p class="cn">→ 你干吗呀？</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ What are you doing? / Why are you like this?</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">왜 — 为什么(why) | 이러다 — 这样做(do like this) = 이렇게 하다</span></div>
    <div class="ex">💬 短语 <span class="c">이래요 — 这样做 (you're doing it like this) = 이렇게 해요 的缩略</span></div>
    <div class="ex">💬 造句 <span class="c">갑자기 왜 그래요? → 突然你干嘛呀？(Why are you suddenly like that?)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">이래요 = 이러(이렇게 하) + -아요 → "这样做/这样干"(doing this, 缩略语)</span></div>
    <div class="ex">💬 语法例句 <span class="c">왜 이렇게 늦었어요? → 怎么这么晚？(Why are you so late?)</span></div>
    <div class="phon"><b>🎵 音变</b> 이래요[이래요] 无特殊音变 — 元音缩略(이렇게 해요 → 이래요)</div>
  </div>
</div>

<!-- Line 7 -->
<div class="line" data-time-start="395.353" data-time-end="397.063">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">차무희 씨, 여기 병원이에요</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'차무희 씨, 여기 병원이에요')">🔊</button>
  </div>
  <p class="cn">→ 车茂熙小姐，这里是医院</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Miss Cha Moo-hee, this is a hospital</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">차무희 — 车茂熙(角色名 Cha Moo-hee) | 씨 — 小姐/先生(courtesy title) | 병원 — 医院(hospital)</span></div>
    <div class="ex">💬 短语 <span class="c">차무희 씨 — 车茂熙小姐 (addressing someone by name+씨)</span></div>
    <div class="ex">💬 造句 <span class="c">여기 도서관이에요 → 这里是图书馆 (This is a library)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-이에요/예요 — 陈述/疑问终结词尾("是..." polite informal form of 이다)</span></div>
    <div class="ex">💬 语法例句 <span class="c">저는 학생이에요 → 我是学生 (I am a student)</span></div>
    <div class="phon"><b>🎵 音变</b> 씨[씨] 紧音化 | 병원[병원] 无特殊 | 이에요[이에요] 无特殊</div>
  </div>
</div>

<!-- Line 8 -->
<div class="line" data-time-start="397.730" data-time-end="399.732">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">내가 들은 그대로 믿고 통역하면</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'내가 들은 그대로 믿고 통역하면')">🔊</button>
  </div>
  <p class="cn">→ 我要是把听到的如实翻译出来</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ If I translate exactly what I heard and (they) believe it</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">듣다 — 听(listen/hear) | 그대로 — 原封不动(as is/exactly) | 믿다 — 相信(believe/trust) | 통역하다 — 口译(interpret)</span></div>
    <div class="ex">💬 短语 <span class="c">들은 그대로 — 原样转述 (as heard / exactly what was heard)</span></div>
    <div class="ex">💬 造句 <span class="c">본 그대로 말해 주세요 → 请如实告诉我你看到的 (Tell me exactly what you saw)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)ㄴ 대로 — "按照...的样子"(as.../according to what...) | -(으)면 — "如果..."(if/when conditional)</span></div>
    <div class="ex">💬 语法例句 <span class="c">시킨 대로 했어요 → 照吩咐做了 (I did as I was told)</span></div>
    <div class="phon"><b>🎵 音变</b> 들은[드른] ㄷ→ㄹ音变(듣다 不规则) | 믿고[민꼬/믿꼬] ㄷ+ㄱ紧音化 | 통역하면[통여카면] ㅂ→ㅍ激音化</div>
  </div>
</div>

<!-- Line 9 -->
<div class="line" data-time-start="399.816" data-time-end="402.151">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">당신 행사고 뭐고 못 가고, 당장 입원입니다</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'당신 행사고 뭐고 못 가고, 당장 입원입니다')">🔊</button>
  </div>
  <p class="cn">→ 什么活动都别想去，立刻住院</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ You can't go to your event or anything, you'll be hospitalized immediately</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">당신 — 您(you, 这里医生用比较正式的语气) | 행사 — 活动(event) | 당장 — 立刻/马上(immediately) | 입원 — 住院(hospitalization)</span></div>
    <div class="ex">💬 短语 <span class="c">행사고 뭐고 — 活动什么的 (events and such, 列举并强调全部否定)</span></div>
    <div class="ex">💬 造句 <span class="c">공부고 뭐고 다 싫어요 → 学习什么的都讨厌 (I hate studying and everything)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-고 뭐고 — "什么...什么的都"(列举多个事物，强调所有都不行/都不要) | 못 가다 — "不能去"(can't go)</span></div>
    <div class="ex">💬 语法例句 <span class="c">밥이고 뭐고 다 먹고 싶어요 → 饭啊什么的都想吃 (I want to eat everything including rice)</span></div>
    <div class="phon"><b>🎵 音变</b> 입원[이붠] 无特殊 | 못 가고[몯까고] ㅅ韵尾+紧音化 | 당장[당짱] 无特殊</div>
  </div>
</div>

<!-- Line 10 -->
<div class="line" data-time-start="402.693" data-time-end="404.612">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">장난하지 마요</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'장난하지 마요')">🔊</button>
  </div>
  <p class="cn">→ 别开玩笑了</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Don't joke around</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">장난 — 玩笑/joke/game | 장난하다 — 开玩笑(joke around)</span></div>
    <div class="ex">💬 短语 <span class="c">장난하지 마요 — 别开玩笑 (don't joke around)</span></div>
    <div class="ex">💬 造句 <span class="c">거짓말하지 마요 → 别说谎 (Don't lie)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-지 마(요) — "请不要... / 别..."(don't ... negative imperative, 动词连接词尾后加마(요))</span></div>
    <div class="ex">💬 语法例句 <span class="c">걱정하지 마요 → 别担心 (Don't worry)</span></div>
    <div class="phon"><b>🎵 音变</b> 장난하다[장난하다] 无特殊 | 마요[마요] 无特殊</div>
  </div>
</div>

<!-- ===== 小贴士 ===== -->
<div class="sec">💡 小贴士</div>
<p class="tip">✨ 本课重点：① 症状描述 표현 — 어지럽다/덜덜 떨리다/열이나다/쓰러지다 ② -거든요 解释语尾（给理由时用）③ -ㄹ까 봐 担心表达 ④ -지 마(요) 否定命令形（"别做..."）⑤ -고 뭐고 全盘否定列举</p>

<!-- ===== 单词汇总 ===== -->
<div class="sec" onclick="toggleVocab(this)" style="cursor:pointer;user-select:none">
<span style="display:inline-block;transition:transform .2s">▶</span> 📌 单词
</div>
<div id="vocab21" style="display:none">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 20px;margin:8px 0">
<div style="font-size:13px;padding:3px 0"><b>불안하다</b> — 不安，焦虑 (anxious)</div>
<div style="font-size:13px;padding:3px 0"><b>꾀병</b> — 装病 (faking illness)</div>
<div style="font-size:13px;padding:3px 0"><b>어지럽다</b> — 头晕 (dizzy)</div>
<div style="font-size:13px;padding:3px 0"><b>덜덜 떨리다</b> — 瑟瑟发抖 (tremble)</div>
<div style="font-size:13px;padding:3px 0"><b>뒤집어지다</b> — 翻转 (turn over)</div>
<div style="font-size:13px;padding:3px 0"><b>열이 나다</b> — 发烧 (have a fever)</div>
<div style="font-size:13px;padding:3px 0"><b>쓰러지다</b> — 倒下 (collapse)</div>
<div style="font-size:13px;padding:3px 0"><b>갖다 대다</b> — 贴上 (put against)</div>
<div style="font-size:13px;padding:3px 0"><b>장난</b> — 玩笑 (joke)</div>
<div style="font-size:13px;padding:3px 0"><b>통역하다</b> — 口译 (interpret)</div>
<div style="font-size:13px;padding:3px 0"><b>입원</b> — 住院 (hospitalization)</div>
<div style="font-size:13px;padding:3px 0"><b>당장</b> — 立刻 (immediately)</div>
<div style="font-size:13px;padding:3px 0"><b>그대로</b> — 原样 (as is)</div>
<div style="font-size:13px;padding:3px 0"><b>행사</b> — 活动 (event)</div>
<div style="font-size:13px;padding:3px 0"><b>병원</b> — 医院 (hospital)</div>
</div>
</div>

<!-- ===== 语法总结 ===== -->
<div class="sec" onclick="toggleGrammar(this)" style="cursor:pointer;user-select:none">
<span style="display:inline-block;transition:transform .2s">▶</span> 📖 语法总结
</div>
<div id="grammar21" style="display:none">
<div style="margin:8px 0">
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>① -(으)ㄴ 거 말고는 — "除了...之外"</b>
<div style="font-size:13px;color:#555;margin:2px 0">动词名词化 + 말고는 (aside from/besides)。用于排除某项，强调此外还有其他。</div>
<div style="font-size:12px;color:#888">→ 불안한 거 말고는 아픈 데 없어요? (除了焦虑还有不舒服的地方吗？)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>② -일까 봐 — "担心/怕会..."</b>
<div style="font-size:13px;color:#555;margin:2px 0">表示对未来可能发生的事情的担忧。常用于表达"怕出什么事"。</div>
<div style="font-size:12px;color:#888">→ 꾀병일까 봐요? (怕我装病吗？) / 비가 올까 봐 (怕下雨)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>③ -거든요 — 解释语尾</b>
<div style="font-size:13px;color:#555;margin:2px 0">陈述理由时使用，带有"你知道的"语气。用于向对方解释原因或背景。</div>
<div style="font-size:12px;color:#888">→ 쓰러질 거 같거든요 (我感觉要晕倒了嘛) / 오늘 바쁘거든요 (我今天忙呀)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>④ -아/어 보다 — "试着做..."</b>
<div style="font-size:13px;color:#555;margin:2px 0">尝试体(Try doing)。接在动词词干后，表示尝试做某事。</div>
<div style="font-size:12px;color:#888">→ 갖다 대 봐요 (贴近试试看) / 먹어 봐요 (尝尝看)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>⑤ -지 마(요) — "别做..."</b>
<div style="font-size:13px;color:#555;margin:2px 0">否定命令形。动词词干 + -지 마세요(正式) / -지 마요(半敬语) / -지 마(半语)。</div>
<div style="font-size:12px;color:#888">→ 장난하지 마요 (别开玩笑) / 걱정하지 마요 (别担心)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>⑥ -고 뭐고 — "什么...的都..."</b>
<div style="font-size:13px;color:#555;margin:2px 0">列举多个事物并强调"全都(不)"。第一个名词+고 뭐고，后面通常是否定或排斥的表达。</div>
<div style="font-size:12px;color:#888">→ 행사고 뭐고 못 가요 (活动什么的都去不了) / 밥이고 뭐고 다 먹었어요 (饭啊什么的都吃了)</div>
</div>
</div>
</div>

<!-- ===== 底部：已完成 → 笔记 → 口语 ===== -->
<button class="done-toggle" data-lesson="21" onclick="toggleDone(21)">✓ 已完成学习</button>
<div class="sec">✏️ 笔记</div>
<textarea class="note-box" data-note="21" placeholder="在此输入笔记..."></textarea>
<span class="note-status" id="noteStatus21">✓ 已保存</span>
<button class="speak-practice-toggle" onclick="startPractice(21)">🎤 口语练习</button>

</div></div>
```

### Change 5: Add LESSON_TIMES data
After `var LESSON_TIMES={};` (currently empty), add:
```javascript
LESSON_TIMES[21]=[
  {start:377.085,end:379.003},
  {start:380.880,end:382.423},
  {start:382.924,end:385.176},
  {start:385.259,end:386.344},
  {start:389.806,end:390.848},
  {start:392.433,end:393.851},
  {start:395.353,end:397.063},
  {start:397.730,end:399.732},
  {start:399.816,end:402.151},
  {start:402.693,end:404.612}
];
```

### Change 6: Add toggle functions and update startPractice
After the `refreshProgress()` function and before the dark mode check, add:
```javascript
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
```

Replace the placeholder `startPractice` function:
```javascript
function startPractice(n){alert('第3集课程内容制作中，暂无可练习的课程。');}
```
With:
```javascript
function startPractice(n){
  var l={21:['불안한 거 말고는 뭐, 어디 다른 데 아픈 데는 없어요?','뭐, 꾀병일까 봐요?','어지럽고 덜덜 떨리고, 속도 뒤집어질 거 같고','열도 나고 쓰러질 거 같거든요?','갖다 대 봐요, 진짜 열나나','왜 이래요?','차무희 씨, 여기 병원이에요','내가 들은 그대로 믿고 통역하면','당신 행사고 뭐고 못 가고, 당장 입원입니다','장난하지 마요']};
  var lines=l[n];if(!lines||!lines.length){alert('该课程暂无口语练习内容');return;}
  openPracticeModal(n,lines);
}
```

### Change 7: Add handleSpeak function
Find the `speak` function and ensure `handleSpeak` exists. If the `speak` function doesn't have a `handleSpeak` wrapper, add it:
```javascript
function handleSpeak(e,text){
  e.stopPropagation();
  speak(text);
}
```

## File 2: /root/.openclaw/workspace/korean_course/index.html

### Change 1: Update TOTAL_LESSONS
Find `TOTAL_LESSONS=20` and change to `TOTAL_LESSONS=21`

### Change 2: Add lesson 21 to UNLOCKED
Find `UNLOCKED=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];` 
Change to: `UNLOCKED=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];`

### Change 3: Add lesson card to Episode 3 section
In the ep-content for EPISODE 3, add the lesson card after the existing ones. Look for the last lesson in ep3 and add after it:
```html
<div class="lesson" data-lesson="21" onclick="openLesson(21)">
  <span class="num red">21</span>
  <div class="info">
    <div class="title">第21课 · 症状を伝える</div>
    <div class="sub">병원에서의 대화</div>
  </div>
  <span class="tag red">待学</span>
</div>
```

## Execution
Make all changes precisely. Do NOT change anything else. Do NOT add extra divs or modify existing structure.
