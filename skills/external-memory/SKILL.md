---
name: external-memory
description: 外置向量记忆系统（ChromaDB），替代文件的MEMORY.md读取方式
---

# 外置记忆系统

基于 ChromaDB 的向量记忆，不依赖文件读取。

## 初始化

```bash
cd /root/.openclaw/workspace/chroma_memory && python3 -c "
import chromadb, json
client = chromadb.PersistentClient(path='/root/.openclaw/workspace/chroma_memory')
print(client.list_collections())
"
```

## 存一条记忆

```python
python3 /root/.openclaw/workspace/skills/external-memory/store.py --content "xxx" --category "用户偏好|项目进度|知识|日常"
```

## 搜记忆

```python
python3 /root/.openclaw/workspace/skills/external-memory/search.py --query "xxx" --n 5
```
