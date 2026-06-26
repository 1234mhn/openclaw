# Obsidian 知识库搭建流程

> 日期：2026-05-18
> 服务器：Tencent Cloud Lighthouse (VM-0-3-ubuntu)
> 仓库路径：`/root/obsidian_vault`

---

## 一、创建目录结构

```bash
mkdir -p /root/obsidian_vault/.obsidian
mkdir -p /root/obsidian_vault/{附件,日记,项目,归档,.templates}
```

## 二、创建 Obsidian 核心配置

### 1. 应用设置 (`app.json`)
- 自动更新链接、保存时更新内部链接
- 附件默认存放至 `附件/` 目录
- 启动源码模式 + 实时预览

### 2. 外观设置 (`appearance.json`)
- 自适应主题（浅色/深色自动切换）
- 字体大小 16px

### 3. 核心插件 (`core-plugins.json`)
启用核心插件：文件列表、全局搜索、图谱、反向链接、每日笔记、模板、命令面板、书签、Markdown 导入、字数统计、工作区、文件恢复等。

### 4. 社区插件 (`community-plugins.json`)
预配置插件列表：
- `obsidian-git` — 版本控制与同步
- `obsidian-auto-pair-chinese-symbol` — 中文符号自动配对
- `calendar` — 日历视图
- `obsidian-kanban` — 看板视图
- `obsidian-excalidraw-plugin` — 手绘/白板
- `dataview` — 数据查询
- `templater-obsidian` — 高级模板引擎

## 三、创建笔记模板

### `.templates/新笔记.md`
基础笔记模板，含创建/更新时间 frontmatter。

### `.templates/日记模板.md`
日记专用模板，含 daily/journal 标签，分为「今日事项」「随想」「完成」三栏。

## 四、创建初始笔记

- `📒 主页.md` — 知识库入口，含 Dataview 统计
- `日记/📅 日记索引.md` — 日记归档索引
- `项目/🚀 项目索引.md` — 项目笔记索引

## 五、初始化 Git 版本控制

```bash
cd /root/obsidian_vault
git init
git add -A
git commit -m "🎉 初始化 Obsidian 知识库"
```

### `.gitignore` 配置
排除：`workspace`、`cache`、`plugins/`、`themes/`、`.DS_Store`、`Thumbs.db`

### 同步脚本 (`sync.sh`)
支持 `push`/`pull` 两种模式，自动 commit 后推拉。

## 六、最终目录结构

```
/root/obsidian_vault/
├── 📒 主页.md
├── README.md
├── sync.sh
├── .gitignore
├── .obsidian/
│   ├── app.json
│   ├── appearance.json
│   ├── core-plugins.json
│   ├── core-plugins-migration.json
│   ├── community-plugins.json
│   ├── hotkeys.json
│   └── types.json
├── .templates/
│   ├── 新笔记.md
│   └── 日记模板.md
├── 日记/
│   └── 📅 日记索引.md
├── 项目/
│   └── 🚀 项目索引.md
├── 附件/
├── 归档/
└── .git/
```

---

## 七、后续使用方式

### 方式 A：服务器终端编辑
```bash
ssh 到服务器后直接 vim / vscode server 编辑 Markdown 文件
```

### 方式 B：GitHub 跨设备同步
```bash
cd /root/obsidian_vault
git remote add origin <你的 GitHub 仓库>
git branch -M main
git push -u origin main
```
本地电脑克隆后，用 Obsidian 打开即可双向同步。

### 方式 C：Remotely Save 插件
在 Obsidian 社区插件安装 Remotely Save，配置 WebDAV/S3/阿里云盘等。

---

## 八、验证结果

- ✅ 配置写入：13 个配置/笔记文件
- ✅ Git 仓库：已初始化，2 次 commit
- ✅ 同步脚本：`sync.sh` 可执行
- ✅ 路径绑定：`/root/obsidian_vault`
