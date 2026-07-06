#!/usr/bin/env python3
"""
小红书笔记数据复盘分析器（2026算法版）
用法：python analyze_note.py --views 173 --likes 9 --favs 3 --comments 0 --followers 6 --topic "韩语学习"
"""

import argparse

def analyze(views, likes, favs, comments, shares=0, new_followers=0, topic=""):
    """分析笔记数据"""
    
    # 核心指标
    like_ratio = likes / views * 100 if views else 0
    fav_ratio = favs / views * 100 if views else 0
    comment_ratio = comments / views * 100 if views else 0
    follow_ratio = new_followers / views * 100 if views else 0
    
    # CES评分（2026版）
    ces = likes * 1 + favs * 1 + comments * 4 + shares * 4 + new_followers * 8
    
    # 流量池诊断
    if views < 200:
        stage = "冷启动池(0~200)"
        bottleneck = "封面+标题点击率不足"
    elif views < 500:
        stage = "初级池(200~500)"
        bottleneck = "CES互动分不足，缺评论/关注引导"
    elif views < 5000:
        stage = "中级池(500~5000)"
        bottleneck = "完播率或停留时长不够"
    else:
        stage = "热门池(1w+)"
        bottleneck = "人工审核或内容广度"
    
    # 输出报告
    sep = "━" * 30
    print(f"""
📊 小红书笔记数据复盘（2026算法版）
{sep}
📌 主题：{topic}
⏱  数据采集于发布后约2天

📈 基础数据
━━━━━━━━━━━━━━━━━━━━━━━━━━
播放量      {views:>6}
点赞        {likes:>6}  │ 赞播比  {like_ratio:.1f}%  {'✅' if like_ratio>=3 else '⚠️'}
收藏        {favs:>6}  │ 藏播比  {fav_ratio:.1f}%  {'✅' if fav_ratio>=1 else '⚠️'}
评论        {comments:>6}  │ 评播比  {comment_ratio:.1f}%  {'✅' if comment_ratio>=0.5 else '❌'}
转发        {shares:>6}
涨粉        {new_followers:>6}  │ 关注转化 {follow_ratio:.1f}%

📊 CES评分
━━━━━━━━━━━━━━━━━━━━━━━━━━
CES总分 = {ces}
  点赞×1: {likes}×1 = {likes*1}
  收藏×1: {favs}×1 = {favs*1}
  评论×4: {comments}×4 = {comments*4}
  转发×4: {shares}×4 = {shares*4}
  关注×8: {new_followers}×8 = {new_followers*8}

🔍 流量诊断
━━━━━━━━━━━━━━━━━━━━━━━━━━
当前阶段：{stage}
核心瓶颈：{bottleneck}
""")
    
    # 优化建议
    print("💡 优化建议")
    print(sep)
    if comments < views * 0.005:
        print("🔴 评论严重不足 — 结尾加提问/评论区置顶引导互动")
    if favs < views * 0.01:
        print("🟡 收藏偏低 — 强调内容可保存/预告系列更新")
    if like_ratio < 3:
        print("🟡 赞播比偏低 — 封面和标题可能需要优化")
    if new_followers < views * 0.01:
        print("🔴 关注转化低 — 结尾加关注引导/预告下期内容")
    if views < 500:
        print("🔴 播放卡在初级池 — 重点提升CES互动分")
    print()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="小红书笔记数据复盘")
    parser.add_argument("--views", type=int, required=True, help="播放量")
    parser.add_argument("--likes", type=int, required=True, help="点赞数")
    parser.add_argument("--favs", type=int, required=True, help="收藏数")
    parser.add_argument("--comments", type=int, default=0, help="评论数")
    parser.add_argument("--shares", type=int, default=0, help="转发数")
    parser.add_argument("--followers", type=int, default=0, help="本期涨粉数")
    parser.add_argument("--topic", type=str, default="", help="笔记主题")
    args = parser.parse_args()
    
    analyze(args.views, args.likes, args.favs, args.comments, 
            args.shares, args.followers, args.topic)
