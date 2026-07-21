#!/bin/bash
# This script will be executed by Claude Code to inject Lesson 16 into index.html
set -e

cd /root/.openclaw/workspace/korean_course

# ============================================
# STEP 1: Replace pageLesson16 HTML (lines 4322-4549)
# ============================================
# The old block starts at "<div class=\"pg\" id=\"pageLesson16\">" and ends at "</div></div>" before "<div id=\"practiceModal\""
# We need to replace the entire block

# Read the current file
INDEX="index.html"

# Create a sed script for the replacement
# Strategy: Replace from the marker <div class="pg" id="pageLesson16"> to the 
# matching </div></div> that comes before <div id="practiceModal"

python3 << 'PYEOF'
import re

with open('index.html', 'r') as f:
    content = f.read()

# ============== NEW pageLesson16 HTML ==============
new_page_16 = '''<div class="pg" id="pageLesson16">
<div class="top">
  <span class="back" onclick="goHome()">← 返回</span>
  <h2>第16课 · 喝酒聊天</h2>
  <button class="quiz-btn" onclick="toggleQuiz(16)">测验模式</button>
</div>
<div class="content" id="content16">
<div class="sec">📝 台词（点击展开讲解）</div>

<div class="line" data-time-start="29*60+35.815" data-time-end="29*60+38.193">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">1. 아니야, 사양할게 술은 안 마실 거야.</p>
    <button class="speak" onclick="event.stopPropagation();speak('아니야, 사양할게 술은 안 마실 거야.')">🔊</button>
  </div>
  <p class="cn">→ 不，我不喝，我不喝酒。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ No, I'll decline. I'm not going to drink.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">아니야 — 不(No) ｜ 사양하다 — 婉拒(decline) ｜ 술 — 酒(alcohol) ｜ 안 — 不(not) ｜ 마시다 — 喝(drink) ｜ -(으)ㄹ 거야 — 要…(going to)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 술을 마시다 — 喝酒(drink alcohol)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 나는 커피 안 마실 거야 — 我不喝咖啡(I'm not going to drink coffee)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)ㄹ 거야：动词冠词形+(으)ㄹ+거야，表示"将要/打算…"（口语体）。-(으)ㄹ 거예요 是敬语形式。</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 내일 영화 볼 거야 — 明天我要看电影(I'm going to watch a movie tomorrow)</span></div>
    <div class="phon"><b>🎵 音变</b> 사양할게[사양할께] ｜ ㄱ→ㄲ 浓音化 ｜ 마실 거야[마실 꺼야] ｜ ㄱ→ㄲ 浓音化</div>
  </div>
</div>

<div class="line" data-time-start="29*60+39.861" data-time-end="29*60+42.030">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">2. 식사만 하고 바로 일어날 거야.</p>
    <button class="speak" onclick="event.stopPropagation();speak('식사만 하고 바로 일어날 거야.')">🔊</button>
  </div>
  <p class="cn">→ 吃完饭就走。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ I'll just eat and leave right away.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">식사 — 用餐/饭(meal) ｜ -만 — 只(only) ｜ 하다 — 做(do) ｜ 바로 — 马上(right away) ｜ 일어나다 — 起来/离开(get up/leave) ｜ -(으)ㄹ 거야 — 要…(going to)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 식사만 하다 — 只吃饭/吃完就走(just eat)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 집에 가서 바로 잘 거야 — 回家就睡觉(I'll go home and sleep right away)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-만：助词，表示"只/仅"。"식사만" = "只吃饭"。</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 물만 마실게요 — 我只喝水(I'll only drink water)</span></div>
    <div class="phon"><b>🎵 音变</b> 식사만[식싸만] ｜ ㅅ紧音化 ｜ 일어날 거야[이러날 꺼야] ｜ ㄱ→ㄲ + ㄹ连音</div>
  </div>
</div>

<div class="line" data-time-start="29*60+42.113" data-time-end="29*60+43.740">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">3. 어, 신경 써 줘서 고마워.</p>
    <button class="speak" onclick="event.stopPropagation();speak('어, 신경 써 줘서 고마워.')">🔊</button>
  </div>
  <p class="cn">→ 哦，谢谢你的关照。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Oh, thanks for your concern.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">어 — 哦(oh) ｜ 신경 쓰다 — 费心/关心(care about) ｜ -아/어 주다 — 为…做(do for) ｜ -서 — 因为(because) ｜ 고맙다 — 感谢(thankful)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 신경 써 주다 — 费心(show concern)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 도와 줘서 고마워요 — 谢谢你帮我(Thank you for helping me)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-아/어 주다 + -서：表示为某人做某事+原因，"因为为我…所以感谢"。</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 기다려 줘서 고마워요 — 谢谢你等我(Thank you for waiting for me)</span></div>
    <div class="phon"><b>🎵 音变</b> 신경[신경] ｜ 써[써] ｜ 고마워[고마워] ｜ 发音基本不变</div>
  </div>
</div>

<div class="line" data-time-start="29*60+44.783" data-time-end="29*60+45.992">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">4. 그래, 그렇게 할게.</p>
    <button class="speak" onclick="event.stopPropagation();speak('그래, 그렇게 할게.')">🔊</button>
  </div>
  <p class="cn">→ 好吧，我拿走。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Okay, I'll do that.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">그래 — 好的(okay) ｜ 그렇게 — 那样(like that) ｜ 하다 — 做(do) ｜ -(으)ㄹ게 — 我会…(I'll...)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 그렇게 하다 — 那样做(do that way)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 알겠어, 그렇게 할게 — 知道了，我会那么做的(Got it, I'll do that)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)ㄹ게：表意志的终结词尾，"我会…的"，表示对听话人的承诺或约定。</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 내일 전화할게 — 明天我给你打电话(I'll call you tomorrow)</span></div>
    <div class="phon"><b>🎵 音变</b> 할게[할께] ｜ ㄱ→ㄲ 浓音化 ｜ 그래[그래]</div>
  </div>
</div>

<div class="line" data-time-start="29*60+46.993" data-time-end="29*60+48.995">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">5. - 좋은 시간 되세요<br>- 감사합니다</p>
    <button class="speak" onclick="event.stopPropagation();speak('- 좋은 시간 되세요')">🔊</button>
  </div>
  <p class="cn">→ - 祝您用餐愉快<br>- 谢谢</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ - Have a good time<br>- Thank you</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">좋다 — 好(good) ｜ 시간 — 时间(time) ｜ 되다 — 成为(become) ｜ -(으)세요 — 请/祝(敬语) ｜ 감사합니다 — 谢谢(Thank you)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 좋은 시간 되세요 — 祝您愉快(Have a good time)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 좋은 하루 되세요 — 祝您有美好的一天(Have a nice day)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)세요：命令/请求的敬语终结词尾，也可用于祝福。"되세요"来自"되다"+"-(으)세요"。</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 행복하세요 — 祝您幸福(Be happy)</span></div>
    <div class="phon"><b>🎵 音变</b> 시간[시간] ｜ 되세요[되세요] ｜ 감사합니다[감사함니다] ｜ ㅂ→ㅁ 鼻音化</div>
  </div>
</div>

<div class="line" data-time-start="29*60+54.250" data-time-end="29*60+55.668">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">6. 주호진 씨 술 못 마셔요?</p>
    <button class="speak" onclick="event.stopPropagation();speak('주호진 씨 술 못 마셔요?')">🔊</button>
  </div>
  <p class="cn">→ 周浩镇先生不会喝酒吗？</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Mr. Joo Ho-jin, you can't drink?</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">주호진 — 周浩镇(Joo Ho-jin) ｜ 씨 — 先生/小姐(Mr./Ms.) ｜ 술 — 酒(alcohol) ｜ 못 — 不能(cannot) ｜ 마시다 — 喝(drink)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 술 못 마시다 — 不能喝酒(can't drink alcohol)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 매운 거 못 먹어요? — 不能吃辣吗？(Can't eat spicy food?)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">못 + 动词："不能/不会"。"못 마셔요" = "不能喝"。与"안 마셔요(不喝)"不同，못表能力不足或客观不能。</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 오늘은 못 가요 — 今天去不了(I can't go today)</span></div>
    <div class="phon"><b>🎵 音变</b> 못 마셔요[몬 마셔요] ｜ ㅅ+ㅁ → ㄴ 鼻音化</div>
  </div>
</div>

<div class="line" data-time-start="29*60+57.086" data-time-end="29*60+58.463">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">7. 아니요, 잘 마십니다.</p>
    <button class="speak" onclick="event.stopPropagation();speak('아니요, 잘 마십니다.')">🔊</button>
  </div>
  <p class="cn">→ 不，我酒量还不错。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ No, I drink quite well.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">아니요 — 不(No) ｜ 잘 — 好/善于(well) ｜ 마시다 — 喝(drink) ｜ -ㅂ니다 — 敬语正式体陈述语尾</span></div>
    <div class="ex">💬 短语 <span class="c">→ 잘 마시다 — 酒量好/能喝(drink well)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 저는 한국어를 잘 못해요 — 我不太会韩语(I'm not good at Korean)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-ㅂ니다：正式的敬语陈述终结词尾。"마십니다"是"마시다"+"-ㅂ니다"→"마십니다"（시+ㅂ→십）。</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 저는 학생입니다 — 我是学生(I am a student)</span></div>
    <div class="phon"><b>🎵 音变</b> 잘 마십니다[잘 마심니다] ｜ ㅂ+ㄴ → ㅁ 鼻音化</div>
  </div>
</div>

<div class="line" data-time-start="29*60+59.339" data-time-end="30*60+1.800">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">8. 피곤할 텐데 쓸데없이 시간 뺏고 싶지 않아서요.</p>
    <button class="speak" onclick="event.stopPropagation();speak('피곤할 텐데 쓸데없이 시간 뺏고 싶지 않아서요.')">🔊</button>
  </div>
  <p class="cn">→ 你肯定很累了，我不想无谓地耽误你的时间。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ You must be tired, and I don't want to needlessly take up your time.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">피곤하다 — 累(tired) ｜ -(으)ㄹ 텐데 — 应该会…(must be) ｜ 쓸데없이 — 无谓地(needlessly) ｜ 시간 — 时间(time) ｜ 뺏다 — 夺走/占用(take away) ｜ -고 싶다 — 想(want to) ｜ 않다 — 不(not do) ｜ -(아)서 — 因为(because)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 시간을 뺏다 — 占用时间(take up time)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 바쁠 텐데 시간을 뺏고 싶지 않아요 — 你肯定很忙，不想占用你时间(You must be busy, I don't want to take your time)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)ㄹ 텐데：表推测+"…的情况/既然…"。쓸데없이：쓸데(用处)+없이(无)，"无用地/无谓地"。</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 늦을 텐데 먼저 가세요 — 可能会迟到，先走吧(It might be late, go ahead)</span></div>
    <div class="phon"><b>🎵 音变</b> 피곤할[피곤할] ｜ 텐데[텐데] ｜ 뺏고[빼꼬] ｜ ㅆ+ㄱ → ㄲ 紧音化 ｜ 싶지[십찌] ｜ ㅂ+ㅈ → ㅉ 紧音化</div>
  </div>
</div>

<div class="line" data-time-start="30*60+2.342" data-time-end="30*60+4.844">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">9. 내가 하려는 말은 식사하면서 듣기에도 충분합니다.</p>
    <button class="speak" onclick="event.stopPropagation();speak('내가 하려는 말은 식사하면서 듣기에도 충분합니다.')">🔊</button>
  </div>
  <p class="cn">→ 我要说的话，边吃饭边听也足够了。</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ What I have to say is enough to be heard over the meal.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">내가 — 我(I) ｜ 하다 — 做/说(do/say) ｜ -(으)려는 — 打算…的(going to) ｜ 말 — 话(words) ｜ 식사하다 — 吃饭(eat) ｜ -(으)면서 — 一边…一边(while) ｜ 듣다 — 听(listen) ｜ -기에 — …来说(for/to) ｜ -도 — 也(also) ｜ 충분하다 — 足够(enough)</span></div>
    <div class="ex">💬 短语 <span class="c">→ 식사하면서 듣다 — 边吃饭边听(listen while eating)</span></div>
    <div class="ex">💬 造句 <span class="c">→ 일하면서 음악을 들어요 — 边工作边听音乐(I listen to music while working)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)려는：表意图的冠词形"打算…的"。(으)면서：连接词尾"一边…一边"。듣기에도：듣다+기에(以…来说)+도(也)。</span></div>
    <div class="ex">💬 语法例句 <span class="c">→ 제가 하려는 말은 간단해요 — 我想说的话很简单(What I want to say is simple)</span></div>
    <div class="phon"><b>🎵 音变</b> 하려는[하려는] ｜ 식사하면서[식싸하면서] ｜ 충분합니다[충분함니다] ｜ ㅂ→ㅁ 鼻音化</div>
  </div>
</div>

<div class="sec">💡 小贴士</div>
<p class="tip">✨ 本课重点：① -(으)ㄹ 거야：表打算"要…" ② -만：只/仅 ③ -(으)ㄹ게：表意志"会…的" ④ 못 + 动词：不能/不会 ⑤ -(으)ㄹ 텐데：推测"应该会…" ⑥ -(으)면서：一边…一边 ⑦ -(으)려는：打算…的</p>

<div class="sec" onclick="toggleVocab(this)" style="cursor:pointer;user-select:none">
<span style="display:inline-block;transition:transform .2s">▶</span> 📌 单词
</div>
<div id="vocab16" style="display:none">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 20px;margin:8px 0">
<div style="font-size:13px;padding:3px 0"><b>아니야</b> — 不/不是(No)</div>
<div style="font-size:13px;padding:3px 0"><b>사양하다</b> — 婉拒(decline politely)</div>
<div style="font-size:13px;padding:3px 0"><b>술</b> — 酒(alcohol)</div>
<div style="font-size:13px;padding:3px 0"><b>마시다</b> — 喝(drink)</div>
<div style="font-size:13px;padding:3px 0"><b>식사</b> — 餐/饭(meal)</div>
<div style="font-size:13px;padding:3px 0"><b>일어나다</b> — 起来/离开(get up)</div>
<div style="font-size:13px;padding:3px 0"><b>신경 쓰다</b> — 费心(care about)</div>
<div style="font-size:13px;padding:3px 0"><b>그렇게</b> — 那样(like that)</div>
<div style="font-size:13px;padding:3px 0"><b>좋은 시간 되세요</b> — 祝您愉快(Have a good time)</div>
<div style="font-size:13px;padding:3px 0"><b>감사합니다</b> — 谢谢(Thank you)</div>
<div style="font-size:13px;padding:3px 0"><b>못 마시다</b> — 不能喝(can't drink)</div>
<div style="font-size:13px;padding:3px 0"><b>잘 마시다</b> — 酒量好(drink well)</div>
<div style="font-size:13px;padding:3px 0"><b>피곤하다</b> — 累(tired/fatigued)</div>
<div style="font-size:13px;padding:3px 0"><b>쓸데없이</b> — 无谓地(needlessly)</div>
<div style="font-size:13px;padding:3px 0"><b>시간</b> — 时间(time)</div>
<div style="font-size:13px;padding:3px 0"><b>뺏다</b> — 夺走(take away/steal)</div>
<div style="font-size:13px;padding:3px 0"><b>충분하다</b> — 足够(enough/sufficient)</div>
</div>
</div>

<div class="sec" onclick="toggleGrammar(this)" style="cursor:pointer;user-select:none">
<span style="display:inline-block;transition:transform .2s">▶</span> 📖 语法总结
</div>
<div id="grammar16" style="display:none">
<div style="margin:8px 0">
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>① -(으)ㄹ 거야</b>
<div style="font-size:13px;color:#555;margin:2px 0">表"将要/打算…"。口语体，用于非正式场合。敬语形为 -(으)ㄹ 거예요。</div>
<div style="font-size:12px;color:#888">→ 내일 영화 볼 거야 (明天我要看电影)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>② -만</b>
<div style="font-size:13px;color:#555;margin:2px 0">助词，"只/仅"，附在名词后。</div>
<div style="font-size:12px;color:#888">→ 물만 마실게요 (我只喝水)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>③ -(으)ㄹ게</b>
<div style="font-size:13px;color:#555;margin:2px 0">表意志"我会…的"，对听话人的承诺或约定。</div>
<div style="font-size:12px;color:#888">→ 내일 전화할게 (明天我给你打电话)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>④ 못 + 动词</b>
<div style="font-size:13px;color:#555;margin:2px 0">否定能力，"不能/不会"，表示能力不足或客观条件限制。</div>
<div style="font-size:12px;color:#888">→ 오늘은 못 가요 (今天去不了)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>⑤ -(으)ㄹ 텐데</b>
<div style="font-size:13px;color:#555;margin:2px 0">表推测+"…的情况下"，"应该会…所以…"。</div>
<div style="font-size:12px;color:#888">→ 늦을 텐데 빨리 가요 (要迟到了，快走吧)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>⑥ -(으)면서</b>
<div style="font-size:13px;color:#555;margin:2px 0">连接词尾"一边…一边"。</div>
<div style="font-size:12px;color:#888">→ 식사하면서 얘기해요 (边吃边说)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>⑦ -(으)려는</b>
<div style="font-size:13px;color:#555;margin:2px 0">表意图的冠词形"打算…的/想要…的"。</div>
<div style="font-size:12px;color:#888">→ 제가 하려는 말은… (我想说的话…)</div>
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

<button class="done-toggle" data-lesson="16" onclick="toggleDone(16)">✓ 已完成学习</button>
<div class="sec">✏️ 笔记</div>
<textarea class="note-box" data-note="16" placeholder="在此输入笔记..."></textarea>
<span class="note-status" id="noteStatus16">✓ 已保存</span>
<button class="speak-practice-toggle" onclick="startPractice(16)">🎤 口语练习</button>
</div></div>'''

