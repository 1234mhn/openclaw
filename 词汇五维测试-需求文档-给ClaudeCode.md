# 五维词汇深度测试 — Claude Code 执行规范

你要生成一个完整、可直接运行的 `.html` 文件，文件名叫 `vocab-test.html`。

---

## 第1步：生成HTML骨架

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
<title>五维词汇深度测试</title>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<style>
/* 所有CSS写在这里 */
</style>
</head>
<body>

<!-- 页面容器 -->
<div class="app">

  <!-- ── 页面1：首页 ── -->
  <div class="page active" id="pageHome">
    ... 
  </div>

  <!-- ── 页面2：第一层筛选 ── -->
  <div class="page" id="pageScreen">
    ...
  </div>

  <!-- ── 页面3：第二层深度诊断 ── -->
  <div class="page" id="pageDeep">
    ...
  </div>

  <!-- ── 页面4：报告 ── -->
  <div class="page" id="pageReport">
    ...
  </div>

</div>

<script>
// 所有JS写在这里
</script>
</body>
</html>
```

⚠️ 四个页面用 `.page {display:none} .page.active {display:block}` 切换。
⚠️ JS 函数 `showPage(id)` 控制页面切换。
⚠️ 所有ID请严格按照下面的命名使用，JS会精确引用这些ID。

---

## 第2步：写CSS

### 全局样式（必须精确使用以下值）
```css
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family: -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: #f0f4f8;
  min-height: 100vh;
  color: #2c3e50;
  padding: 0 12px 40px;
}
.app { max-width: 680px; margin: 0 auto; }
.page { display: none; }
.page.active { display: block; }
```

### 颜色变量表（所有颜色直接写死，不要用CSS变量）

| 用途 | 色值 |
|------|------|
| 主色(按钮/选中态) | `#2e86ab` |
| 主色悬停 | `#237594` |
| 成功/正确 | `#38a169` |
| 警告/黄色 | `#e8a83d` |
| 错误/红色 | `#dc3545` |
| 紫色(造句维度) | `#9b59b6` |
| 页面背景 | `#f0f4f8` |
| 卡片背景 | `#ffffff` |
| 主要文字 | `#2c3e50` |
| 次要文字 | `#6c757d` |
| 浅灰边框 | `#e9ecef` |
| 极浅灰 | `#dee2e6` |

### 通用组件CSS

**按钮 btn-primary**
```css
.btn {
  padding: 14px 0; border: none; border-radius: 12px;
  font-size: 16px; font-weight: 500; cursor: pointer;
  width: 100%; transition: all .2s;
}
.btn-primary { background: #2e86ab; color: white; }
.btn-primary:hover { background: #237594; }
.btn-primary:disabled { background: #a0c4d4; cursor: not-allowed; }
```

**按钮 btn-outline**
```css
.btn-outline { background: white; border: 2px solid #dee2e6; color: #495057; }
.btn-outline:hover { border-color: #2e86ab; color: #2e86ab; }
```

**卡片 screen-card**
```css
.screen-card {
  background: white; border-radius: 16px; padding: 28px 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,.06);
  text-align: center; margin-bottom: 16px;
}
```

**选项 label（用于选择题选项）**
```css
.options { display: flex; flex-direction: column; gap: 8px; }
.options label {
  display: flex; align-items: center; gap: 10px; padding: 12px 14px;
  border: 2px solid #e9ecef; border-radius: 10px; cursor: pointer;
  font-size: 14px; transition: all .15s;
}
.options label:hover { border-color: #2e86ab; background: #f0f7fb; }
.options label.correct { border-color: #38a169; background: #e8f5e9; }
.options label.wrong { border-color: #dc3545; background: #fce4e4; }
```

**进度圆点 pdot**
```css
.pdot { width: 28px; height: 4px; border-radius: 2px; background: #dee2e6; transition: .3s; }
.pdot.current { background: #2e86ab; }
.pdot.yes { background: #38a169; }   /* 认识的 */
.pdot.no { background: #dc3545; }     /* 不认识的 */
```

**步骤圆点 sdot**
```css
.sdot {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 500;
  background: #e9ecef; color: #6c757d; transition: .3s;
}
.sdot.active { background: #2e86ab; color: white; }
.sdot.done { background: #38a169; color: white; }
```

