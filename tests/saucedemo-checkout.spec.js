
import { test, expect } from '@playwright/test';

test('Complete end-to-end checkout process', async ({ page }) => {

    // Step 1: Login with valid credentials
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');

    console.log('Login successful');

    // Step 2: Add Sauce Labs Backpack to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    console.log('Sauce Labs Backpack added to cart');

    // Step 3: Open shopping cart
    await page.locator('.shopping_cart_link').click();

    await expect(page.locator('.title')).toHaveText('Your Cart');

    await expect(
        page.locator('.cart_item').filter({ hasText: 'Sauce Labs Backpack' })
    ).toBeVisible();

    console.log('Shopping cart opened and product verified');

    // Step 4: Click Checkout
    await page.locator('[data-test="checkout"]').click();

    await expect(page.locator('.title')).toHaveText('Checkout: Your Information');

    console.log('Checkout information page opened');

    // Step 5: Enter customer details
    await page.locator('[data-test="firstName"]').fill('Test');
    await page.locator('[data-test="lastName"]').fill('User');
    await page.locator('[data-test="postalCode"]').fill('530001');

    // Step 6: Continue to order overview
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('.title')).toHaveText('Checkout: Overview');

    console.log('Order overview page opened');

    // Step 7: Verify product name
    await expect(
        page.locator('.inventory_item_name')
    ).toHaveText('Sauce Labs Backpack');

    // Verify product price
    await expect(
        page.locator('.inventory_item_price')
    ).toHaveText('$29.99');

    console.log('Product name and price verified');

    // Step 8: Validate item subtotal and total
    await expect(page.locator('.summary_subtotal_label'))
        .toHaveText('Item total: $29.99');

    await expect(page.locator('.summary_tax_label'))
        .toHaveText('Tax: $2.40');

    await expect(page.locator('.summary_total_label'))
        .toHaveText('Total: $32.39');

    console.log('Item subtotal, tax and total verified');

    // Step 9: Click Finish
    await page.locator('[data-test="finish"]').click();

    // Step 10: Verify order confirmation
    await expect(page.locator('.title')).toHaveText('Checkout: Complete!');

    await expect(page.locator('.complete-header'))
        .toHaveText('Thank you for your order!');

    await expect(page.locator('.complete-text'))
        .toContainText('Your order has been dispatched');

    console.log('Order completed successfully');
});
