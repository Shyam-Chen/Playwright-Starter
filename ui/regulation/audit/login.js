const userNameTextField = '#mat-input-0';
const passwordTextField = '#mat-input-1';
const signInButton =
  '#m_login > div.m-grid__item.m-grid__item--fluid.m-grid__item--order-tablet-and-mobile-1.m-login__wrapper > div.m-login__body > m-login > div.m-login__action.m-login__action--fit > m-spinner-button > button > span > span';

export default {
  // 系統管理者
  async Admin(page) {
    await page.type(userNameTextField, 'admin');
    await page.type(passwordTextField, 'test');
    await page.click(signInButton);
  },

  // 總部環安衛處
  async HQ_ESH_1(page) {
    await page.type(userNameTextField, '050001');
    await page.type(passwordTextField, 'test');
    await page.click(signInButton);
  },
  async HQ_ESH_2(page) {
    await page.type(userNameTextField, '050011');
    await page.type(passwordTextField, 'test');
    await page.click(signInButton);
  },

  // 廠區工安
  async FAB_ISEP(page) {
    await page.type(userNameTextField, '052001');
    await page.type(passwordTextField, 'test');
    await page.click(signInButton);
  },

  // 部經理/副理
  async DEPT_Manager(page) {
    await page.type(userNameTextField, '052011');
    await page.type(passwordTextField, 'test');
    await page.click(signInButton);
  },

  // 一般使用者
  async User_1(page) {
    await page.type(userNameTextField, '050012');
    await page.type(passwordTextField, 'test');
    await page.click(signInButton);
  },
  async User_2(page) {
    await page.type(userNameTextField, '052022');
    await page.type(passwordTextField, 'test');
    await page.click(signInButton);
  },
};
