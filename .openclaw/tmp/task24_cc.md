你是韩语课程编辑。请**严格按照第30课定稿模板**，制作【第24课】《你是知道我的弱点的》复利笔记本 PDF。第24课有 **12 句台词**（长课）。必须**一次成型**，格式完全对齐模板，用户不返工。

## 唯一结构基准 = 第30课定稿模板
- **定稿模板（逐段照抄页面结构、板块顺序、CSS，不可改动CSS）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html`
- **已验证OK的同套实现参考（看编排+音频标准写法）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第25课_复利笔记_final.html`（最新成品，直接照它的结构和写法）
- 素材源（台词/单词/句型/音变逐字提取）：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 课程页面/lesson24.html`
- SOP必读：`/root/.openclaw/workspace/SOP集合/韩语课程复利笔记本PDF组装SOP.md`
- 渲染：`node /root/.openclaw/workspace/SOP集合/scripts/gen_pdf.mjs <html> <pdf>`
- 输出HTML：`.../这爱情怎么翻译 台词复利笔记/第24课_复利笔记_final.html`
- 输出PDF：`.../这爱情怎么翻译 台词复利笔记/第24课_复利笔记.pdf`
- 部署：`cp 第24课_复利笔记.pdf /www/korean_course/love_translation_03-24.pdf`

## 本课12句台词（逐字照 lesson24.html 三语，时间戳供音频对应）
1. 그쪽이 내 약점을 알고 있다고 생각하니까（因为你认为自己知道我的弱点 / Because you think you know my weakness.）
2. 나도 당신 약점을 들쑤시고 싶었나 봐요（看来我也很想戳你的弱点 / I guess I wanted to poke at your weakness too.）
3. 그래서 지금은 좀 어때요? 당신 약점（所以现在怎么样？你的弱点 / So how is it now? Your weakness.）
4. 도라미요?（是多拉米吗？/ Dora-mi?）
5. 그렇게 폭발하고 한동안은 조용해요（那样爆发之后，会安静一阵子 / After erupting like that, it stays quiet for a while.）
6. 안 보여요.（看不到 / You can't see it.）
7. 신경 안정제보다（比起镇定剂 / More than a tranquilizer.）
8. 그렇게 한 번 터뜨리는 게 효과가 있나 봐요（看来那样爆发一次更有效 / Seems like erupting once like that is more effective.）
9. 그렇다고 아무 데서나 그때처럼 폭발하지는 마요（但你别在哪都像那样爆发 / But don't erupt anywhere like you did then.）
10. 조심해야죠.（得小心才行 / I need to be careful.）
11. 그쪽 약점은 어떻게 됐어요?（你那边的弱点怎么样了？/ What about your weakness?）
12. 결혼식 날짜는 잡혔고 상견례다 뭐다 끌려다니기 전에 어디로 튈까 궁리 중입니다（婚礼日期定了，在被拉着去见家长之前，我正在琢磨逃到哪去 / The wedding date is set, and before I get dragged to meet the parents, I'm figuring out where to run.）

## 音频（标准可点击链接，格式照第25课成品；L24音频已部署到线上）
- 单句 S01~S12：`<a href="https://nannan2026.cn/korean/audio/L24_SXX.mp3" class="audio-btn" target="_blank">🔊 听这句录音（点击打开播放）</a>`
- 整段：`<a href="https://nannan2026.cn/korean/audio/L24_full.mp3" class="audio-btn" target="_blank">🔊 听整段录音（点击打开播放）</a>`
- **12句精讲页每页必须有对应音频链接（S01~S12），一个都不能缺**

## 页面结构（严格照第30课模板/第25课成品；12句长课，目标约17-21页）
1. 封面（cover）：E3-24 · 韩语台词复利笔记；标题"你是知道我的弱点的"；韩文副题；SVG插画贴合"弱点/交锋/相互试探"主题（不要极光图/眼睛图）
2. 台词汇总：12句 + 整段音频 L24_full；多余空间补重点句型速览表+核心词汇填满
3. 逐句精讲（每句1页，12页）：sentence-box(韩/中/英) + sf-card句子框架(长句>7音节按连接词尾拆，如第1、2、8、12句) + 词尾四种(用到✓没用到<s>删除线) + 🔊单句音频 + 📍单词grid + 💬短语 + 🔧句型(一讲2例句) + 🎵音变 + 📎应用(换词/仿写/Q&A) + 页脚台词精讲X/12
4. **重点句型 + 重点单词（同页，插在最后一页精讲之后、场景迁移之前）**：重点句型5-7表格 + 重点单词6个带联想记忆
5. 场景迁移：2个A/B对话各4-6轮，每句🍊A/🥝B → **韩文单独一行 → 中文单独一行 → 英文单独一行**（三语分行），主题贴合"试探/弱点/相互了解"
6. 场景日记（5句中文提示，每句下面两条横线（한국어）+（English），底部参考答案小字）
7. 口语挑战（不看原文、用今天句型自由发挥30秒，与场景日记同页）

## 零返工自检清单（生成后必须逐项核对，全过才算完成）
1. 音频 S01~S12 + full 全齐，都是 `<a href=...>` 可点击链接
2. 页面顺序：封面→台词汇总→精讲1/12~12/12→**重点句型+重点单词(同页)**→场景迁移→场景日记+口语挑战
3. **重点句型+重点单词必须在场景迁移上一页**
4. 场景迁移每句三语分行（韩/中/英各一行）
5. 场景日记=中文提示+横线（한국어/English）+底部参考答案
6. 口语挑战=自由发挥30秒
7. 无孤行页、页面填满、无其他课残留
8. 词尾四种：用到只✓无注释、没用到`<s>`删除线
9. header-left 写「第24课 · 你是知道我的弱点的」
10. 渲染PDF后部署到 /www/korean_course/love_translation_03-24.pdf，报告页数+文件大小

## 完成标准
生成 第24课_复利笔记_final.html → 渲染 第24课_复利笔记.pdf → 逐项过自检清单 → 部署 → 报告(路径/页数/大小)
