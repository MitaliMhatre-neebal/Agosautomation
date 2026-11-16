const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login module', () => {
  test('valid user can log in', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.loginAsDefaultUser();
    await expect(page).toHaveURL(/dashboard/);
    await expect(login.dashboardHeader).toBeVisible();
  });

  test('invalid password shows login error', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login('Admin', 'WrongPassword123');
    await expect(page.locator('.oxd-alert-content-text')).toContainText('Invalid credentials');
  });
});