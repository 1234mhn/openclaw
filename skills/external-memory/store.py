#!/usr/bin/env python3
"""存储记忆 - 通过常驻服务秒级响应"""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from memory_client import store

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--content", required=True)
    parser.add_argument("--category", default="general")
    parser.add_argument("--date")
    args = parser.parse_args()
    store(args.content, args.category, "auto_save")
