describe('Hello World', () => {
  let [page] = [];

  beforeAll(async () => {
    page = await global.browser.newPage();
    await page.setViewport(global.desktopViewport);
  });

  beforeEach(async () => {
    await page.goto(`${global.SITE_URL}/hello-world`);
  });

  it('should display a text', async () => {
    const selector = '#hello-world > div > div';
    const text = await page.$eval(selector, el => el.textContent);
    expect(text).toMatch('Hello, World!');
  });
});
