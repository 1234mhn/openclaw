你是韩语课程编辑。请**严格按照第30课定稿模板**，制作【第25课】《特好的机会》复利笔记本 PDF。第25课有 **12 句台词**（长课）。必须**一次成型**，格式完全对齐模板，用户不返工。

## 唯一结构基准 = 第30课定稿模板
- **定稿模板（逐段照抄页面结构、板块顺序、CSS，不可改动CSS）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html`
- **已验证OK的同套实现参考（看编排+音频标准写法）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第26课_复利笔记_final.html`（最新成品，直接照它的结构和写法）
- 素材源（台词/单词/句型/音变逐字提取）：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 课程页面/lesson25.html`
- SOP必读：`/root/.openclaw/workspace/SOP集合/韩语课程复利笔记本PDF组装SOP.md`
- 渲染：`node /root/.openclaw/workspace/SOP集合/scripts/gen_pdf.mjs <html> <pdf>`
- 输出HTML：`.../这爱情怎么翻译 台词复利笔记/第25课_复利笔记_final.html`
- 输出PDF：`.../这爱情怎么翻译 台词复利笔记/第25课_复利笔记.pdf`
- 部署：`cp 第25课_复利笔记.pdf /www/korean_course/love_translation_03-25.pdf`

## 本课12句台词（逐字照 lesson25.html 三语）
1. 그냥 딴 일 찾지 말고 그 프로그램 하세요（别找别的工作了，就做那个节目吧 / Don't look for another job, just do that show.）
2. 용우 말 들어 보니까（听龙佑那么一说 / Listening to Yong-woo...）
3. 아직도 통역사 못 찾아서 난리라던데（听说还没找到翻译，正闹得不可开交 / I heard they're still scrambling because they can't find an interpreter.）
4. 알아요（我知道 / I know.）
5. 지금도 같이 할 수 없냐고 계속 연락 오니까（现在也一直来联系，问能不能一起做 / They keep contacting me asking if I can do it together now.）
6. 그래요?（是吗？/ Is that so?）
7. 좋겠다（真好啊 / That'd be nice.）
8. 난 잘렸는데（可我被辞退了 / But I got fired.）
9. 자폭으로 날렸다더니 뭐, 아쉬운가 봐요?（听说他是用自爆的方式把自己作掉的，看来是觉得可惜吧？/ They say he self-destructed and got himself fired—guess he regrets it?）
10. 아쉽죠（是挺可惜的 / Yeah, it's a shame.）
11. 되게 좋은 기회였거든요（因为那真是个很好的机会 / Because it was a really great opportunity.）
12. 이미지 변신하는 데（在形象转型方面 / For transforming his image.）

## 音频（标准可点击链接，格式照第26课成品）
- 单句 S01~S12：`<a href="https://nannan2026.cn/korean/audio/L25_SXX.mp3" class="audio-btn" target="_blank">🔊 听这句录音（点击打开播放）</a>`
- 整段：`<a href="https://nannan2026.cn/korean/audio/L25_full.mp3" class="audio-btn" target="_blank">🔊 听整段录音（点击打开播放）</a>`
- **12句精讲页每页必须有对应音频链接（S01~S12），一个都不能缺**

## 页面结构（严格照第30课模板/第26课成品；12句长课，目标约17-21页）
1. 封面（cover）：E3-25 · 韩语台词复利笔记；标题"特好的机会"；韩文副题；SVG插画贴合"机会/选择/失去与得到"主题（不要极光图/眼睛图）
2. 台词汇总：12句 + 整段音频 L25_full；多余空间补重点句型速览表+核心词汇填满
3. 逐句精讲（每句1页，12页）：sentence-box(韩/中/英) + sf-card句子框架(长句>7音节按连接词尾拆，如第1、5、9、11句) + 词尾四种(用到✓没用到<s>删除线) + 🔊单句音频 + 📍单词grid + 💬短语 + 🔧句型(一讲2例句) + 🎵音变 + 📎应用(换词/仿写/Q&A) + 页脚台词精讲X/12
4. **重点句型 + 重点单词（同页，插在最后一页精讲之后、场景迁移之前）**：重点句型5-7表格 + 重点单词6个带联想记忆
5. 场景迁移：2个A/B对话各4-6轮，每句🍊A/🥝B → **韩文单独一行 → 中文单独一行 → 英文单独一行**（三语分行），主题贴合"机会选择/惋惜/鼓励"
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
9. header-left 写「第25课 · 特好的机会」
10. 渲染PDF后部署到 /www/korean_course/love_translation_03-25.pdf，报告页数+文件大小

## 完成标准
生成 第25课_复利笔记_final.html → 渲染 第25课_复利笔记.pdf → 逐项过自检清单 → 部署 → 报告(路径/页数/大小)
