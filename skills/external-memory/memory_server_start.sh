#!/bin/bash
# 启动外置记忆服务
# 加到 crontab 实现开机自启：@reboot bash /root/.openclaw/workspace/skills/external-memory/memory_server_start.sh

SCRIPT_DIR="/root/.openclaw/workspace/skills/external-memory"
PID_FILE="/tmp/memory_server.pid"
LOG_FILE="/tmp/memory_server.log"

# 检查是否已在运行
if [ -f "$PID_FILE" ] && kill -0 $(cat "$PID_FILE") 2>/dev/null; then
    echo "记忆服务已在运行 (PID: $(cat $PID_FILE))"
    exit 0
fi

# 启动
cd "$SCRIPT_DIR"
nohup python3 memory_server.py > "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"
echo "✅ 记忆服务已启动 (PID: $(cat $PID_FILE))"
