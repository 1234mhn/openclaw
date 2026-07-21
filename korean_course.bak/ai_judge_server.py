#!/usr/bin/env python3
"""AI韩语判题服务 - 调用DeepSeek API智能判断"""

import http.server
import json
import urllib.request
import urllib.error
import signal
import sys
import json
import os
from datetime import datetime

API_KEY = "sk-0d84c6a29f26429eb5ee0a761099cc15"
API_URL = "https://api.deepseek.com/chat/completions"

TRACKER_FILE = '/root/.openclaw/workspace/bilingual_data.json'

def init_tracker():
    if os.path.exists(TRACKER_FILE):
        with open(TRACKER_FILE, 'r') as f:
            return json.load(f)
    return {"account": {"name": "", "platform": "小红书+抖音", "startFollowers": 150}, "records": [], "weeks": {}}

def save_tracker(data):
    with open(TRACKER_FILE, 'w') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

class JudgeHandler(http.server.BaseHTTPRequestHandler):
    
    def do_POST(self):
        # Support both /api/xxx and /xxx (nginx proxy may strip prefix)
        path = self.path.replace('/api', '')
        if path == '/judge':
            self.handle_judge()
        elif path == '/judge-sentence':
            self.handle_judge_sentence()
        elif path == '/tracker':
            self.handle_tracker()
        elif path == '/report':
            self.handle_report()
        else:
            self.send_error(404)
    
    def do_GET(self):
        if self.path == '/report' or self.path == '/api/report':
            self.handle_report()
        else:
            self.send_error(404)

    def do_OPTIONS(self):
        self.send_cors_headers()
        self.end_headers()
    
    def send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
    
    def handle_judge(self):
        """判断对话练习/单词抽测的回答"""
        try:
            length = int(self.headers.get('Content-Length', 0))
            body = json.loads(self.rfile.read(length))
            
            user_answer = body.get('answer', '')
            correct_answer = body.get('expected', '')
            question = body.get('question', '')
            mode = body.get('mode', 'dialogue')
            
            prompt = f"""你是韩语老师。判断学生答案是否正确，并给出详细讲解。
题目：{question}
正确答案：{correct_answer}
学生回答：{user_answer}

请按以下步骤分析：
1. 答案是否基本正确（允许拼写/空格差异）
2. 如果有错误，具体错在哪里（助词/词尾/词汇选择等）
3. 给出改进建议

只返回JSON格式：
{{"correct": true/false, "accuracy": 0-100的整数, "feedback": "详细反馈（2-3句话，指出哪里对/哪里错、为什么、怎么改）"}}"""
            
            result = self.call_deepseek(prompt)
            self.send_response(200)
            self.send_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(result.encode())
            
        except Exception as e:
            self.send_error(500, str(e))
    
    def handle_judge_sentence(self):
        """判断造句练习的句子"""
        try:
            length = int(self.headers.get('Content-Length', 0))
            body = json.loads(self.rfile.read(length))
            
            user_sentence = body.get('sentence', '')
            target_word = body.get('word', '')
            reference = body.get('reference', '')
            
            prompt = f"""你是韩语老师，请详细讲解学生造的韩语句子。
目标单词：{target_word}
参考例句：{reference}
学生造句：{user_sentence}

请按以下步骤分析：
1. 学生是否使用了「{target_word}」这个单词
2. 句子语法是否通顺（词尾、助词、语序是否正确）
3. 如果有问题，具体哪里不对以及为什么
4. 给出改写建议

只返回JSON格式：
{{"correct": true/false, "containsWord": true/false, "accuracy": 0-100的整数, "feedback": "详细讲解（2-3句话，分析句子亮点/问题，哪里对哪里错）", "tip": "具体的语法纠正或改写建议（一句话，正确则填空字符串）"}}"""
            
            result = self.call_deepseek(prompt)
            self.send_response(200)
            self.send_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(result.encode())
            
        except Exception as e:
            self.send_error(500, str(e))
    
    def call_deepseek(self, prompt):
        data = {
            "model": "deepseek-chat",
            "messages": [
                {"role": "system", "content": "你是一个韩语教学助手，只返回JSON格式数据，不要多余的文字。"},
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.1,
            "max_tokens": 500
        }
        
        req = urllib.request.Request(
            API_URL,
            data=json.dumps(data).encode(),
            headers={
                'Authorization': f'Bearer {API_KEY}',
                'Content-Type': 'application/json'
            }
        )
        
        with urllib.request.urlopen(req, timeout=15) as resp:
            result = json.loads(resp.read())
            content = result['choices'][0]['message']['content']
            # 尝试提取JSON
            content = content.strip()
            if content.startswith('```'):
                content = content.split('\n', 1)[1]
                content = content.rsplit('\n```', 1)[0]
            return content
    
    def log_message(self, format, *args):
        print(f"[AI Judge] {args[0]}")

    def handle_tracker(self):
        '''接收数据录入'''
        try:
            length = int(self.headers.get('Content-Length', 0))
            body = json.loads(self.rfile.read(length))
            data = init_tracker()
            # Check if exists
            found = False
            for r in data["records"]:
                if r.get("date") == body.get("date") and r.get("title") == body.get("title"):
                    r.update(body)
                    r["updated_at"] = datetime.now().isoformat()
                    found = True
                    break
            if not found:
                body["created_at"] = datetime.now().isoformat()
                data["records"].append(body)
            save_tracker(data)
            self.send_response(200)
            self.send_cors_headers()
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"status":"ok"}).encode())
        except Exception as e:
            self.send_error(500, str(e))
    
    def handle_report(self):
        '''生成分析报告'''
        try:
            data = init_tracker()
            rs = data.get("records", [])
            if not rs:
                report = "暂无数据，请先录入。"
            else:
                types = {}
                for r in rs:
                    ct = r.get("content_type", "其他")
                    if ct not in types:
                        types[ct] = {"count": 0, "views": 0, "likes": 0, "saves": 0, "followers": 0}
                    types[ct]["count"] += 1
                    types[ct]["views"] += r.get("views", 0)
                    types[ct]["likes"] += r.get("likes", 0)
                    types[ct]["saves"] += r.get("saves", 0)
                    types[ct]["followers"] += r.get("followers", 0)
                total = len(rs)
                total_views = sum(r.get("views", 0) for r in rs)
                lines = ["📊 双语博主数据报告", f"📝 共{total}条记录", f"👀 总浏览{total_views}", "", "━━━ 各类型表现 ━━━"]
                for ct, s in sorted(types.items(), key=lambda x: x[1]["followers"], reverse=True):
                    avg_v = s["views"]//s["count"] if s["count"] else 0
                    avg_f = s["followers"]//s["count"] if s["count"] else 0
                    save_r = round(s["saves"]/s["views"]*100, 1) if s["views"] else 0
                    lines.append(str(ct) + ': ' + str(s['count']) + '条 | 均浏览' + str(avg_v) + ' | 收藏率' + str(save_r) + '% | 均涨粉' + str(avg_f))
                if rs:
                    best = max(rs, key=lambda r: r.get("followers", 0) + r.get("saves", 0))
                    lines.append(chr(10) + "🏆 最佳: " + str(best.get('date','')) + " " + str(best.get('title','')) + " | 浏览" + str(best.get('views',0)) + " 涨粉" + str(best.get('followers',0)))
                report = "\n".join(lines)
            self.send_response(200)
            self.send_cors_headers()
            self.send_header('Content-Type', 'text/plain; charset=utf-8')
            self.end_headers()
            self.wfile.write(report.encode('utf-8'))
        except Exception as e:
            self.send_error(500, str(e))

def main():
    port = 8766
    server = http.server.HTTPServer(('0.0.0.0', port), JudgeHandler)
    print(f"✅ AI韩语判题服务启动，端口 {port}")
    
    def shutdown(sig, frame):
        print("\n关闭服务...")
        server.shutdown()
        sys.exit(0)
    
    signal.signal(signal.SIGINT, shutdown)
    signal.signal(signal.SIGTERM, shutdown)
    
    server.serve_forever()

if __name__ == '__main__':
    main()
