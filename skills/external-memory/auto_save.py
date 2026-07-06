#!/usr/bin/env python3
"""自动存对话关键信息（复用store.py避免重复加载模型）"""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from store import store

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--content", required=True)
    parser.add_argument("--category", default="general")
    parser.add_argument("--date")
    args = parser.parse_args()
    store(args.content, args.category, "auto_save")
