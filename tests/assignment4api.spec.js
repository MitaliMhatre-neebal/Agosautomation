
import { test, expect } from '@playwright/test';

test('Assignment 4', async ({ page }) => {

  // 1. Log in with valid credentials
  await page.goto('https://www.saucedemo.com/', {
    waitUntil: 'domcontentloaded'
  });

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('.inventory_list')).toBeVisible();

  console.log('Login successful');

  // 2. Add Sauce Labs Backpack to the cart
  const backpack = page.locator('.inventory_item').filter({
    hasText: 'Sauce Labs Backpack'
  });

  await backpack.locator('button').click();

  console.log('Backpack added to cart');

  // 3. Open the shopping cart
  await page.locator('.shopping_cart_link').click();

  await expect(page.locator('.cart_item')).toHaveCount(1);

  // 4. Click Checkout
  await page.locator('[data-test="checkout"]').click();

  await expect(page.locator('[data-test="firstName"]')).toBeVisible();

  console.log('Checkout information page opened');

  // 5. Enter customer details
  await page.locator('[data-test="firstName"]').fill('Mitali');
  await page.locator('[data-test="lastName"]').fill('Mhatre');
  await page.locator('[data-test="postalCode"]').fill('400091');

  await page.locator('[data-test="continue"]').click();

  // 6. Continue to order overview
  await expect(page.locator('.summary_info')).toBeVisible();

  // 7. Verify product name and price
  const backpackInOverview = page.locator('.cart_item').filter({
    hasText: 'Sauce Labs Backpack'
  });

  await expect(backpackInOverview).toBeVisible();

  await expect(
    backpackInOverview.locator('.inventory_item_price')
  ).toHaveText('$29.99');

  console.log('Product name and price verified');

  // 8. Validate subtotal and total
  await expect(page.locator('.summary_subtotal_label'))
    .toHaveText('Item total: $29.99');

  await expect(page.locator('.summary_tax_label'))
    .toHaveText('Tax: $2.40');

  await expect(page.locator('.summary_total_label'))
    .toHaveText('Total: $32.39');

  console.log('Subtotal and total verified');

  // 9. Click Finish
  await page.locator('[data-test="finish"]').click();

  // 10. Verify order confirmation message
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you!');

  await expect(page.locator('.complete-text'))
    .toContainText('order has been dispatched');

  console.log('Order placed successfully');

});
