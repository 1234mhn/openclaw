# MEMORY.md

## 关键词触发
- 「读书卡片」→ 启动知识卡片锻造系统，按KC模板生成卡片，归档到 `知识库/基础知识/读书笔记/`
- **做韩语课程前** → 必须先读 `korean_course/课程模板说明.md`，按模板规范执行，避免凭记忆瞎猜

## 不定期抽查系统（2026.6.11）
- **机制**：heartbeat 随机触发 ~35%概率，距上次 >=4小时
- **权重**：英语40% / 知识库40% / 每天写点什么20%
- **方式**：禁止选择题，纯翻译/造句/概念提问
- **存量**：英语卡片2张 + KC卡片5张 + 通用技能3 + AI实操2 + 方法论1 + 写作2篇
- **状态文件**：`memory/quiz-state.json`
- **规则依据**：`📋 知识管理规则.md` 规则2/3/4

## 🛣️ 路径变更（2026.6.27）
- `obsidian_vault` → 更名为 `obsidian_nanan_daily_routine`
- `/root/obsidian_nanan_daily_routine` → 软链接指向 `/root/.openclaw/workspace/obsidian_nanan_daily_routine/`
- GitHub 跟踪工作区里的副本

## 🔴 铁律（2026.6.25 严重违纪后重申）
- **凡涉及代码/HTML页面/文件的任何修改，一律交给 Claude Code 处理，自己绝不手动改一行。**
- **今天（6.25）因为自己动手改HTML，导致第1~9课内容全部丢失，浪费了用户一整天。**
- **在任何情况下都不得直接编辑HTML/JS/CSS文件。需求分析可以，改代码不行。**
- 之前（2026.6.2）定的规则我没遵守，这次写死：但凡代码相关 → spawn Claude Code session 去跑，我只做需求确认。

## 韩语课程页面 - 最终状态 (2026.6.5)
- **页面位置:** `/root/.openclaw/workspace/korean_course/index.html`
- **视频:** `videos/scene01_4K.mp4` (14MB, H264+AAC 192k, 1080p, 从4K原版MKV截取，无硬字幕)
- **视频源:** `/tmp/kdrama/EP1_4K.mkv` (9GB 4K MKV, 5秒~55秒)
- **字幕:** 有VTT字幕功能，默认关闭，点 ⋮ → 字幕 → 韩文 开启
- **服务:** python3 http.server 8080 + serveo隧道
- **恢复命令:** `bash /tmp/restore_state.sh`
- **功能:** 测验模式、笔记、已完成标记、深色模式、单词小测
- **页面结构:** 原版韩语学习系统样式，上方视频，下方台词讲解+翻译
- **第2~12课** 视频路径已修复（`videos/scene0X_xxx.mp4`）

## 📦 页面备份（2026.6.25 更新）
- **最新备份：** `/root/.openclaw/workspace/korean_course/index_backup_20260625.html`
- **备份内容：** 第1~4课完整 + 第9课完整（18句台词+讲解+时间同步+英文）
- **第5~8课：** 暂为旧版本内容，等用户发数据后补充
- **恢复命令：** `cp /root/.openclaw/workspace/korean_course/index_backup_20260625.html /root/.openclaw/workspace/korean_course/index.html`
- **⚠️ 铁律：** 以后但凡改代码，先用这个命令备份当前文件！

## 韩语页面恢复方式（2026.6.15 更新）
- **⚠️ 用域名，不用serveo隧道！**
- **用户说"韩语页面"或"开课"时：** 直接发 `https://nannan2026.cn/korean/`
- **前提:** nginx已在运行（检查端口80/443），自动serve `/root/.openclaw/workspace/korean_course/`
- **如果nginx没跑:** `systemctl start nginx`
- **页面位置:** `/root/.openclaw/workspace/korean_course/index.html`
- **功能:** 视频+台词+翻译+测验模式+笔记+字幕
- **域名:** nannan2026.cn
