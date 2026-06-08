const { chromium } = require('/Users/mel/Documents/programming/personal/MelisseOS/memory/brands/fitai/preview/node_modules/playwright-core');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  const filePath = path.resolve(__dirname, 'index.html');
  await page.goto('file://' + filePath);
  await page.waitForTimeout(1500);
  const blog = await page.$('#blog');
  await blog.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.resolve(__dirname, 'preview-blog.png') });
  await browser.close();
  console.log('done');
})().catch(console.error);
