#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""用灵眸API直连(sonnet 4.6)生成第27课复利笔记HTML"""
import json, urllib.request, sys, os, time

KEY = "sk-9be…e44a"  # 占位，实际从 settings 读
BASE = "https://api.lmuai.com/v1/messages"

def read_key():
    import re
    s = open('/root/.claude/settings.json', encoding='utf-8').read()
    m = re.search(r'"ANTHROPIC_API_KEY"\s*:\s*"([^"]+)"', s)
    return m.group(1) if m else KEY

def api_call(system, user, max_tokens=32000):
    body = {
        "model": "claude-sonnet-4-6",
        "max_tokens": max_tokens,
        "system": system,
        "messages": [{"role": "user", "content": user}]
    }
    req = urllib.request.Request(BASE, data=json.dumps(body).encode(),
        headers={"Authorization": "Bearer " + read_key(),
                 "Content-Type": "application/json",
                 "anthropic-version": "2023-06-01"})
    with urllib.request.urlopen(req, timeout=300) as r:
        data = json.loads(r.read().decode())
    return "".join(b.get("text","") for b in data.get("content",[]) if b.get("type")=="text")

if __name__ == "__main__":
    # 读取28课作为样式基准 + 27课素材
    base_html = open('/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第28课_复利笔记_final.html', encoding='utf-8').read()
    lesson27 = open('/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 课程页面/lesson27.html', encoding='utf-8').read()

    system = ("你是韩语课程编辑。我会给你【参考HTML】是第28课成品（含完整CSS和页面结构，CSS必须原样保留不许改动，只替换body内容），"
              "以及【第27课素材】lesson27.html（台词/单词/句型/音变来源）。"
              "请生成完整的第27课《说不出口的担心》复利笔记HTML文件，9句台词，严格按SOP：封面/台词汇总/逐句精讲(9页)/重点句型+单词同页/场景迁移/场景日记+口语挑战。"
              "词尾四种用到只✓没用到删除线<s>；单词/短语/句型分开；无孤行页；header-left写[第27课 · 说不出口的担心]。"
              "只输出一个完整的HTML文档（含<!DOCTYPE html>和<head>到</body>），CSS从参考HTML逐字复制。不要输出任何解释文字。")
    user = f"【参考HTML(第28课成品)】\n{base_html}\n\n【第27课素材lesson27.html】\n{lesson27}\n\n请基于参考HTML的CSS和结构，生成第27课完整HTML。"

    print("调用sonnet 4.6生成第27课HTML...", flush=True)
    t0 = time.time()
    out = api_call(system, user)
    dt = time.time() - t0
    print(f"生成完成，耗时{dt:.1f}s，长度{len(out)}字符", flush=True)
    # 落盘
    path = '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第27课_复利笔记_final.html'
    with open(path, 'w', encoding='utf-8') as f:
        f.write(out)
    print("已写入:", path, flush=True)
