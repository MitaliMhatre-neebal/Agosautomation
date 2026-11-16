// import { test } from '@playwright/test';

//  test('Dropdown Example', async ({ page }) => {

//     await page.goto('https://demoqa.com/select-menu');

//     //await page.selectOption('#oldSelectMenu','Blue');

//     await page.selectOption('#oldSelectMenu', '4');

//     await page.waitForTimeout(2000);
    

//     // await page.screenshot({path:'screenshot1.png'});

    

//     // await page.waitForTimeout(2000);

// });

// import { test ,expect } from '@playwright/test';

//  test('Dropdown Example', async ({ page }) => {

//     await page.goto('https://demoqa.com/select-menu');

//     // Select Black from dropdown

//    await page.selectOption('#oldSelectMenu','5');

//    //const expevar= await page.locator('#oldSelectMenu').toHaveValue('4');

//   // console.log(expevar);

//    await page.waitForTimeout(5000);

// });

// const { test, expect } = require('@playwright/test');

// test('Handle Custom Dropdown', async ({ page }) => {

//     await page.goto('https://demoqa.com/select-menu');

//     // Click the custom dropdown

//     await page.locator('#withOptGroup').click();

//     // Select the option

//     await page.getByText('Group 1, option 1').click();

//     await page.waitForTimeout(2000);

//     // Validation

//     await expect(page.locator('#withOptGroup'))

//         .toContainText('Group 1, option 1');

// });

// const { test } = require('@playwright/test');

// test('Normal Dropdown vs Custom Dropdown', async ({ page }) => {

//     await page.goto('https://demoqa.com/select-menu');

//     // NORMAL DROPDOWN

//     await page.locator('#oldSelectMenu').selectOption('Black');

//     console.log('Normal Dropdown Selected');

//     // CUSTOM DROPDOWN

//     await page.locator('#withOptGroup').click();

//     await page.getByText('Group 1, option 2').click();

//     console.log('Custom Dropdown Selected');

// });


import { test } from '@playwright/test';

test('Upload Single File', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.waitForTimeout(2000);

    // Upload file

    await page.locator('#file-upload').setInputFiles('./screenshots/UserRegistration.png');

              await page.waitForTimeout(3000);

    // Click Upload button

    await page.locator('#file-submit').click();

});