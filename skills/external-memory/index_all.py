#!/usr/bin/env python3
"""把现有的 MEMORY.md 和 memory/*.md 全部灌入 ChromaDB"""
import chromadb, os, uuid, re
from datetime import datetime

CHROMA_DIR = "/root/.openclaw/workspace/chroma_memory"
WORKSPACE = "/root/.openclaw/workspace"

client = chromadb.PersistentClient(path=CHROMA_DIR)

# 删旧的重新建
try:
    client.delete_collection("long_term_memory")
except:
    pass

col = client.create_collection(
    name="long_term_memory",
    metadata={"hnsw:space": "cosine"}
)

def chunk_text(text, filename, max_chars=500):
    """把长文本按段落切块"""
    chunks = []
    lines = text.split("\n")
    current = []
    current_len = 0
    
    for line in lines:
        line = line.strip()
        if not line:
            if current:
                chunks.append("\n".join(current))
                current = []
                current_len = 0
            continue
        # 以 ## 开头作为新段
        if line.startswith("## ") and current:
            chunks.append("\n".join(current))
            current = []
            current_len = 0
        
        current.append(line)
        current_len += len(line)
        
        if current_len >= max_chars:
            chunks.append("\n".join(current))
            current = []
            current_len = 0
    
    if current:
        chunks.append("\n".join(current))
    
    return chunks

def detect_category(text, filename):
    """根据内容判断分类"""
    text_lower = text.lower()
    if "书法" in text or "控笔" in text:
        return "书法练习"
    if "抖音" in text or "小红书" in text:
        return "自媒体"
    if "韩语" in text or "korean" in text.lower():
        return "韩语学习"
    if "英语" in text or "english" in text.lower():
        return "英语学习"
    if "知识库" in text or "obsidian" in text.lower():
        return "知识管理"
    if "代码" in text or "claude code" in text.lower() or "html" in text:
        return "开发"
    if "记忆" in text or "memory" in text.lower():
        return "系统配置"
    if "用户" in text or "偏好" in text or "喜欢" in text:
        return "用户偏好"
    if "产品" in text or "需求" in text:
        return "产品"
    if "复盘" in text:
        return "复盘"
    return "general"

count = 0
skipped = 0

# 1. 处理 MEMORY.md
memory_paths = [
    os.path.join(WORKSPACE, "MEMORY.md"),
]

# 2. 处理 memory/ 下的每日日志
memory_dir = os.path.join(WORKSPACE, "memory")
if os.path.isdir(memory_dir):
    for f in sorted(os.listdir(memory_dir)):
        if f.endswith(".md"):
            memory_paths.append(os.path.join(memory_dir, f))

for filepath in memory_paths:
    if not os.path.isfile(filepath):
        continue
    
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    
    filename = os.path.basename(filepath)
    chunks = chunk_text(content, filename)
    
    for chunk in chunks:
        if len(chunk) < 20:  # 太短的跳过
            skipped += 1
            continue
        
        category = detect_category(chunk, filename)
        doc_id = f"{filename}-{uuid.uuid4().hex[:8]}"
        
        col.add(
            documents=[chunk],
            metadatas=[{
                "category": category,
                "source": filename,
                "timestamp": datetime.now().isoformat(),
                "date": filename.replace(".md", "").replace("memory/", "") if "202" in filename else "unknown"
            }],
            ids=[doc_id]
        )
        count += 1

print(f"✅ 灌入完成!")
print(f"   总条数: {count}")
print(f"   跳过短内容: {skipped}")
print(f"   数据库: {CHROMA_DIR}/long_term_memory")

# 验证一下
sample = col.query(query_texts=["书法练习"], n_results=3)
if sample["documents"][0]:
    print(f"\n🔍 测试搜索 '书法练习' → 找到 {len(sample['documents'][0])} 条")
    for d in sample["documents"][0]:
        print(f"   {d[:60]}...")
