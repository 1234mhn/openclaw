#!/usr/bin/env node
/**
 * Inject Lesson 23 into ep3.html and update index.html
 * Run: node inject_lesson23.mjs
 * 
 * Episode 3, Time: 46:31 ~ 47:21 (2791s - 2841s)
 * Scene: Seung-min apologizes to the female lead in a cafe
 * Characters: Seung-min (주호진), female lead (차무희)
 */
import { readFileSync, writeFileSync, existsSync, copyFileSync } from 'fs';
import { resolve } from 'path';

const DIR = resolve(import.meta.dirname, '.');
const EP3 = resolve(DIR, 'ep3.html');
const INDEX = resolve(DIR, 'index.html');

// Lesson 23 content page HTML
const LESSON_PAGE = `<!-- ===== 第23课 ===== -->
<div class="pg" id="pageLesson23">
<div class="top">
  <span class="back" onclick="goHome()">← 返回</span>
  <h2>第23课 · 道歉与和解</h2>
  <button class="quiz-btn" onclick="toggleQuiz(23)">测验模式</button>
</div>
<div class="content" id="content23">

<div class="sec">📝 台词（点击展开讲解）</div>

<div class="line" data-time-start="2796.763" data-time-end="2797.805">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">1. 앉으세요</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'앉으세요')">🔊</button>
  </div>
  <p class="cn">→ 请坐</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Please sit down</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">앉다 — 坐(sit) ｜ -으세요 — 请(尊敬命令语尾)</span></div>
    <div class="ex">💬 短语 <span class="c">여기 앉으세요 → 请坐这里 (Please sit here)</span></div>
    <div class="ex">💬 造句 <span class="c">소파에 앉으세요 → 请坐沙发 (Please sit on the sofa)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)세요 尊敬命令语尾：动词词干有收音用-으세요，无收音用-세요。앉다(有收音)→앉으세요</span></div>
    <div class="ex">💬 语法例句 <span class="c">문을 열어 주세요 → 请开门 (Please open the door)</span></div>
    <div class="phon"><b>🎵 音变</b> 앉으세요 → [안즈세요] (ㄴ添加：收音ㅈ在ㅇ前变为ㄷ→连音化时变成ㄴ音位 → 实际发音[안즈세요]，ㅈ变成ㅅ后面的浊化)</div>
  </div>
</div>

<div class="line" data-time-start="2798.347" data-time-end="2800.683">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">2. 집으로 찾아가기는 좀 스토커 같아서</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'집으로 찾아가기는 좀 스토커 같아서')">🔊</button>
  </div>
  <p class="cn">→ 直接去你家找你，有点像个跟踪狂</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Going to your house would be a bit stalker-ish</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">집 — 家 ｜ -(으)로 — 往/向 ｜ 찾아가다 — 去找(finder/visit) ｜ 스토커 — 跟踪狂(stalker) ｜ 같다 — 像</span></div>
    <div class="ex">💬 短语 <span class="c">사무실로 찾아가다 → 去办公室找 (go find at the office)</span></div>
    <div class="ex">💬 造句 <span class="c">이러는 게 좀 바보 같아서 → 这样有点像个傻瓜 (This seems a bit foolish)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-기는 名词化语尾「…这件事/做…」，将动词变成名词形式，用于表达对比或强调 | -같아서「好像…所以」，表推测/比喻+原因连接</span></div>
    <div class="ex">💬 语法例句 <span class="c">직접 말하기는 좀 부끄러워서 → 直接说有点不好意思 (Speaking directly is a bit embarrassing)</span></div>
    <div class="phon"><b>🎵 音变</b> 찾아가기는 → [차자가기는] (连音化：收音ㅊ移到后面与아连读) | 스토커 → [스토커] (外来语) | 같아서 → [가타서] (送气化：ㄱ+ㅎ→ㅋ, 但这里是ㅂ+ㅎ×, 实际같아서 → [가타서] ㅌ送气)</div>
  </div>
</div>

<div class="line" data-time-start="2800.767" data-time-end="2801.851">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">3. 여기서 보자고 했어요</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'여기서 보자고 했어요')">🔊</button>
  </div>
  <p class="cn">→ 所以约在这里见面</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ So I asked to meet here</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">여기 — 这里 ｜ -서 — 在 ｜ 보다 — 见面/看 ｜ -자고 하다 — 说一起…/提议</span></div>
    <div class="ex">💬 短语 <span class="c">내일 보자고 했어요 → 说了明天见面 (said let's meet tomorrow)</span></div>
    <div class="ex">💬 造句 <span class="c">같이 가자고 했어요 → 说了要一起去 (said let's go together)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-자고 하다 间接引语(共动句)「说一起做…/提议做…」，보자→보자고「说见面吧」。共动句终结形-자 + -고 하다→-자고 하다</span></div>
    <div class="ex">💬 语法例句 <span class="c">점심 같이 먹자고 했어요 → 说一起吃午饭吧 (said let's have lunch together)</span></div>
    <div class="phon"><b>🎵 音变</b> 보자고 → [보자고] (无特殊) | 했어요 → [해써요] (连音化：ㅆ移到后面与어连读)</div>
  </div>
</div>

<div class="line" data-time-start="2812.236" data-time-end="2813.446">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">4. 그날 다 봤죠?</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'그날 다 봤죠?')">🔊</button>
  </div>
  <p class="cn">→ 那天都看到了吧？</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ You saw everything that day, right?</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">그날 — 那天 ｜ 다 — 全部 ｜ 보다 — 看/看到 ｜ -죠? — …吧？(确认语气)</span></div>
    <div class="ex">💬 短语 <span class="c">그날 무슨 일이 있었어요? → 那天发生了什么事？ (What happened that day?)</span></div>
    <div class="ex">💬 造句 <span class="c">내 말 다 들었죠? → 我的话都听到了吧？ (You heard everything I said, right?)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-았/었죠? (= -았/었지요?) 过去时+确认反问「…了吧？」用于已发生事件的确认，期待对方同意</span></div>
    <div class="ex">💬 语法例句 <span class="c">어제 그 영화 봤죠? → 昨天那部电影看了吧？ (You watched that movie yesterday, right?)</span></div>
    <div class="phon"><b>🎵 音变</b> 봤죠 → [봍쬬] (紧音化：죠的ㅈ变为紧音ㅉ，前面ㅆ作为收音变为대표음ㄷ)，实际近似[봍쬬]</div>
  </div>
</div>

<div class="line" data-time-start="2813.946" data-time-end="2815.198">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">5. 나 자폭한 거</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'나 자폭한 거')">🔊</button>
  </div>
  <p class="cn">→ 我自爆的样子</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ My self-destruction (meltdown)</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">나 — 我(半语) ｜ 자폭하다 — 自爆(self-destruct/self-sabotage) ｜ -ㄴ 거 — …的事(名词化)</span></div>
    <div class="ex">💬 短语 <span class="c">내가 한 실수 → 我犯的错 (the mistake I made)</span></div>
    <div class="ex">💬 造句 <span class="c">내가 혼자 망친 거야 → 是我自己搞砸的 (I ruined it all by myself)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-ㄴ/은 거 口语名词化「…的事/…的」。过去冠形词尾 -ㄴ + 의존명사 것(缩略为거)。省略了본(본 거→본 거)表「看到的…」或「…的那个场景」</span></div>
    <div class="ex">💬 语法例句 <span class="c">네가 한 말은 다 기억해 → 你说的话我都记得 (I remember everything you said)</span></div>
    <div class="phon"><b>🎵 音变</b> 자폭한 → [자포칸] (送气化：폭的收音ㄱ+ㅎ→ㅋ, 但这里ㄱ在ㅎ前ㄱ不变，实际자+폭한→[자포칸]连音) | 거 → [거]</div>
  </div>
</div>

<div class="line" data-time-start="2818.367" data-time-end="2820.787">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">6. 제작진한테서 이제 연락이 없어요</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'제작진한테서 이제 연락이 없어요')">🔊</button>
  </div>
  <p class="cn">→ 制作组那边再也没有消息了</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ I haven't heard from the production team anymore</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">제작진 — 制作组(production team) ｜ 한테서 — 从…那里(from) ｜ 이제 — 现在/已经 ｜ 연락 — 联系(contact) ｜ 없다 — 没有</span></div>
    <div class="ex">💬 短语 <span class="c">친구한테서 연락이 왔어요 → 朋友联系我了 (got a call from a friend)</span></div>
    <div class="ex">💬 造句 <span class="c">회사에서 아직 연락이 없어요 → 公司那边还没有联系 (Still no word from the company)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-한테서 「从…那里」，口语中表来源/出处。敬语形式为-에게서 | 연락이 없다「没有联系」，主格助词-이标记联系的「主体」</span></div>
    <div class="ex">💬 语法例句 <span class="c">어머니한테서 편지가 왔어요 → 妈妈来信了 (Received a letter from mother)</span></div>
    <div class="phon"><b>🎵 音变</b> 연락이 → [열라기] (连音化：收音ㄱ移到后面与이连读，中间的ㄴ+ㄹ→[ㄹ+ㄹ] ㄴㄹ→ㄹㄹ) | 없어요 → [업써요] (连音化：ㅆ移到后面与어连读)</div>
  </div>
</div>

<div class="line" data-time-start="2821.746" data-time-end="2823.956">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">7. 나 완전 날아간 거 같아요</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'나 완전 날아간 거 같아요')">🔊</button>
  </div>
  <p class="cn">→ 我感觉我完全完蛋了</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ I think I'm completely done for</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">나 — 我 ｜ 완전 — 完全(completely) ｜ 날아가다 — 飞走/完蛋(be done for) ｜ 같다 — 好像/像</span></div>
    <div class="ex">💬 短语 <span class="c">완전 망한 거 같아요 → 感觉完全搞砸了 (I think I completely messed up)</span></div>
    <div class="ex">💬 造句 <span class="c">내 인생 끝난 거 같아요 → 感觉我的人生完了 (I feel like my life is over)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-ㄴ/은 거 같다「好像…了/感觉…」，表主观推测/判断。过去时-ㄴ 것 같다(好像已经…了) | 날아가다字面「飞走」→俚语「完蛋/被抛弃」</span></div>
    <div class="ex">💬 语法例句 <span class="c">약속을 까먹은 거 같아요 → 好像忘了约定 (I think I forgot the appointment)</span></div>
    <div class="phon"><b>🎵 音变</b> 날아간 → [나라간] (连音化：收音ㄹ移到后面与아连读) | 같아요 → [가타요] (送气化：ㅌ+ㅎ→ㅌ, 实际는相同，因为같의 ㅌ在아前送气化为[가타요])</div>
  </div>
</div>

<div class="line" data-time-start="2826.751" data-time-end="2828.920">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">8. 그날은 내가 말이 좀 심했어요</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'그날은 내가 말이 좀 심했어요')">🔊</button>
  </div>
  <p class="cn">→ 那天我说话有点过分了</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ I was a bit harsh that day</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">그날 — 那天 ｜ 내가 — 我(主格) ｜ 말 — 话/说话 ｜ 좀 — 有点 ｜ 심하다 — 过分/严重</span></div>
    <div class="ex">💬 短语 <span class="c">말이 심하다 → 说话过分 (speak harshly/be blunt)</span></div>
    <div class="ex">💬 造句 <span class="c">어제 내가 너무 심했어요 → 昨天我太过分了 (I was too harsh yesterday)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-았/었다 过去时终结：심하다→심했다「过分了/严重了」。심하다可用于形容语言、行为、处罚等的过分程度</span></div>
    <div class="ex">💬 语法例句 <span class="c">벌이 좀 심한 거 아니에요? → 惩罚是不是有点过分了？ (Isn't the punishment a bit too harsh?)</span></div>
    <div class="phon"><b>🎵 音变</b> 심했어요 → [시매써요] (ㅎ弱化：하中的ㅎ在元音间脱落，하→애→[애])</div>
  </div>
</div>

<div class="line" data-time-start="2830.755" data-time-end="2831.839">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">9. 아니에요</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'아니에요')">🔊</button>
  </div>
  <p class="cn">→ 没有 / 不会啊</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ No, not at all</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">아니에요 — 不是的(否定应答敬语)</span></div>
    <div class="ex">💬 短语 <span class="c">괜찮아요 → 没关系 (It's okay / No problem)</span></div>
    <div class="ex">💬 造句 <span class="c">아니에요, 제가 잘못했어요 → 不是的，是我错了 (No, it was my fault)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">아니에요 否定句「不是…」，아니다(不/不是)的敬语体终结形。名词谓语句的否定形式：名词+이/가 아니에요</span></div>
    <div class="ex">💬 语法例句 <span class="c">그건 사실이 아니에요 → 那不是事实 (That's not true)</span></div>
    <div class="phon"><b>🎵 音变</b> 아니에요 → [아니에요] (标准发音，无特殊音变)</div>
  </div>
</div>

<div class="line" data-time-start="2831.923" data-time-end="2833.883">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">10. 미쳐서 선을 넘은 건 나죠</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'미쳐서 선을 넘은 건 나죠')">🔊</button>
  </div>
  <p class="cn">→ 是我发疯越界了</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ I was the one who went crazy and crossed the line</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">미치다 — 疯(go crazy) ｜ 선 — 线/界线(line) ｜ 넘다 — 越/超过(cross) ｜ -ㄴ 건 — …的事(the thing that)</span></div>
    <div class="ex">💬 短语 <span class="c">선을 넘다 → 越界/过分 (cross the line)</span></div>
    <div class="ex">💬 造句 <span class="c">장난이 선을 넘었어요 → 玩笑开过头了 (The joke crossed the line)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-아/어서 原因连接「因为…而/以…的方式」| -ㄴ 것은 名词化「…的事是」+ 나죠「是我吧」| 미치+어서→미쳐서(元音缩合) | 건 = 것은缩略 | 나죠 = 나(我)+이죠(是…吧)</span></div>
    <div class="ex">💬 语法例句 <span class="c">늦어서 미안한 건 나예요 → 该道歉的是我 (I'm the one who should apologize for being late)</span></div>
    <div class="phon"><b>🎵 音变</b> 미쳐서 → [미쳐서] (元音缩合：치+어→쳐) | 넘은 → [너믄] (连音化) | 나죠 → [나죠]</div>
  </div>
</div>

<div class="line" data-time-start="2837.595" data-time-end="2838.596">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">11. 미안해요</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'미안해요')">🔊</button>
  </div>
  <p class="cn">→ 对不起</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ I'm sorry</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">미안하다 — 抱歉(sorry) ｜ -해요 — 尊敬体终结</span></div>
    <div class="ex">💬 短语 <span class="c">정말 미안해요 → 真的很抱歉 (I'm really sorry)</span></div>
    <div class="ex">💬 造句 <span class="c">기다리게 해서 미안해요 → 抱歉让你等了 (Sorry for keeping you waiting)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">미안하다 形容词+하다→해요 表状态的敬语体。미안하다可直接终结表道歉，比죄송합니다更口语化</span></div>
    <div class="ex">💬 语法例句 <span class="c">죄송합니다 → 对不起(更正式) (I apologize)</span></div>
    <div class="phon"><b>🎵 音变</b> 미안해요 → [미아내요] (ㅎ弱化：하中的ㅎ在元音间脱落，하→[아]→连读为[미아내요])</div>
  </div>
</div>

<div class="line" data-time-start="2839.180" data-time-end="2841.849">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">12. 신지선 피디 얘기는 입에 올릴 말이 아니었는데</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'신지선 피디 얘기는 입에 올릴 말이 아니었는데')">🔊</button>
  </div>
  <p class="cn">→ 申智善导演的事，我不应该说的</p>
  <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ I shouldn't have brought up PD Shin Ji-sun</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">신지선 — 申智善(人名) ｜ 피디 — PD/节目导演 ｜ 얘기 — 话/事情 ｜ 입 — 嘴 ｜ 올리다 — 提/放(提升) ｜ 말 — 话 ｜ 아니다 — 不是</span></div>
    <div class="ex">💬 短语 <span class="c">입에 올리다 → 提起/说起 (bring up/mention)</span></div>
    <div class="ex">💬 造句 <span class="c">그 얘기는 입에 올리면 안 돼요 → 那件事不该提 (That topic shouldn't be mentioned)</span></div>
    <div class="item"><b>📌语法</b> <span class="m">-(으)ㄹ 말이 아니었다「不应该说的话」，말이다「是话/是事」的否定过去 | -는데 背景说明「…的/…呢」，此处作句中连接或委婉终结</span></div>
    <div class="ex">💬 语法例句 <span class="c">그건 네가 할 말이 아니야 → 那不是你该说的话 (That's not something you should say)</span></div>
    <div class="phon"><b>🎵 音变</b> 얘기는 → [얘기는] | 올릴 → [올릴] | 아니었는데 → [아니언는데] (连音化：ㅆ的收音变为ㄴ，元音아니+었→아니었)</div>
  </div>
</div>

<div class="sec">💡 小贴士</div>
<p class="tip">✨ 本课重点：① 앉다→앉으세요(敬语命令形) ② -자고 하다(共动引语「说一起做」) ③ 선을 넘다(越界/过分) ④ -ㄴ/은 거 같다(主观推测「好像…了」) ⑤ 입에 올리다(提起/说起) ⑥ 미안하다(道歉) vs 죄송합니다(正式道歉)</p>

<div class="sec" onclick="toggleVocab(this)" style="cursor:pointer;user-select:none">
<span style="display:inline-block;transition:transform .2s">▶</span> 📌 单词
</div>
<div id="vocab23" style="display:none">
<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 20px;margin:8px 0">
<div style="font-size:13px;padding:3px 0"><b>앉다</b> — 坐(sit)</div>
<div style="font-size:13px;padding:3px 0"><b>찾아가다</b> — 去找(finder/visit)</div>
<div style="font-size:13px;padding:3px 0"><b>스토커</b> — 跟踪狂(stalker)</div>
<div style="font-size:13px;padding:3px 0"><b>자폭하다</b> — 自爆(self-destruct)</div>
<div style="font-size:13px;padding:3px 0"><b>제작진</b> — 制作组(production team)</div>
<div style="font-size:13px;padding:3px 0"><b>연락</b> — 联系(contact)</div>
<div style="font-size:13px;padding:3px 0"><b>날아가다</b> — 飞走/完蛋(be done for)</div>
<div style="font-size:13px;padding:3px 0"><b>심하다</b> — 过分/严重(harsh)</div>
<div style="font-size:13px;padding:3px 0"><b>미치다</b> — 发疯(go crazy)</div>
<div style="font-size:13px;padding:3px 0"><b>선</b> — 线/界线(line)</div>
<div style="font-size:13px;padding:3px 0"><b>넘다</b> — 超越(cross/over)</div>
<div style="font-size:13px;padding:3px 0"><b>미안하다</b> — 抱歉(sorry)</div>
<div style="font-size:13px;padding:3px 0"><b>피디(PD)</b> — 导演(program director)</div>
<div style="font-size:13px;padding:3px 0"><b>올리다</b> — 提起/放(raise/put up)</div>
</div>
</div>

<div class="sec" onclick="toggleGrammar(this)" style="cursor:pointer;user-select:none">
<span style="display:inline-block;transition:transform .2s">▶</span> 📖 语法总结
</div>
<div id="grammar23" style="display:none">
<div style="margin:8px 0">
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>① -(으)세요 敬语命令形</b>
<div style="font-size:13px;color:#555;margin:2px 0">动词词干有收音+으세요 / 无收音+세요。如：앉다→앉으세요「请坐」</div>
<div style="font-size:12px;color:#888">→ 문을 닫으세요 → 请关门 (Please close the door)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>② -자고 하다 共动引语「提议/说一起做」</b>
<div style="font-size:13px;color:#555;margin:2px 0">动词+자고 하다，表达「说一起做…」。共动句终结形-자 + -고 하다 = -자고 하다</div>
<div style="font-size:12px;color:#888">→ 같이 가자고 했어요 → 说了要一起去 (Said let's go together)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>③ 선을 넘다 「越界/过分」</b>
<div style="font-size:13px;color:#555;margin:2px 0">惯用搭配：선「线/界线」+ 을 넘다「越过」→ 比喻言行超出可接受范围</div>
<div style="font-size:12px;color:#888">→ 농담이 선을 넘었어요 → 玩笑开过头了 (The joke crossed the line)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>④ -ㄴ/은 거 같다 主观推测「好像…了」</b>
<div style="font-size:13px;color:#555;margin:2px 0">过去冠形词尾-ㄴ/은 + 거(것) + 같다「好像…」。表基于事实的主观判断</div>
<div style="font-size:12px;color:#888">→ 약속을 잊은 거 같아요 → 好像忘了约定 (I think I forgot the appointment)</div>
</div>
<div style="background:#f0f4ff;padding:10px 14px;border-radius:8px;margin:4px 0;border-left:3px solid #3498db">
<b>⑤ 입에 올리다 「提起/说起」</b>
<div style="font-size:13px;color:#555;margin:2px 0">입「嘴」+ 에「在」+ 올리다「放上」→ 字面「放上嘴边」→「提起某事」</div>
<div style="font-size:12px;color:#888">→ 그 얘기는 입에 올리면 안 돼요 → 那件事不该提 (That shouldn't be mentioned)</div>
</div>
</div>
</div>

<button class="done-toggle" data-lesson="23" onclick="toggleDone(23)">✓ 已完成学习</button>
<div class="sec">✏️ 笔记</div>
<textarea class="note-box" data-note="23" placeholder="在此输入笔记..."></textarea>
<span class="note-status" id="noteStatus23">✓ 已保存</span>
<button class="speak-practice-toggle" onclick="startPractice(23)">🎤 口语练习</button>
</div></div>`;

