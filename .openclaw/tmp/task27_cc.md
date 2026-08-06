你是韩语课程编辑。请制作**【第27课】《说不出口的担心》** 的复利笔记本 PDF，严格按定稿模板 + 最新 SOP。第27课有 **9 句台词**（中课）。

## 关键路径（全部已存在）
- 定稿模板（照抄结构与CSS，不要改CSS）：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html`
- 也可以参考刚做好的第28课成品（同套结构，直接照抄它的页面写法）：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第28课_复利笔记_final.html`
- 素材源（台词/单词/句型/音变从这里提取全部内容）：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 课程页面/lesson27.html`
- **SOP必读**（页面分配/孤行页铁律/自检标准）：`/root/.openclaw/workspace/SOP集合/韩语课程复利笔记本PDF组装SOP.md`
- 渲染：`node /root/.openclaw/workspace/SOP集合/scripts/gen_pdf.mjs <html> <pdf>`
- 输出HTML：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html`
- 输出PDF：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记.pdf`
- 渲染后部署一份到：`/www/korean_course/love_translation_03-27.pdf`

## 本课内容（第27课共9句，全部逐字照 lesson27.html 的三语翻译）
1. 축제 같은 여행이 되시길 바랍니다.（祝你旅途如庆典般精彩。/ I hope your trip is as wonderful as a festival.）
2. 그게 말이 돼요?（这说得通吗？/ Does that make sense?）
3. 이 보세요.（喂，你听好了。/ Hey, listen.）
4. 도라미를 아는 입장에서 어쩜 그렇게 무책히네요?（明明了解多拉米，怎么能那么不负责任？/ Knowing Dora-mi, how can you be so irresponsible?）
5. 말도 안 통하는 외국에서 아무도 내 사정은 모르는데 내가 혼자 잘 못할 수 있겠어요?（在语言不通的外国，没人了解我的情况，我一个人能过得好吗？/ In a foreign country where I can't speak the language and no one knows my situation, can I really manage alone?）
6. 이봐요.（喂，我说。/ Hey, I'm talking to you.）
7. 난 둥글둥글 적당한 경력과 함께 원만하게 빠져주는 겁니다.（我打算用圆滑适度的履历体面地脱身。/ I plan to bow out gracefully with a smooth, moderate track record.）
8. 당신이 그걸 원해 놓고 왜 굳이 뾰족한 말 나오게 합니까?（明明你选了这样，为什么非要说那么尖锐的话？/ You chose this yourself, so why deliberately say something so sharp?）
9. 뾰족이든 삐족이든 말해 봐요 이번엔 잘 알아들을게요 걱정이라는 거（不管是尖刻还是直接，你尽管说吧。这次我会好好听明白的。是担心这件事啊。/ Sharp or blunt, go ahead and say it. This time I'll listen properly. It's about worry.）

音频：https://nannan2026.cn/korean/audio/L27_S01.mp3 … L27_S09.mp3 + https://nannan2026.cn/korean/audio/L27_full.mp3

## 本课单词/句型/音变
全部从 lesson27.html 逐字提取（含单词grid、句型讲解+例句、音变现象）。重点句型约5-7个，从 lesson27.html 的 pattern 区块取。

## 页面结构（9句中课，目标约12-16页）
1. 封面：E3-27 · 韩语台词复利笔记；标题"说不出口的担心"；韩文副题；SVG插画贴合本课"担心/欲言又止/牵挂"主题（不要用模板极光图、不要用28课的锐利眼睛图）
2. 台词汇总：9句 + 整段音频 L27_full；若只占上半页补「重点句型速览」表格+核心词汇
3. 每句一句精讲页（9页）：sentence-box(韩/中/英) + sf-card句子框架(长句>7音节按连接词尾拆，如第5、7、8、9句) + 词尾四种 + 单句音频 L27_SXX + 单词grid + 短语 + 句型(一讲+2例句) + 音变 + 应用(换词/仿写/Q&A)
4. 重点句型+重点单词（同一页；重点句型5-7个；重点单词6个带联想记忆）
5. 场景迁移：2个A/B对话各4-6轮三语分行（主题贴合"担心/牵挂/欲言又止"）
6. 场景日记(5句)+口语挑战 同页

## 铁律（SOP重点，务必遵守，照着第28课成品写）
- 每句精讲压成1页，绝不产生孤行页；Q&A溢出新页只剩几行→压缩重排回一页
- 页面尽量填满、无大片空白、无孤行页；续页顶部空一段不顶格
- 词尾四种：用到只✓无注释、没用到`<s>标签</s>`删除线贯穿；不要 sf-detail 详解行
- 单词/短语/句型严格分开；句子框架讲解大白话
- 台词①直接紧贴台词（.num窄、.kr不缩进）
- CSS严格照抄模板不可改动；header-left「第27课 · 说不出口的担心」
- 渲染参数必须带 preferCSSPageSize:true + printBackground:true（先读 gen_pdf.mjs 确认，没有就补）
- 渲染后用 pdftoppm 转图逐页自检：每页内容行≥95%、无孤行、页数合理、无28/29/30课残留
- **每句精讲用第28课成品的页面写法（照抄其 sf-card/sentence-box/单词/句型/应用结构）**

## 完成标准
1. 生成 第27课_复利笔记_final.html（内容准确、无残留其他课内容）
2. 渲染 第27课_复利笔记.pdf，目标约12-16页
3. 自检通过（无孤行页、无大空白、词尾规则对、韩中英三语对应、无其他课残留）
4. 部署一份到 /www/korean_course/love_translation_03-27.pdf
5. 报告：PDF路径、页数、文件大小
