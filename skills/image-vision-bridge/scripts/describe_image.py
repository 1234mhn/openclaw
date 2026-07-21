#!/usr/bin/env python3
"""Lightweight image description using OCR (Tesseract).
Fallback when local vision models can't run due to memory limits.
"""

import sys
import os
import subprocess
import json
from PIL import Image

def get_image_info(image_path):
    """Get basic image metadata."""
    try:
        img = Image.open(image_path)
        w, h = img.size
        size_mb = os.path.getsize(image_path) / (1024 * 1024)
        mode = img.mode
        fmt = img.format
        return f"📐 尺寸: {w}×{h}\n📦 大小: {size_mb:.1f}MB\n🎨 格式: {fmt} ({mode})"
    except Exception as e:
        return f"无法读取图片信息: {e}"

def ocr_image(image_path, lang='chi_sim+eng'):
    """Extract text from image using Tesseract OCR."""
    try:
        result = subprocess.run(
            ['tesseract', image_path, 'stdout', '-l', lang, '--psm', '6'],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0 and result.stdout.strip():
            return result.stdout.strip()
        return None
    except Exception as e:
        return None

def ocr_with_layout(image_path, lang='chi_sim+eng'):
    """Try OCR with different page segmentation modes."""
    results = {}
    for psm in ['3', '4', '6', '11', '12']:
        try:
            result = subprocess.run(
                ['tesseract', image_path, 'stdout', '-l', lang, '--psm', psm],
                capture_output=True, text=True, timeout=30
            )
            if result.returncode == 0 and result.stdout.strip():
                results[f'psm_{psm}'] = result.stdout.strip()
        except:
            pass
    return results

def main():
    if len(sys.argv) < 2:
        print("用法: python describe_image.py <图片路径> [--prompt '指令']")
        sys.exit(1)
    
    image_path = sys.argv[1]
    
    if not os.path.exists(image_path):
        print(f"❌ 文件不存在: {image_path}")
        sys.exit(1)
    
    # Get image info
    info = get_image_info(image_path)
    print(f"📷 图片信息:\n{info}\n")
    
    # Try OCR with Chinese + English
    print("🔍 提取文字中...")
    text = ocr_image(image_path)
    
    if text and len(text) > 10:
        print(f"\n📝 识别到的文字:\n{text}")
    else:
        # Try with different layout modes
        print("尝试不同布局模式...")
        results = ocr_with_layout(image_path)
        if results:
            best = max(results.values(), key=len)
            print(f"\n📝 识别到的文字:\n{best}")
        else:
            print("⚠️ 未能从图片中识别出文字")
    
    # Show image properties
    print(f"\n💡 提示: 图片路径为 {image_path}")

if __name__ == '__main__':
    main()
