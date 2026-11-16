import { test,expect }  from '@playwright/test';

test('Assertion Demo', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');
  const title = await page.title();
  console.log(`Page Title: ${title}`);
  
  await expect(page).toHaveTitle('demosite');

  await expect(page).toHaveURL(/text-box/);

  await expect(page.locator('#currentAddress')).toBeVisible();
})