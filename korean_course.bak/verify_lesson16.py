#!/usr/bin/env python3
import re

with open('/root/.openclaw/workspace/korean_course/index.html', 'r') as f:
    c = f.read()

# Check pageLesson16
print("=== 1. pageLesson16 ===")
start = c.find('<div class="pg" id="pageLesson16">')
end = c.find('</div></div>', start)
if start >= 0 and end >= 0:
    section = c[start:end]
    line_count = section.count('data-time-start')
    timeentries = re.findall(r'data-time-start="([\d.]+)"', section)
    print(f'  Found pageLesson16, {line_count} dialogue lines')
    print(f'  First line start: {timeentries[0]}')
    print(f'  Last line start: {timeentries[-1]}')
else:
    print("  ERROR: pageLesson16 not found!")
    exit(1)

# Check TOTAL_LESSONS
m = re.search(r'var TOTAL_LESSONS=(\d+),UNLOCKED=\[([^\]]+)\]', c)
if m:
    print(f'\n=== 2. TOTAL_LESSONS ===')
    print(f'  TOTAL_LESSONS = {m.group(1)}')
    unlocked = [int(x.strip()) for x in m.group(2).split(',')]
    print(f'  UNLOCKED lessons: {unlocked}')
    assert int(m.group(1)) == 16, "TOTAL_LESSONS not 16!"
    assert 16 in unlocked, "Lesson 16 not in UNLOCKED!"

# Check LESSONS entry
m = re.search(r'16:\{.*?lines:\[([^\]]+)\]\}', c, re.DOTALL)
if m:
    lines_str = m.group(1)
    lines = [l.strip().strip("'") for l in lines_str.split("','")]
    print(f'\n=== 3. LESSONS entry ===')
    print(f'  Lines count: {len(lines)}')
    for i, l in enumerate(lines):
        print(f'    Line {i+1}: {l[:50]}...' if len(l) > 50 else f'    Line {i+1}: {l}')

# Check vocab count
m = re.search(r'16:\{.*?vocab:\[([^\]]+)\]', c, re.DOTALL)
if m:
    vocab_str = m.group(1)
    items = re.findall(r"\['([^']+)','([^']+)'\]", vocab_str)
    print(f'  Vocab count: {len(items)}')

# Check LESSON_TIMES
print(f'\n=== 4. LESSON_TIMES ===')
m = re.search(r'16:\[\n((?:\s*\{[^}]+\},\n)+)', c)
if m:
    times_section = m.group(1)
    times = re.findall(r'\{start:([\d.]+),end:([\d.]+)\}', times_section)
    print(f'  Time entries: {len(times)}')
    for i, (s, e) in enumerate(times):
        print(f'    Line {i+1}: {float(s):.1f}s - {float(e):.1f}s')
    print(f'  Same as lines count? {len(times) == len(lines)}')

# Check lesson cards on homepage
print(f'\n=== 5. Homepage cards ===')
cards = re.findall(r'<div class="lesson" data-lesson="(\d+)"', c)
print(f'  Lesson cards: {len(cards)}')
lesson_nums = [int(x) for x in cards]
print(f'  Lesson numbers: {sorted(lesson_nums)}')
assert 16 in lesson_nums, "Lesson 16 card not on homepage!"

# Check bottom components order
print(f'\n=== 6. Bottom components ===')
last_page_end = c.find('</div></div>', end)
bottom_section = c[end:last_page_end+15]
checks = [
    ('小贴士', 'tip' in bottom_section or '小贴士' in bottom_section),
    ('toggleVocab', 'toggleVocab' in bottom_section),
    ('toggleGrammar', 'toggleGrammar' in bottom_section),
    ('done-toggle', 'done-toggle' in bottom_section),
    ('note-box', 'note-box' in bottom_section),
    ('note-status', 'noteStatus16' in bottom_section),
    ('speak-practice-toggle', 'speak-practice-toggle' in bottom_section),
]
for name, found in checks:
    status = '✅' if found else '❌'
    print(f'  {status} {name}')

# Regression check for lesson 1 and 13
print(f'\n=== 7. Regression checks ===')
for lesson_id in [1, 13, 14, 15]:
    if f'pageLesson{lesson_id}' in c:
        print(f'  ✅ lesson {lesson_id} page exists')
    else:
        print(f'  ❌ lesson {lesson_id} page MISSING!')

# Verify no duplicate done-toggle for lesson 16
print(f'\n=== 8. Duplicate checks ===')
dt_count = len(re.findall(r'done-toggle.*16', c))
print(f'  Done-toggle for 16: {dt_count} (should be 1)')
sb_count = len(re.findall(r'noteStatus16', c))
print(f'  noteStatus16: {sb_count} (should be 1)')

# Check speak practice modal
print(f'\n=== 9. Practice modal ===')
if 'practiceModal' in c:
    print(f'  ✅ Practice modal exists')

print(f'\n=== ALL CHECKS COMPLETE ===')
