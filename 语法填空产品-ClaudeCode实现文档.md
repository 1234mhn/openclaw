# 语法填空智能练习系统 — Claude Code 实现文档

---

## 一、项目结构

```
grammar-fill/
├── package.json              # Node.js 项目配置
├── server.js                 # 后端入口文件
├── database.js               # SQLite 数据库初始化 + 操作
├── routes/
│   ├── students.js           # 学生管理接口
│   ├── exercises.js          # 做题相关接口
│   ├── reports.js            # 学习报告接口
│   └── ai-questions.js       # AI出题接口
├── utils/
│   ├── blank-parser.js       # 识别文章中的空位
│   ├── answer-grader.js      # 批改答案
│   ├── error-analyzer.js     # 错因分析
│   └── teaching-logic.js     # 解题思路生成（基于你的教学体系）
├── public/
│   ├── index.html            # 首页
│   ├── exercise.html         # 做题页
│   ├── report.html           # 报告页
│   ├── teacher.html          # 老师面板
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── api.js            # 调用后端的函数
│       ├── exercise.js       # 做题页逻辑
│       ├── report.js         # 报告页逻辑
│       ├── teacher.js        # 老师面板逻辑
│       └── teaching-logic.js # 前端解题思路展示逻辑
└── data/
    └── database.sqlite       # SQLite 数据库文件（自动生成）
```

---

## 二、数据库设计（SQLite）

### 表1：students（学生表）

```sql
CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id TEXT UNIQUE NOT NULL,    -- 老师分配的学号，如"S001"
  name TEXT NOT NULL,                  -- 学生姓名
  level TEXT NOT NULL CHECK(level IN ('junior', 'senior')),  -- 初中/高中
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 表2：exercises（练习记录表）

```sql
CREATE TABLE exercises (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id TEXT NOT NULL,            -- 关联学生
  article_text TEXT NOT NULL,          -- 原始文章全文
  blank_count INTEGER NOT NULL,        -- 空位数量
  score INTEGER,                       -- 得分
  total INTEGER,                       -- 总分
  level TEXT NOT NULL,                 -- 初中/高中
  is_ai_generated INTEGER DEFAULT 0,   -- 是否AI生成
  weak_points TEXT,                    -- 薄弱点JSON数组
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(student_id)
);
```

### 表3：answers（每题答案记录）

```sql
CREATE TABLE answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  exercise_id INTEGER NOT NULL,        -- 关联练习
  blank_index INTEGER NOT NULL,        -- 第几个空(从0开始)
  student_answer TEXT,                 -- 学生填的答案
  correct_answer TEXT NOT NULL,        -- 正确答案
  is_correct INTEGER NOT NULL,         -- 0错误 1正确
  error_type TEXT,                     -- 错因类型
  knowledge_point TEXT,                -- 知识点类型
  teaching_path TEXT,                  -- 解题思路JSON
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);
```

### 表4：vocabulary（单词收藏）

```sql
CREATE TABLE vocabulary (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id TEXT NOT NULL,
  word TEXT NOT NULL,
  meaning TEXT,                        -- 释义
  example_sentence TEXT,               -- 例句
  article_source TEXT,                 -- 来源文章
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(student_id)
);
```

### 表5：mistake_book（错题本）

```sql
CREATE TABLE mistake_book (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id TEXT NOT NULL,
  exercise_id INTEGER NOT NULL,
  blank_index INTEGER NOT NULL,
  question_context TEXT,               -- 题目上下文
  student_answer TEXT,
  correct_answer TEXT,
  error_type TEXT,
  teaching_path TEXT,                  -- 解题思路
  reviewed INTEGER DEFAULT 0,          -- 是否已复习
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (student_id) REFERENCES students(student_id),
  FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);
```

---

## 三、API 接口设计

### 基础 URL：`http://服务器IP:3000/api`

### 3.1 学生接口

**POST /api/students/login** — 学生登录
```
请求：{ student_id: "S001", name: "张三", level: "senior" }
响应：{ success: true, student: { id, student_id, name, level } }
```

### 3.2 做题接口

**POST /api/exercises/create** — 创建一次练习
```
请求：{
  student_id: "S001",
  article_text: "Tom ____ (go) to school every day. He ____ (be) a good student.",
  level: "senior"
}
响应：{
  success: true,
  exercise: {
    id: 1,
    blanks: [
      { index: 0, correct_answer: "goes" },
      { index: 1, correct_answer: "is" }
    ]
  }
}
```

**POST /api/exercises/submit** — 提交答案
```
请求：{
  exercise_id: 1,
  student_id: "S001",
  answers: [
    { blank_index: 0, answer: "goes" },
    { blank_index: 1, answer: "am" }
  ]
}
响应：{
  success: true,
  results: [
    {
      blank_index: 0,
      is_correct: true,
      correct_answer: "goes",
      teaching_path: { ... }        // 解题思路JSON
    },
    {
      blank_index: 1,
      is_correct: false,
      correct_answer: "is",
      error_type: "时态/语态错误",
      teaching_path: { ... }
    }
  ],
  score: 1,
  total: 2
}
```

### 3.3 报告接口

**GET /api/reports/:exercise_id** — 单次练习报告
```
响应：{
  exercise_id: 1,
  score: 1,
  total: 2,
  accuracy: "50%",
  knowledge_stats: [
    { point: "时态", correct: 1, total: 1, rate: "100%" },
    { point: "主谓一致", correct: 0, total: 1, rate: "0%" }
  ],
  weak_points: ["主谓一致"],
  error_distribution: {
    "时态/语态错误": 1
  }
}
```

**GET /api/reports/student/:student_id** — 学生总体报告
```
响应：{
  student_id: "S001",
  total_exercises: 10,
  overall_accuracy: "72%",
  weak_points_ranking: [
    { point: "非谓语", accuracy: "40%", count: 15 },
    { point: "介词", accuracy: "55%", count: 10 },
    ...
  ],
  trend: [
    { date: "2026-05-01", accuracy: "60%" },
    { date: "2026-05-08", accuracy: "75%" },
    ...
  ]
}
```

