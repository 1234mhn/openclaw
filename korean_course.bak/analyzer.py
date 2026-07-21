#!/usr/bin/env python3
"""简体中文版"""
import json
import os
from datetime import datetime

DATA_FILE = '/root/.openclaw/workspace/bilingual_data.json'

def init_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as f:
            return json.load(f)
    return {
        "account": {"name": "", "platform": "小红书+抖音", "startFollowers": 150},
        "records": [],
        "weeks": {}
    }

def save_data(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def add_record(date, platform, title, views, likes, saves, comments, followers, content_type):
    data = init_data()
    # Check if this record already exists (prevent duplicates)
    for r in data["records"]:
        if r["date"] == date and r["title"] == title and r["platform"] == platform:
            # Update existing
            r.update({
                "views": views, "likes": likes, "saves": saves,
                "comments": comments, "followers": followers,
                "content_type": content_type, "updated_at": datetime.now().isoformat()
            })
            save_data(data)
            return "updated"
    # New record
    data["records"].append({
        "date": date, "platform": platform, "title": title,
        "views": views, "likes": likes, "saves": saves,
        "comments": comments, "followers": followers,
        "content_type": content_type,
        "created_at": datetime.now().isoformat()
    })
    save_data(data)
    return "added"

def generate_report(data):
    if not data["records"]:
        return "暂无数据，请先录入几条记录。"
    
    rs = data["records"]
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
    total_followers = sum(r.get("followers", 0) for r in rs)
    
    lines = []
    lines.append("📊 双语博主数据报告")
    lines.append(f"📝 共{total}条记录")
    lines.append(f"👀 总浏览 {total_views}")
    lines.append(f"📈 总涨粉 {total_followers}")
    lines.append("")
    lines.append("━━━ 各类型表现 ━━━")
    
    for ct, stats in sorted(types.items(), key=lambda x: x[1]["followers"], reverse=True):
        avg_view = stats["views"] // stats["count"] if stats["count"] else 0
        avg_like = stats["likes"] // stats["count"] if stats["count"] else 0
        avg_save = stats["saves"] // stats["count"] if stats["count"] else 0
        avg_follow = stats["followers"] // stats["count"] if stats["count"] else 0
        save_rate = round(stats["saves"] / stats["views"] * 100, 1) if stats["views"] else 0
        lines.append(f"{ct}: {stats['count']}条 | 均浏览{avg_view} | 均收藏{avg_save} | 收藏率{save_rate}% | 均涨粉{avg_follow}")
    
    lines.append("")
    lines.append("━━━ 最佳单条 ━━━")
    best = max(rs, key=lambda r: r.get("followers", 0) + r.get("saves", 0))
    lines.append(f"🏆 {best.get('date','')} {best.get('title','')}")
    lines.append(f"  浏览{best.get('views',0)} 点赞{best.get('likes',0)} 收藏{best.get('saves',0)} 涨粉{best.get('followers',0)}")
    
    return "\n".join(lines)
