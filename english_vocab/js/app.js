// ============================================================
// 英语影视词汇学习 - 交互逻辑
// ============================================================

let currentSceneId = null;
let currentWordId = null;
let currentClipIndex = 0;

// DOM Elements
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const content = document.getElementById('content');

// ============================================================
// 初始化
// ============================================================
function init() {
  renderSidebar();
  renderEmptyState();
  setupTheme();
  setupHamburger();

  // 默认选中咖啡厅场景（演示）
  // selectScene('coffee');
}

// ============================================================
// 左侧菜单栏渲染
// ============================================================
function renderSidebar() {
  const freqGroups = [
    { label: "🔥 最常用", freq: "🔥" },
    { label: "🟡 较常用", freq: "🟡" },
    { label: "🟢 有时用", freq: "🟢" }
  ];

  let html = '';
  freqGroups.forEach(group => {
    const items = scenes.filter(s => s.freq === group.freq);
    html += `<div class="sidebar-section">`;
    html += `<div class="sidebar-section-title">${group.label}</div>`;
    items.forEach(scene => {
      const active = scene.id === currentSceneId ? 'active' : '';
      html += `<div class="scene-item ${active}" data-scene="${scene.id}" onclick="selectScene('${scene.id}')">
        <span class="emoji">${scene.emoji}</span>
        <span class="name">${scene.name}</span>
        <span class="freq">${getFreqLabel(scene.freq)}</span>
      </div>`;
    });
    html += `</div>`;
  });

  sidebar.innerHTML = html;
}

// ============================================================
// 场景选择
// ============================================================
function selectScene(sceneId) {
  currentSceneId = sceneId;
  currentWordId = null;
  currentClipIndex = 0;

  // 更新菜单高亮
  document.querySelectorAll('.scene-item').forEach(el => {
    el.classList.toggle('active', el.dataset.scene === sceneId);
  });

  const scene = scenes.find(s => s.id === sceneId);
  const words = getWordsByScene(sceneId);

  if (!scene || words.length === 0) {
    content.innerHTML = `<div class="empty-state">
      <div class="icon">📭</div>
      <h2>暂无单词</h2>
      <p>该场景还没有收录单词，敬请期待！</p>
    </div>`;
    return;
  }

  let html = `
    <div class="scene-header">
      <span class="icon">${scene.emoji}</span>
      <div>
        <h2>${scene.name}</h2>
        <div class="count">共 ${words.length} 个单词</div>
      </div>
    </div>
    <div class="word-grid">
  `;

  words.forEach(w => {
    const clipCount = w.scenes ? w.scenes.length : 0;
    html += `
      <div class="word-card" onclick="selectWord('${sceneId}','${w.id}')">
        <div class="word">${w.word}</div>
        <div class="phonetic">${w.phonetic}</div>
        <div class="def">${w.definition}</div>
        <div class="scene-count">🎬 ${clipCount} 个视频片段</div>
      </div>
    `;
  });

  html += `</div>`;
  content.innerHTML = html;

  // 移动端自动关闭菜单
  closeSidebar();
}

// ============================================================
// 单词选择 - 详情页
// ============================================================
function selectWord(sceneId, wordId) {
  currentSceneId = sceneId;
  currentWordId = wordId;
  currentClipIndex = 0;

  const word = getWordById(sceneId, wordId);
  if (!word) return;

  renderWordDetail(word);
  closeSidebar();
}

function renderWordDetail(word) {
  const scene = scenes.find(s => s.id === currentSceneId);
  const clipCount = word.scenes ? word.scenes.length : 0;

  // 默认第一个片段
  const currentClip = word.scenes[0] || {};

  let html = `
    <div class="word-detail">
      <div class="detail-top">
        <button class="detail-back" onclick="selectScene('${currentSceneId}')">←</button>
        <span class="detail-word">${word.word}</span>
        <span class="detail-phonetic">${word.phonetic}</span>
      </div>

      <div class="detail-layout">
        <!-- 左侧：视频 -->
        <div class="video-section">
          <div class="video-wrap">
            <video id="detail-video" controls playsinline
              src="${currentClip.videoUrl || ''}"
              ${currentClip.poster ? `poster="${currentClip.poster}"` : ''}>
            </video>
          </div>
          <div class="video-controls">
            <button class="video-nav-btn" id="prev-clip-btn" onclick="prevClip()" ${clipCount <= 1 ? 'disabled' : ''}>◀</button>
            <span class="video-indicator"><span id="clip-index">1</span> / ${clipCount}</span>
            <button class="video-nav-btn" id="next-clip-btn" onclick="nextClip()" ${clipCount <= 1 ? 'disabled' : ''}>▶</button>
          </div>
          <div class="subtitle-box">
            <div class="subtitle-en" id="subtitle-en">${currentClip.subtitle || ''}</div>
            <div class="subtitle-cn" id="subtitle-cn">${currentClip.translation || ''}</div>
          </div>
        </div>

        <!-- 右侧：单词讲解 -->
        <div class="word-info-section">
          <div class="label">📖 单词详解</div>
          <h3 style="font-size:22px;font-weight:700;margin:8px 0 4px">${word.word}</h3>
          <div style="color:var(--text2);font-size:13px">${word.phonetic}</div>

          <div class="divider"></div>

          <div class="label">🎯 英英释义</div>
          <div class="meaning-content">${word.definition}</div>

          <div class="divider"></div>

          <div class="label">💡 用法说明</div>
          <div class="usage-box">${word.usage}</div>

          <div class="divider"></div>

          <div class="label">✍️ 例句</div>
          <div class="examples">
            ${word.examples.map(ex => `<div class="example-item">${ex}</div>`).join('')}
          </div>

          ${clipCount > 1 ? `
          <div class="divider"></div>
          <div class="label">🎬 本单词的含义片段</div>
          <div style="margin-top:8px">
            ${word.scenes.map((s, i) => `
              <div style="font-size:13px;padding:6px 10px;margin:4px 0;border-radius:6px;cursor:pointer;
                ${i === currentClipIndex ? 'background:rgba(52,152,219,0.1);color:var(--accent);font-weight:600;' : 'color:var(--text2);'}"
                onclick="switchClip(${i})">
                ${i + 1}. ${s.meaning}
              </div>
            `).join('')}
          </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  content.innerHTML = html;
  updateClipButtons(word);
}

