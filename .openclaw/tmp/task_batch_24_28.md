你是韩语课程编辑。请批量制作【第24、25、26、27、28课】五课的复利笔记本 PDF，严格按定稿模板 + 最新 SOP，一课一 PDF，全部完成后统一汇报。

## 通用关键路径（每课都用同一套）
- **定稿模板（照抄结构与CSS，不要改CSS）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html`
- **每课素材源（台词/单词/句型/音变从这里提取全部内容）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 课程页面/lesson{N}.html`
- **SOP必读：** `/root/.openclaw/workspace/SOP集合/韩语课程复利笔记本PDF组装SOP.md`
- **渲染：** `node /root/.openclaw/workspace/SOP集合/scripts/gen_pdf.mjs <html> <pdf>`
- 每课输出HTML到：`.../这爱情怎么翻译 台词复利笔记/第{N}课_复利笔记_final.html`
- 每课输出PDF到：`.../这爱情怎么翻译 台词复利笔记/第{N}课_复利笔记.pdf`
- 每课部署一份到：`/www/korean_course/love_translation_03-{N}.pdf`

## 各课台词句数（决定页面策略）
- 第28课：5句（小课，每句精讲压1页 compact-page）目标约8-11页
- 第27课：9句（中课）目标约12-16页
- 第26课：13句（大课）目标约18-22页
- 第25课：12句（大课）目标约17-21页
- 第24课：12句（大课）目标约17-21页

## 每课必须做的内容（从 lesson{N}.html 逐字提取三语翻译+单词+句型+音变）
1. 封面：E3-{N} · 韩语台词复利笔记；标题=本课中文标题（从 lesson{N}.html 页头 h2 取）；韩文副题；SVG插画贴合本课台词主题（不要用模板极光图）
2. 台词汇总：全部台词 + 整段音频 L{N}_full.mp3；若只占上半页补「重点句型速览」表格+核心词汇
3. 逐句精讲页：sentence-box(韩/中/英) + sf-card句子框架(长句>7音节按连接词尾拆) + 词尾四种 + 单句音频 L{N}_SXX.mp3 + 单词grid + 短语 + 句型(一讲+2例句) + 音变 + 应用(换词/仿写/Q&A)
4. 重点句型+重点单词（同一页；重点句型4-7个；重点单词6个带联想记忆）
5. 场景迁移：2个A/B对话各4-6轮三语分行（主题贴合本课剧情）
6. 场景日记(5句)+口语挑战 同页

音频URL规则：`https://nannan2026.cn/korean/audio/L{N}_S01.mp3`…`L{N}_S{句数}.mp3` + `L{N}_full.mp3`
（先 ls /www/korean_course/audio/ 确认音频文件实际存在和命名，以实际为准）

## 铁律（SOP重点，务必遵守）
- 小课(≤6句)每句精讲压1页、绝不产生孤行页；Q&A溢出新页只剩几行→压缩重排回一页
- 页面尽量填满、无大片空白、无孤行页；续页顶部空一段不顶格
- 词尾四种：用到只✓无注释、没用到`<s>标签</s>`删除线贯穿；不要 sf-detail 详解行
- 单词/短语/句型严格分开；句子框架讲解大白话
- 台词①直接紧贴台词（.num窄、.kr不缩进）
- CSS严格照抄模板不可改动；header-left「第{N}课 · {标题}」
- 渲染参数必须带 preferCSSPageSize:true + printBackground:true（先读 gen_pdf.mjs 确认，没有就补）
- 渲染后用 pdftoppm 转图逐页自检：每页内容行≥95%、无孤行、页数合理、无上一课内容残留
- 一课做完再下一课，每课自成完整文件

## 完成标准
1. 五课 HTML+PDF 全部生成、自检通过
2. 各自部署到 /www/korean_course/love_translation_03-{N}.pdf
3. 最后统一报告：每课PDF路径、页数、文件大小、自检结果

按顺序做：28 → 27 → 26 → 25 → 24。开始干活，遇到不确定以模板和对应 lesson{N}.html 为准。
