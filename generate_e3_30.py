import os

OUTPUT_DIR = "/root/.openclaw/workspace/korean_course"

def make_cover():
    return """
<div class="page cover-page">
  <div class="cover-bg"></div>
  <!-- 极光SVG插画 -->
  <svg class="aurora-svg" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(80,200,120,0.4)"/>
        <stop offset="50%" stop-color="rgba(60,180,200,0.35)"/>
        <stop offset="100%" stop-color="rgba(100,60,180,0.3)"/>
      </linearGradient>
      <linearGradient id="aurora2" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop offset="0%" stop-color="rgba(40,220,160,0.3)"/>
        <stop offset="40%" stop-color="rgba(30,160,220,0.25)"/>
        <stop offset="100%" stop-color="rgba(140,80,200,0.2)"/>
      </linearGradient>
      <linearGradient id="aurora3" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stop-color="rgba(60,200,100,0.25)"/>
        <stop offset="60%" stop-color="rgba(80,140,240,0.2)"/>
        <stop offset="100%" stop-color="rgba(160,60,180,0.15)"/>
      </linearGradient>
      <filter id="blur1">
        <feGaussianBlur stdDeviation="20"/>
      </filter>
      <filter id="blur2">
        <feGaussianBlur stdDeviation="35"/>
      </filter>
      <filter id="glow">
        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <!-- 夜空背景星星 -->
    <circle cx="120" cy="30" r="1.5" fill="rgba(255,255,255,0.7)"/>
    <circle cx="250" cy="50" r="1" fill="rgba(255,255,255,0.5)"/>
    <circle cx="400" cy="20" r="1.8" fill="rgba(255,255,255,0.8)"/>
    <circle cx="550" cy="45" r="1.2" fill="rgba(255,255,255,0.6)"/>
    <circle cx="680" cy="25" r="1" fill="rgba(255,255,255,0.5)"/>
    <circle cx="350" cy="65" r="0.8" fill="rgba(255,255,255,0.4)"/>
    <circle cx="600" cy="70" r="1.3" fill="rgba(255,255,255,0.6)"/>
    <circle cx="750" cy="55" r="0.9" fill="rgba(255,255,255,0.5)"/>
    <circle cx="180" cy="75" r="0.7" fill="rgba(255,255,255,0.4)"/>
    <circle cx="500" cy="15" r="1.1" fill="rgba(255,255,255,0.7)"/>
    <!-- 极光层1-大波带 -->
    <path d="M-50,220 Q50,100 150,160 Q250,220 350,120 Q450,20 550,130 Q650,240 750,100 Q850,-40 900,180" 
          fill="url(#aurora1)" filter="url(#blur1)" opacity="0.7"/>
    <!-- 极光层2-中波带 -->
    <path d="M-50,250 Q80,150 200,200 Q320,250 400,160 Q480,70 600,180 Q700,290 800,140 Q880,20 900,200"
          fill="url(#aurora2)" filter="url(#blur2)" opacity="0.6"/>
    <!-- 极光层3-细波带 -->
    <path d="M100,120 Q200,80 300,140 Q400,200 500,100 Q600,0 700,120 Q780,200 850,100"
          fill="url(#aurora3)" filter="url(#blur1)" opacity="0.5"/>
    <!-- 极光高光线 -->
    <path d="M120,140 Q220,110 320,160 Q420,210 520,130 Q620,50 720,140"
          fill="none" stroke="rgba(180,255,220,0.2)" stroke-width="3" filter="url(#glow)"/>
    <!-- 地平线山脉剪影 -->
    <path d="M0,260 Q80,240 160,255 Q240,270 320,245 Q400,220 480,250 Q560,280 640,240 Q720,200 800,250 L800,300 L0,300 Z"
          fill="rgba(60,50,40,0.3)"/>
  </svg>
  <div class="cover-content">
    <div class="cover-lesson-label">E 3 - 3 0</div>
    <h1 class="cover-title">一起去看极光</h1>
    <div class="cover-subtitle">오로라 보러 가요</div>
    <div class="cover-divider"></div>
    <p class="cover-desc">本课收录20句台词，围绕"邀约看极光"展开学习。<br>掌握邀约、希望、拒绝、说服等日常表达。</p>
    <div class="cover-tags">
      <span>台词精讲</span><span class="dot">·</span>
      <span>逐句应用</span><span class="dot">·</span>
      <span>总复习</span>
    </div>
  </div>
</div>
"""

def make_line_summary(sentences):
    rows = ""
    for i, (kr, zh, en) in enumerate(sentences, 1):
        rows += f"""
  <div class="line-item">
    <span class="line-num">{i:02d}</span>
    <div class="line-text">
      <div class="line-kr">{kr}</div>
      <div class="line-en">{en}</div>
      <div class="line-zh">{zh}</div>
    </div>
  </div>"""
    return f"""
<div class="page">
  <div class="page-header"><span class="section-label">第30课 · 一起去看极光</span></div>
  <h2 class="section-title">📝 本课台词</h2>
  <div class="audio-badge">🎵 本课完整录音 🔊</div>
  <div class="line-summary">
    {rows}
  </div>
  <div class="page-footer">台词汇总 1/1</div>
</div>
"""

def make_detail_page(s_num, s_label, kr, zh, en, 
                     framework_lines, words, phrases, sentence, pattern_str, 
                     sound_change="无特殊音变",
                     tail_info=None,
                     is_korean_only=False):
    """
    Create a detailed explanation page for a sentence.
    """
    # Framework section
    fw_html = ""
    for fl in framework_lines:
        fw_html += f'      <div class="fw-item">{fl}</div>\n'
    
    # Words section
    w_html = ""
    for w in words:
        if isinstance(w, tuple):
            w_html += f'<div class="word-item"><span class="word-kr">{w[0]}</span><span class="word-en">{w[1]}</span><span class="word-zh">{w[2]}</span></div>\n'
        else:
            w_html += f'<div class="word-item"><span class="word-kr">{w}</span></div>\n'
    
    # Phrases section
    p_html = ""
    for p in phrases:
        if isinstance(p, tuple):
            p_html += f'<div class="phrase-item"><span class="phrase-text">{p[0]}</span><span class="phrase-desc">{p[1]}</span></div>\n'
        else:
            p_html += f'<div class="phrase-item"><span class="phrase-text">{p}</span></div>\n'
    
    # Sentence
    s_html = f'<div class="sentence-example"><span class="example-kr">{sentence}</span></div>\n' if sentence else ""
    
    # Pattern
    pt_html = f'<div class="pattern-box">{pattern_str}</div>\n' if pattern_str else ""
    
    # Sound change
    sc_html = f'<div class="sound-change"><span class="sc-label">🎵 音变现象</span> {sound_change}</div>\n'
    
    # Tail info
    ti_html = ""
    if tail_info:
        ti_html = '<div class="tail-info">\n'
        for line in tail_info:
            ti_html += f'  <div class="tail-line">{line}</div>\n'
        ti_html += '</div>\n'
    
    return f"""
<div class="page">
  <div class="page-header"><span class="section-label">第30课 · 一起去看极光</span></div>
  <h3 class="sentence-label">{s_label}</h3>
  <div class="sentence-original">
    <div class="orig-kr">{kr}</div>
    <div class="orig-zh">{zh}</div>
    <div class="orig-en">{en}</div>
  </div>
  <div class="framework-box">
    <div class="fw-title">📐 句子框架</div>
    {fw_html}
  </div>
  <div class="audio-badge small">🔊 听这句的录音</div>
  <div class="words-grid">{w_html}</div>
  <div class="phrases-section">{p_html}</div>
  <div class="sentence-section">{s_html}</div>
  <div class="pattern-section">{pt_html}</div>
  {sc_html}
  {ti_html}
  <div class="page-footer">台词精讲 {s_num}/20</div>
</div>
"""

