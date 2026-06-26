#!/usr/bin/env python3
"""
可灵 API · 英语教学视频批量生成脚本
====================================
用法：
  1. 先去 https://app.klingai.com/global/dev/ 注册并获取 API Key
  2. 在网页上先文生图生成一张角色定妆照，拿到图片URL
  3. 运行脚本

注意：可灵API的图片必须公开可访问（不能用本地路径或带鉴权的URL）
"""

import requests
import time
import json
import os
import sys
from pathlib import Path

# ============================================
# 配置区域 — 改这里
# ============================================
API_KEY = "your_kling_api_key_here"          # ← 改成你的 API Key
CHARACTER_IMAGE_URL = "your_image_url_here"  # ← 改成角色定妆照的公开URL
OUTPUT_DIR = "/tmp/kling_videos"             # 视频保存目录
BASE_URL = "https://api.kling.ai/v1"
MODEL = "kling-v3"                           # 或 "kling-o3"（含音频，更慢更贵）
DURATION = 5                                 # 每段秒数 (5 或 10)

# ============================================
# 加载场景配置
# ============================================
SCRIPT_DIR = Path(__file__).parent
with open(SCRIPT_DIR / "prompts.json", "r", encoding="utf-8") as f:
    config = json.load(f)

HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

os.makedirs(OUTPUT_DIR, exist_ok=True)

# ============================================
# 工具函数
# ============================================
def wait_for_video(task_id, max_wait=300):
    """轮询等待视频生成完成"""
    for attempt in range(max_wait):
        resp = requests.get(
            f"{BASE_URL}/video/status/{task_id}",
            headers=HEADERS
        )
        data = resp.json()
        status = data.get("status")
        if status == "completed":
            return data.get("output", {})
        elif status == "failed":
            raise Exception(f"生成失败: {data.get('error', '未知错误')}")
        time.sleep(2)
    raise TimeoutError("生成超时")

def download_video(url, save_path):
    """下载视频文件"""
    resp = requests.get(url, stream=True)
    resp.raise_for_status()
    with open(save_path, "wb") as f:
        for chunk in resp.iter_content(chunk_size=8192):
            f.write(chunk)
    print(f"  ✅ 已下载: {save_path}")

# ============================================
# 第一步：生成角色定妆照（可选）
# ============================================
def generate_character_image():
    """如果需要用API自动生成角色照"""
    print("\n🎨 生成角色定妆照...")
    payload = {
        "model": "kling-image",
        "prompt": config["character"]["prompt"],
        "style": "realistic"
    }
    resp = requests.post(
        f"{BASE_URL}/image/generate",
        headers=HEADERS,
        json=payload
    )
    if resp.status_code != 200:
        print(f"  ❌ 生成失败: {resp.text}")
        return None
    
    data = resp.json()
    image_url = data.get("output", {}).get("image_url")
    if image_url:
        print(f"  ✅ 定妆照URL: {image_url}")
    return image_url

# ============================================
# 第二步：批量生成场景视频
# ============================================
def generate_scene(scene, image_url):
    """生成单个场景视频"""
    print(f"\n🎬 [{scene['id']}] 生成中: {scene['prompt'][:60]}...")
    
    payload = {
        "model": MODEL,
        "image_url": image_url,
        "prompt": scene["prompt"],
        "duration": DURATION,
        "resolution": "1080p"
    }
    
    resp = requests.post(
        f"{BASE_URL}/video/generate",
        headers=HEADERS,
        json=payload
    )
    
    if resp.status_code != 200:
        print(f"  ❌ 提交失败: {resp.text}")
        return None
    
    task_id = resp.json().get("task_id")
    print(f"  📋 任务ID: {task_id}  等待生成...")
    
    result = wait_for_video(task_id)
    video_url = result.get("video_url")
    
    if video_url:
        save_path = os.path.join(OUTPUT_DIR, f"{scene['id']}.mp4")
        download_video(video_url, save_path)
        return save_path
    else:
        print(f"  ❌ 未获取到视频URL: {result}")
        return None

# ============================================
# 主流程
# ============================================
def main():
    print("=" * 50)
    print("🎬 可灵AI · 餐厅英语教学视频批量生成")
    print("=" * 50)
    
    # 检查API Key
    if API_KEY == "your_kling_api_key_here":
        print("\n❌ 请先在脚本中填写 API_KEY")
        print("   1. 去 https://app.klingai.com/global/dev/ 注册")
        print("   2. 创建 API Key")
        print("   3. 订阅 API 计划")
        print("   4. 把 Key 填到脚本里")
        sys.exit(1)
    
    # 确定角色图片
    image_url = CHARACTER_IMAGE_URL
    if image_url == "your_image_url_here":
        print("\n❌ 请先提供角色定妆照的URL")
        print("   方式1: 在可灵网页上先生成 → 复制图片URL")
        print("   方式2: 用API自动生成（取消下面注释）")
        print("   然后把 URL 填到脚本 CHARACTER_IMAGE_URL")
        sys.exit(1)
    
    print(f"\n📷 角色定妆照: {image_url}")
    print(f"📦 输出目录: {OUTPUT_DIR}")
    print(f"🎯 共 {len(config['scenes'])} 个场景，每个 {DURATION} 秒\n")
    
    results = []
    for scene in config["scenes"]:
        path = generate_scene(scene, image_url)
        results.append({
            "id": scene["id"],
            "path": path,
            "dialogue_en": scene["dialogue"]["en"],
            "dialogue_cn": scene["dialogue"]["cn"]
        })
    
    # 输出结果
    print("\n" + "=" * 50)
    print("📋 生成完成，结果汇总：")
    print("=" * 50)
    
    all_ok = True
    for r in results:
        status = "✅" if r["path"] else "❌"
        print(f"\n{status} {r['id']}.mp4")
        if r["path"]:
            print(f"   文件: {r['path']}")
        print(f"   🗣 英文: {r['dialogue_en']}")
    
    # 生成剪映字幕文件
    if all(r["path"] for r in results):
        # 英文字幕
        en_lines = []
        cn_lines = []
        for r in results:
            for line in r["dialogue_en"].split("\n"):
                if line.strip():
                    # 去掉角色名
                    clean = line.split(": ", 1)[-1] if ": " in line else line
                    en_lines.append(clean)
            for line in r["dialogue_cn"].split("\n"):
                if line.strip():
                    clean = line.split("：", 1)[-1] if "：" in line else line
                    cn_lines.append(clean)
        
        with open(os.path.join(OUTPUT_DIR, "subtitles_en.txt"), "w") as f:
            f.write("\n\n".join(en_lines))
        with open(os.path.join(OUTPUT_DIR, "subtitles_cn.txt"), "w") as f:
            f.write("\n\n".join(cn_lines))
        
        print(f"\n📝 字幕文件已生成:")
        print(f"   英文字幕: {OUTPUT_DIR}/subtitles_en.txt")
        print(f"   中文字幕: {OUTPUT_DIR}/subtitles_cn.txt")
    
    print(f"\n📂 所有视频在: {OUTPUT_DIR}")
    print("   用剪映导入 → 加配音 + 字幕 → 导出完成 🎉")

if __name__ == "__main__":
    main()
