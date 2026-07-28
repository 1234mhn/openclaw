# 美剧英语口语复利笔记SOP

> 以《摩登家庭》为例，单集整理：单词精讲 + 练习 → PDF归档

---

## 整体流程
**提取字幕 → 整理单词表+短语+练习 → 生成PDF → 归档到英语库**

---

## 整体结构
**单词表（3类） + 短语表 + 练习（3部分） + 答案**

---

## 1. 🔤 动词

| 字段 | 说明 | 示例 |
|:----|:-----|:------|
| 单词 | 原形 | prove |
| 音标 | 美式IPA | /pruːv/ |
| 原文 | 剧中原句 | *you don't need to prove it to them* |
| 考点 | 搭配/变形/高考热词 | prove sth to sb |

**选词标准：**
- 高考高频词（☆标出）☆☆☆=极高频
- 日常口语能用上的
- 跳过过于简单/生僻的词

## 2. 🧩 名词

| 字段 | 说明 | 示例 |
|:----|:-----|:------|
| 单词 | 原形 | orphanage |
| 音标 | 美式IPA | /ˈɔːrfənɪdʒ/ |
| 原文 | 剧中原句 | *crowded orphanage* |
| 考点 | 构词/搭配/用法 | orphan + -age |

## 3. 🎯 形容词/副词

| 字段 | 说明 | 示例 |
|:----|:-----|:------|
| 单词 | 原形 | thrilled |
| 音标 | 美式IPA | /θrɪld/ |
| 原文 | 剧中原句 | *you must be thrilled* |
| 考点 | 搭配/词形变化 | thrilled → thrilling → thrill |

## 4. 💬 短语

| 字段 | 说明 | 示例 |
|:----|:-----|:------|
| 短语 | 完整短语 | be supposed to |
| 原文 | 剧中原句 | *supposed to be nothing but joyful* |
| 考点 | 语法/含义/星级 | ☆☆☆ 本应该 |

---

## 5. 📝 练习（三部分）

### 一、英英释义 → 写单词（8~10题）
给英文释义，填对应的单词。
```
例：to take a child into your family legally → __adopt__
```

### 二、台词仿写（3~4题）
保留剧中句式，换词填空。
```
例：
原句："I'm bound to be a little surprised."
仿写：Students _____ feel nervous before an exam.
答案：are bound to
```

### 三、中译英（3~4题）
给中文句子，翻译成英文。提示括号内给关键词。
```
例：
中文：他在会议上犯了一个粗心的错误。
提示：(careless / mistake)
答案：He made a careless mistake at the meeting.
```

## 6. 🔑 答案
练习三部分的答案汇总

---

## 7. 📄 PDF生成

完成单词表和练习后，按以下步骤生成PDF并归档：

### 7.1 准备HTML
按S01E03的PDF风格模板，创建HTML文件：
- 标题/分隔线/表格格式与前几集保持一致
- 字体：Noto Sans SC / DejaVu Sans
- 主题色：#2a6f97（标题蓝） #c0392b（装饰红）
- 练习区灰底 #f9f7f4，答案区绿底 #f0f5ed

### 7.2 生成PDF
```bash
weasyprint /tmp/S0XEYY_notes.html "目标路径/S0XEYY_单词精讲_完整版.pdf"
```

### 7.3 归档位置
```
语言库/英语库/摩登家庭词汇/S0XEYY_单词精讲_完整版.pdf
```

### 7.4 不发消息
PDF生成后直接归档，截图不发，文件不发，除非用户主动问。

---

## 选词指南

**核心原则：根据字幕内容灵活筛选，不凑数。**

| 优先级 | 来源 | 例子 |
|:-----:|:-----|:------|
| ⭐⭐⭐ | 高考考纲词 | mistake, accident, prove, charge |
| ⭐⭐ | 高考阅读常见词 | emotional, passionate, relieved |
| ⭐ | 实用口语词 | adorable, shoot, quit, stare |
| — | 跳过生僻/专有名词 | 人名、地名、专业术语 |

**筛选标准：**
- 一集一般提取15~25个单词 + 5~10个短语
- 每个类别的数量不固定，看字幕里出现多少有用词
- **太简单的词不选**（like, want, go, come）
- **太生僻的词不选**（专有名词、古语、俚语）
- 优先选：高考高频词 > 阅读常见词 > 实用口语词

## 🚫 禁用格式
- ❌ 不用表格外多余的描述
- ❌ 不列语法大段讲解
