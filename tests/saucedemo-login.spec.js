
import { test, expect } from '@playwright/test';

// Test 1: Verify login page opens successfully
test('Verify SauceDemo login page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    console.log('Login page opened successfully');
});

// Test 2: Login with valid credentials
test('Login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');

    console.log('Login successful and Products page displayed');
});

// Test 3: Login with invalid password
test('Login with invalid password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('wrong_password');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]'))
        .toContainText('Username and password do not match');

    console.log('Invalid password error message displayed');
});

// Test 4: Submit login form with empty credentials
test('Login with empty credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]'))
        .toContainText('Username is required');

    console.log('Empty credentials validation message displayed');
});
