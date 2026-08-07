# 任务：修复第30课复利笔记 PDF 空白页

## 问题描述
用户打开第30课复利笔记 PDF（24页），发现"场景日记上面那一页"是空白的。
我（楠楠大管家）初步用 pdftoppm 转图检查 `/www/korean_course/love_translation_03-30.pdf`，发现：
- 第23页几乎空白（PNG 只有 3.5KB）
- 第12页、第20页文件也偏小（可能也是空白/半空白），需你逐页核实

## 关键文件
- **问题 PDF：** `/www/korean_course/love_translation_03-30.pdf`（24页，8-6 18:21 更新，最新定稿）
- **HTML 源（工作模板）：** `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html`（第30课定稿模板，2026-08-05定为课标）
- **另一个工作模板候选：** `obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/爱情怎么翻译_TEMPLATE.html`
- **PDF 生成命令：** `node /root/.openclaw/workspace/SOP集合/scripts/gen_pdf.mjs <input.html> <output.pdf>`（在 workspace 目录下跑，那里有 playwright）
- **HTML 页面直接查看：** https://nannan2026.cn/korean/lesson30_view.html （nginx 服务 /www/korean_course/，也看下这个 view 是引用哪个HTML）

## 需要你先做的定位
1. 弄清楚 `love_translation_03-30.pdf` 到底是从哪个 HTML 生成的（可能不是课程模板_lesson30_final.html，需找对源）。相关 HTML：`/www/korean_course/课程模板_lesson30.html`、`/www/korean_course/lesson30.html`、workspace 下的 `课程模板_lesson30_final.html`、`爱情怎么翻译_TEMPLATE.html`。先比对哪个 HTML 渲染出来结构和 24 页对得上。
2. 转图逐页核对（pdftoppm -png -r 60），确认空白页到底是哪几页、为什么空白：
   - 是 HTML 里有空的 `.page` div（没内容）？
   - 还是 `page-break-after: always` 造成多余分页？
   - 还是内容溢出/被挤出页面？

## 修复要求
1. **按最新 SOP**（`/root/.openclaw/workspace/SOP集合/韩语课程复利笔记本PDF组装SOP.md`）修复，重点是：
   - 绝不产生空白页/孤行页
   - 每页内容行占比 ≥95%，不得有"仅页脚 + 其余全空白"
   - 场景日记、场景练习包等章节不留大空白
2. 改 HTML 前先备份（cp 加时间戳）。
3. 修复后重新渲染 PDF，逐页自检无空白页，页数仍合理（20句课≈20~24页）。
4. 输出：修复后的 HTML 路径 + 重新生成的 PDF 路径。

## 注意
- 只修复空白页问题，不改变第30课教学内容。
- 不要动第29课、其他课的 HTML/PDF。
- 改动前先备份，别覆盖新版本内容。
