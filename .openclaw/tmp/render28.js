const puppeteer = require('/root/.openclaw/workspace/node_modules/puppeteer');
(async () => {
  const browser = await puppeteer.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  const html = 'file:///root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第28课_复利笔记_final.html';
  await page.goto(html, {waitUntil:'networkidle0', timeout:60000});
  await page.emulateMediaType('print');
  await page.pdf({
    path: '/root/.openclaw/workspace/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/第28课_复利笔记_最新_20260807.pdf',
    format: 'A4',
    printBackground: true,
    margin: {top:'0',bottom:'0',left:'0',right:'0'}
  });
  await browser.close();
  console.log('PDF_DONE');
})().catch(e=>{console.error('ERR',e.message);process.exit(1);});
