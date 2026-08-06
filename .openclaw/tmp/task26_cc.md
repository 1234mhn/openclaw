你是韩语课程编辑。请**严格按照第30课定稿模板**，制作【第26课】《出发前的恐惧》复利笔记本 PDF。第26课有 **13 句台词**（长课）。必须**一次成型**，格式完全对齐模板，用户不返工。

## 唯一结构基准 = 第30课定稿模板
- **定稿模板（逐段照抄页面结构、板块顺序、CSS，不可改动CSS）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html`
- **已验证OK的同套实现参考（看长课编排+音频标准写法）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html`
- 素材源（台词/单词/句型/音变逐字提取）：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 课程页面/lesson26.html`
- SOP必读：`/root/.openclaw/workspace/SOP集合/韩语课程复利笔记本PDF组装SOP.md`
- 渲染：`node /root/.openclaw/workspace/SOP集合/scripts/gen_pdf.mjs <html> <pdf>`
- 输出HTML：`.../这爱情怎么翻译 台词复利笔记/第26课_复利笔记_final.html`
- 输出PDF：`.../这爱情怎么翻译 台词复利笔记/第26课_复利笔记.pdf`
- 部署：`cp 第26课_复利笔记.pdf /www/korean_course/love_translation_03-26.pdf`

## 本课13句台词（逐字照 lesson26.html 三语）
1. 어?（嗯？/ Huh?）
2. 어, 알았어.（嗯，知道了。/ Okay, got it.）
3. 어, 금방 전화할게.（嗯，我马上打电话。/ Okay, I'll call you right away.）
4. 어.（嗯。/ Yeah.）
5. 용우씨죠?（是龙佑先生吧？/ You're Yong-woo, right?）
6. 스케줄 정했으면 가봐요.（既然日程定了就去吧。/ If the schedule is set, go ahead.）
7. 방금 되게 중요한 스케줄이 잡혔어요.（刚才定了很重要的日程。/ I just got a really important schedule.）
8. 로맨틱트리 제작진한테서 출연 확정됐다고 계약서가 어때요?（浪漫树制作组那边说确定出演了，合同怎么样？/ The Romantic Tree production team confirmed my appearance—how about the contract?）
9. 잘...（那个……/ Well...）
10. 잘 됐네요.（那挺好的。/ That worked out well.）
11. 아쉽다고 그러네.（说是觉得可惜。/ They say it's a shame.）
12. 근데 막상 간다고 하니까 좀 무서워졌어요.（但真说要去了，反而有点害怕。/ But now that it's really happening, I got a bit scared.）
13. 즐겁고 설레는 축제 같은 여행이 되시길 바랍니다.（愿你有一段快乐又心动的、如庆典般的旅程。/ May your trip be as joyful and thrilling as a festival.）

## 音频（标准可点击链接，格式照第27课成品）
- 单句 S01~S13：`<a href="https://nannan2026.cn/korean/audio/L26_SXX.mp3" class="audio-btn" target="_blank">🔊 听这句录音（点击打开播放）</a>`
- 整段：`<a href="https://nannan2026.cn/korean/audio/L26_full.mp3" class="audio-btn" target="_blank">🔊 听整段录音（点击打开播放）</a>`
- **13句精讲页每页必须有对应音频链接（S01~S13），一个都不能缺**

## 页面结构（严格照第30课模板；13句长课，目标约18-22页）
1. 封面（cover）：E3-26 · 韩语台词复利笔记；标题"出发前的恐惧"；韩文副题；SVG插画贴合"出发前/忐忑/期待与不安交织"主题（不要极光图/眼睛图）
2. 台词汇总：13句 + 整段音频 L26_full；多余空间补重点句型速览表+核心词汇填满
3. 逐句精讲（每句1页，13页）：sentence-box(韩/中/英) + sf-card句子框架(长句>7音节按连接词尾拆，如第7、8、12、13句) + 词尾四种(用到✓没用到<s>删除线) + 🔊单句音频 + 📍单词grid + 💬短语 + 🔧句型(一讲2例句) + 🎵音变 + 📎应用(换词/仿写/Q&A) + 页脚台词精讲X/13
4. **重点句型 + 重点单词（同页，插在最后一页精讲之后、场景迁移之前）**：重点句型5-7表格 + 重点单词6个带联想记忆
5. 场景迁移：2个A/B对话各4-6轮，每句🍊A/🥝B → **韩文单独一行 → 中文单独一行 → 英文单独一行**（三语分行，绝不挤一行），主题贴合"出发前的担忧与鼓励"
6. 场景日记（5句中文提示，每句下面两条横线（한국어）+（English），底部参考答案小字）
7. 口语挑战（不看原文、用今天句型自由发挥30秒）

## 零返工自检清单（生成后必须逐项核对，全过才算完成）
1. 音频 S01~S13 + full 全齐，都是 `<a href=...>` 可点击链接
2. 页面顺序：封面→台词汇总→精讲1/13~13/13→**重点句型+重点单词(同页)**→场景迁移→场景日记+口语挑战
3. **重点句型+重点单词必须在场景迁移上一页**
4. 场景迁移每句三语分行（韩/中/英各一行）
5. 场景日记=中文提示+横线（한국어/English）+底部参考答案
6. 口语挑战=自由发挥30秒
7. 无孤行页、页面填满、无其他课残留
8. 词尾四种：用到只✓无注释、没用到`<s>`删除线
9. header-left 写「第26课 · 出发前的恐惧」
10. 渲染PDF后部署到 /www/korean_course/love_translation_03-26.pdf，报告页数+文件大小

## 完成标准
生成 第26课_复利笔记_final.html → 渲染 第26课_复利笔记.pdf → 逐项过自检清单 → 部署 → 报告(路径/页数/大小)
