// import { test } from '@playwright/test';

// test('click vs check demonstration', async ({ page }) => {

//     await page.goto('https://demoqa.com/automation-practice-form');

//     console.log('Selecting Sports using click');

//     await page.locator('#hobbies-checkbox-1').click();

//     await page.waitForTimeout(2000);

//     console.log('Clicking again');

//     await page.locator('#hobbies-checkbox-1').click();

//     await page.waitForTimeout(2000);

// });


import { test , expect } from '@playwright/test';

test('check demonstration', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.locator('#hobbies-checkbox-1').check();

    await page.waitForTimeout(2000);

    await expect(page.locator('#hobbies-checkbox-1')).toBeChecked();

    

    await page.locator('#hobbies-checkbox-1').uncheck();
    await expect(page.locator('#hobbies-checkbox-1')).not.toBeChecked();

    await page.waitForTimeout(2000);

});


// import { test, expect } from '@playwright/test';

// test('All UI Assertions Demo', async ({ page }) => {

//     await page.goto('https://demoqa.com/text-box');

    //  1. Title assertion
    // const title = await page.title();
    // console.log(Page Title: ${title});
    // await expect(page).toHaveTitle(/demo/);

    //  2. URL assertion
     //await expect(page).toHaveURL(/text-box/);

    //  3. Element visible
    //await expect(page.locator('#userName')).toBeVisible();

    //  4. Element enabled
     //await expect(page.locator('#userName')).toBeEnabled();

    //  5. Element editable
     //await expect(page.locator('#userName')).toBeEditable();

    //  6. Placeholder text
    // await expect(page.locator('#userName')).toHaveAttribute('placeholder', 'Full Name');

    // 7. Type and check value
    // await page.locator('#userName').fill('Vasu Test');


    // await expect(page.locator('#userName')).toHaveValue('Vasu Test');

    // 8. Heading text
    //  const h1text= await page.locator('h1').textContent();
    //  console.log(h1text);
    //  await expect(page.locator('h1')).toContainText(/Text Box/);

    // 9. Element count
//     const inputs = page.locator('input');
   //  await expect(inputs).toHaveCount(4);

    //  10. Element hidden (submit button is below, scroll first)
    //  await page.locator('#submit').scrollIntoViewIfNeeded();
    //  await page.waitForTimeout(2000);
    //  await expect(page.locator('#submit')).toBeVisible();

    //  11. CSS property check
    // await expect(page.locator('h1')).toHaveCSS('font-size', '32px');

    //  12. Inner text check
    // await expect(page.locator('h1')).toHaveText('Text Box');

    //  13. Not visible (element that doesn't exist)
     //await expect(page.locator('#output')).not.toBeVisible();

    //  14. Page screenshot (soft assertion alternative)

    
     //
//})