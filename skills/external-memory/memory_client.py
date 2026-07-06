#!/usr/bin/env python3
"""记忆客户端 - 通过socket快速查询/存储"""
import json, socket, sys

SOCKET_PATH = "/tmp/chroma_memory.sock"

def send_request(req):
    """发送请求到服务端"""
    try:
        sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
        sock.settimeout(10)
        sock.connect(SOCKET_PATH)
        sock.sendall(json.dumps(req, ensure_ascii=False).encode("utf-8"))
        response = sock.recv(65536).decode("utf-8")
        sock.close()
        return json.loads(response)
    except FileNotFoundError:
        return {"status": "error", "message": "服务未启动，请先运行 memory_server.py"}
    except ConnectionRefusedError:
        return {"status": "error", "message": "连接被拒绝"}
    except Exception as e:
        return {"status": "error", "message": str(e)}

def search(query, n=5, category=None):
    """搜索记忆"""
    req = {"action": "search", "query": query, "n": n}
    if category:
        req["category"] = category
    return send_request(req)

def store(content, category="general", source="api"):
    """存储记忆"""
    return send_request({
        "action": "store",
        "content": content,
        "category": category,
        "source": source
    })

def ping():
    """检查服务状态"""
    return send_request({"action": "ping"})

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python3 memory_client.py [search|store|ping] args...")
        sys.exit(1)
    
    cmd = sys.argv[1]
    
    if cmd == "search":
        query = sys.argv[2] if len(sys.argv) > 2 else ""
        n = int(sys.argv[3]) if len(sys.argv) > 3 else 5
        result = search(query, n)
        if result["status"] == "ok":
            print(f"🔍 找到 {result['count']} 条:\n")
            for i, item in enumerate(result["items"]):
                print(f"  [{i+1}] [{item['category']}] [{item['date']}] (匹配{item['score']})")
                print(f"      {item['content'][:120]}")
                if len(item['content']) > 120:
                    print(f"      ...")
                print()
        else:
            print(f"❌ {result['message']}")
    
    elif cmd == "store":
        content = sys.argv[2] if len(sys.argv) > 2 else ""
        category = sys.argv[3] if len(sys.argv) > 3 else "general"
        result = store(content, category)
        if result["status"] == "ok":
            print(f"✅ 已存: {result['id']}")
        else:
            print(f"❌ {result['message']}")
    
    elif cmd == "ping":
        result = ping()
        if result["status"] == "pong":
            print(f"✅ 服务运行中，共 {result['collection_count']} 条记忆")
        else:
            print(f"❌ {result['message']}")
