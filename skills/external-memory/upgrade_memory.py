#!/usr/bin/env python3
"""升级版：bge-small-zh中文模型 + Obsidian知识库 + 自动存"""
import chromadb, os, uuid, sys, json, hashlib
from datetime import datetime
from chromadb import Documents, EmbeddingFunction, Embeddings

CHROMA_DIR = "/root/.openclaw/workspace/chroma_memory"
WORKSPACE = "/root/.openclaw/workspace"
OBSIDIAN = "/root/obsidian_nanan_daily_routine"

# ======= 中文专用Embedding =======
print("📦 加载中文模型 bge-small-zh...")
from sentence_transformers import SentenceTransformer
model = SentenceTransformer('BAAI/bge-small-zh-v1.5')

class BGE_Embedding(EmbeddingFunction):
    def __call__(self, input: Documents) -> Embeddings:
        return model.encode(list(input), normalize_embeddings=True).tolist()

embed_fn = BGE_Embedding()
print("✅ 中文模型加载完成")

# ======= 重建ChromaDB =======
client = chromadb.PersistentClient(path=CHROMA_DIR)
for c in client.list_collections():
    try:
        client.delete_collection(c.name)
    except:
        pass

col = client.create_collection(
    name="long_term_memory",
    embedding_function=embed_fn,
    metadata={"hnsw:space": "cosine"}
)

# ======= 分块函数 =======
def chunk_markdown(text, max_chars=400):
    """智能分块：按 ## 标题分，超出长度的再按段落分"""
    chunks = []
    lines = text.split("\n")
    
    # 先按 ## 标题分割
    sections = []
    current_title = "无标题"
    current_lines = []
    
    for line in lines:
        if line.startswith("## "):
            if current_lines:
                sections.append((current_title, "\n".join(current_lines)))
            current_title = line.strip("# ").strip()
            current_lines = [line]
        elif line.startswith("# ") and current_lines:
            if current_lines:
                sections.append((current_title, "\n".join(current_lines)))
            current_title = ""
            current_lines = [line]
        else:
            current_lines.append(line)
    
    if current_lines:
        sections.append((current_title, "\n".join(current_lines)))
    
    for title, content in sections:
        content = content.strip()
        if len(content) < 15:
            continue
        if len(content) <= max_chars:
            chunks.append({"title": title, "content": content, "is_full": True})
        else:
            # 按段落切
            paras = content.split("\n\n")
            part = []
            part_len = 0
            for p in paras:
                if part_len + len(p) > max_chars and part:
                    chunks.append({"title": title, "content": "\n\n".join(part), "is_full": False})
                    part = [p]
                    part_len = len(p)
                else:
                    part.append(p)
                    part_len += len(p)
            if part:
                chunks.append({"title": title, "content": "\n\n".join(part), "is_full": False})
    
    return chunks

def detect_category(text, source_path):
    """智能分类"""
    text_lower = text.lower()
    source = source_path.lower()
    
    # 路径分类
    if "韩语" in source or "korean" in source:
        return "韩语学习"
    if "英语" in source or "english" in source:
        return "英语学习"
    if "知识库" in source or "基础知识" in source or "ai" in source or "ai相关" in source:
        return "知识管理"
    if "自媒体" in source or "读书博主" in source or "双语博主" in source:
        return "自媒体"
    if "产品" in source or "需求" in source or "项目" in source:
        return "产品"
    if "复盘" in source:
        return "复盘"
    if "记忆" in source or "memory" in source or "MEMORY" in source:
        return "系统配置"
    if "书法" in source or "控笔" in source:
        return "书法练习"
    if "韩语课程" in source:
        return "韩语学习"
    
    # 内容分类
    if "书法" in text or "控笔" in text or "笔画" in text:
        return "书法练习"
    if "抖音" in text or "小红书" in text or "播放" in text or "粉丝" in text or "自媒体" in text:
        return "自媒体"
    if "韩语" in text:
        return "韩语学习"
    if "英语" in text or "单词" in text or "语法" in text:
        return "英语学习"
    if "代码" in text or "html" in text_lower or "api" in text_lower:
        return "开发"
    if "复盘" in text:
        return "复盘"
    if "妈妈" in text or "我妈" in text or "家庭" in text:
        return "个人生活"
    if "产品" in text or "需求" in text:
        return "产品"
    if "记忆" in text or "memory" in text_lower:
        return "系统配置"
    if "用户" in text or "偏好" in text or "喜欢" in text or "习惯" in text:
        return "用户偏好"
    
    return "general"

