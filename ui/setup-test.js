import puppeteer from 'puppeteer';

jest.setTimeout(100 * 1000);

global.SITE_URL = 'http://localhost:8000';

global.mobileViewport = { width: 375, height: 667 };
global.desktopViewport = { width: 1366, height: 768 };

beforeAll(async () => {
  global.browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--no-sandbox'],
  });
});

afterAll(async () => {
  await global.browser.close();
});
