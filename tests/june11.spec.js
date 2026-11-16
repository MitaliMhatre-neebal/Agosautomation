// Assignment 1

import { test, expect } from '@playwright/test';

test ('Color', async ({ page }) => {

await page.goto('https://demoqa.com/select-menu');
await page.waitForTimeout(2000);

// //  Select Red and validate value
await page.selectOption('#oldSelectMenu','red');
await page.waitForTimeout(2000);
let Color = await page.inputValue('#oldSelectMenu');


   if (Color === 'red') {
    console.log('correct');
} else {
    console.log('incorrect');
}


//     //Select Blue and print value
// await page.selectOption('#oldSelectMenu', 'Yellow');
// await page.waitForTimeout(2000);
//   let color = await page.inputValue('#oldSelectMenu');
//     console.log('selected color:',color);


// Assignment 2 capture google home page screenshot


// import { test,expect } from '@playwright/test';
// test ('screenshot', async ({ page }) =>
// {
//     await page.goto('https://www.google.com/')
//     const timestamp=Date.now();

//     await page.locator('#APjFqb').screenshot({path:`./locatortest_${timestamp}.png`});
//     //await page.locator('#APjFqb').screenshot({path:'fullpage4.png'});
//     //await page.screenshot[{path:'/home/neebal/Desktop/screenshot/fullpage3.png'}];
//    // fullPage:true
//     await page.waitForTimeout(2000);
// })

// Assignment 3

// import { test,expect } from '@playwright/test';
// test ('Validate search', async ({ page }) =>
// {
//     await page.goto('https://www.google.com/');
//     await page.waitForTimeout(2000);
//     await page.locator('textarea[name="q"]').fill('Automation Testing');
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(2000);
//         await expect(page).toHaveURL(/search/);
//         await page.waitForTimeout(2000);
//         //await page.screenshot({path:'searchpage1.png'});
//       await page.screenshot({path:'/home/neebal/Documents/screenshot/search3.png'});
//         await page.waitForTimeout(2000);
 })
