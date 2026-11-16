import { test } from '@playwright/test';
import users from '../tests/testdata.json';

for (const user of users) {
  test(`Login ${user.username}`, async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator('#username').fill(user.username);
    await page.locator('#password').fill(user.password);
    await page.locator('#submit').click();
  });
}