def get_date_from_path(path):
    """从路径提取日期"""
    basename = os.path.basename(path)
    # 匹配 YYYY-MM-DD.md 或 YYYY-MM-DD.md
    import re
    m = re.search(r'(\d{4}-\d{2}-\d{2})', basename)
    if m:
        return m.group(1)
    return "unknown"

# ======= 扫描并索引 =======
count = 0
skipped = 0

def index_file(filepath, source_label):
    global count, skipped
    if not os.path.isfile(filepath):
        return
    if filepath.endswith(".png") or filepath.endswith(".jpg") or filepath.endswith(".py"):
        return
    
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except:
        skipped += 1
        return
    
    if len(content) < 30:
        skipped += 1
        return
    
    chunks = chunk_markdown(content)
    date = get_date_from_path(filepath)
    
    for c in chunks:
        category = detect_category(c["content"], filepath)
        doc_id = f"{uuid.uuid4().hex[:12]}"
        content_hash = hashlib.md5(c["content"].encode()).hexdigest()[:8]
        
        col.add(
            documents=[c["content"]],
            metadatas=[{
                "category": category,
                "source": source_label,
                "path": filepath,
                "date": date,
                "title": c["title"],
                "hash": content_hash,
                "timestamp": datetime.now().isoformat()
            }],
            ids=[doc_id]
        )
        count += 1

# 1. 工作区记忆文件
print("\n📂 索引工作区记忆...")
for f in os.listdir(os.path.join(WORKSPACE, "memory")):
    if f.endswith(".md"):
        index_file(os.path.join(WORKSPACE, "memory", f), "daily_memory")

index_file(os.path.join(WORKSPACE, "MEMORY.md"), "long_term")

# 2. Obsidian 知识库
print("📂 索引 Obsidian 知识库...")
KB_START = os.path.join(OBSIDIAN, "知识体系库")
if os.path.isdir(KB_START):
    exclude_dirs = {".obsidian", "复盘记录", "assets", "附件"}
    for root, dirs, files in os.walk(KB_START):
        dirs[:] = [d for d in dirs if d not in exclude_dirs and not d.startswith(".")]
        
        rel_path = os.path.relpath(root, OBSIDIAN)
        # 限制深度，避免索引太多无关文件
        depth = rel_path.count(os.sep)
        if depth > 5:
            dirs.clear()
            continue
        
        for f in files:
            if f.endswith(".md"):
                filepath = os.path.join(root, f)
                source_label = f"obsidian/{rel_path}" if rel_path != "." else "obsidian"
                index_file(filepath, source_label)

print(f"\n✅ 索引完成！")
print(f"   总条数: {count}")
print(f"   跳过: {skipped}")
print(f"   模型: bge-small-zh-v1.5")

# 3. 验证
print("\n🔍 测试搜索（中文）...")
test_queries = ["书法练习到第几天了", "抖音为什么0播放", "我妈最近怎么样", "读书博主怎么接商单"]
for q in test_queries:
    results = col.query(query_texts=[q], n_results=2)
    docs = results["documents"][0]
    metas = results["metadatas"][0]
    if docs:
        print(f"\n  搜「{q}」→ 找到 {len(docs)} 条:")
        for d, m in zip(docs, metas):
            cat = m.get("category", "?")
            src = m.get("source", "?")
            print(f"    [{cat}][{src}] {d[:60]}...")
    else:
        print(f"\n  搜「{q}」→ 没找到")

print("\n🎉 升级完成！")