# ============== NEW LESSONS entry ==============
new_lessons_entry = '''  16:{title:'第16课 · 喝酒聊天',video:'https://korean-video-1433876150.cos.ap-guangzhou.myqcloud.com/media/korean_course/videos/scene16_drink.mp4',
    vocab:[['아니야','不/不是(No)'],['사양하다','婉拒(decline politely)'],['술','酒(alcohol)'],['마시다','喝(drink)'],['식사','用餐/饭(meal)'],['일어나다','起来/离开(get up/leave)'],['신경 쓰다','费心/关心(care about)'],['그렇게','那样(like that/in that way)'],['좋은 시간 되세요','祝您度过美好时光(Have a good time)'],['감사합니다','谢谢(Thank you)'],['못 마시다','不能喝(can\'t drink)'],['잘 마시다','酒量好/能喝(drink well)'],['피곤하다','累(tired)'],['쓸데없이','无谓地(needlessly)'],['시간','时间(time)'],['뺏다','夺走(take away/waste)'],['충분하다','足够(enough/sufficient)']],
    lines:['아니야, 사양할게 술은 안 마실 거야.','식사만 하고 바로 일어날 거야.','어, 신경 써 줘서 고마워.','그래, 그렇게 할게.','좋은 시간 되세요','주호진 씨 술 못 마셔요?','아니요, 잘 마십니다.','피곤할 텐데 쓸데없이 시간 뺏고 싶지 않아서요.','내가 하려는 말은 식사하면서 듣기에도 충분합니다.']},
};



/* ---------- 页面导航 ---------- '''

