请检查【第29课】复利笔记 PDF 的内容与渲染质量。

## 文件
- PDF: `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第29课_复利笔记.pdf`
- HTML: `/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第29课_复利笔记_final.html`

## 请做
1. 阅读 HTML 内容，检查六句台词的韩文/中文/英文是否完整准确、无残留第30课内容
2. 用 pdftoppm 或 pdftocairo 把 PDF 全部16页转成图片（放 /root/.openclaw/workspace/.openclaw/tmp/l29check/），检查：
   - 文字是否乱码（尤其韩文、中文）
   - 有没有大面积空白、孤行页、内容被截断
   - 页脚「台词精讲 X/6」是否正确
   - 场景日记+口语挑战是否同页
3. 用 exec 检查 PDF 里嵌入了哪些字体（pdffonts 命令），确认韩文/中文字体有嵌入

## 输出
逐项报告结论 + 发现的问题清单（如有）。如果是渲染/内容问题，说明在哪一页、什么问题。不要修改文件，只检查报告。
