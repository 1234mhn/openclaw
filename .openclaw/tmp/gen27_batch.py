#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""分批用灵眸API直连(sonnet 4.6)生成第27课HTML body，三批后合并"""
import json, urllib.request, re, time, sys

BASE = "https://api.lmuai.com/v1/messages"
KEY = None
def read_key():
    global KEY
    if KEY: return KEY
    s = open('/root/.claude/settings.json', encoding='utf-8').read()
    m = re.search(r'"ANTHROPIC_API_KEY"\s*:\s*"([^"]+)"', s)
    KEY = m.group(1)
    return KEY

def api_call(system, user, max_tokens=24000):
    body = {"model": "claude-sonnet-4-6", "max_tokens": max_tokens,
            "system": system, "messages": [{"role": "user", "content": user}]}
    req = urllib.request.Request(BASE, data=json.dumps(body).encode(),
        headers={"Authorization": "Bearer " + read_key(),
                 "Content-Type": "application/json",
                 "anthropic-version": "2023-06-01"})
    with urllib.request.urlopen(req, timeout=300) as r:
        data = json.loads(r.read().decode())
    return "".join(b.get("text","") for b in data.get("content",[]) if b.get("type")=="text")

# 素材
lesson27 = open('/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 课程页面/lesson27.html', encoding='utf-8').read()
CSS = open('/root/.openclaw/workspace/.openclaw/tmp/l27_head.html', encoding='utf-8').read()

SYSTEM = ("你是韩语课程编辑，基于第28课成品(含CSS)的页面结构，生成第27课的HTML。"
          "CSS必须从参考head逐字复制，只输出body内部的内容(多个<div class=\"page\">...</div>)，不要输出<!DOCTYPE>/<html>/<head>/<body>标签，不要输出任何解释文字。"
          "规范：词尾四种用到只✓没用到<s>标签</s>删除线；单词/短语/句型分开区块；header-left写[第27课 · 说不出口的担心]；页面底角footer-num；台词①紧贴台词。")

def gen(part_desc, user_extra, outfile, max_tok=24000):
    print(f"生成[{part_desc}]...", flush=True)
    t0=time.time()
    out = api_call(SYSTEM, CSS + "\n\n【本批任务】" + user_extra + "\n\n【第27课素材】\n" + lesson27, max_tokens=max_tok)
    dt=time.time()-t0
    # 清理可能误输出的包装标签
    out = re.sub(r'(?i)^\s*```html\s*','',out)
    out = re.sub(r'(?i)\s*```\s*$','',out)
    open(outfile,'w',encoding='utf-8').write(out)
    print(f"  [{part_desc}]完成 {dt:.0f}s, {len(out)}字符 -> {outfile}", flush=True)

which = sys.argv[1] if len(sys.argv)>1 else "all"

def part1():
    gen("封面+台词汇总", "生成：1)封面page(cover类, E3-27 · 韩语台词复利笔记, 标题[说不出口的担心], 韩文副题, SVG插画贴合担心/欲言又止主题); 2)台词汇总page(9句台词+整段音频L27_full.mp3+重点句型速览表格填满)。9句台词见素材。", '/root/.openclaw/workspace/.openclaw/tmp/l27_p1.html')

def part2():
    gen("逐句精讲1-5", "生成第27课第1-5句的逐句精讲page(compact-page)，每句一页：sentence-box(韩/中/英)+sf-card句子框架+词尾四种+单句音频L27_S01..S05+单词grid+短语+句型(一讲2例句)+音变+应用(换词/仿写/Q&A)，页脚台词精讲X/9。", '/root/.openclaw/workspace/.openclaw/tmp/l27_p2.html')

def part3():
    gen("逐句精讲6-9", "生成第27课第6-9句的逐句精讲page(compact-page)，每句一页，页脚台词精讲X/9。", '/root/.openclaw/workspace/.openclaw/tmp/l27_p3.html')

def part4():
    gen("重点+场景", "生成1)重点句型+重点单词同页(重点句型5-7个表格+重点单词6个带联想记忆); 2)场景迁移(2个A/B对话各4-6轮三语分行,主题担心/牵挂); 3)场景日记(5句中文+横线)+口语挑战 同页。", '/root/.openclaw/workspace/.openclaw/tmp/l27_p4.html')

if which=="p1": part1()
elif which=="p2": part2()
elif which=="p3": part3()
elif which=="p4": part4()
else:
    part1(); part2(); part3(); part4()
    # 合并
    body = "".join(open(f'/root/.openclaw/workspace/.openclaw/tmp/l27_p{i}.html',encoding='utf-8').read() for i in [1,2,3,4])
    final = CSS + "\n<body>\n" + body + "\n</body>\n</html>\n"
    outpath = '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html'
    open(outpath,'w',encoding='utf-8').write(final)
    print("已合并写出:", outpath, len(final), "字符", flush=True)
