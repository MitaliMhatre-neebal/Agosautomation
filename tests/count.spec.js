
// // count from 10 to 1

// let i=10;
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


import { test, expect } from '@playwright/test';

test('Login to HRMS and open HRMS portal', async ({ page }) => {

    await page.goto('https://hrms.opportunehr.in/JARVIS-SS/Account/ESS?IsApp=True');

    // Username and password
    let username = 'HR-EMP-00304';
    let password = 'MitaliM@2811';

    // Enter credentials
    await page.locator('input[type="text"]').fill(username);
    await page.locator('input[type="password"]').fill(password);

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Wait for Employee Self Service page
    await page.waitForURL('**/JARVIS-SS/Home/Index');

    console.log('Login successful');

    // Click HRMS
    await Promise.all([
        page.waitForURL('**/JARVIS/index.aspx*'),
        page.getByText('HRMS', { exact: true }).click()
    ]);

    console.log('HRMS portal opened');
    console.log('Current URL:', page.url());

    await expect(page).toHaveURL(/JARVIS\/index\.aspx/);
});