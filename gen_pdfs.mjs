import puppeteer from '/root/.nvm/versions/node/v24.18.0/lib/node_modules/puppeteer';

const BASE = '/root/obsidian_nanan_compound_library/语言库/韩语库/这爱情怎么翻译 台词复利笔记/';

const files = [
  { html: '제24과_台词精讲_台词运用_完整版.html', pdf: '제24과_台词精讲_台词运用_完整版.pdf', alt: '爱情怎么翻译E1-24.pdf' },
  { html: '제29과_台词精讲_台词运用_完整版.html', pdf: '제29과_台词精讲_台词运用_完整版.pdf', alt: '爱情怎么翻译E2-29.pdf' }
];

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

for (const f of files) {
  const htmlPath = BASE + f.html;
  const pdfPath = BASE + f.pdf;
  const altPath = BASE + f.alt;
  
  console.log(`Generating ${f.pdf}...`);
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  
  // Check page count first
  const pageCount = await page.evaluate(() => {
    return document.querySelectorAll('.page, .cover-page').length;
  });
  console.log(`  Pages found: ${pageCount}`);
  
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
    printBackground: true,
    preferCSSPageSize: true
  });
  console.log(`  PDF size: ${(require('fs').statSync(pdfPath).size / 1024).toFixed(0)} KB`);
  
  // Copy as alt name
  require('fs').copyFileSync(pdfPath, altPath);
  console.log(`  Copied to ${f.alt}`);
  
  await page.close();
}

await browser.close();
console.log('\n✅ All PDFs generated!');
