# MEMORY.md（精简版）

> 这是常驻精简记忆，只留**每次必用的触发规则 + 关键链接**。完整细节和长文在 `MEMORY_DETAILS.md`（需要时单独读取，不外泄）和对应 daily `memory/` 文件。

---

## 📋 飞书双表录入机制（2026.8.15 定稿 · 最高频）
**base_token：** `DIOvb4JoLa6oTisvKHGcCCEjnvh`（同一个多维表格里两张表）

- **课时记录表** `table_id=tblghqAgibgaResT`：触发=「学生姓名+课程链接」→ 记节数/时长/费用。字段：[学生,第几节课,上课时长,是否结算,课时费,上课日期,月份,上课时间,上课链接]。第几节=表内记录数+1；课时费/时长参照该生上次（刘栖伶=1.5h/90元）；默认未结算。
- **学生成长日记** `table_id=tblFsRNfrvrTncCG`：触发=「**XX学习成长日记**」+上课内容/逐字稿 → 记上课内容与孩子表现。字段：学生姓名、年级、入学基础、起始分数、阶段测试分数、上课日期、上课时长、上课内容、本课收获、薄弱点、闪光点、学习习惯变化、**上课状态(单选😄专注/🙂正常/😐一般/😫疲惫/📉需关注)**、下节课重点。
- **🔴 上课状态必须根据逐字稿判断**，不默认；技术卡顿≠状态问题。
- 录入命令、示例、字段顺序详见 `memory/2026-08-15.md` 与 `MEMORY_DETAILS.md`。

---

## 🎓 学生/用户综合档案
- 语言学习者（英语+韩语）+ 知识体系构建者；叫我「楠楠大管家」。
- Obsidian 复利库：`/root/obsidian_nanan_compound_library`（=workspace 下同名，软链）。portfolio：`/root/.openclaw/workspace/obsidian_nanan_portfolio`。
- 读研方向：医学+AI（医疗大模型/多模态），软工硕士研0。就业规划存 portfolio「就业相关」。

---

## 🔴 加课铁律（韩语课程在线页面）
- **用户说「加课/加第X课」= 只做一件事：加进韩语在线课程页**（`/www/korean_course/` = https://nannan2026.cn/korean/）。
- 复利笔记/PDF 是另一套，只有用户单独明确说「复利笔记/PDF」才做。
- 执行：派课程产品师（Claude Code）走 `SOP集合/SOP-韩语课程更新流程.md`；视频用COS签名URL远程截取**不下原片**；台词用片源字幕**不用whisper**；改index前备份、回归检查。**我做调度，绝不自己动手改HTML**。
- 完整8步流程、COS信息、每句6件套、台词截图铁律 → `MEMORY_DETAILS.md`。

---

## 🧑💼 我是调度员，不是干活的（2026.7.2 铁律）
- 派对应大将执行（课程产品师做课/灵感工程师创意/知识库管家归档）。
- 但凡代码/HTML/视频处理 → spawn Claude Code，我只做需求确认。
- 改代码前必备份（`cp xxx xxx_backup_日期`）；**6.25手动改HTML致第1~9课丢失，绝不再犯**。
- COS 只删不补，删前必须问用户；**严禁下载原片**（7.19教训）。

---

## ⏱️ 执行效率铁律（2026.8.4）
- 简单任务直接干不问中间步骤 / 需求不清只问一轮 / 低风险不问直接做 / 30分钟闭环 / 先交付再迭代 / 汇报要短 / **绝不弄乱已有内容**（改前备份+回归检查）。
- 全文见 `AGENTS.md`「执行效率铁律」。

## 🔄 新会话约定
- **大任务（做课/改多文件/长分析）开工前先开新会话**，避免上下文越堆越慢（超时）。旧内容已落盘不丢。

## 🧠 记忆纪律
- 每天聊完必须写详细 daily memory，不偷懒；重要发现立即记录；每2-3天 review MEMORY.md 合并。

## 📝 笔记新规则（2026.8.1）
- 笔记先**用户给理解 → 我整理/修正/补全**，我不当生成者。

## 🔴 AI/ML 专属 portfolio 铁律（2026.7.30）
- AI/ML 学习笔记（卡片/代码/理论）只放 `obsidian_nanan_portfolio`（知识卡片→📚理论知识/、代码→🔬实操/、GitHub=1234mhn/obsidian_nanan_portfolio）。绝不放进复利知识库或主工作区GitHub。

---

## 📎 高频链接速查
- 韩语课程页：https://nannan2026.cn/korean/
- 飞书课时记录表：`.../base/DIOvb4JoLa6oTisvKHGcCCEjnvh?table=tblghqAgibgaResT`
- 飞书学生成长日记：`.../base/DIOvb4JoLa6oTisvKHGcCCEjnvh?table=tblFsRNfrvrTncCG`
- 加课SOP：`SOP集合/SOP-韩语课程更新流程.md`
- 课程模板：`/www/korean_course/课程模板_lesson30.html`

---

> 更多细节（韩语页面最终状态、备份清单、第24/30课详情、ML进展、读书博主原则、完整命令）→ `MEMORY_DETAILS.md`，按需读取。
