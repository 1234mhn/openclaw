#!/usr/bin/env python3
"""Split 3 merged lines in Lesson 9 and renumber everything."""
import re

with open('/root/.openclaw/workspace/korean_course/index.html', 'r') as f:
    html = f.read()

# Split markers - each is a (old_text_with_number, new_number_A, new_kr_A, new_cn_A, new_en_A,
#                                     new_time_start_A, new_time_end_A,
#                                     new_text_B, new_kr_B, new_cn_B, new_en_B,
#                                     new_time_start_B, new_time_end_B)
# plus line-exp content that needs to be split between A and B

# --- SPLIT 1: Line 4 ---
# Old: 봤잖아요. 왜요?  (13.991-15.800)
# A: 봤잖아요. (13.991-14.825), B: 왜요? (14.909-15.800)

# --- SPLIT 2: Line 12 ---
# Old: 비싼 데래요? 아마도. (38.515-42.500)
# A: 비싼 데래요? (40.100-40.935), B: 아마도. (41.518-42.394)

# --- SPLIT 3: Line 14 ---
# Old: 지금 내가 보일을 베푼 건데 왜 신세를 갚는 것처럼 생색을 내지? 아유 (52.154-57.500)
# A: 지금 내가 보일을 베푼 건데 왜 신세를 갚는 것처럼 생색을 내지? (52.154-56.158)
# B: 아유 (56.242-57.409)

# Find the Lesson 9 content block
l9_start = '<div class="pg" id="pageLesson9">'
l9_end = '<div class="pg" id="pageLesson10">'

start_idx = html.find(l9_start)
end_idx = html.find(l9_end)

lesson9_block = html[start_idx:end_idx]

# Find all line divs in Lesson 9 (the lines with data-time-start)
# Pattern: <div class="line" data-time-start="..." data-time-end="..."> ... </div>
# Each line might have nested divs, so we need to count nesting carefully

def extract_line_blocks(html_text):
    """Extract all top-level .line divs from a block of HTML."""
    lines = []
    pos = 0
    while True:
        # Find the next <div class="line" ...> 
        line_start = html_text.find('<div class="line"', pos)
        if line_start == -1 or line_start >= len(html_text):
            break
        
        # Skip past the leading <div
        div_start = line_start
        # Now find the matching </div>
        depth = 1
        search_pos = line_start + len('<div class="line"')
        
        # Find the end of the opening div tag
        tag_end = html_text.find('>', search_pos)
        if tag_end == -1:
            break
        search_pos = tag_end + 1
        
        while depth > 0 and search_pos < len(html_text):
            # Check for div open/close
            next_open = html_text.find('<div', search_pos)
            next_close = html_text.find('</div>', search_pos)
            
            if next_close == -1:
                break
            
            if next_open != -1 and next_open < next_close:
                depth += 1
                search_pos = html_text.find('>', next_open) + 1 if html_text.find('>', next_open) != -1 else next_open + 5
            else:
                depth -= 1
                if depth == 0:
                    line_end = next_close + len('</div>')
                    lines.append(html_text[line_start:line_end])
                    pos = line_end
                    break
                else:
                    search_pos = next_close + len('</div>')
    
    return lines

lines = extract_line_blocks(lesson9_block)
print(f"Found {len(lines)} line blocks in Lesson 9")

# Let's see the KR text and time ranges for each
for i, line in enumerate(lines):
    # Extract number and KR text
    num_match = re.search(r'<p class="kr"[^>]*>(\d+)\.\s*(.*?)</p>', line, re.DOTALL)
    time_match = re.search(r'data-time-start="([\d.]+)"', line)
    time_end = re.search(r'data-time-end="([\d.]+)"', line)
    kr_text = num_match.group(2).strip() if num_match else "???"
    num = num_match.group(1) if num_match else "?"
    ts = time_match.group(1) if time_match else "?"
    te = time_end.group(1) if time_end else "?"
    print(f"  Line {num}: [{ts}-{te}] {kr_text[:60]}")

# Now let's construct the replacements