**音标选项网格**
```css
.phonetic-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.phonetic-grid label {
  display: flex; align-items: center; justify-content: center;
  padding: 14px; font-family: 'Courier New', monospace; font-size: 17px;
  border: 2px solid #e9ecef; border-radius: 10px; cursor: pointer;
  transition: all .15s;
}
.phonetic-grid label:hover { border-color: #2e86ab; background: #f0f7fb; }
.phonetic-grid label.correct { border-color: #38a169; background: #e8f5e9; }
.phonetic-grid label.wrong { border-color: #dc3545; background: #fce4e4; }
```

**响应式**
```css
@media (max-width: 500px) {
  .phonetic-grid { grid-template-columns: 1fr; }
  .big-word { font-size: 28px !important; }
}
```

---

## 第3步：首页 HTML 结构（精确）

```html
<div class="page active" id="pageHome">
  <div style="text-align:center;padding-top:40px;">
    <h1 style="font-size:30px;font-weight:700;margin-bottom:6px;">
      📖 五维<span style="color:#2e86ab;">词汇深度测试</span>
    </h1>
    <p style="font-size:14px;color:#6c757d;line-height:1.8;">
      词汇量 🔊读音 🏷️词性 🔧短语 ✍️辨句 🖊️造句<br>
      从5个维度彻底测出一个词"你会不会用"
    </p>

    <!-- 5个级别卡片 -->
    <div id="levelGrid" style="display:grid;gap:10px;margin:24px 0;">
      <!-- 循环生成5个，每个的结构如下 -->
      <div class="level-card" data-level="1">
        <div style="text-align:left;">
          <div>🌱 入门级</div>
          <div style="font-size:12px;color:#6c757d;">0-800词 · 小学毕业</div>
        </div>
        <span style="font-size:12px;background:#e8f5e9;color:#38a169;padding:3px 12px;border-radius:10px;">800词</span>
      </div>
      <!-- 第2~5个卡片结构同上，样式自调 -->
    </div>

    <button class="btn btn-primary" id="btnStart" onclick="startTest()">开始测试 🔥</button>
    <p style="font-size:12px;color:#999;margin-top:12px;">自适应抽题 · 约15~20分钟 · 无需登录</p>
  </div>
</div>
```

### 首页 JavaScript 行为

```javascript
// level-card 点击效果
document.querySelectorAll('.level-card').forEach(card => {
  card.addEventListener('click', function() {
    document.querySelectorAll('.level-card').forEach(c => c.classList.remove('selected'));
    this.classList.add('selected');
    // 选中的卡片样式：border:2px solid #2e86ab; background:#f0f7fb
    state.targetLevel = parseInt(this.dataset.level); // 1~5
  });
});
// 默认选中第3级
```

---

## 第4步：第一层筛选 HTML + JS

### HTML
```html
<div class="page" id="pageScreen">
  <!-- 进度圆点 -->
  <div id="screenDots" class="progress-bar" style="display:flex;gap:4px;justify-content:center;margin-bottom:16px;">
    <!-- JS动态生成 -->
  </div>
  <!-- 当前级别 -->
  <div id="levelIndicator" style="text-align:center;font-size:13px;color:#6c757d;margin-bottom:8px;">
    当前级别：<span id="liBadge" style="display:inline-block;padding:2px 10px;border-radius:8px;font-size:12px;">🌳 进阶级</span>
  </div>
  <!-- 单词卡片 -->
  <div class="screen-card">
    <div id="scWord" class="big-word" style="font-size:36px;font-weight:700;color:#1a1a2e;margin-bottom:4px;">—</div>
    <div id="scPhonetic" style="font-size:16px;color:#6c757d;margin-bottom:20px;">—</div>
    <div style="font-size:14px;color:#999;margin-bottom:20px;">这个词你认识吗？</div>
    <div style="display:flex;gap:12px;">
      <button class="btn btn-outline" onclick="screenNo()" style="flex:1;">✗ 不认识</button>
      <button class="btn" style="flex:1;background:#38a169;color:white;border:none;border-radius:12px;" onclick="screenYes()">✓ 认识</button>
    </div>
  </div>
</div>
```

### JS 完整实现（直接复制使用）

