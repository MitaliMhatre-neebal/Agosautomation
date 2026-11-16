// import { test , expect } from '@playwright/test';
// test ('DemoTest', async({ page }) =>
//  {
// // Assignment 1
//     await page.goto('https://demoqa.com/automation-practice-form');
//     // await page.locator('#hobbies-checkbox-3').click();
//     // await page.waitForTimeout(2000);
//     //  await page.locator('#hobbies-checkbox-3').click();

// // Assignment 2
//     // await page.locator('#hobbies-checkbox-2').check();
//     // await page.waitForTimeout(2000);
//     // await expect(page.locator('#hobbies-checkbox-2')).toBeChecked();
//     // await page.waitForTimeout(2000);


// // Assignment 3  
//     await page.locator('#hobbies-checkbox-3').check();
//     await page.waitForTimeout(2000);
//     await expect(page.locator('#hobbies-checkbox-3')).toBeChecked();
//     await page.locator('#hobbies-checkbox-3').uncheck();
//     await expect(page.locator('#hobbies-checkbox-3')).not.toBeChecked();
//     await page.waitForTimeout(2000);
     
// });

// User Registration Validation

import { test , expect } from '@playwright/test';
test('User validation', async({ page }) =>
{
await page.goto('https://www.google.com');
await page.goto('https://demoqa.com/text-box');
await page.waitForLoadState('load');
console.log('Page loaded successfully');

await expect(page.locator('#userName')).toBeVisible();

await expect(page.locator('#userName')).toBeEnabled();

await expect(page.locator('#userName')).toBeEditable();

console.log('successful');

await page.locator('#userName').fill('Playwright Student');

await page.locator('#userEmail').fill('student@test.com');

await page.locator('#currentAddress').fill('Hyderabad');

await page.locator('#permanentAddress').fill('Bangalore');
await page.waitForTimeout(2000);

await expect(page.locator('#userName')).toHaveValue('Playwright Student');

const pageTitle = await page.title();

    console.log('Page Title:', pageTitle);

    const currentURL = await page.url();
    console.log('Current URL:', currentURL);

    const h1text= await page.locator('h1').textContent();
     console.log(h1text);
    //  await expect(page.locator('h1')).toContainText(/Text Box/);

    await expect(page.locator('h1')).toHaveText('Text Box');

   console.log('Page heading is text Box');

   let inputFields = page.locator('input');


    let count = await inputFields.count();
    console.log('Number of input fields: ' + count);

    await page.locator('#submit').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await expect(page.locator('#submit')).toBeVisible();
    await page.waitForTimeout(2000);
    await expect(page.locator('#submit')).toBeEnabled();


await page.locator('#submit').click();
await page.waitForTimeout(2000);
console.log('successfully click on submit button');

await expect(page.locator('#userName')).toHaveValue('Playwright Student');

await expect(page.locator('#userEmail')).toHaveValue('student@test.com')

console.log('Name and Email display correctly');
 
await page.screenshot({path:'screenshots/UserRegistration.png'});

await page.waitForTimeout(2000);

console.log('Registration Validation Completed Successfully');


})