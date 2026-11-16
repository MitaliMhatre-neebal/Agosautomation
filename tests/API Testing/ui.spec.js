import { test, expect } from '@playwright/test';


test('UI E2E - Complete purchase journey', async ({ page }) => {
  // Login
  await page.goto('https://www.saucedemo.com/');


  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();


  await expect(page).toHaveURL(/inventory.html/);


  // Validate product and price
  const backpack = page.locator(
    '[data-test="inventory-item"]'
  ).filter({ hasText: 'Sauce Labs Backpack' });


  await expect(backpack).toBeVisible();
  await expect(backpack.locator('[data-test="inventory-item-price"]'))
    .toHaveText('$29.99');


  // Add product to cart
  await backpack.locator('button').click();
  await page.waitForTimeout(3000);


  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');


  // Open cart and validate product
  await page.locator('.shopping_cart_link').click();


  await expect(
    page.getByText('Sauce Labs Backpack')
  ).toBeVisible();


  // Checkout
  await page.locator('[data-test="checkout"]').click();


  await page.locator('[data-test="firstName"]').fill('Test');
  await page.locator('[data-test="lastName"]').fill('User');
  await page.locator('[data-test="postalCode"]').fill('530001');


  await page.locator('[data-test="continue"]').click();


  // Validate checkout overview
  await expect(
    page.locator('[data-test="inventory-item-price"]')
  ).toHaveText('$29.99');


  await expect(page.locator('[data-test="subtotal-label"]'))
    .toContainText('$29.99');


  // Complete purchase
  await page.locator('[data-test="finish"]').click();


  await expect(
    page.locator('[data-test="complete-header"]')
  ).toHaveText('Thank you for your order!');
});