```javascript
// ─── 状态变量 ───
const state = {
  targetLevel: 3,
  screenWords: [],
  screenIdx: 0,
  screenResults: [],
  knownWords: [],
  currentLevel: 3,
  estimatedVocab: 0,
  deepWords: [],
  deepIdx: 0,
  deepStep: 0,
  deepResults: [],
  dimScores: [0,0,0,0,0],
  dimTotal: [0,0,0,0,0]
};

const LEVEL_MAX = [0, 800, 1600, 2500, 3500, 5000];
const LEVEL_NAMES = ['','🌱 入门级','🌿 基础级','🌳 进阶级','🌲 高考级','🏔️ 拔高级'];
const LEVEL_TAGS = ['','🌱 入门级 800词','🌿 基础级 1600词','🌳 进阶级 2500词','🌲 高考级 3500词','🏔️ 拔高级 5000+词'];

// ─── 页面切换 ───
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:0});
}

// ─── 开始测试 ───
function startTest() {
  state.currentLevel = state.targetLevel;
  state.screenWords = [];
  state.screenResults = [];
  state.screenIdx = 0;
  
  // 从当前级别抽5个起始词
  addWordsFromLevel(state.currentLevel, 5);
  
  showPage('pageScreen');
  renderScreenDots();
  updateLevelIndicator();
  showScreenWord();
}

function addWordsFromLevel(level, count) {
  if (!WORDS[level] || WORDS[level].length === 0) return;
  const pool = shuffle([...WORDS[level]]);
  for (let i = 0; i < Math.min(count, pool.length); i++) {
    state.screenWords.push({...pool[i], level: level});
  }
}

function renderScreenDots() {
  const c = document.getElementById('screenDots');
  c.innerHTML = '';
  for (let i = 0; i < state.screenWords.length; i++) {
    const d = document.createElement('div');
    d.className = 'pdot';
    // 已答的标记
    if (i < state.screenResults.length) {
      d.classList.add(state.screenResults[i].known ? 'yes' : 'no');
    } else if (i === state.screenResults.length) {
      d.classList.add('current');
    }
    c.appendChild(d);
  }
}

function updateLevelIndicator() {
  document.getElementById('liBadge').textContent = LEVEL_NAMES[state.currentLevel];
  // liBadge背景色根据级别调
}

function showScreenWord() {
  if (state.screenIdx >= state.screenWords.length) {
    finishScreen();
    return;
  }
  const w = state.screenWords[state.screenIdx];
  document.getElementById('scWord').textContent = w.w;
  document.getElementById('scPhonetic').textContent = w.p;
}

function screenYes() {
  const w = state.screenWords[state.screenIdx];
  state.screenResults.push({word: w, known: true, level: w.level});
  state.screenIdx++;
  checkAdaptive();
  renderScreenDots();
  showScreenWord();
}

function screenNo() {
  const w = state.screenWords[state.screenIdx];
  state.screenResults.push({word: w, known: false, level: w.level});
  state.screenIdx++;
  checkAdaptive();
  renderScreenDots();
  showScreenWord();
}

// 自适应逻辑：每5词检查一次
function checkAdaptive() {
  if (state.screenIdx % 5 === 0 && state.screenIdx > 0) {
    const recent = state.screenResults.slice(-5);
    const knownCount = recent.filter(r => r.known).length;
    let changed = false;
    if (knownCount >= 4 && state.currentLevel < 5) {
      state.currentLevel++;
      changed = true;
    } else if (knownCount <= 1 && state.currentLevel > 1) {
      state.currentLevel--;
      changed = true;
    }
    if (changed) {
      addWordsFromLevel(state.currentLevel, 3);
      updateLevelIndicator();
      renderScreenDots();
    }
  }
}

function finishScreen() {
  // 收集认识的词
  state.knownWords = state.screenResults.filter(r => r.known).map(r => r.word);
  
  // 算词汇量
  let total = 0;
  for (let lv = 1; lv <= 5; lv++) {
    const tested = state.screenResults.filter(r => r.level === lv);
    if (tested.length > 0) {
      const rate = tested.filter(r => r.known).length / tested.length;
      total += Math.round(LEVEL_MAX[lv] * rate);
    }
  }
  state.estimatedVocab = total;
  
  if (state.knownWords.length === 0) {
    alert('这些词不太认识哦，试试选更低级别重新开始吧！');
    showPage('pageHome');
    return;
  }
  
  // 抽10个进入深度诊断
  const pool = shuffle([...state.knownWords]);
  state.deepWords = pool.slice(0, 10);
  state.deepIdx = 0;
  state.deepStep = 0;
  state.deepResults = [];
  
  showPage('pageDeep');
  showDeepWord();
}
```

---

## 第5步：第二层深度诊断 JS（直接复制）

