// Assignment 3

import { test, expect } from '@playwright/test';

// Login before each test
test.beforeEach(async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('.title')).toHaveText('Products');

    console.log('Login successful');
});

// Shopping Cart Test
test('Add and remove products from shopping cart', async ({ page }) => {

    // Step 1: Add Sauce Labs Backpack
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    console.log('Sauce Labs Backpack added to cart');

    // Step 2: Add another product
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    console.log('Sauce Labs Bike Light added to cart');

    // Step 3: Verify cart badge displays 2
    const cartBadge = page.locator('.shopping_cart_badge');

    await expect(cartBadge).toHaveText('2');

    console.log('Cart badge displays 2');

    // Step 4: Open shopping cart
    await page.locator('.shopping_cart_link').click();

    await expect(page.locator('.title')).toHaveText('Your Cart');

    console.log('Shopping cart opened successfully');

    // Step 5: Verify both products are present
    await expect(
        page.locator('.cart_item').filter({ hasText: 'Sauce Labs Backpack' })
    ).toBeVisible();

    await expect(
        page.locator('.cart_item').filter({ hasText: 'Sauce Labs Bike Light' })
    ).toBeVisible();

    await expect(page.locator('.cart_item')).toHaveCount(2);

    console.log('Both products are present in the cart');

    // Step 6: Remove Sauce Labs Bike Light
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();

    console.log('Sauce Labs Bike Light removed from cart');

    // Step 7: Verify only one product remains
    await expect(page.locator('.cart_item')).toHaveCount(1);

    await expect(
        page.locator('.cart_item').filter({ hasText: 'Sauce Labs Backpack' })
    ).toBeVisible();

    await expect(
        page.locator('.cart_item').filter({ hasText: 'Sauce Labs Bike Light' })
    ).toHaveCount(0);

    // Verify updated cart badge
    await expect(cartBadge).toHaveText('1');

    console.log('Only one product remains in the cart');
});
