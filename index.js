const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://127.0.0.1:5500/index.html`, {
    waitUntil: 'networkidle2'
  });
  await page.emulateMedia('print');
  await page.pdf({
    path: 'cv3.pdf',
    format: 'A4',
    printBackground: true
    // displayHeaderFooter: true
  });
  await browser.close();
})();