```javascript
const STEP_ICONS = ['🔊','🏷️','🔧','✍️','🖊️'];
const STEP_TITLES = [
  '第 1 步：选出正确读音',
  '第 2 步：选出所有正确词性',
  '第 3 步：选出正确搭配',
  '第 4 步：选出正确句子',
  '第 5 步：用这个词造个句子'
];

function showDeepWord() {
  if (state.deepIdx >= state.deepWords.length) {
    finishDeep();
    return;
  }
  const w = state.deepWords[state.deepIdx];
  document.getElementById('dwWord').textContent = w.w;
  document.getElementById('dwPhonetic').textContent = w.p;
  document.getElementById('deepProgress').textContent = (state.deepIdx + 1) + '/' + state.deepWords.length;
  document.getElementById('stepTitle').textContent = STEP_TITLES[state.deepStep];
  
  // 更新步骤圆点
  const dots = document.getElementById('stepDots').children;
  for (let i = 0; i < 5; i++) {
    dots[i].className = 'sdot';
    dots[i].textContent = STEP_ICONS[i];
    if (i < state.deepStep) dots[i].classList.add('done');
    else if (i === state.deepStep) dots[i].classList.add('active');
  }
  
  const cont = document.getElementById('deepContent');
  cont.innerHTML = '';
  
  // 根据当前步骤渲染不同内容
  switch(state.deepStep) {
    case 0: renderPhonetic(w, cont); break;
    case 1: renderPos(w, cont); break;
    case 2: renderCollocation(w, cont); break;
    case 3: renderSentence(w, cont); break;
    case 4: renderWriting(w, cont); break;
  }
}

// ─── Step 1: 读音 ───
function renderPhonetic(w, cont) {
  // 把所有音标（正确的+干扰的）放一起打乱
  let allPh = [];
  // w.pt 里已经包含了正确和干扰，全部作为选项
  allPh = shuffle([...w.pt]);
  
  let html = '<div class="phonetic-grid">';
  allPh.forEach(ph => {
    html += `<label class="ph-option" data-val="${ph}"><input type="radio" name="ph" value="${ph}" style="display:none">${ph}</label>`;
  });
  html += '</div><p style="font-size:12px;color:#999;margin-top:8px;">💡 注意：可能有多个正确读音</p>';
  cont.innerHTML = html;
  
  // 点击事件：高亮选中
  cont.querySelectorAll('.ph-option').forEach(el => {
    el.addEventListener('click', function() {
      cont.querySelectorAll('.ph-option').forEach(l => {l.style.borderColor='#e9ecef'; l.style.background='';});
      this.style.borderColor = '#2e86ab';
      this.style.background = '#f0f7fb';
      document.getElementById('deepNextBtn').disabled = false;
      window._selectedAnswer = this.dataset.val;
    });
  });
}

// ─── Step 2: 词性 ───
function renderPos(w, cont) {
  let allPos = shuffle([...w.pos, ...w.ptrap]);
  let html = '<div class="options">';
  allPos.forEach(p => {
    html += `<label class="pos-option"><input type="checkbox" value="${p}"> ${p}</label>`;
  });
  html += '</div><p style="font-size:12px;color:#999;margin-top:8px;">💡 可多选，选出所有正确的词性</p>';
  cont.innerHTML = html;
  
  // 点击即启用按钮
  cont.querySelectorAll('.pos-option').forEach(el => {
    el.addEventListener('click', function() {
      this.classList.toggle('selected');
      if (this.classList.contains('selected')) {
        this.style.borderColor = '#2e86ab';
      } else {
        this.style.borderColor = '#e9ecef';
      }
      document.getElementById('deepNextBtn').disabled = false;
    });
  });
}

// ─── Step 3: 搭配 ───
function renderCollocation(w, cont) {
  let allCol = shuffle([w.col.c, ...w.col.t]);
  let html = '<div class="options">';
  allCol.forEach(c => {
    html += `<label class="col-option" data-val="${c}"><input type="radio" name="col" value="${c}" style="display:none">${c}</label>`;
  });
  html += '</div>';
  cont.innerHTML = html;
  
  cont.querySelectorAll('.col-option').forEach(el => {
    el.addEventListener('click', function() {
      cont.querySelectorAll('.col-option').forEach(l => {l.style.borderColor='#e9ecef'; l.style.background='';});
      this.style.borderColor = '#2e86ab';
      this.style.background = '#f0f7fb';
      document.getElementById('deepNextBtn').disabled = false;
      window._selectedAnswer = this.dataset.val;
    });
  });
}

// ─── Step 4: 辨句 ───
function renderSentence(w, cont) {
  let allSen = shuffle([w.sen.c, ...w.sen.t]);
  let html = '<div class="options">';
  allSen.forEach(s => {
    html += `<label class="sen-option" data-val="${s}"><input type="radio" name="sen" value="${s}" style="display:none">${s}</label>`;
  });
  html += '</div>';
  cont.innerHTML = html;
  
  cont.querySelectorAll('.sen-option').forEach(el => {
    el.addEventListener('click', function() {
      cont.querySelectorAll('.sen-option').forEach(l => {l.style.borderColor='#e9ecef'; l.style.background='';});
      this.style.borderColor = '#2e86ab';
      this.style.background = '#f0f7fb';
      document.getElementById('deepNextBtn').disabled = false;
      window._selectedAnswer = this.dataset.val;
    });
  });
}

// ─── Step 5: 造句 ───
function renderWriting(w, cont) {
  cont.innerHTML = `<div style="display:flex;flex-direction:column;gap:12px;">
    <textarea id="writeInput" placeholder="用「${w.w}」写一个英文句子..." style="width:100%;height:90px;border:2px solid #e9ecef;border-radius:12px;padding:12px;font-size:15px;resize:none;outline:none;font-family:inherit;"></textarea>
    <div style="font-size:13px;color:#6c757d;">${w.hint || ''}</div>
  </div>`;
  
  document.getElementById('writeInput').addEventListener('input', function() {
    document.getElementById('deepNextBtn').disabled = this.value.trim().length < 3;
  });
}

// ─── 确认答案 ───
function confirmAnswer() {
  const w = state.deepWords[state.deepIdx];
  let correct = false;
  
  if (!state.deepResults[state.deepIdx]) {
    state.deepResults[state.deepIdx] = {word: w, steps: []};
  }
  
  if (state.deepStep === 0) {
    // 读音：w.pt 中正确的读音是 w.p
    const correctPhs = w.pt.filter(ph => ph === w.p || (Array.isArray(w.p) ? w.p.includes(ph) : ph === w.p));
    // 实际上 w.p 就是正确读音，w.pt 数组里包含了正确和干扰
    const correctVal = w.p;
    const selected = window._selectedAnswer;
    correct = (selected === correctVal) || (Array.isArray(correctVal) && correctVal.includes(selected));
    
    // 标记
    document.querySelectorAll('.ph-option').forEach(el => {
      if (el.dataset.val === correctVal || (Array.isArray(correctVal) && correctVal.includes(el.dataset.val))) {
        el.classList.add('correct');
      } else if (el.dataset.val === selected) {
        el.classList.add('wrong');
      }
    });
  }
  
  else if (state.deepStep === 1) {
    // 词性
    const selected = [...document.querySelectorAll('.pos-option.selected')].map(el => el.querySelector('input').value);
    correct = selected.length === w.pos.length && selected.every(p => w.pos.includes(p));
    
    document.querySelectorAll('.pos-option').forEach(el => {
      const val = el.querySelector('input').value;
      if (w.pos.includes(val)) {
        el.classList.add('correct');
      } else if (el.classList.contains('selected')) {
        el.classList.add('wrong');
      }
    });
  }
  
  else if (state.deepStep === 2) {
    // 搭配
    const selected = window._selectedAnswer;
    correct = selected === w.col.c;
    
    document.querySelectorAll('.col-option').forEach(el => {
      if (el.dataset.val === w.col.c) el.classList.add('correct');
      else if (el.dataset.val === selected) el.classList.add('wrong');
    });
  }
  
  else if (state.deepStep === 3) {
    // 辨句
    const selected = window._selectedAnswer;
    correct = selected === w.sen.c;
    
    document.querySelectorAll('.sen-option').forEach(el => {
      if (el.dataset.val === w.sen.c) el.classList.add('correct');
      else if (el.dataset.val === selected) el.classList.add('wrong');
    });
  }
  
  else if (state.deepStep === 4) {
    // 造句
    const text = document.getElementById('writeInput').value.trim();
    const containsWord = text.toLowerCase().includes(w.w.toLowerCase());
    const hasVerb = /\b(am|is|are|was|were|have|has|had|do|does|did|will|can|must|shall|may|be|been|being|[a-z]+ed|[a-z]+ing)\b/i.test(text);
    const longEnough = text.length >= 6 && text.split(' ').length >= 3;
    correct = containsWord && (hasVerb || longEnough);
    
    // 显示结果
    const resultDiv = document.createElement('div');
    resultDiv.style.cssText = 'margin-top:12px;padding:12px;border-radius:10px;font-size:14px;text-align:center;';
    if (correct) {
      resultDiv.style.background = '#e8f5e9';
      resultDiv.style.color = '#38a169';
      resultDiv.textContent = '✅ 句子合格！会用这个词！';
    } else {
      resultDiv.style.background = '#fff3cd';
      resultDiv.style.color = '#856404';
      resultDiv.textContent = '⚠️ 句子还需要改进，试试写一个完整的句子';
    }
    document.querySelector('#deepCard').appendChild(resultDiv);
  }
  
  state.deepResults[state.deepIdx].steps[state.deepStep] = correct;
  
  // 改按钮
  const btn = document.getElementById('deepNextBtn');
  btn.textContent = '下一步 →';
  btn.onclick = goToNextStep;
}

// ─── 下一步 ───
function goToNextStep() {
  state.deepStep++;
  if (state.deepStep >= 5) {
    state.deepStep = 0;
    state.deepIdx++;
  }
  const btn = document.getElementById('deepNextBtn');
  btn.textContent = '确认答案';
  btn.onclick = confirmAnswer;
  btn.disabled = true;
  window._selectedAnswer = null;
  showDeepWord();
}

// ─── 结束深度诊断 ───
function finishDeep() {
  // 算维度分
  const scores = [0,0,0,0,0];
  const totals = [0,0,0,0,0];
  state.deepResults.forEach(r => {
    r.steps.forEach((s, i) => {
      if (s !== undefined) { totals[i]++; if (s) scores[i]++; }
    });
  });
  state.dimScores = scores;
  state.dimTotal = totals;
  
  showPage('pageReport');
  renderReport();
}
```

