#!/usr/bin/env python3
"""搜索记忆 - 通过常驻服务秒级响应"""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from memory_client import search

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--query", required=True)
    parser.add_argument("--n", type=int, default=5)
    parser.add_argument("--category")
    args = parser.parse_args()
    search(args.query, args.n, args.category)