### 3.4 AI出题接口

**POST /api/ai-questions/generate** — 根据薄弱点生成题目
```
请求：{
  student_id: "S001",
  weak_points: ["非谓语", "介词"],
  level: "senior",
  count: 10     // 生成10个空的文章
}
响应：{
  success: true,
  article: "The key to _____ (learn) a language is practice. Many students are interested _____ improving their English skills.",
  blanks: [
    { index: 0, correct_answer: "learning", knowledge_point: "非谓语" },
    { index: 1, correct_answer: "in", knowledge_point: "介词" }
  ]
}
```

### 3.5 老师面板接口

**GET /api/teacher/overview** — 全班概览
```
响应：{
  total_students: 30,
  total_exercises: 150,
  class_weak_points: [
    { point: "非谓语", error_count: 80, affected_students: 20 },
    { point: "介词", error_count: 65, affected_students: 18 }
  ]
}
```

**GET /api/teacher/student/:student_id** — 某个学生的详细数据
```
响应：{ student info + 所有练习记录 + 薄弱点变化 }
```

**GET /api/teacher/class-common-errors** — 全班共性错误TOP5
```
响应：[{ error_type, count, suggestion }, ...]
```

---

## 四、前端完整实现

### 4.0 全局样式 (css/style.css)

```css
/* ========== 全局变量 ========== */
:root {
  --primary: #4A90D9;           /* 主色 - 教育蓝 */
  --primary-dark: #357ABD;      /* 深蓝 - hover */
  --primary-light: #E8F0FE;     /* 浅蓝 - 背景 */
  --success: #52C41A;           /* 绿色 - 正确 */
  --danger: #FF4D4F;           /* 红色 - 错误 */
  --warning: #FAAD14;          /* 黄色 - 警告 */
  --bg: #F5F7FA;               /* 页面背景 */
  --card-bg: #FFFFFF;          /* 卡片背景 */
  --text: #1A1A2E;            /* 主文字色 */
  --text-secondary: #666;     /* 次要文字 */
  --border: #E8E8E8;          /* 边框色 */
  --shadow: 0 2px 12px rgba(0,0,0,0.08);
  --shadow-hover: 0 4px 20px rgba(0,0,0,0.15);
  --radius: 12px;
  --radius-sm: 8px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  min-height: 100vh;
}

/* ========== 通用组件 ========== */

/* 卡片容器 - 带入场动画 */
.card {
  background: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 24px;
  transition: var(--transition);
  animation: cardFadeIn 0.4s ease-out;
}

.card:hover {
  box-shadow: var(--shadow-hover);
}

/* 入场动画 */
@keyframes cardFadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 按钮 - 主按钮 */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 32px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: var(--radius-sm);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(74, 144, 217, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}

/* 按钮点击涟漪效果 */
.btn-primary::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-primary:active::after {
  width: 300px;
  height: 300px;
}

/* 输入框 */
.input-field {
  width: 100%;
  padding: 10px 16px;
  border: 2px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 16px;
  transition: var(--transition);
  outline: none;
}

.input-field:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(74, 144, 217, 0.15);
}

/* 加载动画 */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* 淡入淡出过渡 */
.fade-enter {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 滑入动画 */
.slide-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

/* 摇晃动画 - 用于答错时的提示 */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.shake {
  animation: shake 0.3s ease-in-out;
}

/* 脉冲动画 - 用于薄弱点高亮 */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

---

### 4.1 首页 (index.html) 完整实现

#### HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>语法填空智能练习</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- 顶部装饰条 -->
  <div class="top-bar"></div>

  <div class="container">
    <!-- Logo区 -->
    <div class="hero">
      <div class="logo-icon">📝</div>
      <h1 class="title">语法填空智能练习</h1>
      <p class="subtitle">做题 → 纠错 → 分析 → 进步</p>
    </div>

    <!-- 学段选择卡片 (水平排列) -->
    <div class="level-selector">
      <div class="level-card junior" onclick="selectLevel('junior')">
        <div class="level-icon">📘</div>
        <div class="level-name">初中</div>
        <div class="level-desc">初一 ~ 初三</div>
      </div>
      <div class="level-card senior" onclick="selectLevel('senior')">
        <div class="level-icon">📙</div>
        <div class="level-name">高中</div>
        <div class="level-desc">高一 ~ 高三</div>
      </div>
    </div>

    <!-- 登录区 -->
    <div class="login-card card">
      <h3>👋 开始练习</h3>
      <div class="form-group">
        <label>学生ID</label>
        <input type="text" id="studentId" class="input-field" placeholder="老师分配的学号，如 S001">
      </div>
      <div class="form-group">
        <label>姓名</label>
        <input type="text" id="studentName" class="input-field" placeholder="你的名字">
      </div>
      <button class="btn-primary" onclick="startExercise()">
        🚀 开始练习
      </button>
    </div>

    <!-- 学习概览 (登录后显示) -->
    <div id="overview" class="overview-card card" style="display:none">
      <h3>📊 我的学习概览</h3>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number" id="totalExercises">0</div>
          <div class="stat-label">总练习</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" id="totalAccuracy">0%</div>
          <div class="stat-label">正确率</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" id="weakPointDisplay">--</div>
          <div class="stat-label">薄弱点</div>
        </div>
      </div>
      <div class="trend-section">
        <h4>📈 正确率趋势</h4>
        <canvas id="trendChart"></canvas>
      </div>
    </div>
  </div>

  <script src="js/api.js"></script>
  <script src="js/index.js"></script>
</body>
</html>
```

#### CSS 专属样式

