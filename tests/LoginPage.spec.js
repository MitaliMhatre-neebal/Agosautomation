// const { test, expect } = require('@playwright/test');
// const LoginPage = require('../pages/LoginPage');

// test.describe('Login Module', () => {

//     test('Valid Login', async ({ page }) => {

//         const loginPage = new LoginPage(page);

//         await loginPage.goto();
//         await loginPage.login('Admin', 'admin123');

//         await expect(page).toHaveURL(/dashboard/);
//     });

//     test('Invalid Login', async ({ page }) => {

//         const loginPage = new LoginPage(page);

//         await loginPage.goto();
//         await loginPage.login('Admin', 'wrongPassword');

//         await expect(page.locator('.oxd-alert-content-text'))
//             .toHaveText('Invalid credentials');
//     });

// });


// import { test } from '@playwright/test';

// test.describe('OrangeHRM', () => {

//     test.describe('Login Module', () => {

//         test.beforeEach(async ({ page }) => {
//             console.log('Launch Browser');
//         });

//         test('Valid Login', async ({ page }) => {
//             console.log('Valid Login');
//         });

//         test.skip('Invalid Login', async ({ page }) => {
//             console.log('Invalid Login');
//         });

//         test.afterEach(async ({ page }) => {
//             console.log('Close Browser');
//         });

//     });

//     test.describe('Employee Module', () => {

//         test('Add Employee', async ({ page }) => {
//             console.log('Add Employee');
//         });

//         test.fixme('Delete Employee', async ({ page }) => {
//             console.log('Delete Employee');
//         });

//     });

// });

// July23 Assignment 2

// import { test, expect } from '@playwright/test';

// test.describe('OrangeHRM', () => {

//   test.describe('Login Module', () => {

//     test.beforeEach(async ({ page }) => {
//       // Navigate to OrangeHRM login page
//       await page.goto('https://opensource-demo.orangehrmlive.com/');
//     });

//     test('Valid Login', async ({ page }) => {
//       await page.locator('input[name="username"]').fill('Admin');
//       await page.locator('input[name="password"]').fill('admin123');
//       await page.locator('button[type="submit"]').click();

//       await expect(page).toHaveURL(/dashboard/);
//       await expect(page.locator('h6')).toHaveText('Dashboard');
//     });

//     test.skip('Invalid Login', async ({ page }) => {
//       await page.locator('input[name="username"]').fill('Admin');
//       await page.locator('input[name="password"]').fill('wrongPassword');
//       await page.locator('button[type="submit"]').click();

//       await expect(page.locator('.oxd-alert-content-text')).toContainText(
//         'Invalid credentials'
//       );
//     });

//     test.afterEach(async ({ page }) => {
//       // Cleanup after each login test
//       await page.close();
//     });

//   });

//   test.describe('Employee Module', () => {

//     test('Add Employee', async ({ page }) => {
//       // Login
//       await page.goto('https://opensource-demo.orangehrmlive.com/');
//       await page.locator('input[name="username"]').fill('Admin');
//       await page.locator('input[name="password"]').fill('admin123');
//       await page.locator('button[type="submit"]').click();

//       // Navigate to PIM
//       await page.getByRole('link', { name: 'PIM' }).click();
//       await page.getByRole('button', { name: 'Add' }).click();

//       // Fill employee details
//       await page.locator('input[name="firstName"]').fill('John');
//       await page.locator('input[name="lastName"]').fill('Doe');

//       await page.getByRole('button', { name: 'Save' }).click();
//       await expect(page).toHaveURL(/viewPersonalDetails/);

// await expect(page.locator('input[name="firstName"]')).toHaveValue('John');

// await expect(page.locator('input[name="lastName"]')).toHaveValue('Doe');
//       //await expect(page.locator('h6')).toContainText('Personal Details');
//     });

//     test.fixme('Delete Employee', async ({ page }) => {
//       // Test implementation pending
//     });

//   });

// });


// July 23 Assignment 1

import { test, expect } from '@playwright/test';

test.describe('OrangeHRM', () => {

  test.describe('Login Module', () => {

    test('Valid Login', async ({ page }) => {
      // Navigate to OrangeHRM
      await page.goto('https://opensource-demo.orangehrmlive.com/');

      // Enter valid credentials
      await page.locator('input[name="username"]').fill('Admin');
      await page.locator('input[name="password"]').fill('admin123');

      // Click Login
      await page.locator('button[type="submit"]').click();

      // Validate successful login
      await expect(page).toHaveURL(/dashboard/);
      await expect(page.locator('h6')).toHaveText('Dashboard');
    });

    test('Invalid Login', async ({ page }) => {
      // Navigate to OrangeHRM
      await page.goto('https://opensource-demo.orangehrmlive.com/');

      // Enter invalid credentials
      await page.locator('input[name="username"]').fill('Admin');
      await page.locator('input[name="password"]').fill('wrongPassword');

      // Click Login
      await page.locator('button[type="submit"]').click();

      // Validate error message
      await expect(page.locator('.oxd-alert-content-text'))
        .toContainText('Invalid credentials');
    });

  });

  test.describe('Dashboard Module', () => {

    test('Verify Dashboard', async ({ page }) => {
      // Login
      await page.goto('https://opensource-demo.orangehrmlive.com/');
      await page.locator('input[name="username"]').fill('Admin');
      await page.locator('input[name="password"]').fill('admin123');
      await page.locator('button[type="submit"]').click();

      // Verify Dashboard page
      await expect(page).toHaveURL(/dashboard/);
      await expect(page.locator('h6')).toHaveText('Dashboard');
    });

    test('Logout', async ({ page }) => {
      // Login
      await page.goto('https://opensource-demo.orangehrmlive.com/');
      await page.locator('input[name="username"]').fill('Admin');
      await page.locator('input[name="password"]').fill('admin123');
      await page.locator('button[type="submit"]').click();

      // Click profile icon
      await page.locator('.oxd-userdropdown-tab').click();

      // Click Logout
      await page.getByRole('menuitem', { name: 'Logout' }).click();

      // Validate logout
      await expect(page).toHaveURL(/login/);
      await expect(page.locator('button[type="submit"]')).toBeVisible();
    });

  });

});