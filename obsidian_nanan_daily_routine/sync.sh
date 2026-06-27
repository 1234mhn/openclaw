#!/bin/bash
# Obsidian 知识库同步脚本
# 用法: ./sync.sh [push|pull]

cd "$(dirname "$0")"

echo "🔄 Obsidian Sync - $(date)"

# 暂存本地变更
git add -A
git diff --cached --quiet || git commit -m "📝 自动同步 $(date '+%Y-%m-%d %H:%M')"

case "${1:-push}" in
  push)
    echo "⬆️ 推送到远程..."
    git pull --rebase && git push
    ;;
  pull)
    echo "⬇️ 从远程拉取..."
    git pull --rebase
    ;;
esac

echo "✅ 完成"
