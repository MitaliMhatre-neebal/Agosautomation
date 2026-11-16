// // import { test, expect } from '@playwright/test';
// // import { getEmployeeData } from '../utils/excelReader.js';

// // const users = getEmployeeData('./test-data/EmployeeData.xlsx');

// // test.setTimeout(120000);

// // for (const user of users) {

// //     test(`Login Test - ${user.Username}`, async ({ page }) => {

// //         // Launch application
// //         await page.goto('https://www.saucedemo.com/');

// //         // Enter credentials
// //         await page.locator('#user-name')
// //             .fill(user.Username);

// //         await page.locator('#password')
// //             .fill(user.Password);

// //         // Click login
// //         await page.locator('#login-button')
// //             .click();

// //         // Verify Dashboard (Products page)
// //         await expect(
// //             page.locator('.title')
// //         ).toHaveText('Products');

// //         console.log(`${user.Username} login successful`);

// //         // Logout
// //         await page.locator('#react-burger-menu-btn')
// //             .click();

// //         await page.locator('#logout_sidebar_link')
// //             .click();

// //         console.log(`${user.Username} logout successful`);

// //     });

// // }

// import { test, expect } from '@playwright/test';
// import { getEmployeeData } from '../utils/excelReader.js';

// const users = getEmployeeData('./test-data/EmployeeData.xlsx');

// test.setTimeout(120000);

// for (const user of users) {

//     test(`Login Test - ${user.Username}`, async ({ page }) => {

//         // Launch application
//         await page.goto('https://demoqa.com/login');

//         // Enter credentials
//         await page.locator('#user-name')
//             .fill(user.Username);

//         await page.locator('#password')
//             .fill(user.Password);

//         // Click login
//         await page.locator('#login-button')
//             .click();

//         // Verify Dashboard (Products page)
//         await expect(
//             page.locator('.title')
//         ).toHaveText('Products');

//         console.log(`${user.Username} login successful`);

//         // Logout
//         await page.locator('#react-burger-menu-btn')
//             .click();

//         await page.locator('#logout_sidebar_link')
//             .click();

//         console.log(`${user.Username} logout successful`);

//     });

// }


import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import DashboardPage from '../pages/DashboardPage.js';
import { getLoginData } from '../utils/excelReader.js';

const users = getLoginData();

for (const user of users) {
  test(`Login Test - ${user.username}`, async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);

    await login.openApplication();
    await login.login(user.username, user.password);
    await dashboard.verifyDashboard(user.username);
    await dashboard.logout();
  });
}