---

## 第6步：报告页 HTML + JS

### HTML
```html
<div class="page" id="pageReport">
  <div id="reportContent" style="max-width:680px;margin:0 auto;">
    
    <!-- 词汇量概览 -->
    <div class="screen-card" style="text-align:center;">
      <div style="font-size:20px;font-weight:700;">📊 词汇诊断报告</div>
      <div id="rLevelText" style="font-size:14px;color:#6c757d;margin-bottom:16px;">—</div>
      <div style="font-size:48px;font-weight:800;color:#2e86ab;" id="rVocabNum">0 <span style="font-size:18px;font-weight:400;color:#6c757d;">词</span></div>
    </div>

    <!-- 雷达图 -->
    <div class="screen-card" style="text-align:center;">
      <canvas id="radarCanvas" width="260" height="260" style="max-width:260px;margin:0 auto;"></canvas>
    </div>

    <!-- 五维进度条 -->
    <div class="screen-card" style="text-align:left;">
      <div id="dimBars"></div>
    </div>

    <!-- 诊断结论 -->
    <div class="screen-card" style="text-align:left;">
      <div id="diagBox"></div>
    </div>

    <!-- 错词清单 -->
    <div class="screen-card" style="text-align:left;">
      <div id="wrongListContainer"></div>
    </div>

    <!-- 按钮 -->
    <div id="reportButtons" style="display:flex;gap:10px;margin-top:16px;">
      <button class="btn btn-outline" onclick="location.reload()" style="flex:1;">🔄 重新测试</button>
      <button class="btn btn-primary" onclick="exportReport()" style="flex:1;">📸 保存报告图</button>
    </div>

  </div>
</div>
```