replacement_lines = []
for i, line in enumerate(lines):
    num_match = re.search(r'<p class="kr"[^>]*>(\d+)\.\s*(.*?)</p>', line, re.DOTALL)
    kr_text = num_match.group(2).strip() if num_match else ""
    
    # Determine which old line this is (by original number)
    orig_num = int(num_match.group(1)) if num_match else 0
    
    if kr_text == '봤잖아요. 왜요?' and orig_num == 4:
        # SPLIT 1: Line 4
        line_a = line
        line_a = re.sub(r'data-time-start="[\d.]+"', 'data-time-start="13.991"', line_a)
        line_a = re.sub(r'data-time-end="[\d.]+"', 'data-time-end="14.825"', line_a)
        line_a = line_a.replace('4. 봤잖아요. 왜요?', '4. 봤잖아요.')
        # update speak button
        line_a = line_a.replace(
            "handleSpeak(event,'봤잖아요. 왜요?')",
            "handleSpeak(event,'봤잖아요.')"
        )
        # update CN: remove "。怎么了？"
        line_a = line_a.replace('→ 你不是看到了嘛。怎么了？', '→ 你不是看到了嘛')
        # update EN
        line_a = line_a.replace('→ You saw it, didn\'t you? Why?', '→ You saw it, didn\'t you?')
        # line-exp: remove 왜 관련 부분 
        # In line-exp, keep only -잖아요 part, remove 왜요? grammar section
        line_a = re.sub(
            r'(<div class="item"><b>📍单词</b>.*?)｜ 왜 — 为什么/怎么</span></div>',
            r'\1</span></div>',
            line_a
        )
        # Remove the "② 왜요?" grammar bullet
        line_a = re.sub(
            r'<div class="ex">💬 그거 내 거잖아요 <span class="c">→ 那不是我的嘛</span></div>\s*<div class="item"><b>📌语法</b>.*?② 왜요\?.*?</div>',
            '<div class="ex">💬 그거 내 거잖아요 <span class="c">→ 那不是我的嘛</span></div>',
            line_a
        )
        # Remove the 왜요 phon section
        line_a = re.sub(
            r'\s*➜  왜요 → \[왜요\].*?\)',
            '',
            line_a
        )
        replacement_lines.append(('edit', line_a, 'replace'))
        
        # Line B: 왜요?
        line_b = """<div class="line" data-time-start="14.909" data-time-end="15.800">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">5. 왜요?</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'왜요?')">🔊</button>
  </div>
  <p class="cn">→ 怎么了？</p>
    <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Why? / What is it?</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">왜 — 为什么/怎么</span></div>
    <div class="ex">💬 왜 그렇게 생각해요? <span class="c">→ 为什么那么想？</span></div>
    <div class="item"><b>📌语法</b> <span class="m">왜요? 缩略疑问「怎么了？」比 왜 그래요? 更简短口语。</span></div>
    <div class="phon"><b>🎵 音变</b>
  ➜  왜요 → [왜요]（无特殊音变，双元音 ㅙ 保持）</div>
  </div>
</div>"""
        replacement_lines.append(('insert_after', line_b))
        
    elif kr_text == '비싼 데래요? 아마도.' and orig_num == 12:
        # SPLIT 2: Line 12
        line_a = line
        line_a = re.sub(r'data-time-start="[\d.]+"', 'data-time-start="40.100"', line_a)
        line_a = re.sub(r'data-time-end="[\d.]+"', 'data-time-end="40.935"', line_a)
        line_a = line_a.replace('12. 비싼 데래요? 아마도.', '13. 비싼 데래요?')
        line_a = line_a.replace(
            "handleSpeak(event,'비싼 데래요? 아마도.')",
            "handleSpeak(event,'비싼 데래요?')"
        )
        line_a = line_a.replace('→ 贵的店吗？大概吧', '→ 贵的店吗？')
        line_a = line_a.replace('→ Is it an expensive place? Probably.', '→ Is it an expensive place?')
        # line-exp: remove 아마도 부분
        line_a = re.sub(
            r'｜ 아마도 — 大概/也许</span></div>',
            '</span></div>',
            line_a
        )
        line_a = re.sub(
            r'<div class="ex">💬 아마도 그럴 거예요 <span class="c">→ 大概会那样吧</span></div>',
            '',
            line_a
        )
        line_a = re.sub(
            r'<div class="item"><b>📌语法</b>.*?② 아마도 推测副词.*?</div>',
            '',
            line_a
        )
        line_a = re.sub(
            r'\s*➜  아마도 → \[아마도\].*?\)',
            '',
            line_a
        )
        # Clean up extra blank lines
        line_a = re.sub(r'\n{3,}', '\n\n', line_a)
        replacement_lines.append(('edit', line_a, 'replace'))
        
        # Line B: 아마도.
        line_b = """<div class="line" data-time-start="41.518" data-time-end="42.394">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">14. 아마도.</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'아마도.')">🔊</button>
  </div>
  <p class="cn">→ 大概吧</p>
    <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Probably.</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">아마도 — 大概/也许</span></div>
    <div class="ex">💬 아마도 그럴 거예요 <span class="c">→ 大概会那样吧</span></div>
    <div class="item"><b>📌语法</b> <span class="m">아마도 推测副词「大概/可能」，比 아마 多了推测语气。</span></div>
    <div class="phon"><b>🎵 音变</b>
  ➜  아마도 → [아마도]（无特殊音变）</div>
  </div>
</div>"""
        replacement_lines.append(('insert_after', line_b))
        
    elif kr_text == '지금 내가 보일을 베푼 건데 왜 신세를 갚는 것처럼 생색을 내지? 아유' and orig_num == 14:
        # SPLIT 3: Line 14
        line_a = line
        line_a = re.sub(r'data-time-start="[\d.]+"', 'data-time-start="52.154"', line_a)
        line_a = re.sub(r'data-time-end="[\d.]+"', 'data-time-end="56.158"', line_a)
        line_a = line_a.replace(
            '14. 지금 내가 보일을 베푼 건데 왜 신세를 갚는 것처럼 생색을 내지? 아유',
            '16. 지금 내가 보일을 베푼 건데 왜 신세를 갚는 것처럼 생색을 내지?'
        )
        line_a = line_a.replace(
            "handleSpeak(event,'지금 내가 보일을 베푼 건데 왜 신세를 갚는 것처럼 생색을 내지? 아유')",
            "handleSpeak(event,'지금 내가 보일을 베푼 건데 왜 신세를 갚는 것처럼 생색을 내지?')"
        )
        line_a = line_a.replace(
            '→ 明明是我在施以好意，怎么搞得像在还人情似的？哎呀',
            '→ 明明是我在施以好意，怎么搞得像在还人情似的？'
        )
        line_a = line_a.replace(
            "→ I'm doing you a favor, so why are you acting like you're repaying a debt? Oh dear...",
            "→ I'm doing you a favor, so why are you acting like you're repaying a debt?"
        )
        # Remove 아유 from word list
        line_a = re.sub(
            r'｜ 아유 — 哎呀\(感叹\)',
            '',
            line_a
        )
        # Clean
        line_a = re.sub(r'\n{3,}', '\n\n', line_a)
        replacement_lines.append(('edit', line_a, 'replace'))
        
        # Line B: 아유
        line_b = """<div class="line" data-time-start="56.242" data-time-end="57.409">
  <div class="line-hd" onclick="toggleExp(this)">
    <span class="arr">▸</span>
    <p class="kr" style="flex:1">17. 아유</p>
    <button class="speak" onclick="event.stopPropagation();handleSpeak(event,'아유')">🔊</button>
  </div>
  <p class="cn">→ 哎呀</p>
    <p class="en" style="font-size:12px;color:#888;margin:2px 0 0 16px">→ Oh dear...</p>
  <div class="line-exp" style="display:none">
    <div class="item"><b>📍单词</b> <span class="m">아유 — 哎呀(感叹)，表达不耐烦或无奈</span></div>
    <div class="ex">💬 아유, 힘들어 <span class="c">→ 哎呀，好累</span></div>
    <div class="item"><b>📌语法</b> <span class="m">感叹词(감탄사)，多用于口语中表达轻微的烦躁、无奈或抱怨。</span></div>
  </div>
</div>"""
        replacement_lines.append(('insert_after', line_b))
        
    else:
        # Keep as-is (but may need renumbering later)
        replacement_lines.append(('keep', line, str(orig_num)))

