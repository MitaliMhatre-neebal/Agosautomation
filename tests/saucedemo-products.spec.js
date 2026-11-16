// Assignment 2
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

//  Verify Products page is displayed
test('Verify Products page', async ({ page }) => {

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');

    console.log('Products page displayed successfully');
});

//  Verify Sauce Labs Backpack is visible
test('Verify Sauce Labs Backpack is visible', async ({ page }) => {

    const backpack = page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' });

    await expect(backpack).toBeVisible();

    console.log('Sauce Labs Backpack is visible');
});

//  Verify Sauce Labs Backpack price
test('Verify Sauce Labs Backpack price', async ({ page }) => {

    const backpack = page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' });

    await expect(backpack.locator('.inventory_item_price'))
        .toHaveText('$29.99');

    console.log('Backpack price is $29.99');
});

//  Verify multiple products are displayed
test('Verify multiple products are displayed', async ({ page }) => {

    const products = page.locator('.inventory_item');

    await expect(products).toHaveCount(6);

    console.log('Multiple products are displayed');
});

//  Verify each product has a name and price
test('Verify each product has a name and price', async ({ page }) => {

    const products = page.locator('.inventory_item');

    const productCount = await products.count();

    expect(productCount).toBeGreaterThan(1);

    for (let i = 0; i < productCount; i++) {

        const product = products.nth(i);

        const productName = product.locator('.inventory_item_name');
        const productPrice = product.locator('.inventory_item_price');

        await expect(productName).toBeVisible();
        await expect(productPrice).toBeVisible();

        await expect(productName).not.toBeEmpty();
        await expect(productPrice).not.toBeEmpty();

        console.log(
            'Product:',
            await productName.textContent(),
            'Price:',
            await productPrice.textContent()
        );
    }
});
