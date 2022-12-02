import { test, expect } from '@playwright/test';

test('Sign-in', async ({ page }) => {
  await page.goto('https://vue-starter-6fa6.onrender.com/sign-in');

  const title = await page.innerText('#root > div > div > form > div:nth-child(1) > div');
  expect(title).toBe('Sign in to our platform');

  await page.route('**/api/auth/sign-in', (route) =>
    route.fulfill({
      status: 200,
      body: JSON.stringify({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoeWFtLmNoZW4iLCJwYXNzd29yZCI6IiQyYiQxMCRvSTNRazFKRzdLdkFkMWhqY2VKZmIuV2ZNQmJyb2o1bGV1eE1jUmdqWlRPM0tjN3o2UlZudSIsImlhdCI6MTY2OTc3NDU1MSwiZXhwIjoxNjY5ODMyMTUxfQ.mUeGoU8G-CfjpXjcetZ1ZTvjq-QoJCwHqHWzDI_ECuk' }),
    }),
  );

  await page.click('#root > div > div > form > div.flex.items-center.justify-between > button');

  await expect(page).toHaveURL(/.*dashboard/);
});