```css
/* 首页独有样式放在 style.css 底部 */

.top-bar {
  height: 4px;
  background: linear-gradient(135deg, var(--primary), #7B68EE);
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
  animation: cardFadeIn 0.6s ease-out;
}

.logo-icon {
  font-size: 64px;
  margin-bottom: 16px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
}

.subtitle {
  font-size: 16px;
  color: var(--text-secondary);
  letter-spacing: 2px;
}

/* 学段选择卡片 */
.level-selector {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  animation: cardFadeIn 0.5s ease-out 0.2s both;
}

.level-card {
  flex: 1;
  padding: 24px;
  background: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  border: 3px solid transparent;
}

.level-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.level-card.selected {
  border-color: var(--primary);
  background: var(--primary-light);
}

.level-card.junior.selected { border-color: #4A90D9; }
.level-card.senior.selected { border-color: #7B68EE; }

.level-icon { font-size: 48px; margin-bottom: 8px; }
.level-name { font-size: 20px; font-weight: 600; margin-bottom: 4px; }
.level-desc { font-size: 14px; color: var(--text-secondary); }

/* 登录卡片 */
.login-card {
  animation: cardFadeIn 0.5s ease-out 0.4s both;
}

.login-card h3 { margin-bottom: 20px; }

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text-secondary);
}

/* 统计数据网格 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: 20px 0;
}

.stat-item {
  text-align: center;
  padding: 16px;
  background: var(--bg);
  border-radius: var(--radius-sm);
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
}

.stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 4px;
}
```

#### JS 逻辑 (js/index.js)

```javascript
let selectedLevel = null;

// 选择学段 - 带动画效果
function selectLevel(level) {
  selectedLevel = level;
  document.querySelectorAll('.level-card').forEach(el => {
    el.classList.remove('selected');
  });
  document.querySelector(`.level-card.${level}`).classList.add('selected');

  // 卡片选中动画
  const card = document.querySelector(`.level-card.${level}`);
  card.style.transform = 'scale(0.95)';
  setTimeout(() => {
    card.style.transform = '';
  }, 200);
}

// 开始练习
async function startExercise() {
  const studentId = document.getElementById('studentId').value.trim();
  const name = document.getElementById('studentName').value.trim();

  if (!selectedLevel) {
    showToast('请先选择初中或高中', 'warning');
    return;
  }
  if (!studentId || !name) {
    showToast('请输入学生ID和姓名', 'warning');
    return;
  }

  // 调用后端登录/注册
  const res = await api.login(studentId, name, selectedLevel);
  if (res.success) {
    // 保存到 sessionStorage
    sessionStorage.setItem('student', JSON.stringify(res.student));
    // 跳转到做题页
    window.location.href = 'exercise.html';
  }
}

// Toast 提示组件
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type} slide-in`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // 2秒后自动消失
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}
```

---

### 4.2 做题页 (exercise.html) 完整实现

#### HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>做题 - 语法填空</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- 顶部导航栏 -->
  <nav class="exercise-nav">
    <button class="nav-back" onclick="goBack()">← 返回</button>
    <span class="nav-title">语法填空练习</span>
    <span class="nav-level" id="navLevel">高中</span>
  </nav>

  <div class="exercise-container">
    <!-- 题目输入区 -->
    <div class="input-section card" id="inputSection">
      <h3>📝 粘贴题目</h3>
      <p class="hint">用 ___ 或 (提示词) 标记空位</p>
      <textarea id="articleInput" class="textarea-field"
        placeholder="示例：&#10;Tom ____ (go) to school every day.&#10;His mother ____ (be) a teacher."
        rows="6"></textarea>
      <button class="btn-primary" onclick="parseArticle()">
        🔍 识别空位
      </button>
    </div>

    <!-- 答题区 -->
    <div id="exerciseArea" style="display:none">
      <!-- 文章展示（带输入框） -->
      <div class="article-card card fade-enter" id="articleCard">
        <h3>📖 请填写答案</h3>
        <div id="articleContent" class="article-content"></div>
        <button class="btn-primary submit-btn" onclick="submitAnswers()">
          ✅ 提交批改
        </button>
      </div>

      <!-- 批改结果区 -->
      <div id="resultSection" class="result-card card" style="display:none">
        <div class="score-bar">
          <span class="score-text" id="scoreDisplay">得分: 0/0</span>
          <span class="accuracy-badge" id="accuracyBadge">正确率: 0%</span>
        </div>
        <div id="resultList"></div>
        <div class="result-actions">
          <button class="btn-primary" onclick="viewReport()">📊 查看报告</button>
          <button class="btn-primary" onclick="startNew()">📝 再做一题</button>
        </div>
      </div>
    </div>
  </div>

  <script src="js/api.js"></script>
  <script src="js/exercise.js"></script>
</body>
</html>
```

#### CSS 专属样式

