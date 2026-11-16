import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { LeavePage } from '../pages/LeavePage.js';

test.describe('Leave module', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.loginAsDefaultUser();
  });

  test('Leave page opens', async ({ page }) => {
    const leave = new LeavePage(page);
    await leave.open();
    await expect(leave.leaveHeading).toBeVisible();
  });

  test('My Leave option is available', async ({ page }) => {
    const leave = new LeavePage(page);
    await leave.open();
    await expect(leave.myLeave).toBeVisible();
  });
});