import { test } from '@playwright/test';

test('Google Search using Name Selector', async ({ page }) => {

  await page.goto('https://www.google.com');

  // Enter text in search box using Name Selector
  await page.locator('[name="q"]').fill('Playwright Tutorial');

  // Press Enter
  await page.locator('[name="q"]').press('Enter');

  await page.waitForTimeout(3000);
});