# 制作者 第28课《一眼看穿》复利笔记 PDF

请严格按定稿模板 + SOP，制作第28课复利笔记 HTML 并渲染 PDF。第28课是 **5句小课**，务必紧凑、无孤行页、页面填满。

## 关键路径（全部已存在）
- **定稿模板（照抄其结构与CSS，不要改CSS）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html`
  - 这是第30课成品，含封面/台词汇总/精讲页/重点句型+单词/场景迁移/日记结构的完整范例。**照抄 class 结构和 CSS，只替换内容。**
- **本课素材源（台词/单词/句型/音变从这里提取全部内容）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 课程页面/lesson28.html`
- **SOP必读（页面分配/孤行页铁律/词尾规则/自检标准）：** `/root/.openclaw/workspace/SOP集合/韩语课程复利笔记本PDF组装SOP.md`
- **渲染工具：** `node /root/.openclaw/workspace/SOP集合/scripts/gen_pdf.mjs <input.html> <output.pdf>`
- 输出HTML：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第28课_复利笔记_final.html`
- 输出PDF：`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第28课_复利笔记.pdf`
- 渲染后部署一份到：`/www/korean_course/love_translation_03-28.pdf`

## 本课内容（第28课共5句，全部逐字照 lesson28.html 的三语翻译）
1. 차무희 씨 당신은 상당히 즉흥적이고 변덕스러운 사람입니다.（车茂熙先生，您是一个相当冲动又善变的人。/ Mr. Cha Mohee, you are quite an impulsive and capricious person.）
2. 방금 아라고 말을 내놓고 어라고 우기다가 오라고 말을 바꾸죠.（刚才说"去"，偏要犟着说"去"，现在又改口说"来"。/ Just now you said "go", stubbornly insisted on "go", and now you've changed it to "come".）
3. 그런 당신을 불안하게 만드는 도라미까지 나선다면 지난번처럼 터질 겁니다. 분명히.（如果让您不安的多拉米也掺和进来，就会跟上回一样爆发。毫无疑问。/ If Dora-mi, who makes you anxious, also gets involved, it'll blow up just like last time. No doubt about it.）
4. 그렇겠죠.（是吧。/应该是吧。/ I suppose so.）
5. 그럼 내 사정을 다 알고.（那你都知道我的处境了？/ So you know everything about my situation?）

音频：https://nannan2026.cn/korean/audio/L28_S01.mp3 … L28_S05.mp3 + https://nannan2026.cn/korean/audio/L28_full.mp3

## 本课单词（来自 lesson28.html vocab，约19个，韩→中→英顺 lesson28.html 的列表）
차무희 상당히 즉흥적 변덕스럽다 방금 내놓다 우기다 바꾸다 그런 불안하다 도라미 나서다 지난번 터지다 분명히 그렇다 그럼 사정 알다

## 本课句型（重点7个，lesson28.html 句型总结区有完整讲解和例句）
-고(又…又…，连接并列) / -다고 하다(间接引用"说") / -라고 하다(命令引用"让") / -처럼(像…一样) / -ㄹ 겁니다(将来推测"会…的") / -겠죠(推测+确认"应该…吧") / 句尾-고省略(口语未完句)

## 每句精讲页要点（第28课是5句小课，每句精讲压成1页 compact-page）
- 用模板的 `sentence-box`（韩/中/英三行）+ `detail-block` 结构
- **句子框架 `sf-card`**：短句直接标 🗺️背景(无就不写)/👤谁/📦什么/✍️干(写原形)/🔧词尾；长句(>7音节)按连接词尾拆成多个短句，如第3句拆「그런 당신을 불안하게 만드는 도라미까지 나선다면」+「지난번처럼 터질 겁니다. 분명히.」
- **词尾四种 `sf-endings`**：用到只 ✓ 不加内容；没用到整个标签加删除线 `<s>①加料 —</s>`
- 🔊 单句音频按钮放句子框架下方
- 📍 单词（word-grid 两列）→ 💬 短语 → 🔧 句型/接口（一个句型一讲+2例句）→ 🎵 音变现象（来自 lesson28.html phon，如 `즉흥적[즈킁적] ㅎ+ㄱ→ㅋ紧音化`）
- 📎 应用：🔄换词练习 / ✍️仿写改写 / ❓Q&A，答案画横线+小字 answer-ref 参考答案

## 页面结构（5句小课，目标约8-11页）
1. 封面：E3-28 · 韩语台词复利笔记；标题"一眼看穿"；韩文可「상대를 꿰뚫는 눈」；副题贴合"看穿/直接点破/直言不讳"；SVG插画主题=洞察/犀利目光（深邃眼瞳+锐利线条），**不要用模板极光图**
2. 台词汇总：5句 + 整段音频 L28_full；若只占上半页→补「⭐重点句型速览」表格+核心词汇填满
3. 每句一句精讲页（压成1页，无孤行页）
4. 重点句型+重点单词（同一页；7个句型；6个重点单词带联想记忆）
5. 场景迁移：2个A/B对话各4-6轮三语分行（主题"直言相告/直接点破/推心置腹"）
6. 场景日记(5句)+口语挑战 同页

## 铁律（SOP重点，务必遵守）
- **5句小课：每句精讲压成1页，绝不产生孤行页**；若某句Q&A溢到新页只剩几行+页脚→必须压缩重排回一页
- 页面尽量填满，无大片空白、无孤行页；续页顶部空一段不顶格
- 词尾四种：用到只✓无注释、没用到`<s>标签</s>`删除线贯穿；不要 sf-detail 详解行
- 单词/短语/句型严格分开（各自独立区块，不混排）
- 台词①直接紧贴台词（.num 窄、.kr 不缩进太多，照模板）
- CSS严格照抄模板、不可改动；header-left「第28课 · 一眼看穿」
- 渲染参数必须在 gen_pdf.mjs 里带 `preferCSSPageSize:true` + `printBackground:true`（先读脚本确认，缺了要加上）
- 渲染后用 pdftoppm 转图逐页核对：每页内容行≥95%、无孤行、页数合理、无第29/30课残留

## 完成标准
1. 生成 `第28课_复利笔记_final.html`（内容准确、无残留其他课内容）
2. 渲染 `第28课_复利笔记.pdf`，目标约8-11页
3. 自检通过（无孤行页、无大空白、词尾规则对、韩中英三语对应）
4. 部署一份到 `/www/korean_course/love_translation_03-28.pdf`
5. 报告：PDF路径、页数、文件大小
