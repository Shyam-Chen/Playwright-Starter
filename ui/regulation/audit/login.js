export default async (page) => {
  const userName = '#mat-input-0';
  const password = '#mat-input-1';
  const signIn = '#m_login > div.m-grid__item.m-grid__item--fluid.m-grid__item--order-tablet-and-mobile-1.m-login__wrapper > div.m-login__body > m-login > div.m-login__action.m-login__action--fit > m-spinner-button > button > span > span';

  await page.type(userName, '050001');
  await page.type(password, 'test');
  await page.click(signIn);

  return page;
};