# Now reconstruct by applying edits and renumbering
# First pass: build the new sequence
new_lines = []
renumber_map = {}
current_new_num = 1
i = 0
while i < len(lines):
    orig_num = i + 1  # 1-based
    
    # Check if this line has a replacement
    ri = i
    entry = replacement_lines[ri]
    
    if entry[0] == 'edit':
        # Replace with modified version
        modified_html = entry[1]
        # Renumber
        modified_html = re.sub(
            r'(<p class="kr"[^>]*>)\d+\.',
            lambda m: m.group(1) + str(current_new_num) + '.',
            modified_html
        )
        new_lines.append(modified_html)
        renumber_map[orig_num] = current_new_num
        current_new_num += 1
        
        # Check for insert_after
        if ri + 1 < len(replacement_lines) and replacement_lines[ri + 1][0] == 'insert_after':
            insert_html = replacement_lines[ri + 1][1]
            insert_html = re.sub(
                r'(<p class="kr"[^>]*>)\d+\.',
                lambda m: m.group(1) + str(current_new_num) + '.',
                insert_html
            )
            new_lines.append(insert_html)
            current_new_num += 1
            # Skip the insert marker
            i += 1  # Add an extra increment  
            
    elif entry[0] == 'keep':
        html = entry[1]
        old_num = int(entry[2])
        # Just renumber
        html = re.sub(
            r'(<p class="kr"[^>]*>)' + str(old_num) + r'\.',
            lambda m: m.group(1) + str(current_new_num) + '.',
            html
        )
        new_lines.append(html)
        renumber_map[orig_num] = current_new_num
        current_new_num += 1
    
    i += 1

