你是韩语课程编辑。请**严格按照第30课定稿模板**，重新制作**【第27课】《说不出口的担心》** 复利笔记本 PDF。上一次制作有缺陷（音频链接残缺、格式未对齐），这次必须完全照模板，一文不差。

## 铁律：唯一结构基准 = 第30课定稿模板
- **定稿模板（必须逐段照抄它的页面结构、板块顺序、CSS）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html`
- **可参考第28课成品**（已验证OK的同套模板实现，看它9句以外的页面怎么排，特别是音频链接的标准写法）：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第28课_复利笔记_final.html`
- 素材源（台词/单词/句型/音变逐字提取）：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 课程页面/lesson27.html`
- SOP必读：`/root/.openclaw/workspace/SOP集合/韩语课程复利笔记本PDF组装SOP.md`
- 渲染：`node /root/.openclaw/workspace/SOP集合/scripts/gen_pdf.mjs <html> <pdf>`
- 输出HTML：`.../这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html`
- 输出PDF：`.../这爱情怎么翻译 台词复利笔记/第27课_复利笔记.pdf`
- 部署：`cp 第27课_复利笔记.pdf /www/korean_course/love_translation_03-27.pdf`

## 本课9句台词（逐字照 lesson27.html 三语）
1. 축제 같은 여행이 되시길 바랍니다.（祝你旅途如庆典般精彩。/ I hope your trip is as wonderful as a festival.）
2. 그게 말이 돼요?（这说得通吗？/ Does that make sense?）
3. 이 보세요.（喂，你听好了。/ Hey, listen.）
4. 도라미를 아는 입장에서 어쩜 그렇게 무책히네요?（明明了解多拉米，怎么能那么不负责任？/ Knowing Dora-mi, how can you be so irresponsible?）
5. 말도 안 통하는 외국에서 아무도 내 사정은 모르는데 내가 혼자 잘 못할 수 있겠어요?（在语言不通的外国，没人了解我的情况，我一个人能过得好吗？/ In a foreign country where I can't speak the language and no one knows my situation, can I really manage alone?）
6. 이봐요.（喂，我说。/ Hey, I'm talking to you.）
7. 난 둥글둥글 적당한 경력과 함께 원만하게 빠져주는 겁니다.（我打算用圆滑适度的履历体面地脱身。/ I plan to bow out gracefully with a moderate track record.）
8. 당신이 그걸 원해 놓고 왜 굳이 뾰족한 말 나오게 합니까?（明明你选了这样，为什么非要说那么尖锐的话？/ You chose this yourself, why say something so sharp?）
9. 뾰족이든 삐족이든 말해 봐요 이번엔 잘 알아들을게요 걱정이라는 거（不管是尖刻还是直接，你尽管说吧。这次我会好好听明白的。是担心这件事啊。/ Sharp or blunt, say it. This time I'll listen properly. It's about worry.）

## 音频（必须用标准可点击链接，格式照第28课成品）
- 单句：`<a href="https://nannan2026.cn/korean/audio/L27_S01.mp3" class="audio-btn" target="_blank">🔊 听这句录音（点击打开播放）</a>` … S09
- 整段：`<a href="https://nannan2026.cn/korean/audio/L27_full.mp3" class="audio-btn" target="_blank">🔊 听整段录音（点击打开播放）</a>`
- **9句精讲页每一页都必须有对应音频链接（S01~S09），一个都不能缺**

## 页面结构（严格照第30课模板，9句中课，目标约14-18页）
1. 封面（cover）：E3-27 · 韩语台词复利笔记；标题"说不出口的担心"；韩文副题；SVG插画贴合"担心/欲言又止/牵挂"主题（不要用30课的极光图、28课的锐利眼睛图）
2. 台词汇总：9句 + 整段音频 L27_full；多余空间补「重点句型速览」表格+核心词汇填满
3. 逐句精讲（每句1页，9页）：sentence-box(韩/中/英) + sf-card句子框架(长句>7音节按连接词尾拆) + 🔧词尾四种(用到只✓没用到<s>删除线) + 🔊单句音频 + 📍单词grid + 💬短语 + 🔧句型(一讲2例句) + 🎵音变 + 📎应用(换词/仿写/Q&A) + 页脚台词精讲X/9
4. 重点句型+重点单词（同一页；重点句型5-7表格；重点单词6个带联想记忆）
5. 场景迁移：2个A/B对话各4-6轮三语分行（主题担心/牵挂）
6. 场景日记(5句)+口语挑战 同页

## 完成标准
1. HTML结构、CSS、板块顺序 **与第30课模板完全一致**
2. 9句精讲页音频链接齐全（S01-S09）
3. 无孤行页、页面填满、词尾规则对、无其他课残留
4. 渲染PDF → 自检 → 部署到 /www/korean_course/love_translation_03-27.pdf
5. 报告：PDF路径、页数、文件大小
