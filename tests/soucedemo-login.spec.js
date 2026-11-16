
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.inventory_list')).toBeVisible();
});

test('Verify Products page is displayed', async ({ page }) => {
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Verify Sauce Labs Backpack is visible', async ({ page }) => {
  await expect(
    page.getByText('Sauce Labs Backpack', { exact: true })
  ).toBeVisible();
});

test('Verify backpack price', async ({ page }) => {
  const backpack = page.locator('.inventory_item').filter({
    hasText: 'Sauce Labs Backpack'
  });

  await expect(backpack.locator('.inventory_item_price')).toHaveText('$29.99');
});

test('Verify total number of products is six', async ({ page }) => {
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});

test('Verify every product has a name and price', async ({ page }) => {
  const products = page.locator('.inventory_item');

  await expect(products).toHaveCount(6);

  for (let i = 0; i < await products.count(); i++) {
    await expect(
      products.nth(i).locator('.inventory_item_name')
    ).toBeVisible();

    await expect(
      products.nth(i).locator('.inventory_item_price')
    ).toBeVisible();
  }
});
