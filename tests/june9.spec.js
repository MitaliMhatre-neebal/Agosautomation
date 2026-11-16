// Assignment 1 Open DemoQA page and select Yes radio button

// const { test } = require('@playwright/test');

// test('Checkbox Example', async ({ page }) => {

//     await page.goto('https://demoqa.com/radio-button');
//     await page.locator("label[for='yesRadio']") .click();
//     await page.waitForTimeout(2000);
// })


//Assignment 2- Open practice form and select atleast 2 check box

// const { test } = require('@playwright/test');

// test('Checkbox Example', async ({ page }) => {

//     await page.goto('https://demoqa.com/automation-practice-form');
//     await page.locator("label[for='hobbies-checkbox-1']")

//              .scrollIntoViewIfNeeded();

//    await page.locator("label[for='hobbies-checkbox-1']")

//               .click();

//               await page.locator("label[for='hobbies-checkbox-2']")

//               .click();

//                await page.waitForTimeout(2000);

// })


//Assignment 3 Open 3 website write code for Go Back Go Forword Refresh

// import { test,expect } from '@playwright/test'

// test('Navigation', async ({ page }) => {
//     await page.goto('https://www.amazon.in/');
//     await page.waitForTimeout(1000);

//     await page.goto('https://www.w3schools.com/');
//     await page.waitForTimeout(1000);

//     await page.goto('https://neebal.com/');
//     await page.waitForTimeout(1000);
        
//     await page.goBack();
//        await page.waitForTimeout(2000);

// await page.goBack();
// await page.waitForTimeout(2000);


// await page.goForward();
// await page.waitForTimeout(2000);


// await page.reload();
// await page.waitForTimeout(2000);

// console.log('Successful');

    
// }
// );

//Assignment 4 validate Title URL search box visible

import { test, expect } from '@playwright/test';

test('Validate Page', async ({ page }) => {

    
    await page.goto('https://www.amazon.in/');

    await expect(page).toHaveURL('https://www.amazon.in/');

    await expect(page).toHaveTitle(/Amazon/);
    const searchBox = page.locator('#twotabsearchtextbox');
    await expect(searchBox).toBeVisible();
    console.log('Successful');
});