# ============== NEW LESSON_TIMES entry ==============
new_times_entry = '''  16:[
    {start:1795.815,end:1798.193},
    {start:1799.861,end:1802.030},
    {start:1802.113,end:1803.740},
    {start:1804.783,end:1805.992},
    {start:1806.993,end:1808.995},
    {start:1814.250,end:1815.668},
    {start:1817.086,end:1818.463},
    {start:1819.339,end:1821.800},
    {start:1822.342,end:1824.844},
  ],'''

# STEP 1: Replace pageLesson16 HTML block
# Find the old block
old_start = '<div class="pg" id="pageLesson16">'
old_end = '</div></div>\n<div id="practiceModal"'

# Find the position
start_pos = content.find(old_start)
end_pos = content.find(old_end, start_pos)

if start_pos >= 0 and end_pos >= 0:
    # Replace the block, preserving the </div></div> and practiceModal
    new_content = content[:start_pos] + new_page_16 + content[end_pos:]
    print(f"STEP 1: Replaced pageLesson16 (bytes {start_pos}-{end_pos+len('</div></div>')})")
    content = new_content
else:
    print(f"ERROR: Could not find pageLesson16 block. start={start_pos}, end={end_pos}")
    exit(1)

# STEP 2: Replace LESSONS data entry for lesson 16
old_lesson_entry_start = '  16:{title:\'第16课 · 喝酒聊天\''
old_lesson_entry_end = '},\n\n\n\n/* ---------- 页面导航 ---------- '

