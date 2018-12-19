const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`filelocation/index.html`, {
    waitUntil: 'networkidle2'
  });
  await page.emulateMedia('print');
  await page.pdf({
    path: 'index.pdf',
    format: 'A4',
    printBackground: true
  });
  await browser.close();
})();