```css
/* 做题页样式 */
.exercise-nav {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background: var(--card-bg);
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  position: sticky;
  top: 0;
  z-index: 100;
  animation: slideIn 0.3s ease-out;
}

.nav-back {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.nav-back:hover { background: var(--bg); }

.nav-title {
  flex: 1;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
}

.nav-level {
  padding: 4px 12px;
  background: var(--primary-light);
  border-radius: 20px;
  font-size: 14px;
  color: var(--primary);
  font-weight: 600;
}

.exercise-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 20px;
}

/* 题目输入框 */
.textarea-field {
  width: 100%;
  padding: 16px;
  border: 2px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 16px;
  font-family: inherit;
  line-height: 1.8;
  resize: vertical;
  transition: var(--transition);
  outline: none;
}

.textarea-field:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(74, 144, 217, 0.15);
}

.hint {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 12px;
}

/* 文章展示区 */
.article-content {
  line-height: 2.4;
  font-size: 18px;
  padding: 16px;
  background: var(--bg);
  border-radius: var(--radius-sm);
  margin: 16px 0;
}

/* 空位输入框 - 行内显示 */
.blank-input {
  display: inline-block;
  width: 80px;
  padding: 4px 8px;
  border: none;
  border-bottom: 2px dashed var(--primary);
  background: transparent;
  font-size: 18px;
  text-align: center;
  outline: none;
  transition: var(--transition);
  margin: 0 2px;
  font-family: inherit;
}

.blank-input:focus {
  border-bottom-color: var(--primary-dark);
  border-bottom-style: solid;
  background: var(--primary-light);
}

.blank-input.correct {
  border-bottom-color: var(--success);
  background: #F6FFED;
}

.blank-input.wrong {
  border-bottom-color: var(--danger);
  background: #FFF2F0;
  animation: shake 0.3s ease-in-out;
}

/* 思路按钮 */
.thought-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 10px;
  font-size: 12px;
  background: var(--primary-light);
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 12px;
  cursor: pointer;
  transition: var(--transition);
  margin-left: 4px;
}

.thought-btn:hover {
  background: var(--primary);
  color: #fff;
}

/* 思路下拉卡片 - 展开/收起带动画 */
.thought-card {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height 0.4s ease-out, opacity 0.3s ease-out, margin 0.3s ease-out;
  margin: 0;
}

.thought-card.open {
  max-height: 500px;
  opacity: 1;
  margin: 12px 0;
}

.thought-content {
  padding: 16px;
  background: #FAFBFF;
  border: 1px solid var(--primary-light);
  border-radius: var(--radius-sm);
  border-left: 4px solid var(--primary);
}

.thought-step {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px dashed #eee;
}

.thought-step:last-child { border-bottom: none; }

.thought-step-num {
  width: 24px;
  height: 24px;
  background: var(--primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}

/* 提交按钮 */
.submit-btn {
  width: 100%;
  padding: 14px;
  font-size: 18px;
  margin-top: 20px;
}

/* 批改结果区 */
.score-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: var(--bg);
  border-radius: var(--radius-sm);
  margin-bottom: 20px;
}

.score-text { font-size: 20px; font-weight: 700; }

.accuracy-badge {
  padding: 6px 16px;
  border-radius: 20px;
  font-weight: 600;
}

.accuracy-badge.high { background: #F6FFED; color: var(--success); }
.accuracy-badge.medium { background: #FFFBE6; color: var(--warning); }
.accuracy-badge.low { background: #FFF2F0; color: var(--danger); }

/* 每个结果的条目 - 逐条动画入场 */
.result-item {
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  margin-bottom: 8px;
  animation: cardFadeIn 0.3s ease-out;
  transition: var(--transition);
}

.result-item:hover {
  background: var(--bg);
}

.result-item.correct { border-left: 4px solid var(--success); }
.result-item.wrong { border-left: 4px solid var(--danger); }

.result-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}

.result-actions .btn-primary { flex: 1; }

/* 错因分析弹窗 */
.error-analysis {
  padding: 12px;
  margin-top: 8px;
  background: #FFF2F0;
  border-radius: var(--radius-sm);
  border: 1px solid #FFCCC7;
  animation: slideIn 0.3s ease-out;
}

.error-type-tag {
  display: inline-block;
  padding: 2px 10px;
  background: var(--danger);
  color: #fff;
  border-radius: 10px;
  font-size: 12px;
  margin-bottom: 8px;
}
```

#### JS 逻辑 (js/exercise.js)

```javascript
let currentExerciseId = null;
let blanks = [];

// 识别空位 - 带加载状态
async function parseArticle() {
  const text = document.getElementById('articleInput').value.trim();
  if (!text) {
    showToast('请先输入题目', 'warning');
    return;
  }

  const btn = event.target;
  btn.innerHTML = '<span class="loading"></span> 解析中...';
  btn.disabled = true;

  try {
    const res = await api.createExercise({
      student_id: getStudent().student_id,
      article_text: text,
      level: getStudent().level
    });

    if (res.success) {
      currentExerciseId = res.exercise.id;
      blanks = res.exercise.blanks;
      renderArticle(res.exercise);
      document.getElementById('inputSection').style.display = 'none';
      document.getElementById('exerciseArea').style.display = 'block';
    }
  } finally {
    btn.innerHTML = '🔍 识别空位';
    btn.disabled = false;
  }
}

// 渲染文章（带输入框）
function renderArticle(exercise) {
  const container = document.getElementById('articleContent');
  container.innerHTML = '';

  // 按段落和空位拆分文章
  const parts = splitArticleWithBlanks(exercise.processed_text);

  parts.forEach(part => {
    if (part.type === 'text') {
      // 普通文本
      const span = document.createElement('span');
      span.textContent = part.content;
      container.appendChild(span);
    } else if (part.type === 'blank') {
      // 空位 → 输入框 + 思路按钮
      const wrapper = document.createElement('span');
      wrapper.className = 'blank-wrapper';
      wrapper.style.display = 'inline-block';
      wrapper.style.margin = '0 4px';

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'blank-input';
      input.dataset.index = part.index;
      input.placeholder = '?';
      wrapper.appendChild(input);

      const btn = document.createElement('button');
      btn.className = 'thought-btn';
      btn.textContent = '💡思路';
      btn.onclick = () => toggleThought(part.index);
      wrapper.appendChild(btn);

      // 思路卡片（隐藏）
      const thoughtCard = document.createElement('div');
      thoughtCard.className = 'thought-card';
      thoughtCard.id = `thought-${part.index}`;
      wrapper.appendChild(thoughtCard);

      container.appendChild(wrapper);
    }
  });
}

// 展开/收起思路 - 带动画
toggleThought(index) {
  const card = document.getElementById(`thought-${index}`);
  const isOpen = card.classList.contains('open');

  // 先获取思路内容
  if (!card.dataset.loaded) {
    const blank = blanks[index];
    card.innerHTML = `
      <div class="thought-content">
        <div class="thought-step">
          <span class="thought-step-num">1</span>
          <div>句子有其他谓语吗？<br><strong>没有，缺谓语</strong></div>
        </div>
        <div class="thought-step">
          <span class="thought-step-num">2</span>
          <div>时态: <strong>一般现在时</strong></div>
        </div>
        <div class="thought-step">
          <span class="thought-step-num">3</span>
          <div>主谓一致 <strong>→ 填 ${blank.correct_answer}</strong></div>
        </div>
      </div>
    `;
    card.dataset.loaded = 'true';
  }

  // 展开/收起动画（CSS transition）
  card.classList.toggle('open');
}

// 提交批改
async function submitAnswers() {
  const inputs = document.querySelectorAll('.blank-input');
  const answers = [];
  let allFilled = true;

  inputs.forEach(input => {
    const val = input.value.trim();
    if (!val) allFilled = false;
    answers.push({
      blank_index: parseInt(input.dataset.index),
      answer: val
    });

    // 输入框闪烁提示
    if (!val) {
      input.style.borderBottomColor = 'var(--warning)';
      setTimeout(() => { input.style.borderBottomColor = ''; }, 1000);
    }
  });

  if (!allFilled) {
    showToast('还有空没填完哦！', 'warning');
    return;
  }

  // 提交
  const res = await api.submitExercise(currentExerciseId, getStudent().student_id, answers);
  if (res.success) {
    showResults(res.results);
  }
}

// 显示批改结果 - 逐个动画出现
function showResults(results) {
  const container = document.getElementById('resultList');
  container.innerHTML = '';

  // 更新得分
  document.getElementById('scoreDisplay').textContent = `得分: ${res.score}/${res.total}`;
  const rate = Math.round(res.score / res.total * 100);
  const badge = document.getElementById('accuracyBadge');
  badge.textContent = `正确率: ${rate}%`;
  badge.className = `accuracy-badge ${rate >= 80 ? 'high' : rate >= 50 ? 'medium' : 'low'}`;

  // 逐条动画显示（每条间隔100ms）
  results.forEach((result, i) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = `result-item ${result.is_correct ? 'correct' : 'wrong'}`;
      div.style.animationDelay = `${i * 0.1}s`;
      div.innerHTML = `
        <div>空${result.blank_index + 1}: 
          <strong>你的答案: ${result.student_answer}</strong>
          ${result.is_correct ? '✅' : `❌ 正确答案: ${result.correct_answer}`}
        </div>
        ${!result.is_correct ? `
          <div class="error-analysis fade-enter">
            <span class="error-type-tag">${result.error_type}</span>
            <div>${result.analysis}</div>
          </div>
        ` : ''}
      `;
      container.appendChild(div);
    }, i * 100);
  });

  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('resultSection').scrollIntoView({ behavior: 'smooth' });
}
```