### 报告 JS

```javascript
function renderReport() {
  // 词汇量
  const v = state.estimatedVocab;
  document.getElementById('rVocabNum').innerHTML = v + ' <span style="font-size:18px;font-weight:400;color:#6c757d;">词</span>';
  
  let levelText = '';
  if (v <= 800) levelText = '🌱 入门级';
  else if (v <= 1600) levelText = '🌿 基础级';
  else if (v <= 2500) levelText = '🌳 进阶级';
  else if (v <= 3500) levelText = '🌲 高考级';
  else levelText = '🏔️ 拔高级';
  document.getElementById('rLevelText').textContent = '≈ ' + levelText;
  
  // 画雷达图
  drawRadar();
  
  // 维度进度条
  const dimLabels = ['读音','词性','搭配','辨句','造句'];
  const dimColors = ['#38a169','#2e86ab','#e8a83d','#dc3545','#9b59b6'];
  let barsHtml = '<div style="font-size:15px;font-weight:600;margin-bottom:12px;">🖐️ 五维掌握度</div>';
  state.dimScores.forEach((s, i) => {
    const pct = state.dimTotal[i] > 0 ? Math.round(s / state.dimTotal[i] * 100) : 0;
    barsHtml += `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <span style="width:52px;font-size:13px;text-align:right;">${dimLabels[i]}</span>
        <div style="flex:1;height:12px;background:#e9ecef;border-radius:6px;overflow:hidden;">
          <div style="width:${pct}%;height:100%;background:${dimColors[i]};border-radius:6px;transition:width 0.8s ease;"></div>
        </div>
        <span style="width:44px;font-size:13px;font-weight:500;text-align:right;">${s}/${state.dimTotal[i]}</span>
      </div>`;
  });
  document.getElementById('dimBars').innerHTML = barsHtml;
  
  // 诊断结论
  let weakestDim = 0, weakestPct = 100;
  state.dimScores.forEach((s, i) => {
    const pct = state.dimTotal[i] > 0 ? s / state.dimTotal[i] : 1;
    if (pct < weakestPct) { weakestPct = pct; weakestDim = i; }
  });
  const advice = [
    '建议多练音标，注意单词的重音位置。推荐用音标词典查每个词的读音。',
    '背单词时注意标好词性（n/v/adj），不要只记意思。',
    '多记词组搭配，不要孤立背单词，用搭配词典学习。',
    '多做句子分析练习，找主谓宾结构，理解句子成分。',
    '每学一个新词，试着用它造3个不同句子，练多了就会了。'
  ];
  let diagHtml = `<div style="font-size:15px;font-weight:600;margin-bottom:8px;">📌 诊断结论</div>
    <div style="background:#f8f9fa;border-radius:12px;padding:16px;">
      <div style="display:flex;gap:8px;margin-bottom:8px;">
        <span style="flex-shrink:0;width:8px;height:8px;border-radius:50%;background:${dimColors[weakestDim]};margin-top:6px;"></span>
        <div><b>最弱维度：${dimLabels[weakestDim]}</b><br>${advice[weakestDim]}</div>
      </div>`;
  if (v < 2500) {
    diagHtml += `<div style="display:flex;gap:8px;margin-top:12px;">
      <span style="flex-shrink:0;width:8px;height:8px;border-radius:50%;background:#e8a83d;margin-top:6px;"></span>
      <div><b>词汇量还需提升</b><br>建议每天背20个新词，从当前级别向上突破。</div></div>`;
  } else {
    diagHtml += `<div style="display:flex;gap:8px;margin-top:12px;">
      <span style="flex-shrink:0;width:8px;height:8px;border-radius:50%;background:#38a169;margin-top:6px;"></span>
      <div><b>词汇量不错！</b><br>继续保持，重点加强弱项维度的练习。</div></div>`;
  }
  diagHtml += '</div>';
  document.getElementById('diagBox').innerHTML = diagHtml;
  
  // 错词清单
  let wrongHtml = '<div style="font-size:15px;font-weight:600;margin-bottom:8px;">📋 错词清单</div>';
  const wrongItems = state.deepResults.filter(r => r.steps.includes(false));
  if (wrongItems.length === 0) {
    wrongHtml += '<p style="font-size:14px;color:#6c757d;">✅ 暂无错词，表现不错！</p>';
  } else {
    wrongHtml += '<div style="background:#f8f9fa;border-radius:12px;padding:12px 16px;">';
    wrongItems.forEach(r => {
      const wrongDims = r.steps.map((s, i) => s === false ? dimLabels[i] : null).filter(Boolean);
      wrongHtml += `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid #eef2f7;font-size:14px;">
        <span style="font-weight:500;">${r.word.w}</span>
        <span style="color:#dc3545;font-size:12px;">${wrongDims.join('、')}</span>
      </div>`;
    });
    wrongHtml += '</div>';
  }
  document.getElementById('wrongListContainer').innerHTML = wrongHtml;
}

// ─── 雷达图 ───
function drawRadar() {
  const canvas = document.getElementById('radarCanvas');
  const ctx = canvas.getContext('2d');
  const W = 260, H = 260, cx = 130, cy = 130, r = 90;
  ctx.clearRect(0, 0, W, H);
  
  const labels = ['读音','词性','搭配','辨句','造句'];
  const pcts = state.dimScores.map((s, i) => state.dimTotal[i] > 0 ? s / state.dimTotal[i] : 0);
  
  // 网格(4层)
  ctx.strokeStyle = '#e9ecef';
  ctx.lineWidth = 1;
  for (let ring = 1; ring <= 4; ring++) {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = Math.PI / 2 - i * Math.PI * 2 / 5;
      const x = cx + ring * r / 4 * Math.cos(angle);
      const y = cy - ring * r / 4 * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }
  
  // 轴线
  for (let i = 0; i < 5; i++) {
    const angle = Math.PI / 2 - i * Math.PI * 2 / 5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r * Math.cos(angle), cy - r * Math.sin(angle));
    ctx.stroke();
    
    // 标签
    const lx = cx + (r + 22) * Math.cos(angle);
    const ly = cy - (r + 22) * Math.sin(angle);
    ctx.fillStyle = '#495057';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labels[i], lx, ly);
  }
  
  // 数据多边形
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = Math.PI / 2 - i * Math.PI * 2 / 5;
    const len = pcts[i] * r;
    const x = cx + len * Math.cos(angle);
    const y = cy - len * Math.sin(angle);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(46,134,171,0.2)';
  ctx.fill();
  ctx.strokeStyle = '#2e86ab';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // 数据点
  for (let i = 0; i < 5; i++) {
    const angle = Math.PI / 2 - i * Math.PI * 2 / 5;
    const len = pcts[i] * r;
    const x = cx + len * Math.cos(angle);
    const y = cy - len * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#2e86ab';
    ctx.fill();
  }
}

// ─── 截图导出 ───
async function exportReport() {
  const btnRow = document.getElementById('reportButtons');
  btnRow.style.display = 'none';
  try {
    const canvas = await html2canvas(document.getElementById('reportContent'), {
      backgroundColor: '#f0f4f8',
      scale: 2,
      useCORS: true
    });
    const link = document.createElement('a');
    link.download = '词汇诊断报告.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch(e) {
    alert('截图生成失败，请手动截图保存 🙏');
  }
  btnRow.style.display = 'flex';
}
```

