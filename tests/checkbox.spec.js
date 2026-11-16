// const { test } = require('@playwright/test')

// test('Checkbox Demo', async ({ page }) => {

//     await page.goto('https://demoqa.com/automation-practice-form');

//     await page.waitForTimeout(3000);

//     await page.getByText('Reading').click();
//     await page.waitForTimeout(10000);
// }
// )


//Assignment 5
const { test } = require('@playwright/test');

test('Checkbox Example', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    
             await page.locator('#firstName').fill('Mitali');
             await page.locator('#lastName').fill('Mhatre');
             await page.locator('#userEmail').fill('mitali.mhatre@neebal.com');
             await page.locator("label[for='gender-radio-2']").click();
             await page.locator('#userNumber').fill("9090909090");
             await page.locator('#currentAddress').fill('Mumbai');

             


            await page.locator("label[for='hobbies-checkbox-1']").click();

            await page.locator("label[for='hobbies-checkbox-2']").click();

            await page.locator("label[for='hobbies-checkbox-3']").click()

              
            await page.locator('#state').click();
            await page.getByText('Haryana', { exact: true }).click();
            await page.locator('#city').click();
            await page.getByText('Karnal', { exact: true }).click();
            await page.waitForTimeout(2000);

    await page.goto('https://demoqa.com/text-box');

    await page.locator('#userName').fill('Mitali Mhatre');
    await page.locator('#userEmail').fill('mitali.mhatre@neebal.com');
    await page.locator('#currentAddress').fill('Test');
    await page.locator('#permanentAddress').fill('Test one');
    await page.locator('#submit').click()
    await page.waitForTimeout(2000);

})