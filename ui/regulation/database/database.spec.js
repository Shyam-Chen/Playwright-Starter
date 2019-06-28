import login from '../login';

describe('Database', () => {
  let [page] = [];

  beforeAll(async () => {
    page = await global.browser.newPage();
    await page.setViewport(global.desktopViewport);
  });

  beforeEach(async () => {
    await page.goto('http://localhost:4200/login');
  });

  it('should work', async () => {
    await login.Admin(page);
  });
});
