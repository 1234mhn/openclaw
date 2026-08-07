# 任务：第30课 应用页间距过大问题修复（模板标准）

## 问题
第30课复利笔记HTML里有3个独立"应用页"，为了让页面"填满"用了 `display:flex;flex-direction:column` + 内层 `justify-content:space-evenly`，导致**内容被垂直拉伸、间距过大**，尤其：
- 第13页「应用⑬⑭⑮」（台词精讲 9/13 · 应用）
- 第18页「13/13 应用」
- （第10页「应用⑦⑧」也用了同样布局，一并检查，若同样过宽一起修）

用户反馈：间距太大、看着稀疏，需要收紧。

## 文件
`/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/课程模板_lesson30_final.html`
渲染：`node /root/.openclaw/workspace/SOP集合/scripts/gen_pdf.mjs <html> <pdf>`

## 已知布局位置（含flex-stretch的问题容器）
- 第694行附近：`<div class="page" style="display:flex;flex-direction:column;">` → 内层705行 `<div style="flex:1;...;justify-content:space-evenly;">`（应用⑦⑧）
- 第928行附近：同上 → 内层939行 space-evenly（应用⑬⑭⑮）
- 第1237行附近：同上 → 内层1249行 space-evenly（13/13应用）

## 修复要求
1. **把这几页的 `justify-content:space-evenly` 改为紧凑布局**：
   - 改为 `justify-content:flex-start` 或去flex，改用自然的块级流 + 适度 `margin-bottom`（如各练习块间隔 14~18px）
   - 让内容**紧凑、均匀、不留大片空白**，也不过度垂直拉伸
   - 间距参考其它单句应用页（非flex的那些，如📎应用 用正常流排版）的风格，保持一致
2. **教学内容一字不动**（台词/中文/英文/单词/讲解/例句/答案）
3. 只动这几个应用页的**容器布局和间距**
4. **改前先备份**（cp 加时间戳）
5. 渲染PDF核对：第10/13/18页间距自然、无大片空白、无孤行、无过度拉伸；总页数仍合理（20~24）
6. 输出新PDF路径（如 /tmp/lesson30_v5.pdf）和改了什么

## 汇报
- 改了哪几处（各页怎么处理）
- 渲染后总页数
- 确认间距正常、无大片空白/孤行/过度拉伸
