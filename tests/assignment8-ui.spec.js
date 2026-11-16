
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    // Login to SauceDemo
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('.title')).toHaveText('Products');

    console.log('Login successful');
});

test('UI - Complete product shopping and checkout validation', async ({ page }) => {

    // 1. Verify product availability
    const backpack = page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' });

    await expect(backpack).toBeVisible();

    console.log('Product is available');

    // 2. Validate product name and price
    await expect(backpack.locator('.inventory_item_name'))
        .toHaveText('Sauce Labs Backpack');

    await expect(backpack.locator('.inventory_item_price'))
        .toHaveText('$29.99');

    console.log('Product name and price verified');

    // 3. Add product to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    console.log('Product added to cart');

    // 4. Validate cart quantity
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    console.log('Cart quantity verified');

    // Open cart
await page.locator('.shopping_cart_link').click();

await expect(page.locator('.title')).toHaveText('Your Cart');

await expect(page.locator('.cart_item')).toHaveCount(1);

// Verify product name
await expect(
    page.locator('.cart_item .inventory_item_name')
).toHaveText('Sauce Labs Backpack');

console.log('Cart product verified');

    // 5. Validate checkout outcome
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="firstName"]').fill('Test');
    await page.locator('[data-test="lastName"]').fill('User');
    await page.locator('[data-test="postalCode"]').fill('530001');

    await page.locator('[data-test="continue"]').click();

    // Verify order overview
    await expect(page.locator('.title'))
        .toHaveText('Checkout: Overview');

    await expect(page.locator('.summary_subtotal_label'))
        .toHaveText('Item total: $29.99');

    await expect(page.locator('.summary_total_label'))
        .toHaveText('Total: $32.39');

    console.log('Checkout details verified');

    // Finish order
    await page.locator('[data-test="finish"]').click();

    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');

    console.log('Order completed successfully');
});