// ============================================================
// 视频片段切换
// ============================================================
function switchClip(index) {
  const word = getWordById(currentSceneId, currentWordId);
  if (!word || !word.scenes || index < 0 || index >= word.scenes.length) return;

  currentClipIndex = index;
  const clip = word.scenes[index];
  const video = document.getElementById('detail-video');

  if (video) {
    video.src = clip.videoUrl;
    if (clip.poster) video.poster = clip.poster;
    video.load();
    video.play().catch(() => {}); // 自动播放可能被浏览器阻止
  }

  const subtitleEn = document.getElementById('subtitle-en');
  const subtitleCn = document.getElementById('subtitle-cn');
  const clipIndexEl = document.getElementById('clip-index');
  if (subtitleEn) subtitleEn.textContent = clip.subtitle || '';
  if (subtitleCn) subtitleCn.textContent = clip.translation || '';
  if (clipIndexEl) clipIndexEl.textContent = index + 1;

  // 更新右侧片段列表高亮
  document.querySelectorAll('.word-info-section > div:last-child > div').forEach((el, i) => {
    if (i === index) {
      el.style.background = 'rgba(52,152,219,0.1)';
      el.style.color = 'var(--accent)';
      el.style.fontWeight = '600';
    } else {
      el.style.background = 'transparent';
      el.style.color = 'var(--text2)';
      el.style.fontWeight = '400';
    }
  });

  updateClipButtons(word);
}

function prevClip() {
  if (currentClipIndex > 0) {
    switchClip(currentClipIndex - 1);
  }
}

function nextClip() {
  const word = getWordById(currentSceneId, currentWordId);
  if (word && word.scenes && currentClipIndex < word.scenes.length - 1) {
    switchClip(currentClipIndex + 1);
  }
}

function updateClipButtons(word) {
  const prevBtn = document.getElementById('prev-clip-btn');
  const nextBtn = document.getElementById('next-clip-btn');
  if (!prevBtn || !nextBtn) return;

  const clipCount = word && word.scenes ? word.scenes.length : 0;
  prevBtn.disabled = currentClipIndex <= 0 || clipCount <= 1;
  nextBtn.disabled = currentClipIndex >= clipCount - 1 || clipCount <= 1;
}

// ============================================================
// 空状态
// ============================================================
function renderEmptyState() {
  content.innerHTML = `
    <div class="empty-state">
      <div class="icon">🎬</div>
      <h2>选择一个场景开始学习</h2>
      <p>从左侧菜单栏选择一个生活场景，学习该场景下的实用英语词汇，配合美剧片段加深记忆。</p>
    </div>
  `;
}

// ============================================================
// 深浅色模式
// ============================================================
function setupTheme() {
  const saved = localStorage.getItem('english_vocab_theme');
  if (saved === 'dark') {
    document.body.classList.add('dark');
  }

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('english_vocab_theme', isDark ? 'dark' : 'light');
      toggle.textContent = isDark ? '☀️' : '🌙';
    });

    // 设置初始图标
    toggle.textContent = saved === 'dark' ? '☀️' : '🌙';
  }
}

// ============================================================
// 移动端菜单
// ============================================================
function setupHamburger() {
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (hamburger) {
    hamburger.addEventListener('click', toggleSidebar);
  }
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
}

function toggleSidebar() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
}

// ============================================================
// 启动
// ============================================================
document.addEventListener('DOMContentLoaded', init);