// ====== Main injection ======
function main() {
  console.log('=== Injecting Lesson 23 ===');

  // 1. Backup ep3.html
  if (!existsSync(EP3)) {
    console.error('ERROR: ep3.html not found at', EP3);
    process.exit(1);
  }
  const ep3Bak = EP3.replace('.html', `_backup_${new Date().toISOString().slice(0,10).replace(/-/g,'')}.html`);
  copyFileSync(EP3, ep3Bak);
  console.log(`Backup saved: ${ep3Bak}`);

  // 2. Backup index.html
  if (existsSync(INDEX)) {
    const idxBak = INDEX.replace('.html', `_backup_${new Date().toISOString().slice(0,10).replace(/-/g,'')}.html`);
    copyFileSync(INDEX, idxBak);
    console.log(`Index backup saved: ${idxBak}`);
  }

  // 3. Read current files
  let ep3 = readFileSync(EP3, 'utf-8');
  
  // 4. Inject lesson 23 page right before </body> and after pageLesson22
  // Find the end of pageLesson22 and insert lesson 23 before </body>
  const bodyClose = '</body>';
  const lastPgClose = '</div>\n\n</div>\n\n<script>';
  
  // Insert before the <script> block (right before the closing divs that close the pg divs)
  const scriptIndex = ep3.lastIndexOf('<script>');
  
  if (scriptIndex === -1) {
    console.error('ERROR: Could not find <script> tag in ep3.html');
    process.exit(1);
  }
  
  // Find the end of the last content page before <script>
  // We need to find the last </div></div> before <script>
  const beforeScript = ep3.substring(0, scriptIndex);
  const afterScript = ep3.substring(scriptIndex);
  
  // Insert lesson 23 page before the script tag
  ep3 = beforeScript + '\n' + LESSON_PAGE + '\n' + afterScript;

  // 5. Update LESSONS and LESSON_TIMES
  // First update TOTAL_LESSONS
  ep3 = ep3.replace(
    /var TOTAL_LESSONS=\d+,UNLOCKED=\[(\d+(,\d+)*)?\]/,
    `var TOTAL_LESSONS=3,UNLOCKED=[23]`
  );

  // 6. Add LESSONS[23]
  // Find the closing of LESSONS block
  const lessonsEnd = ep3.lastIndexOf('};');
  const lessonsInsert = lessonsEnd > -1 ? lessonsEnd : ep3.indexOf('var LESSON_TIMES');
  
  const LESSONS_DATA = `\nLESSONS[23]={
  title:'第23课 · 道歉与和解',
  video:'videos/ep03_l23.mp4',
  vocab:[
    ['앉다','坐 (sit)'],
    ['찾아가다','去找 (go find)'],
    ['스토커','跟踪狂 (stalker)'],
    ['자폭하다','自爆 (self-destruct)'],
    ['제작진','制作组 (production team)'],
    ['연락','联系 (contact)'],
    ['날아가다','完蛋 (be done for)'],
    ['심하다','过分/严重 (harsh)'],
    ['미치다','发疯 (go crazy)'],
    ['선을 넘다','越界 (cross the line)'],
    ['미안하다','抱歉 (sorry)'],
    ['피디(PD)','导演 (program director)'],
    ['올리다','提起/放 (raise/mention)']
  ],
  lines:[
    '앉으세요',
    '집으로 찾아가기는 좀 스토커 같아서',
    '여기서 보자고 했어요',
    '그날 다 봤죠?',
    '나 자폭한 거',
    '제작진한테서 이제 연락이 없어요',
    '나 완전 날아간 거 같아요',
    '그날은 내가 말이 좀 심했어요',
    '아니에요',
    '미쳐서 선을 넘은 건 나죠',
    '미안해요',
    '신지선 피디 얘기는 입에 올릴 말이 아니었는데'
  ],
  subtitle:''
};`;

  // Insert LESSONS[23] before the closing };
  const lessonsOpenEnd = ep3.lastIndexOf('};');
  if (lessonsOpenEnd > -1) {
    ep3 = ep3.substring(0, lessonsOpenEnd) + LESSONS_DATA + '\n' + ep3.substring(lessonsOpenEnd);
  }

  // 7. Add LESSON_TIMES[23]
  const LESSON_TIMES_DATA = `\n23:[
  {start:2796.763,end:2797.805},
  {start:2798.347,end:2800.683},
  {start:2800.767,end:2801.851},
  {start:2812.236,end:2813.446},
  {start:2813.946,end:2815.198},
  {start:2818.367,end:2820.787},
  {start:2821.746,end:2823.956},
  {start:2826.751,end:2828.920},
  {start:2830.755,end:2831.839},
  {start:2831.923,end:2833.883},
  {start:2837.595,end:2838.596},
  {start:2839.180,end:2841.849}
],`;

  // Find LESSON_TIMES array and insert
  const timesEnd = ep3.indexOf('];\n\nfunction');
  if (timesEnd > -1) {
    ep3 = ep3.substring(0, timesEnd) + LESSON_TIMES_DATA + ep3.substring(timesEnd);
  } else {
    // Try to find at end of LESSON_TIMES definition
    const altTimesEnd = ep3.indexOf('\n];');
    if (altTimesEnd > -1) {
      ep3 = ep3.substring(0, altTimesEnd) + LESSON_TIMES_DATA + ep3.substring(altTimesEnd);
    }
  }

  // 8. Write updated ep3.html
  writeFileSync(EP3, ep3, 'utf-8');
  console.log('✓ ep3.html updated with lesson 23');

  // 9. Update index.html - add lesson 23 card to episode 3 section
  if (existsSync(INDEX)) {
    let index = readFileSync(INDEX, 'utf-8');
    
    // Find the episode 3 section and add lesson 23
    const ep3Lesson22 = '<div class="lesson" data-lesson="22" onclick="window.location.href=\'ep3.html\'">';
    
    const L23_CARD = `<div class="lesson" data-lesson="23" onclick="window.location.href='ep3.html'">
  <span class="num red">23</span>
  <div class="info">
    <div class="title">第23课 · 道歉与和解</div>
    <div class="sub">미안해요 / 선을 넘다</div>
  </div>
  <span class="tag red">待学</span>
</div>`;
    
    // Insert after lesson 22 card
    const l22End = ep3Lesson22.length + index.indexOf(ep3Lesson22);
    // Find the closing </div> of the lesson 22 card
    const l22Close = index.indexOf('</div>', l22End) + '</div>'.length;
    // Find the next </div> which closes the ep-content
    const epContentClose = index.indexOf('</div>', l22Close);
    
    if (l22Close > 0) {
      index = index.substring(0, l22Close) + '\n' + L23_CARD + index.substring(l22Close);
    }
    
    writeFileSync(INDEX, index, 'utf-8');
    console.log('✓ index.html updated with lesson 23 card');
  }

  console.log('=== Injection Complete ===');
  console.log('Next steps:');
  console.log('1. Upload video to Nginx: cp videos/ep03_l23.mp4 /usr/share/nginx/html/korean/videos/');
  console.log('2. Verify on website: https://nannan2026.cn/korean/');
  console.log('3. Run regression check');
}

main();
