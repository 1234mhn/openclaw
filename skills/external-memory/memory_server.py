#!/usr/bin/env python3
"""记忆服务 - 常驻内存，秒级响应"""
import json, os, sys, socket, threading, signal
from sentence_transformers import SentenceTransformer
from chromadb import Documents, EmbeddingFunction, Embeddings
import chromadb

CHROMA_DIR = "/root/.openclaw/workspace/chroma_memory"
SOCKET_PATH = "/tmp/chroma_memory.sock"

# 预加载模型（只加载一次）
print("📦 加载中文模型 bge-small-zh...", flush=True)
model = SentenceTransformer('BAAI/bge-small-zh-v1.5')

class BGE_Embedding(EmbeddingFunction):
    def __call__(self, input: Documents) -> Embeddings:
        return model.encode(list(input), normalize_embeddings=True).tolist()

embed_fn = BGE_Embedding()

client = chromadb.PersistentClient(path=CHROMA_DIR)
col = client.get_collection(name="long_term_memory", embedding_function=embed_fn)
print(f"✅ 模型加载完成，记忆库就绪", flush=True)

def handle_request(data):
    """处理请求"""
    try:
        req = json.loads(data)
        action = req.get("action")
        
        if action == "search":
            query = req.get("query", "")
            n = min(req.get("n", 5), 20)
            category = req.get("category")
            
            where = {"category": category} if category else None
            results = col.query(query_texts=[query], n_results=n, where=where)
            
            items = []
            for doc, meta, dist in zip(
                results["documents"][0],
                results["metadatas"][0],
                results["distances"][0]
            ):
                items.append({
                    "content": doc,
                    "category": meta.get("category", ""),
                    "date": meta.get("date", ""),
                    "source": meta.get("source", ""),
                    "score": f"{(1-dist)*100:.0f}%"
                })
            
            return json.dumps({"status": "ok", "count": len(items), "items": items}, ensure_ascii=False)
        
        elif action == "store":
            import uuid, hashlib
            from datetime import datetime
            
            content = req.get("content", "")
            category = req.get("category", "general")
            source = req.get("source", "api")
            
            doc_id = f"svc-{datetime.now().strftime('%Y%m%d%H%M%S')}-{uuid.uuid4().hex[:6]}"
            col.add(
                documents=[content],
                metadatas=[{
                    "category": category,
                    "source": source,
                    "date": datetime.now().strftime("%Y-%m-%d"),
                    "timestamp": datetime.now().isoformat()
                }],
                ids=[doc_id]
            )
            return json.dumps({"status": "ok", "id": doc_id}, ensure_ascii=False)
        
        elif action == "ping":
            return json.dumps({"status": "pong", "collection_count": col.count()}, ensure_ascii=False)
        
        else:
            return json.dumps({"status": "error", "message": f"未知操作: {action}"})
    
    except Exception as e:
        return json.dumps({"status": "error", "message": str(e)})

def handle_conn(conn):
    """处理单个连接"""
    try:
        data = conn.recv(65536).decode("utf-8")
        response = handle_request(data)
        conn.sendall(response.encode("utf-8"))
    except Exception as e:
        try:
            conn.sendall(json.dumps({"status": "error", "message": str(e)}).encode())
        except:
            pass
    finally:
        conn.close()

def cleanup():
    """清理socket文件"""
    if os.path.exists(SOCKET_PATH):
        os.unlink(SOCKET_PATH)

def run_server():
    cleanup()
    
    server = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
    server.bind(SOCKET_PATH)
    server.listen(5)
    server.settimeout(1.0)  # 1秒超时，方便检测退出
    
    os.chmod(SOCKET_PATH, 0o777)
    print(f"🚀 记忆服务已启动 (socket: {SOCKET_PATH})", flush=True)
    print(f"   当前记忆条数: {col.count()}", flush=True)
    
    running = True
    
    def shutdown(sig, frame):
        nonlocal running
        print("\n⏹️  正在关闭服务...", flush=True)
        running = False
    
    signal.signal(signal.SIGINT, shutdown)
    signal.signal(signal.SIGTERM, shutdown)
    
    while running:
        try:
            conn, _ = server.accept()
            threading.Thread(target=handle_conn, args=(conn,), daemon=True).start()
        except socket.timeout:
            continue
        except OSError:
            break
    
    server.close()
    cleanup()
    print("👋 服务已关闭", flush=True)

if __name__ == "__main__":
    run_server()