---

## 第7步：词库数据

创建一个全局对象 `WORDS`，按级别存放：

```javascript
const WORDS = {
  1: [ /* 入门级至少10个词 */ ],
  2: [ /* 基础级至少10个词 */ ],
  3: [ /* 进阶级至少10个词 */ ],
  4: [ /* 高考级至少10个词 */ ],
  5: [ /* 拔高级至少10个词 */ ]
};
```

**每个词数据格式（严格执行）：**

```javascript
{
  w: "present",                    // 单词
  p: "/ˈpreznt/",                  // 音标
  pt: [                            // 读音选项数组（至少4个，正确项混在其中）
    "/ˈpreznt/",                   //   正确
    "/prɪˈzent/",                  //   也正确（两种读音）
    "/ˈprezɪdənt/",                //   干扰
    "/ˈperənt/"                    //   干扰
  ],
  pos: ["n.", "v.", "adj."],       // 正确词性
  ptrap: ["adv."],                 // 陷阱词性
  col: {                           // 搭配
    c: "make a present",           //   正确
    t: ["do a present", "take a present"]  //  陷阱
  },
  sen: {                           // 辨句
    c: "He presented his findings at the meeting.",  // 正确（注意时态）
    t: [                            // 错误（各含不同错误类型）
      "She present her homework yesterday.",     // 时态错
      "I want to present you a gift.",           // 结构错
      "She is present with the award."           // 搭配错
    ]
  },
  hint: "可作名词(礼物)/动词(展示)/形容词(出席的) 🙂"
}
```

**词库编写规则**：
1. 错误句子必须写**真实的典型错误**，不要乱编无意义句子
2. 每个级别难度递增（入门用简单词、常用义，高考用抽象词、多词性词）
3. 至少确保：级别1有10个、级别2有12个、级别3有12个、级别4有12个、级别5有10个

---

## 第8步：工具函数

```javascript
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
```

---

## 执行顺序

1. ✅ 创建HTML骨架（4个page容器）
2. ✅ 写CSS（全局+组件+响应式）
3. ✅ 写首页HTML + level-card交互
4. ✅ 写第一层HTML + 自适应算法JS
5. ✅ 写第二层HTML + 5步测试JS
6. ✅ 建词库数据（50+词）
7. ✅ 写报告页HTML + Canvas雷达图 + 截图JS
8. ✅ 联调所有showPage切换
9. ✅ 手机端适配验证

**注意**：所有按钮的 `onclick` 属性直接在HTML上写 `onclick="函数名()"`，不要用 `addEventListener`。保持代码统一。