start_pos = content.find(old_lesson_entry_start)
end_pos = content.find(old_lesson_entry_end, start_pos)

if start_pos >= 0 and end_pos >= 0:
    new_content = content[:start_pos] + new_lessons_entry + content[end_pos+len(old_lesson_entry_end):]
    print(f"STEP 2: Replaced LESSONS entry (bytes {start_pos}-{end_pos})")
    content = new_content
else:
    print(f"WARNING: Could not find old LESSONS entry using marker. Trying partial match...")
    # Try alternate markers
    old_lesson_entry_start = '16:{title:\'第16课 · 喝酒聊天\''
    start_pos = content.find(old_lesson_entry_start)
    if start_pos >= 0:
        end_pos = content.find('};\n\n\n/* ---------- 页面导航 ---------- ', start_pos)
        if end_pos < 0:
            end_pos = content.find('};\n\n\n/* ---------- 页面导航', start_pos)
        if end_pos >= 0:
            new_content = content[:start_pos] + new_lessons_entry + content[end_pos+len('};\n\n\n/* ---------- 页面导航 '):]
            print(f"STEP 2: Replaced LESSONS entry (alt-marker)")
            content = new_content
        else:
            print("ERROR: Could not find end of LESSONS entry")
            exit(1)
    else:
        print("ERROR: Could not find LESSONS entry at all")
        exit(1)