---

### 4.3 学习报告页 (report.html) 完整实现

#### HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>学习报告</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav class="exercise-nav">
    <button class="nav-back" onclick="goBack()">← 返回</button>
    <span class="nav-title">📊 学习报告</span>
  </nav>

  <div class="report-container">
    <!-- 得分概览卡片 -->
    <div class="card score-overview fade-enter">
      <h3>本次练习</h3>
      <div class="score-circle-container">
        <svg class="score-circle" viewBox="0 0 120 120">
          <circle class="bg-circle" cx="60" cy="60" r="54" />
          <circle class="progress-circle" id="progressCircle" cx="60" cy="60" r="54"
            stroke-dasharray="339.292" stroke-dashoffset="339.292" />
          <text class="score-text-center" id="scoreText" x="60" y="60">0%</text>
        </svg>
      </div>
      <div class="score-detail">
        得分: <span id="reportScore">0</span>/<span id="reportTotal">0</span>
      </div>
    </div>

    <!-- 知识点正确率 -->
    <div class="card knowledge-card fade-enter">
      <h3>📊 各知识点正确率</h3>
      <div id="knowledgeList" class="knowledge-list"></div>
    </div>

    <!-- 薄弱点排名 -->
    <div class="card weak-card fade-enter">
      <h3>⚠️ 薄弱点排名</h3>
      <div id="weakList" class="weak-list"></div>
    </div>

    <!-- 操作按钮 -->
    <div class="report-actions">
      <button class="btn-primary" onclick="generatePractice()">
        🎯 生成针对性练习
      </button>
      <button class="btn-primary" onclick="viewHistory()">
        📈 查看历史趋势
      </button>
    </div>
  </div>

  <script src="js/api.js"></script>
  <script src="js/report.js"></script>
</body>
</html>
```

#### CSS 专属样式

```css
/* 报告页样式 */
.report-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 24px 20px;
}

.report-container .card {
  margin-bottom: 20px;
}

/* SVG 环形图 */
.score-circle-container {
  display: flex;
  justify-content: center;
  margin: 24px 0;
}

.score-circle {
  width: 160px;
  height: 160px;
  transform: rotate(-90deg);
}

.bg-circle {
  fill: none;
  stroke: #F0F0F0;
  stroke-width: 8;
}

.progress-circle {
  fill: none;
  stroke: var(--primary);
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 339.292;
  transition: stroke-dashoffset 1.5s ease-out;
}

.score-text-center {
  transform: rotate(90deg);
  transform-origin: 60px 60px;
  font-size: 24px;
  font-weight: 700;
  fill: var(--text);
  text-anchor: middle;
  dominant-baseline: middle;
}

.score-detail {
  text-align: center;
  font-size: 18px;
  color: var(--text-secondary);
}

/* 知识点进度条 */
.knowledge-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  animation: slideIn 0.3s ease-out both;
}

.knowledge-item:last-child { border-bottom: none; }

.knowledge-name {
  width: 80px;
  font-weight: 600;
  flex-shrink: 0;
}

.progress-bar-container {
  flex: 1;
  height: 12px;
  background: #F0F0F0;
  border-radius: 6px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 1s ease-out;
  background: var(--primary);
}

.progress-bar-fill.weak { background: var(--danger); }
.progress-bar-fill.medium { background: var(--warning); }
.progress-bar-fill.strong { background: var(--success); }

.knowledge-rate {
  width: 50px;
  text-align: right;
  font-weight: 600;
}

.knowledge-badge {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
}

