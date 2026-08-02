import { chromium } from 'playwright';
import { readFileSync } from 'fs';

const htmlFile = process.argv[2];
const pdfFile = process.argv[3];

const html = readFileSync(htmlFile, 'utf-8');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle', timeout: 15000 });
await page.waitForTimeout(1000);

await page.pdf({
  path: pdfFile,
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, bottom: 0, left: 0, right: 0 }
});

await browser.close();
console.log(`✅ ${pdfFile} generated`);