# STEP 3: Replace LESSON_TIMES data entry for lesson 16
old_times_start = '  16:[\n    {start:0,end:3},'
old_times_end = '  ],\n};\nfunction setupSyncActiveLine'

start_pos = content.find(old_times_start)
end_pos = content.find(old_times_end, start_pos)

if start_pos >= 0 and end_pos >= 0:
    new_content = content[:start_pos] + new_times_entry + content[end_pos+len(old_times_end):]
    print(f"STEP 3: Replaced LESSON_TIMES entry (bytes {start_pos}-{end_pos})")
    content = new_content
else:
    # Try alternate
    old_times_start = '16:[\n    {start:0,end:3}'
    start_pos = content.find(old_times_start)
    if start_pos >= 0:
        end_pos = content.find('];\n};\nfunction setupSyncActiveLine', start_pos)
        if end_pos >= 0:
            new_content = content[:start_pos] + new_times_entry + content[end_pos+len('];\n};\nfunction setupSyncActiveLine'):]
            print(f"STEP 3: Replaced LESSON_TIMES entry (alt-marker)")
            content = new_content
        else:
            print("ERROR: Could not find end of LESSON_TIMES entry")
            exit(1)
    else:
        print("ERROR: Could not find LESSON_TIMES entry")
        exit(1)

# Write the result
with open('index.html', 'w') as f:
    f.write(content)

print("\nDone! All 3 replacements completed.")
print(f"Final file size: {len(content)} bytes")
PYEOF

echo "Injection script completed"