.knowledge-badge.weak { background: #FFF2F0; color: var(--danger); }
.knowledge-badge.strong { background: #F6FFED; color: var(--success); }

/* 薄弱点列表 */
.weak-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #FFF2F0;
  border-radius: var(--radius-sm);
  margin-bottom: 8px;
  border: 1px solid #FFCCC7;
  animation: shake 0.5s ease-in-out;
}

.weak-rank {
  width: 28px;
  height: 28px;
  background: var(--danger);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.weak-info {
  flex: 1;
}

.weak-name { font-weight: 600; }
.weak-rate { font-size: 14px; color: var(--danger); }

/* 报告操作按钮 */
.report-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
```

#### JS 逻辑 (js/report.js)

```javascript
// 加载报告 - 带环形图动画
async function loadReport(exerciseId) {
  const res = await api.getReport(exerciseId);
  if (!res.success) return;

  // 更新得分
  document.getElementById('reportScore').textContent = res.score;
  document.getElementById('reportTotal').textContent = res.total;

  const rate = Math.round(res.score / res.total * 100);

  // SVG 环形图动画 - 延迟触发
  setTimeout(() => {
    const circle = document.getElementById('progressCircle');
    const circumference = 339.292;
    const offset = circumference - (rate / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // 根据正确率变色
    if (rate >= 80) circle.style.stroke = 'var(--success)';
    else if (rate >= 50) circle.style.stroke = 'var(--warning)';
    else circle.style.stroke = 'var(--danger)';
  }, 300);

  // 数字从0滚动到目标值
  animateNumber('scoreText', 0, rate, 1500);

  // 渲染知识点
  renderKnowledgeList(res.knowledge_stats);

  // 渲染薄弱点
  renderWeakPoints(res.weak_points);
}

// 数字滚动动画
function animateNumber(elementId, start, end, duration) {
  const el = document.getElementById(elementId);
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOut 缓动
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (end - start) * eased);
    el.textContent = `${current}%`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// 渲染知识点列表 - 进度条逐个动画
function renderKnowledgeList(stats) {
  const container = document.getElementById('knowledgeList');
  container.innerHTML = '';

  stats.forEach((stat, i) => {
    const item = document.createElement('div');
    item.className = 'knowledge-item';
    item.style.animationDelay = `${i * 0.15}s`;

    const rate = Math.round(stat.correct / stat.total * 100);
    const level = rate >= 80 ? 'strong' : rate >= 50 ? 'medium' : 'weak';

    item.innerHTML = `
      <span class="knowledge-name">${stat.point}</span>
      <div class="progress-bar-container">
        <div class="progress-bar-fill ${level}"
             style="width: 0%"
             data-target="${rate}%"></div>
      </div>
      <span class="knowledge-rate">${rate}%</span>
      <span class="knowledge-badge ${level}">${level === 'weak' ? '⚠️薄弱' : '✅'}</span>
    `;
    container.appendChild(item);

    // 延迟触发进度条动画
    setTimeout(() => {
      const bar = item.querySelector('.progress-bar-fill');
      bar.style.width = bar.dataset.target;
    }, 500 + i * 150);
  });
}
```

---

### 4.4 老师面板 (teacher.html) 完整实现

#### HTML 结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>老师面板</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <nav class="exercise-nav">
    <span class="nav-title">👩‍🏫 老师面板</span>
  </nav>

  <div class="teacher-container">
    <!-- 概览卡片 -->
    <div class="card summary-card fade-enter">
      <div class="summary-grid">
        <div class="summary-item">
          <div class="summary-number" id="totalStudents">0</div>
          <div class="summary-label">学生总数</div>
        </div>
        <div class="summary-item">
          <div class="summary-number" id="totalExercisesTeacher">0</div>
          <div class="summary-label">总练习次数</div>
        </div>
        <div class="summary-item">
          <div class="summary-number" id="classAccuracy">0%</div>
          <div class="summary-label">全班正确率</div>
        </div>
      </div>
    </div>

    <!-- 全班共性错误TOP5 -->
    <div class="card error-top-card fade-enter">
      <h3>🔥 全班共性错误 TOP5</h3>
      <div id="commonErrors" class="common-error-list"></div>
    </div>

    <!-- 学生列表 -->
    <div class="card student-list-card fade-enter">
      <h3>📋 学生列表</h3>
      <div class="student-search">
        <input type="text" class="input-field" placeholder="搜索学生..." oninput="filterStudents()">
      </div>
      <div id="studentList" class="student-list"></div>
    </div>
  </div>

  <script src="js/api.js"></script>
  <script src="js/teacher.js"></script>
</body>
</html>
```

#### 老师面板 CSS

```css
.teacher-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 24px 20px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.summary-item {
  text-align: center;
  padding: 20px;
  background: var(--bg);
  border-radius: var(--radius-sm);
}

.summary-number {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary);
}

.common-error-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
}

.common-error-rank {
  width: 32px;
  font-weight: 700;
  color: var(--danger);
}

.common-error-name { flex: 1; font-weight: 600; }
.common-error-count { color: var(--text-secondary); }

.student-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: var(--transition);
}

.student-item:hover { background: var(--bg); }
.student-id { width: 80px; color: var(--text-secondary); }
.student-name { flex: 1; font-weight: 600; }
.student-accuracy { font-weight: 600; }

.student-accuracy.high { color: var(--success); }
.student-accuracy.medium { color: var(--warning); }
.student-accuracy.low { color: var(--danger); }
```

---

### 4.5 Toast 通知组件 (全局使用)

```css
/* Toast 通知 - 自动弹出和消失 */
.toast {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: var(--radius-sm);
  font-weight: 600;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  transition: opacity 0.3s, transform 0.3s;
  max-width: 90vw;
}

.toast-info { background: var(--primary); color: #fff; }
.toast-warning { background: var(--warning); color: #fff; }
.toast-error { background: var(--danger); color: #fff; }
.toast-success { background: var(--success); color: #fff; }
```

---

### 4.6 动画效果汇总

| 元素 | 动画 | 触发时机 | 时长 | 实现方式 |
|:--|:--|:--:|:--:|:--|
| 首页Logo图标 | 上下浮动 | 页面加载 | 3s 循环 | CSS keyframes float |
| 所有卡片 | 从下往上淡入 | 页面加载 | 0.4s | CSS animation cardFadeIn |
| 学段卡片 | 上浮+阴影 | hover | 0.3s | CSS transition transform |
| 学段选中 | 缩放弹回 | 点击 | 0.2s | JS setTimeout |
| 按钮hover | 上移2px+发光阴影 | hover | 0.3s | CSS transition |
| 按钮点击 | 涟漪扩散 | 点击 | 0.6s | CSS ::after 伪类 |
| 输入框聚焦 | 边框变色+发光 | focus | 0.3s | CSS transition |
| 答错输入框 | 左右摇晃 | 提交后 | 0.3s | CSS animation shake |
| 思路卡片 | 展开/收起 | 点击 | 0.4s | CSS max-height transition |
| 批改结果 | 逐条淡入 | 提交后 | 每条间隔0.1s | JS setTimeout + CSS animation |
| 错因分析 | 从左侧滑入 | 结果展示 | 0.3s | CSS animation slideIn |
| 报告环形图 | 圆弧逐渐填充 | 报告加载 | 1.5s | CSS stroke-dashoffset transition |
| 数字滚动 | 从0滚到目标值 | 报告加载 | 1.5s | JS requestAnimationFrame + easeOut |
| 知识点进度条 | 从左到右填充 | 报告加载 | 1s | CSS width transition |
| Toast通知 | 从上往下弹出 | 调用时 | 0.3s+停留2s | JS create + CSS transition |
| 页面间跳转 | 无闪烁加载 | 点击按钮 | 即时 | 直接 window.location |

---

## 五、核心算法实现

### 5.1 空位识别 (blank-parser.js)

```javascript
// 输入: "Tom ____ (go) to school. He ____ (be) ..."
// 输出: [{ index: 0, correct_answer: "goes" }, ...]

function parseBlanks(articleText) {
  // 支持两种格式:
  // 1. ___ 或 ____ 标记空位
  // 2. (go) 括号标记提示词

  const blanks = [];
  let text = articleText;

  // 正则匹配: ___ 或 (word) 或 ____(word)
  const regex = /_{3,}|\(([^)]+)\)/g;
  let match;
  let index = 0;

  while ((match = regex.exec(text)) !== null) {
    blanks.push({
      index: index,
      rawText: match[0],
      hintWord: match[1] || null,  // 括号内的提示词
      correct_answer: null          // 需后续解析
    });
    index++;
  }

  return blanks;
}
```

### 5.2 答案批改 (answer-grader.js)

```javascript
function gradeAnswer(studentAnswer, correctAnswer) {
  const normalizedStudent = studentAnswer.trim().toLowerCase();
  const normalizedCorrect = correctAnswer.trim().toLowerCase();

  // 支持多种正确形式
  const acceptedAnswers = getAcceptedAnswers(normalizedCorrect);

  return {
    is_correct: acceptedAnswers.includes(normalizedStudent),
    correct_answer: correctAnswer
  };
}

function getAcceptedAnswers(answer) {
  // 例如: "goes" 也接受 "go" 如果是一般现在时
  // 例如: "learning" 也接受 "learn" 等
  // 这个需要基于你的教学经验来扩展
  return [answer];
}
```

### 5.3 错因分析 (error-analyzer.js)

```javascript
function analyzeError(blank, studentAnswer, context) {
  const { hintWord, correct_answer, knowledge_point } = blank;

  // 根据知识点类型和错误答案判断错因
  if (knowledge_point === 'tense') {
    return {
      error_type: '时态/语态错误',
      analysis: `正确答案是 "${correct_answer}"，
                你填的是 "${studentAnswer}"。
                这里应该用一般现在时，
                因为句子中有 "every day" 这个时间信号词。`
    };
  }

  if (knowledge_point === 'non_predicate') {
    return {
      error_type: '非谓语形式错误',
      analysis: `提示词是 "${hintWord}"，
                这里需要用非谓语形式。
                根据上下文，这里表主动/目的，应该用 doing/to do。`
    };
  }

  // ... 更多错因类型
}
```

### 5.4 解题思路生成 (teaching-logic.js)

```javascript
// 核心：基于你的教学体系生成每个空的解题思路

function generateTeachingPath(blank, context) {
  const { hintWord, knowledge_point } = blank;
  const sentence = context.sentence;

  let path = {
    type: '',           // 有提示词/无提示词
    steps: [],          // 决策步骤
    reminder: '',       // 易错提醒
    conclusion: ''      // 结论
  };

  if (hintWord) {
    // === 有提示词 ===
    path.type = '有提示词';

    const wordType = identifyWordType(hintWord);
    if (wordType === 'verb') {
      // 动词决策树
      const hasOtherVerb = checkHasOtherVerb(sentence);
      path.steps.push({
        step: 1,
        question: '句子中还有其他谓语动词吗？',
        answer: hasOtherVerb ? '有' : '没有',
        action: hasOtherVerb ? '→ 用非谓语形式' : '→ 缺谓语，判断时态'
      });

      if (!hasOtherVerb) {
        const tense = determineTense(sentence);
        path.steps.push({
          step: 2,
          question: '判断时态',
          answer: `根据"${tense.signal}" → ${tense.name}`
        });
        path.steps.push({
          step: 3,
          question: '主谓一致',
          answer: `主语是${context.subject}，所以用${context.verbForm}`
        });
      } else {
        // 非谓语判断
        path.steps.push({
          step: 2,
          question: '主动还是被动？',
          answer: context.isPassive ? '被动 → done' : '主动'
        });
        path.steps.push({
          step: 3,
          question: '时间关系？',
          answer: context.timeRelation
        });
      }
    }
    // ... 更多词性
  } else {
    // === 无提示词 ===
    path.type = '无提示词';
    // 判断是冠词/介词/连词/从句引导词
    // ... 决策树逻辑
  }

  path.conclusion = `✅ 所以答案是: ${blank.correct_answer}`;

  return path;
}
```

### 5.5 AI出题 (ai-questions.js)

```javascript
async function generateQuestions(weakPoints, level) {
  const prompt = `你是一名专业的英语语法填空题出题老师。
请根据以下要求生成一篇语法填空文章：

薄弱知识点: ${weakPoints.join(', ')}
学段: ${level === 'senior' ? '高中' : '初中'}
文章长度: 约80-120词，包含10个空位

要求：
1. 空位用 ___ 标记
2. 60%的空位涉及${weakPoints[0]}
3. 30%的空位涉及${weakPoints[1]}
4. 10%的其他知识点
5. 难度匹配${level}水平
6. 文章内容贴近学生生活，主题明确

输出格式：
文章全文（空位用___标记）
---
每个空的正确答案和知识点（用JSON格式）`;

  // 调灵眸中转API
  const response = await fetch('https://灵眸AI地址/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 灵眸Key'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2000
    })
  });

  const data = await response.json();
  return parseAIResponse(data.choices[0].message.content);
}
```

---

## 六、解题思路知识库（前端展示用）

### 6.1 有提示词 → 动词决策树（前端JS实现）

```javascript
const teachingDecisionTree = {
  verb: {
    title: '有提示词 → 动词',
    firstStep: {
      question: '句子中有其他谓语动词吗？',
      options: [
        {
          label: '没有，缺谓语',
          nextSteps: [
            { label: '看时态信号词', action: 'checkTenseSignals' },
            { label: '看主语 → 主谓一致', action: 'checkSubjectAgreement' },
            { label: '看主动/被动', action: 'checkVoice' }
          ]
        },
        {
          label: '有，不缺谓语',
          nextSteps: [
            { label: '看主动/被动', action: 'checkVoice' },
            { label: '看时间关系', action: 'checkTimeRelation' },
            {
              label: '得出结论',
              rule: '同时+主动→doing / 被动→done / 将来+主动→to do / 将来+被动→to be done'
            }
          ]
        }
      ]
    }
  }
};
```

### 6.2 错因类型 → 讲解映射

```javascript
const errorExplanations = {
  '时态/语态错误': {
    icon: '⏰',
    description: '时态判断错误或主动被动混淆',
    checkList: [
      '找到时间信号词（every day, yesterday, already...）',
      '判断动作发生的时间',
      '确定对应的时态形式'
    ]
  },
  '非谓语形式错误': {
    icon: '🔗',
    description: 'doing/done/to do 三种形式选错',
    checkList: [
      '先看主动还是被动',
      '再看时间关系（同时/之前/之后）',
      'doing表主动伴随，done表被动完成，to do表目的将来'
    ]
  },
  '介词搭配错误': {
    icon: '🔤',
    description: '介词固定搭配不熟',
    checkList: [
      '记住常见搭配：interested in, good at, look forward to...',
      '注意动词+介词的不同含义'
    ]
  },
  '从句引导词错误': {
    icon: '📎',
    description: 'which/that/what/when 等引导词混淆',
    checkList: [
      '先确定是什么从句',
      '看引导词在从句中充当什么成分',
      '再根据先行词或句意确定具体用哪个'
    ]
  },
  '词性判断错误': {
    icon: '📝',
    description: '形容词和副词用错，或者词性转换错误',
    checkList: [
      '看修饰什么：名词用形容词，动词用副词',
      '看位置：系动词后用形容词，实义动词后用副词'
    ]
  },
  '长难句理解错误': {
    icon: '🌲',
    description: '句子结构复杂导致填错',
    checkList: [
      '三步剥洋葱',
      '先找主干',
      '去掉修饰成分再分析'
    ]
  }
};
```

---

## 七、后端关键实现

### 7.1 server.js 框架

```javascript
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 引入路由
const studentsRouter = require('./routes/students');
const exercisesRouter = require('./routes/exercises');
const reportsRouter = require('./routes/reports');
const aiQuestionsRouter = require('./routes/ai-questions');

app.use('/api/students', studentsRouter);
app.use('/api/exercises', exercisesRouter);
app.use('/api/reports', reportsRouter);
app.use('/api/ai-questions', aiQuestionsRouter);

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 7.2 package.json

```json
{
  "name": "grammar-fill",
  "version": "1.0.0",
  "description": "语法填空智能练习系统",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.2",
    "sqlite3": "^5.1.6",
    "cors": "^2.8.5"
  }
}
```

---

## 八、部署步骤

```bash
# 1. 在服务器上创建项目目录
mkdir -p /root/grammar-fill
cd /root/grammar-fill

# 2. 创建 package.json
# 3. 安装依赖
npm install

# 4. 创建所有源文件（按上面的项目结构）
# 5. 启动服务
node server.js

# 6. 学生访问
# http://你的服务器IP:3000

# 7. 建议用 pm2 保持后台运行
npm install -g pm2
pm2 start server.js --name grammar-fill
```

---

## 九、第一版实现清单（按优先级执行）

```
步骤1: 创建项目结构 + package.json + server.js
步骤2: 实现 database.js（建表）
步骤3: 实现 blank-parser.js（空位识别）
步骤4: 实现 answer-grader.js（答案批改）
步骤5: 实现 error-analyzer.js（错因分析）
步骤6: 实现 teaching-logic.js（解题思路）
步骤7: 实现 students 路由（登录）
步骤8: 实现 exercises 路由（创建+提交题目）
步骤9: 实现 reports 路由（报告）
步骤10: 实现 ai-questions 路由（AI出题）
步骤11: 实现前端 index.html + exercise.html + report.html
步骤12: 实现前端 teaching-logic.js（展示解题思路）
步骤13: 实现老师面板 teacher.html
步骤14: 部署到服务器
```