def make_application_page(s_num, s_label, kr, zh, en,
                          swap_exercises, rewrite_exercises, qa_pairs):
    swap_html = ""
    for s in swap_exercises:
        swap_html += f'<div class="swap-item">{s}</div>\n'
    
    rewrite_html = ""
    for r in rewrite_exercises:
        rewrite_html += f'<div class="rewrite-item">{r}</div>\n'
    
    qa_html = ""
    for q, a in qa_pairs:
        qa_html += f'<div class="qa-item"><div class="q">Q: {q}</div><div class="a">A: {a}</div></div>\n'
    
    return f"""
<div class="page">
  <div class="page-header"><span class="section-label">第30课 · 一起去看极光</span></div>
  <div class="review-bar">{kr} — {zh}</div>
  <h4 class="section-subtitle">🔄 换词练习</h4>
  <div class="swap-section">{swap_html}</div>
  <h4 class="section-subtitle">✍️ 仿写改写</h4>
  <div class="rewrite-section">{rewrite_html}</div>
  <h4 class="section-subtitle">❓ 提问 / Q&A</h4>
  <div class="qa-section">{qa_html}</div>
  <div class="page-footer">台词应用 {s_num}/20</div>
</div>
"""

def main():
    # All 20 sentences including repeats (for line summary)
    all_sentences = [
        ("그러니까 지금 당신 말은...", "所以你现在意思是说……", "So what you are saying now is..."),
        ("도와주세요!", "帮帮我！", "Help me!"),
        ("당신이 같이 가 줬으면 좋겠어요", "我希望你能和我一起去", "I wish you would go with me"),
        ("혹시 내가 부담스러워요?", "我让你感到负担了吗？", "Am I a burden to you?"),
        ("내가 막 사귀자고 협박할까 봐 무서워요?", "你是怕我会威胁你要和我交往吗？", "Are you scared I will threaten you to date me?"),
        ("그런 협박에 넘어가지 않을 자신은 있습니다", "我有自信不会被那种威胁吓到", "I am confident I won't fall for that kind of threat"),
        ("그럼 같이 가요!", "那一起去吧！", "Then let's go together!"),
        ("가면 오로라도 볼 수 있는데?", "如果去的话还能看到极光呢", "If we go, we can also see the aurora!"),
        ("오로라...", "极光……", "Aurora..."),
        ("오로라...", "极光……", "Aurora..."),
        ("초록색...", "绿色……", "Green..."),
        ("파란색...", "蓝色……", "Blue..."),
        ("인생이잖아...", "这就是人生啊……", "That's life, you know..."),
        ("오로라!", "极光！", "Aurora!"),
        ("그래요?", "是吗？", "Is that so?"),
        ("그럼 같이 가죠.", "那一起去吧。", "Then let's go together."),
        ("어차피 난 피할 거 없기로 했고", "反正我也没什么好躲的", "Anyway, I decided there's nothing to avoid"),
        ("간 김엔", "既然要去", "Since (we're) going anyway"),
        ("그 오로라도 보고 싶으니까", "因为我也想看看那极光", "Since I also want to see that aurora"),
        ("그래요! 우리 같이 가서 오로라도 봐요!", "好啊！我们一起去看看极光吧！", "Okay! Let's go together and see the aurora!"),
    ]
    
    # Build HTML
    html_parts = []
    
    # CSS
    css = """
* { margin: 0; padding: 0; box-sizing: border-box; }
@page { margin: 0; size: A4; }
@font-face { font-family: 'NotoKr'; src: url('/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc'); }
@font-face { font-family: 'NotoKrBold'; src: url('/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc'); }
body { font-family: 'NotoKr', 'Noto Sans SC', 'Noto Sans', sans-serif; font-size: 12px; color: #333; background: #faf8f4; }
.page { 
  width: 210mm; min-height: 297mm; padding: 18mm 16mm 14mm; 
  position: relative; page-break-after: always; overflow: hidden;
  background: #faf8f4;
}
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
.section-label { font-size: 11px; color: #8b7355; font-weight: 600; letter-spacing: 1px; }
.page-footer { 
  position: absolute; bottom: 10mm; left: 50%; transform: translateX(-50%);
  font-size: 9px; color: #c4b998; letter-spacing: 1px;
}
/* Cover */
.cover-page { padding: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.cover-bg {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(145deg, #faf8f4, #f5f0e8, #ede6d8, #e8dfce);
  z-index: 0;
}
.aurora-svg { position: absolute; top: 30mm; left: 0; width: 100%; height: 140px; z-index: 1; }
.cover-content { position: relative; z-index: 2; text-align: center; margin-top: 180px; }
.cover-lesson-label { font-size: 13px; color: #8b7355; letter-spacing: 4px; margin-bottom: 12px; }
.cover-title { font-size: 30px; color: #5c4a2e; font-weight: 700; margin-bottom: 8px; }
.cover-subtitle { font-size: 18px; color: #a08060; margin-bottom: 14px; letter-spacing: 1px; }
.cover-divider { width: 60px; height: 2px; background: #c4b998; margin: 0 auto 14px; }
.cover-desc { font-size: 12px; color: #8b7355; line-height: 1.8; margin-bottom: 12px; }
.cover-tags { font-size: 11px; color: #a08060; }
.cover-tags .dot { margin: 0 8px; }
/* Line summary */
.section-title { font-size: 18px; color: #5c4a2e; margin-bottom: 10px; }
.audio-badge { 
  display: inline-block; background: #ede6d8; color: #8b7355; 
  padding: 4px 12px; border-radius: 4px; font-size: 11px; margin-bottom: 12px;
}
.audio-badge.small { font-size: 10px; padding: 3px 10px; }
.line-summary { display: flex; flex-direction: column; gap: 6px; }
.line-item { display: flex; gap: 8px; padding: 4px 0; border-bottom: 1px solid #ede6d8; }
.line-num { font-size: 11px; color: #c4b998; min-width: 24px; text-align: right; }
.line-text { flex: 1; }
.line-kr { font-size: 15px; font-weight: 600; color: #333; }
.line-en { font-size: 10px; color: #999; font-style: italic; margin-top: 1px; }
.line-zh { font-size: 12px; color: #555; margin-top: 1px; }
/* Sentence detail */
.sentence-label { font-size: 14px; color: #8b7355; margin-bottom: 6px; }
.sentence-original { 
  background: #f5f0e8; padding: 8px 12px; border-radius: 6px; margin-bottom: 10px;
}
.orig-kr { font-size: 16px; font-weight: 600; color: #333; }
.orig-zh { font-size: 13px; color: #555; margin-top: 2px; }
.orig-en { font-size: 11px; color: #999; font-style: italic; margin-top: 1px; }
/* Framework */
.framework-box { background: #f8f6f2; padding: 8px 10px; border-radius: 6px; margin-bottom: 8px; border-left: 3px solid #c4b998; }
.fw-title { font-size: 12px; color: #8b7355; font-weight: 600; margin-bottom: 4px; }
.fw-item { font-size: 11px; color: #555; padding: 1px 0; }
/* Words grid */
.words-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px 12px; margin-bottom: 8px; }
.word-item { display: flex; gap: 6px; font-size: 11px; padding: 2px 6px; background: #f8f6f2; border-radius: 3px; }
.word-kr { font-weight: 600; color: #2a6f97; min-width: 60px; }
.word-en { color: #999; font-style: italic; flex: 1; }
.word-zh { color: #555; min-width: 50px; }
/* Phrases */
.phrases-section { margin-bottom: 6px; }
.phrase-item { padding: 3px 0; font-size: 11px; display: flex; gap: 8px; }
.phrase-text { font-weight: 500; color: #2d6a4f; }
.phrase-desc { color: #777; font-size: 10px; }
/* Sentence example */
.sentence-section { margin-bottom: 6px; }
.sentence-example { padding: 4px 8px; background: #f8f6f2; border-radius: 4px; }
.example-kr { font-size: 12px; color: #333; }
/* Pattern */
.pattern-section { margin-bottom: 6px; }
.pattern-box { padding: 5px 8px; background: #f8f6f2; border-left: 3px solid #a53860; border-radius: 4px; font-size: 11px; color: #555; }
/* Sound change */
.sound-change { padding: 4px 8px; background: #f0ece4; border-radius: 4px; font-size: 11px; color: #666; margin-bottom: 6px; }
.sc-label { color: #8b7355; font-weight: 600; }
/* Tail info */
.tail-info { padding: 4px 8px; background: #f0ece4; border-radius: 4px; font-size: 10px; color: #777; }
.tail-line { padding: 1px 0; }
/* Review bar */
.review-bar { text-align: center; font-size: 12px; color: #8b7355; padding: 6px; background: #f5f0e8; border-radius: 6px; margin-bottom: 10px; }
/* Application sections */
.section-subtitle { font-size: 13px; color: #5c4a2e; margin: 8px 0 4px; }
.swap-section, .rewrite-section, .qa-section { margin-bottom: 8px; }
.swap-item, .rewrite-item { padding: 3px 6px; font-size: 11px; color: #555; border-bottom: 1px dashed #ede6d8; }
.qa-item { padding: 3px 6px; margin-bottom: 3px; }
.qa-item .q { font-size: 11px; color: #2a6f97; }
.qa-item .a { font-size: 11px; color: #2d6a4f; padding-left: 14px; }
/* Tables */
.pattern-table { width: 100%; border-collapse: collapse; margin-bottom: 10px; }
.pattern-table th { background: #ede6d8; color: #5c4a2e; font-size: 11px; padding: 5px 8px; text-align: left; }
.pattern-table td { font-size: 11px; padding: 4px 8px; border-bottom: 1px solid #ede6d8; color: #555; }
.pattern-table tr:nth-child(even) td { background: #f8f6f2; }
/* Scene */
.scene-dialog { margin-bottom: 8px; }
.scene-line { padding: 3px 6px; font-size: 11px; }
.scene-line .sl-kr { font-weight: 600; color: #333; }
.scene-line .sl-en { font-style: italic; color: #999; }
.scene-line .sl-zh { color: #555; }
/* Diary */
.diary-item { margin-bottom: 12px; }
.diary-prompt { font-size: 12px; color: #333; margin-bottom: 3px; }
.diary-line { display: flex; align-items: center; gap: 6px; margin: 3px 0; }
.diary-line label { font-size: 10px; color: #8b7355; min-width: 14px; }
.diary-underline { flex: 1; border-bottom: 1px solid #c4b998; height: 16px; }
.diary-answer { font-size: 10px; color: #999; margin-top: 1px; padding-left: 20px; }
/* Oral challenge */
.challenge-item { margin-bottom: 12px; }
.challenge-prompt { font-size: 12px; color: #333; font-weight: 500; margin-bottom: 4px; }
.challenge-blank { margin: 4px 0; }
.challenge-blank .cb-label { font-size: 10px; color: #8b7355; }
.challenge-underline { border-bottom: 1px solid #c4b998; height: 20px; margin: 0 0 2px 14px; }
/* Underline answer style */
.underline-answer { 
  display: inline-block; border-bottom: 1px solid #c4b998; 
  margin: 0 3px; min-width: 80px; text-indent: 4px;
}
.answer-ref { font-size: 9px; color: #999; margin-top: 1px; }
"""
    
    html_parts.append(f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<style>{css}</style>
</head>
<body>
""")
    
    # 1. Cover
    html_parts.append(make_cover())
    
    # 2. Line summary (all 20 with repeats)
    html_parts.append(make_line_summary(all_sentences))
    
    # 3. Detailed explanations + Applications (dedup)
    # Unique sentences with their explanations:
    lessons = [
        # (s_num, s_label, kr, zh, en, framework_lines, words, phrases, sentence_example, pattern, sound_change, tail_info,
        #  swap_exercises, rewrite_exercises, qa_pairs)
        
        (1, "①", "그러니까 ─ 지금 ─ 당신 ─ 말은…", "所以你现在意思是说……", "So what you are saying now is...",
         ["+ (背景 ⏱️ 지금 — 现在)", "+ 🏷️ 谁 당신 — 你", "+ 🏷️ 什么 말 — 话/意思", "+ 🏷️ 干 말은… — 意思是说……"],
         [("그러니까","所以说","so/therefore"), ("지금","现在","now"), ("당신","你","you"), ("말","话/说话","words/talk")],
         [("그러니까 — 意思是说（用以总结或追问对方）", ""), ("당신 말은 — 你的意思是", "")],
         "그러니까 지금 무슨 말을 하고 싶은 거예요? — 所以你现在想说什么？",
         "🔧 句型<br>그러니까 + [内容] — \"所以说……\"（承接上文总结或追问）<br>词尾：-은 ④变身（强调助词 — 强调所说的内容）",
         "말은[마른] — ㄹ + ㅇ → 连音  |  그러니까[그러니까] — 无特殊音变",
         ["├─ 原形：말이다", "└─ 词尾：-은", "├─ ✅ ①加料: —", "├─ ~~②接口~~", "├─ ✅ ③收尾: 省略（话没说完）", "└─ ✅ ④变身: -은 强调助词（말에 -은 → 말은）"],
         ["당신 → 너（更亲近）/ 선생님（更尊敬）", "말 → 의미（意思）/ 생각（想法）", "그러니까 → 그래서（所以）/ 즉（即）"],
         ["① 模仿（换词）：<br>原句：그러니까 지금 당신 말은... → 그러니까 지금 네 말은...<br>② 半独立（用句型写真实情况）：<br>中文提示：所以你现在意思是说，我错了？<br>→ 그러니까 지금 내가 틀렸다는 말이에요?"],
         [("당신 말은 무슨 뜻이에요? 你这话是什么意思？", "그러니까 우리 같이 가자는 말이에요. 就是说我们一起去的意思。")]),

        (2, "②", "↑ 도와주세요! ↘", "帮帮我！", "Help me!",
         ["+ 🏷️ 谁 (省略 — 请求对象为\"你\")", "+ 🏷️ 干 도와주세요 — 请帮帮我", "🎯 도와주다 = 돕다（帮助）+ 주다（给）→ \"为某人帮助\""],
         [("도와주다","帮助","help"), ("돕다","帮（原形）","to help")],
         [("도와주세요 — 请帮帮我（请求帮助的敬语表达）", "")],
         "이 문제 좀 도와주세요. — 请帮我解决这个问题。",
         "🔧 句型<br>-아/어 주세요 — \"请为我做……\"（请求敬语）<br>词尾：-세요 ③收尾（해요체·现在·请求）",
         "도와주세요[도와주세요] — 无特殊音变",
         ["├─ 原形：도와주다（돕다 + 주다）", "└─ 词尾：-세요", "├─ ✅ ①加料: —", "├─ ~~②接口~~", "├─ ✅ ③收尾: 해요체·现在·请求（-시- + -어요 → -세요）", "└─ ~~④变身~~"],
         ["도와주세요 → 도와줘（非敬语）/ 도와드릴까요?（我来帮您？）"],
         ["이 서류 좀 도와주세요. — 请帮我处理这份文件。"],
         [("무엇을 도와드릴까요? — 需要帮什么忙？", "이 짐 좀 들어 주세요. — 请帮我拿一下这个行李。")]),

        (3, "③", "↑ 당신이 ─ 같이 ─ 가 줬으면 ↘ 좋겠어요 ↗", "我希望你能和我一起去", "I wish you would go with me",
         ["+ 🏷️ 谁 당신이 — 你", "+ 🔧 方式 같이 — 一起", "+ 🏷️ 干 가 줬으면 — 去了", "⬇ 좋겠어요 — \"就好了\"（主句谓语）", "+ 🏷️ 干 좋겠어요"],
         [("당신","你","you"), ("같이","一起","together"), ("가다","去","go"), ("주다","给（辅助\"为某人做\"）","give/for"), ("좋다","好","good")],
         [("같이 가다 — 一起去", ""), ("가 줬으면 좋겠다 — 希望（你）能去（直译：如果你去了就好了）", "")],
         "다음 휴가에 같이 여행 갔으면 좋겠어요. — 希望下次休假能一起去旅行。",
         "🔧 句型<br>-아/어 주다 — 为某人做某事<br>-았/었으면 좋겠다 — \"要是……就好了\"（表达希望）<br>词尾：-았-①加料 + -(으)면②接口 + -겠-①加料 + -어요③收尾",
         "같이[가치] ㅆ+히→紧音化 | 줬으면[줘쓰면] ㅆ+으→连音 | 좋겠어요[조케써요] ㅎ+ㄱ→ㅋ紧音",
         ["├─ 原形：가다 + 주다", "├─ ✅ ①加料: -았-（过去/完成时制词尾 → 假设已完成）", "├─ ✅ ②接口: -(으)면（条件\"如果\"）", "└─ ~~③收尾~~", "├─ 原形：좋다", "├─ ✅ ①加料: -겠-推测（表达\"就好了\"的希望）", "├─ ~~②接口~~", "├─ ✅ ③收尾: -어요 해요체·现在", "└─ ~~④变身~~"],
         ["당신이 → 우리가 / 선생님이 / 오빠가", "같이 가다 → 같이 먹다 / 같이 보다 / 함께 여행하다"],
         ["① 模仿：당신이 같이 가 줬으면 좋겠어요 → 선생님이 같이 와 줬으면 좋겠어요.", "② 半独立：希望明天天气能变好 → 내일 날씨가 좋았으면 좋겠어요."],
         [("같이 가고 싶어요? 你想一起去吗？", "네, 같이 갔으면 좋겠어요. 是的，希望一起去。")]),

        (4, "④", "↑ 혹시 ─ 내가 ─ 부담스러워요? ↗", "我让你感到负担了吗？", "Am I a burden to you?",
         ["+ (背景 🤔 혹시 — 难道/也许)", "+ 🏷️ 谁 내가 — 我", "+ 🏷️ 干 부담스러워요 — 觉得有负担"],
         [("혹시","也许/难道","by any chance"), ("내","我","I"), ("부담스럽다","有负担的","burdensome")],
         [("부담스럽다 — 觉得有负担（부담+스럽다）", "")],
         "제가 자주 연락하면 부담스러울까요? — 我经常联系的话会让你有负担吗？",
         "🔧 句型<br>-스럽다 — 名词→形容词后缀\"令人感到……的\"<br>词尾：-스럽다 ④变身",
         "혹시[혹씨] ㄱ+ㅅ→紧音化 | 부담스러워요[부담스러워요] 无特殊",
         ["├─ 原形：부담스럽다", "└─ 词尾：-어요", "├─ ✅ ①加料: —", "├─ ~~②接口~~", "├─ ✅ ③收尾: 해요체·现在·疑问", "└─ ✅ ④变身: -스럽다（名词→形容词化后缀）"],
         ["부담스럽다 → 어색하다（尴尬）/ 민망하다（难为情）"],
         ["혹시 이 선물이 부담스러워요? — 这个礼物会让你有负担吗？"],
         [("혹시 내가 너무 자주 전화해서 부담스러워요? 我经常打电话让你有负担吗？", "아니요, 오히려 좋아요. 不会，反而很好。")]),

        (5, "⑤", "↑ 내가 ─ 막 ─ 사귀자고 ─ 협박할까 봐 ↘ 무서워요? ↗", "你是怕我会威胁你要和我交往吗？", "Are you scared I will threaten you to date me?",
         ["+ 🏷️ 谁 내가 — 我", "+ 🔧 방식 막 — 随便地/胡乱地", "+ 🏷️ 干 사귀자고 협박할까 봐 — 怕会威胁说要交往", "⬇ 무서워요 — 害怕（主句）", "+ 🏷️ 干 무서워요", "✅ ③收尾: 해요체·现在·疑问"],
         [("막","胡乱地","recklessly"), ("사귀다","交往","date/go out"), ("협박하다","威胁","threaten"), ("무섭다","害怕","be scared")],
         [("사귀자고 협박하다 — 威胁说要交往", ""), ("-ㄹ까 봐 무섭다 — 怕会……", "")],
         "시험에 떨어질까 봐 무서워요. — 我怕考试会不及格。",
         "🔧 句型<br>-자고 表示提议的引用\"说要一起做\"<br>-ㄹ까 봐 担心/害怕\"怕会……\"<br>词尾：-자고②接口 + -ㄹ까 봐②接口",
         "막[막] 无特殊 | 사귀자고[사귀자고] 无特殊 | 협박할까[협빠칼까] ㅂ+ㅎ→ㅍ紧音 | 무서워요[무서워요] 无特殊",
         ["├─ 原形：사귀다 + -자고 + 협박하다 + -ㄹ까 봐", "└─ ✅ ②接口: -자고（提议引用）+ -ㄹ까 봐（担心）"],
         ["협박하다 → 화내다（生气）/ 때리다（打）", "무섭다 → 걱정되다（担心）/ 긴장되다（紧张）"],
         ["내가 울까 봐 무서워요? — 你怕我会哭吗？"],
         [("왜 무서워해요? 为什么害怕？", "혼자 두고 갈까 봐 무서워요. 怕被丢下一个人。")]),

        (6, "⑥", "↑ 그런 ─ 협박에 ↘ 넘어가지 않을 ─ 자신은 ↘ 있습니다 ↘", "我有自信不会被那种威胁吓到", "I am confident I won't fall for that kind of threat",
         ["+ 🏷️ 什么 그런 협박에 — 对于那种威胁", "+ 🏷️ 干 넘어가지 않을 — 不会上当的", "+ 🏷️ 什么 자신은 — 自信（는强调）", "+ 🏷️ 干 있습니다 — 有"],
         [("그런","那样的","such"), ("협박","威胁","threat"), ("넘어가다","上钩/被骗","fall for"), ("자신","自信","confidence")],
         [("협박에 넘어가다 — 被威胁吓到/上钩", ""), ("자신이 있다 — 有自信/有把握", "")],
         "그런 말에 넘어가지 않을 자신 있어요. — 我有自信不会被那种话骗到。",
         "🔧 句型<br>-지 않다 否定<br>-ㄹ 转性→定语<br>词尾：-지 않다④变身 + -ㄹ④变身 + -습니다③收尾",
         "협박에[협빠게] ㅂ+ㅎ→紧音化 | 넘어가지[너머가지] 无特殊 | 않을[아늘] ㅎ+ㅇ→脱落",
         ["├─ 原形：넘어가다", "└─ ✅ ④变身: -지 않다（否定）+ -ㄹ（转性→定语）", "└─ ✅ ③收尾: 하십시오체·现在·肯定"],
         ["넘어가다 → 속다（被骗）/ 당하다（被害）", "협박 → 유혹（诱惑）/ 거짓말（谎言）"],
         ["模仿：그런 협박에 넘어가지 않을 자신은 있습니다 → 그런 거짓말에 속지 않을 자신 있어요.<br>半独立：我有自信不会迟到 → 지각하지 않을 자신 있어요."],
         [("정말 자신 있어요? 真的有自信吗？", "네, 절대 넘어가지 않을 자신 있습니다. 是的，我有绝对不被动摇的自信。")]),

        (7, "⑦~⑧", "⑦ ↑ 그럼 ─ 같이 ─ 가요! ↘<br>⑧ ↑ 가면 ─ 오로라도 ─ 볼 수 ↘ 있는데? ↗", "⑦ 那一起去吧！<br>⑧ 如果去的话还能看到极光呢", "⑦ Then let's go together!<br>⑧ If we go, we can also see the aurora!",
         ["【⑦】", "+ (背景 🔄 조건 그럼 — 那么/如果那样)", "+ 🔧 方式 같이 — 一起", "+ 🏷️ 干 가요 — 去吧", "", "【⑧】", "+ 🏷️ 干 가면 — 如果去", "+ 🏷️ 什么 오로라도 — 极光也", "+ 🏷️ 干 볼 수 있는데 — 能看呢"],
         [("그럼","那么/那样的话","then"), ("같이","一起","together"), ("가다","去","go"), ("오로라","极光","aurora"), ("보다","看","see"), ("있다","有","exist")],
         [],
         "",
         "【⑦】<br>🔧 -아/어요 口语提议\"一起……吧\"<br>词尾：-아요③收尾（해요체·现在·提议）<br><br>【⑧】<br>🔧 -(으)면 \"如果……\"（条件）<br>🔧 -ㄹ 수 있다 \"能……\"（能力/可能）<br>🔧 -는데 反诘/委婉提示<br>词尾：-(으)면②接口 + -ㄹ④变身 + -는데②接口",
         "같이[가치] — ㅆ+히→紧音化 | 있는데[인는데] — 无特殊音变",
         ["【⑦】├─ 原形：가다 └─ ✅ ③收尾: 해요체·现在·提议", "【⑧】├─ 原形：가다 → ✅ ②接口: -(으)면（条件\"如果\"）", "├─ 原形：보다 + 있다 → ✅ ④变身: -ㄹ（转性 → 可能形）", "└─ ✅ ②接口: -는데（反诘/委婉提示）"],
         ["가요 → 가자（非敬语）/ 갑시다（郑重）", "오로라 → 별（星星）/ 바다（大海）/ 폭포（瀑布）"],
         ["⑦ 仿写：그럼 같이 먹어요! — 那一起吃吧！", "⑧ 仿写：여기에 오면 맛있는 음식도 먹을 수 있는데? — 来这里还能吃到好吃的呢？"],
         [("같이 갈래요? 要一起去吗？", "네, 같이 가요! 嗯，一起去！"), ("무엇을 볼 수 있어요? 能看到什么？", "오로라를 볼 수 있어요. 能看到极光。")]),

        (8, "⑨~⑫", "⑨ ↑ 오로라… ↘<br>⑩ ↑ 오로라… ↘<br>⑪ ↑ 초록색… ↘<br>⑫ ↑ 파란색… ↘", "⑨ 极光……<br>⑩ 极光……<br>⑪ 绿色……<br>⑫ 蓝色……", "⑨ Aurora...<br>⑩ Aurora...<br>⑪ Green...<br>⑫ Blue...",
         ["【⑨~⑩】", "+ 🏷️ 什么 오로라 — 极光（感叹/自言自语）", "🎯 省略句，表示被极光吸引而感叹", "🎯 相同的词反复说，体现被极光之美震撼", "", "【⑪】", "+ 🏷️ 什么 초록색 — 绿色（描述极光颜色）", "", "【⑫】", "+ 🏷️ 什么 파란색 — 蓝色（极光颜色变化）", "🎯 -색 颜色后缀 — 빨간색(红)/파란색(蓝)/초록색(绿)/노란색(黄)"],
         [("오로라","极光","aurora"), ("초록색","绿色","green"), ("파란색","蓝色","blue")],
         [],
         "오로라가 정말 예쁘다고 들었어요. 초록색하고 파란색이 특히 아름다워요. — 听说极光真的很美。绿色和蓝色尤其漂亮。",
         "",
         "모두 — 无特殊音变",
         [],
         ["초록색 → 보라색（紫色）/ 빨간색（红色）/ 하얀색（白色）"],
         ["오로라... 정말 예쁘다. — 极光……真的好美。"],
         [("무슨 색이 가장 예뻐요? — 什么颜色最美？", "저는 초록색이 가장 예뻐요. — 我觉得绿色最美。")]),

        (9, "⑬", "↑ 인생이잖아… ↘", "这就是人生啊……", "That's life, you know...",
         ["+ 🏷️ 什么 인생이 — 人生", "+ 🏷️ 干 인생이잖아 — 是人生啊"],
         [("인생","人生","life"), ("-잖아","\"不是……嘛\"反问强调","you know")],
         [("인생이잖아 — 这就是人生啊（感叹表达，常用于面对不完美时自我安慰）", "")],
         "누구에게나 힘든 순간은 있는 거잖아요. — 谁都有艰难的瞬间不是吗。",
         "🔧 句型<br>-잖아(요) — 反问式强调\"不是……嘛\"（表示理所当然的肯定）<br>词尾：-잖아③收尾（해요체·现在·反问强调语气）<br>💡 -지 않아? → -잖아（缩略）\"难道不是吗？\"\"本来就这样嘛\"",
         "인생이잖아[인생이자나] — ㅎ+ㅇ→脱落（잖+아→자나）",
         ["├─ 原形：인생 + 이다 + -잖아", "└─ 词尾：-잖아", "├─ ~~①加料~~", "├─ ~~②接口~~", "├─ ✅ ③收尾: 해요체·现在·反问强调（-지 않아? → -잖아）", "└─ ~~④变身~~"],
         ["인생 → 현실（现实）/ 운명（命运）/ 인연（缘分）", "-잖아 → -지 뭐（还有什么办法）/ -네（感叹）"],
         ["模仿：인생이잖아... → 이게 현실이잖아.（这就是现实啊）", "半独立：这就是缘分啊 → 이게 인연이잖아."],
         [("인생이 뭐라고 생각해요? 你认为人生是什么？", "원래 다 그런 거잖아요. 좋을 때도 있고 나쁠 때도 있는 거죠. 人生本来就是这样嘛，有好有坏。")]),

        (10, "⑭~⑯", "⑭ ↑ 오로라! ↘<br>⑮ ↑ 그래요? ↗<br>⑯ ↑ 그럼 ─ 같이 ─ 가죠. ↘", "⑭ 极光！<br>⑮ 是吗？<br>⑯ 那一起去吧。", "⑭ Aurora!<br>⑮ Is that so?<br>⑯ Then let's go together.",
         ["【⑭】", "+ 🏷️ 什么 오로라! — 极光！（突然看见时的惊叹）", "🎯 感叹句，名词单独使用表达强烈情感", "", "【⑮】", "+ 🏷️ 干 그래요 — 是吗", "", "【⑯】", "+ (背景 🔄 조건 그럼 — 那么)", "+ 🔧 方式 같이 — 一起", "+ 🏷️ 干 가죠 — 去吧"],
         [("오로라","极光","aurora"), ("그래요","是吗/好吧","really/is that so"), ("그럼","那么","then"), ("같이","一起","together"), ("가다","去","go")],
         [],
         "",
         "【⑮】<br>🔧 그래요 — 그렇다的해요체疑问形<br>词尾：-어요③收尾（해요체·现在·疑问）<br><br>【⑯】<br>🔧 -죠 柔和提议（-지요缩略）<br>词尾：-지요③收尾（해요체·现在·共动提议，比-아요更柔和）",
         "같이[가치] — 紧音化 | 가죠[가죠] — 无特殊音变",
         ["【⑮】├─ 原形：그렇다 └─ ✅ ③收尾: 해요체·现在·疑问", "【⑯】├─ 原形：가다 └─ ✅ ③收尾: 해요체·现在·共动提议（-지요缩略）"],
         ["가죠 → 먹죠（吃吧）/ 보죠（看吧）/ 쉬죠（休息吧）"],
         ["그래요, 그럼 같이 시작하죠. — 好的，那我们一起开始吧。"],
         [("같이 갈까요? 要不要一起去？", "네, 그럼 같이 가죠! 好，那一起去吧！")]),

        (11, "⑰", "↑ 어차피 ─ 난 ─ 피할 거 ─ 없기로 했고 ↘", "反正我也没什么好躲的", "Anyway, I decided there's nothing to avoid",
         ["+ (背景 ⏱️ 양보 어차피 — 反正/不管怎样)", "+ 🏷️ 谁 나는 — 我（는表对比/主题）", "+ 🏷️ 干 피할 거 없기로 했고 — 决定没什么好躲的，而且……"],
         [("어차피","反正","anyway"), ("나","我","I"), ("피하다","躲避","avoid"), ("없기로 하다","决定不","decide not to")],
         [("어차피 — 反正（表示无论如何结果都一样）", ""), ("피할 거 없다 — 没什么好躲的", ""), ("-기로 하다 — 决定……", "")],
         "어차피 늦었으니 천천히 가기로 했어요. — 反正也晚了，我决定慢慢走。",
         "🔧 句型<br>-기로 하다 — \"决定做……\"<br>-ㄹ 거(것) — 名词化\"……的事\"<br>词尾：-ㄹ④变身 + -기④变身 + -고②接口",
         "없기로[없끼로] — ㅂ+ㄱ→紧音化 | 않을[아늘] — ㅎ+ㅇ→脱落",
         ["├─ 原形：피하다 + 없다 + -기로 하다", "├─ ✅ ②接口: -고（并列\"而且……还\"）", "└─ ✅ ④变身: -ㄹ（转性→定语）+ -기（转性→名词化）"],
         ["피하다 → 숨다（躲藏）/ 도망가다（逃跑）", "-기로 하다 → -(기로) 결심하다（决心）/ -(기) 약속하다（约定）"],
         ["模仿：피할 거 없기로 했고 → 어차피 할 거니까 지금 하기로 했어요.", "半独立：反正要做的事，决定现在做 → 어차피 할 일이니까 지금 하기로 했어요."],
         [("왜 피하지 않기로 했어요? 为什么决定不躲了？", "어차피 피해도 소용없으니까요. 反正躲了也没用。")]),

        (12, "⑱~⑲", "⑱ ↑ 간 ─ 김엔 ↘<br>⑲ ↑ 그 ─ 오로라도 ↘ 보고 ─ 싶으니까 ↘", "⑱ 既然要去<br>⑲ 因为我也想看看那极光", "⑱ Since (we're) going anyway<br>⑲ Since I also want to see that aurora",
         ["【⑱】", "+ (背景 🔧 기회 간 김에 — 既然（要）去)", "+ 🏷️ 干 간 김에 — 去的时候趁机/既然去", "", "【⑲】", "+ 🏷️ 什么 그 오로라도 — 那极光也", "+ 🏷️ 干 보고 싶으니까 — 因为想看"],
         [("가다","去","go"), ("김","契机/机会","occasion/moment"), ("그","那个","that"), ("오로라","极光","aurora"), ("보다","看","see"), ("싶다","想","want")],
         [("-ㄴ 김에 — \"趁……的机会/既然……\"（利用做某事的机会顺便做另一件事）", "")],
         "",
         "【⑱】<br>🔧 -ㄴ 김에 — \"趁……的机会/既然……\"<br>词尾：-ㄴ②接口（转性→定语）+ 김에<br><br>【⑲】<br>🔧 -고 싶다 \"想……\"<br>🔧 -(으)니까 \"因为……\"（原因）<br>词尾：-고②接口 + -(으)니까②接口",
         "싶으니까[시프니까] — ㅂ+ㄱ→ㅍ送气音化",
         ["【⑱】├─ 原形：가다 + 김에 └─ ✅ ②接口: -ㄴ 김에（\"趁……的机会\"）", "【⑲】├─ 原形：보다 + 싶다 └─ ✅ ②接口: -(으)니까（原因\"因为……\"）+ ✅ ④变身: -고（连接）"],
         ["보고 싶다 → 가고 싶다（想去）/ 먹고 싶다（想吃）", "-(으)니까 → -아/어서（因为，表自然原因）"],
         ["⑱ 仿写：나간 김에 우유도 사 올게요. — 既然出去了，顺便买牛奶回来。<br>서울에 간 김에 친구도 만났어요. — 既然去了首尔，顺便见了朋友。<br>⑲ 仿写：그 영화도 보고 싶으니까 같이 가요. — 因为我也想看看那部电影，一起去吧。<br>시간이 없으니까 빨리 갈게요. — 因为没有时间了，我赶快去。"],
         [("왜 오로라를 보고 싶어요? 为什么想看极光？", "너무 예쁘다고 들었으니까요. 因为听说很美。")]),

        (13, "⑳", "↑ 그래요! ↘ 우리 ─ 같이 ─ 가서 ↘ 오로라도 ─ 봐요! ↘", "好啊！我们一起去看看极光吧！", "Okay! Let's go together and see the aurora!",
         ["+ (背景 👍 동의 그래요 — 好啊！)", "+ 🏷️ 谁 우리 — 我们", "+ 🔧 方式 같이 — 一起", "+ 🏷️ 干 가서 — 去（然后）", "⬇ -아/어서（先后顺序）→ 然后", "+ 🏷️ 什么 오로라도 — 极光也", "+ 🏷️ 干 봐요 — 看吧"],
         [("그래요","好啊","okay"), ("우리","我们","we"), ("같이","一起","together"), ("가다","去","go"), ("오로라","极光","aurora"), ("보다","看","see")],
         [("같이 가서 보다 — 一起去看看", "")],
         "우리 같이 공원에 가서 꽃도 봐요. — 我们一起去公园看看花吧。",
         "🔧 句型<br>-아/어서 连接动作顺序\"……之后/然后……\"<br>-도 \"也\"<br>-아/어요 口语提议\"一起……吧\"<br>词尾：-아/어서②接口 + -아요③收尾",
         "그래요[그래요] 无特殊 | 같이[가치] 紧音化 | 오로라도[오로라도] 无特殊 | 봐요[봐요] 无特殊",
         ["├─ 原形：가다 → ✅ ②接口: -아/어서（连接动作顺序）", "├─ 原形：보다 → ✅ ③收尾: 해요체·现在·提议\"一起……吧\""],
         ["가서 보다 → 가서 먹다（去吃）/ 가서 사다（去买）/ 가서 만나다（去见）", "오로라 → 영화（电影）/ 공연（演出）/ 전시회（展览）"],
         ["模仿：그래요! 우리 같이 가서 오로라도 봐요! → 그래요! 우리 같이 가서 커피도 마셔요!", "半独立：我们一起去逛逛市场吧！ → 우리 같이 시장에 가서 구경도 해요!"],
         [("같이 갈래요? 要一起去吗？", "네, 그래요! 같이 가서 오로라도 봐요! 好啊！一起去看看极光吧！")]),
    ]
    
    # Check which unique sentence numbers to skip (duplicates already handled by grouping)
    used_nums = set()
    
    for lesson in lessons:
        s_num, label, kr, zh, en, fw, words, phrases, sentence, pattern, sound, tail, swap, rewrite, qa = lesson
        html_parts.append(make_detail_page(s_num, label, kr, zh, en, fw, words, phrases, sentence, pattern, sound, tail))
        html_parts.append(make_application_page(s_num, label, kr, zh, en, swap, rewrite, qa))
    
    # 4. Key Sentence Pattern Table
    html_parts.append("""
<div class="page">
  <div class="page-header"><span class="section-label">第30课 · 一起去看极光</span></div>
  <h2 class="section-title">📐 重点句型表</h2>
  <table class="pattern-table">
    <tr><th>句型</th><th>意思</th><th>本课例句</th></tr>
    <tr><td>-아/어 주세요</td><td>请为我做……（请求敬语）</td><td>도와주세요! — 帮帮我！</td></tr>
    <tr><td>-았/었으면 좋겠다</td><td>要是……就好了（希望）</td><td>당신이 같이 가 줬으면 좋겠어요 — 我希望你能和我一起去</td></tr>
    <tr><td>-스럽다</td><td>令人感到……的（名词→形容词）</td><td>혹시 내가 부담스러워요? — 我让你感到负担了吗？</td></tr>
    <tr><td>-ㄹ까 봐</td><td>怕会……（担心）</td><td>내가 막 사귀자고 협박할까 봐 무서워요? — 你是怕我会威胁你要和我交往吗？</td></tr>
    <tr><td>-잖아(요)</td><td>不是……嘛（反问强调）</td><td>인생이잖아... — 这就是人生啊……</td></tr>
    <tr><td>-(으)면</td><td>如果……（条件）</td><td>가면 오로라도 볼 수 있는데? — 如果去的话还能看到极光呢</td></tr>
    <tr><td>-ㄴ 김에</td><td>趁……的机会/既然……</td><td>간 김엔 — 既然要去</td></tr>
    <tr><td>-(으)니까</td><td>因为……（原因）</td><td>그 오로라도 보고 싶으니까 — 因为我也想看看那极光</td></tr>
    <tr><td>-죠</td><td>一起……吧（柔和提议）</td><td>그럼 같이 가죠. — 那一起去吧。</td></tr>
  </table>
  <div class="page-footer">重点句型表 1/1</div>
</div>
""")
    
    # 5. Vocab Summary
    html_parts.append("""
<div class="page">
  <div class="page-header"><span class="section-label">第30课 · 一起去看极光</span></div>
  <h2 class="section-title">📝 本课重点单词</h2>
  <table class="pattern-table">
    <tr><th>单词</th><th>意思</th><th>联想记忆</th></tr>
    <tr><td>오로라</td><td>极光</td><td>🎨 오로라(aurora) — 天空中舞动的彩光</td></tr>
    <tr><td>부담스럽다</td><td>有负担的</td><td>부담(负担) + -스럽다(形容词化) → 令人感到负担</td></tr>
    <tr><td>협박</td><td>威胁</td><td>🛡️ 협박(脅迫) — 强迫对方做某事</td></tr>
    <tr><td>넘어가다</td><td>上钩/被骗/过去</td><td>넘다(越过) + 가다(去) → 被人越过去了 → 上当</td></tr>
    <tr><td>자신</td><td>自信/自己</td><td>💪 자신 있다 — 有把握/有信心（反义：자신 없다）</td></tr>
    <tr><td>인생</td><td>人生</td><td>🌅 인생(人生) — 人生就像极光，有各种颜色</td></tr>
    <tr><td>그러니까</td><td>所以说</td><td>그렇다(那样) + -(으)니까(因为) → 所以就是那样</td></tr>
    <tr><td>어차피</td><td>反正</td><td>🔄 어차피 = 어떻게 차피 → 反正都一样</td></tr>
    <tr><td>초록색</td><td>绿色</td><td>🌿 초록(草绿) + 색(色) — 最常见的极光颜色</td></tr>
    <tr><td>파란색</td><td>蓝色</td><td>🌊 파란(蓝) + 색(色) — 极光中较稀有的颜色</td></tr>
  </table>
  <div class="page-footer">单词汇总 1/1</div>
</div>
""")
    
    # 6. Scene Transfer ×2
    html_parts.append("""
<div class="page">
  <div class="page-header"><span class="section-label">第30课 · 一起去看极光</span></div>
  <h2 class="section-title">🔄 场景迁移</h2>
  <h4 style="color:#8b7355;margin-bottom:6px;">🔄 场景迁移 ① — 邀约看电影</h4>
  <div class="scene-dialog">
    <div class="scene-line"><div class="sl-kr">A: 이번 주말에 시간 있어요? 우리 같이 영화 보러 가요!</div><div class="sl-en">A: Do you have time this weekend? Let's go see a movie together!</div><div class="sl-zh">A: 这个周末有时间吗？我们一起去看电影吧！</div></div>
    <div class="scene-line"><div class="sl-kr">B: 영화요? 어떤 영화 보고 싶어요?</div><div class="sl-en">B: A movie? What movie do you want to see?</div><div class="sl-zh">B: 电影？想看什么电影？</div></div>
    <div class="scene-line"><div class="sl-kr">A: 내가 이거 같이 봤으면 좋겠어요!</div><div class="sl-en">A: I wish you'd watch this with me!</div><div class="sl-zh">A: 我希望你能和我一起看这个！</div></div>
    <div class="scene-line"><div class="sl-kr">B: 좋아요! 그럼 같이 가죠. 저도 그 영화 보고 싶었어요.</div><div class="sl-en">B: Okay! Then let's go together. I wanted to see that movie too.</div><div class="sl-zh">B: 好啊！那一起去吧。我也想看那部电影。</div></div>
    <div class="scene-line"><div class="sl-kr">A: 가면 팝콘도 먹을 수 있는데?</div><div class="sl-en">A: If we go, we can also have popcorn!</div><div class="sl-zh">A: 去的话还能吃爆米花呢！</div></div>
  </div>
  <p style="font-size:10px;color:#8b7355;margin-bottom:10px;">💡 本迁移用到了： 같이 가요 · -았/었으면 좋겠어요 · -죠 · 가면 -ㄹ 수 있는데</p>
  
  <h4 style="color:#8b7355;margin-bottom:6px;">🔄 场景迁移 ② — 邀约去海边</h4>
  <div class="scene-dialog">
    <div class="scene-line"><div class="sl-kr">A: 다음 주에 바다에 같이 갈래요?</div><div class="sl-en">A: Do you want to go to the beach together next week?</div><div class="sl-zh">A: 下周要不要一起去海边？</div></div>
    <div class="scene-line"><div class="sl-kr">B: 혹시 제가 부담스러워요? 왜 저를 데려가려고 해요?</div><div class="sl-en">B: Am I a burden to you? Why do you want to take me?</div><div class="sl-zh">B: 我让你有负担了吗？为什么要带我去？</div></div>
    <div class="scene-line"><div class="sl-kr">A: 아니에요! 같이 가면 예쁜 노을도 볼 수 있는데!</div><div class="sl-en">A: No! If we go together, we can see the beautiful sunset!</div><div class="sl-zh">A: 不是的！一起去的话还能看到美丽的晚霞呢！</div></div>
    <div class="scene-line"><div class="sl-kr">B: 노을… 인생이잖아…</div><div class="sl-en">B: The sunset… That's life, you know…</div><div class="sl-zh">B: 晚霞……这就是人生啊……</div></div>
    <div class="scene-line"><div class="sl-kr">A: 그럼 같이 가기로 했고, 가는 김에 맛있는 해산물도 먹어요!</div><div class="sl-en">A: Then let's decide to go together, and while we're at it, let's have some delicious seafood too!</div><div class="sl-zh">A: 那就说好一起去吧，既然要去，顺便吃些好吃的海鲜！</div></div>
    <div class="scene-line"><div class="sl-kr">B: 그래요! 우리 같이 가서 노을도 보고 해산물도 먹어요!</div><div class="sl-en">B: Okay! Let's go together, see the sunset and eat seafood!</div><div class="sl-zh">B: 好啊！我们一起去看看晚霞、吃吃海鲜吧！</div></div>
  </div>
  <p style="font-size:10px;color:#8b7355;margin-bottom:10px;">💡 本迁移用到了： 같이 가다 · -ㄹ래요 · 부담스럽다 · 가면 -ㄹ 수 있는데 · 인생이잖아 · -기로 하다 · -ㄴ 김에 · -아/어서</p>
  <div class="page-footer">场景迁移 1/1</div>
</div>
""")
    
    # 7. Scene Diary (5 sentences)
    html_parts.append("""
<div class="page">
  <div class="page-header"><span class="section-label">第30课 · 一起去看极光</span></div>
  <h2 class="section-title">📝 场景日记</h2>
  <p style="font-size:11px;color:#8b7355;margin-bottom:10px;">根据中文提示，在横线上填写韩文和英文。参考答案在底部。</p>
  
  <div class="diary-item">
    <div class="diary-prompt">① 今天天气很好，我们一起去海边吧。</div>
    <div class="diary-line"><label>한국어</label><div class="diary-underline"></div></div>
    <div class="diary-line"><label>English</label><div class="diary-underline"></div></div>
  </div>
  <div class="diary-item">
    <div class="diary-prompt">② 我希望你能和我一起去旅行。</div>
    <div class="diary-line"><label>한국어</label><div class="diary-underline"></div></div>
    <div class="diary-line"><label>English</label><div class="diary-underline"></div></div>
  </div>
  <div class="diary-item">
    <div class="diary-prompt">③ 如果去的话还能看到星星呢。</div>
    <div class="diary-line"><label>한국어</label><div class="diary-underline"></div></div>
    <div class="diary-line"><label>English</label><div class="diary-underline"></div></div>
  </div>
  <div class="diary-item">
    <div class="diary-prompt">④ 反正我也没什么好害怕的。</div>
    <div class="diary-line"><label>한국어</label><div class="diary-underline"></div></div>
    <div class="diary-line"><label>English</label><div class="diary-underline"></div></div>
  </div>
  <div class="diary-item">
    <div class="diary-prompt">⑤ 那一起去吧！</div>
    <div class="diary-line"><label>한국어</label><div class="diary-underline"></div></div>
    <div class="diary-line"><label>English</label><div class="diary-underline"></div></div>
  </div>
  
  <div style="margin-top:16px;padding:8px;background:#f0ece4;border-radius:6px;font-size:10px;color:#777;">
    <strong style="color:#8b7355;">参考答案：</strong><br>
    ① 오늘 날씨가 좋아서 우리 같이 바다에 가요. (The weather is nice today, let's go to the beach together.)<br>
    ② 당신이 같이 여행 갔으면 좋겠어요. (I wish you would travel with me.)<br>
    ③ 가면 별도 볼 수 있는데? (If we go, we can see the stars too.)<br>
    ④ 어차피 난 무서울 거 없기로 했어. (Anyway, I decided there's nothing to be afraid of.)<br>
    ⑤ 그럼 같이 가요! (Then let's go together!)
  </div>
  <div class="page-footer">场景日记 1/1</div>
</div>
""")
    
    # 8. 🎤 Oral Challenge
    html_parts.append("""
<div class="page">
  <div class="page-header"><span class="section-label">第30课 · 一起去看极光</span></div>
  <h2 class="section-title">🎤 口语挑战</h2>
  <p style="font-size:11px;color:#8b7355;margin-bottom:10px;">不看原文，用今天学的句型说一段30秒的话（自由发挥，不设填空）</p>
  <p style="font-size:10px;color:#999;margin-bottom:12px;">💡 尝试用上：邀约表达、希望句型、理由说明、感叹表达</p>

  <div class="challenge-item">
    <div class="challenge-prompt">① 这个周末我们一起去看电影吧。</div>
    <div class="challenge-blank"><div class="cb-label">한국어</div><div class="challenge-underline"></div></div>
    <div class="challenge-blank"><div class="cb-label">English</div><div class="challenge-underline"></div></div>
  </div>
  <div class="challenge-item">
    <div class="challenge-prompt">② 我希望你能和我一起去。</div>
    <div class="challenge-blank"><div class="cb-label">한국어</div><div class="challenge-underline"></div></div>
    <div class="challenge-blank"><div class="cb-label">English</div><div class="challenge-underline"></div></div>
  </div>
  <div class="challenge-item">
    <div class="challenge-prompt">③ 如果去的话还能吃到好吃的呢。</div>
    <div class="challenge-blank"><div class="cb-label">한국어</div><div class="challenge-underline"></div></div>
    <div class="challenge-blank"><div class="cb-label">English</div><div class="challenge-underline"></div></div>
  </div>
  <div class="challenge-item">
    <div class="challenge-prompt">④ 反正我也没什么好犹豫的。</div>
    <div class="challenge-blank"><div class="cb-label">한국어</div><div class="challenge-underline"></div></div>
    <div class="challenge-blank"><div class="cb-label">English</div><div class="challenge-underline"></div></div>
  </div>
  <div class="challenge-item">
    <div class="challenge-prompt">⑤ 因为我也想放松一下，那一起去吧！</div>
    <div class="challenge-blank"><div class="cb-label">한국어</div><div class="challenge-underline"></div></div>
    <div class="challenge-blank"><div class="cb-label">English</div><div class="challenge-underline"></div></div>
  </div>
  
  <div style="margin-top:14px;padding:8px;background:#f0ece4;border-radius:6px;font-size:10px;color:#777;">
    <strong style="color:#8b7355;">参考答案：</strong><br>
    ① 이번 주말에 우리 같이 영화 보러 가요. (Let's go see a movie this weekend.)<br>
    ② 당신이 같이 갔으면 좋겠어요. (I wish you would go with me.)<br>
    ③ 가면 맛있는 것도 먹을 수 있는데? (If we go, we can also eat something delicious.)<br>
    ④ 어차피 난 망설일 거 없기로 했어. (Anyway, I decided there's nothing to hesitate about.)<br>
    ⑤ 저도 좀 쉬고 싶으니까, 그럼 같이 가요! (Since I also want to relax a bit, then let's go together!)
  </div>
  <div class="page-footer">口语挑战 1/1</div>
</div>
""")
    
    html_parts.append("</body></html>")
    
    html = "\n".join(html_parts)
    
    out_path = os.path.join(OUTPUT_DIR, "E3-30.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"HTML written to {out_path}")
    print(f"HTML size: {len(html)} bytes")

if __name__ == "__main__":
    main()