print(f"\nNew total lines: {len(new_lines)}")
print(f"Old 15 → New {len(new_lines)} (+3 lines from splits)")

# Verify the KR texts and numbers
for idx, html in enumerate(new_lines):
    num_match = re.search(r'<p class="kr"[^>]*>(\d+)\.\s*(.*?)</p>', html, re.DOTALL)
    time_match = re.search(r'data-time-start="([\d.]+)"', html)
    kr_text = num_match.group(2).strip() if num_match else "N/A"
    num = num_match.group(1) if num_match else "?"
    ts = time_match.group(1) if time_match else "?"
    print(f"  New line {idx+1}: [#{num}] [{ts}] {kr_text[:60]}")

# Build the new block by replacing old lines in lesson9_block
old_block_start = lesson9_block.find('<div class="line" data-time-start="6.859"')
old_block_end = lesson9_block.rfind('</div>')
# Find the last </div> before the tips section
tips_marker = '<div class="sec">💡 小贴士'
tips_pos = lesson9_block.find(tips_marker)
# The line divs end just before the tips section
# Find the last </div> before tips
block_end = lesson9_block.rfind('</div>', 0, tips_pos)
block_end += len('</div>')

old_block = lesson9_block[old_block_start:block_end]
new_block = '\n\n'.join(new_lines)

# Calculate indent (original indent level)
# Get the whitespace before the first line
first_line_start = lesson9_block.find('<div class="line" data-time-start="6.859"')
line_start_of_line = lesson9_block.rfind('\n', 0, first_line_start) + 1
indent = lesson9_block[line_start_of_line:first_line_start]
print(f"\nIndent: '{indent}' (len={len(indent)})")
print(f"Old block length: {len(old_block)}")
print(f"New block length: {len(new_block)}")

# Do the actual replacement
new_lesson9 = lesson9_block.replace(old_block, new_block)

# Now replace the old lesson 9 block in the full HTML
full_html = html[:start_idx] + new_lesson9 + html[end_idx:]

# Write back
with open('/root/.openclaw/workspace/korean_course/index.html', 'w') as f:
    f.write(full_html)

print("\n✅ Done! File updated.")
print(f"Old file size check: old block found at char {old_block_start}, length {len(old_block)}")
