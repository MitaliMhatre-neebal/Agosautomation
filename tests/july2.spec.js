// // Assignment 1

import { test } from '@playwright/test';

test('Accept, Dismiss and Prompt', async ({ page }) => {


    await page.goto('https://demoqa.com/alerts');

    // Alert (Accept) 
    page.once('dialog', async dialog => {
        console.log('Alert Message: ' + dialog.message());
        await dialog.accept();
    });

    await page.locator('#alertButton').click();
    await page.waitForTimeout(2000);

    //  Confirm (Dismiss) 
    page.once('dialog', async dialog => {
        console.log('Confirm Message: ' + dialog.message());
        await dialog.dismiss();
    });

    await page.locator('#confirmButton').click();
    await page.waitForTimeout(2000);

    //  Prompt (Enter Text) 
    page.once('dialog', async dialog => {
        console.log('Prompt Message: ' + dialog.message());
        await dialog.accept('Mitali');
    });

    await page.locator('#promtButton').click();
    await page.waitForTimeout(2000);

    console.log('All alert operations completed successfully.');

});


// Assignment 2

// import { test, expect } from '@playwright/test';

// test('Frame example', async ({ page }) => {

//     await page.goto('https://demoqa.com/frames');

//     // Frame1
//     await expect(
//         page.frameLocator('#frame1').locator('#sampleHeading')
//     ).toHaveText('This is a sample page');

//     console.log(
//         'Frame1 Text:',
//         await page.frameLocator('#frame1').locator('#sampleHeading').textContent()
//     );

//     // Frame2
//     await expect(
//         page.frameLocator('#frame2').locator('#sampleHeading')
//     ).toHaveText('This is a sample page');

    

//     console.log(
//         'Frame2 Text:',
//         await page.frameLocator('#frame2').locator('#sampleHeading').textContent()
//     );

//     await page.waitForTimeout(2000);
// });


//import { test } from '@playwright/test';

// test.describe('Login Module', () => {

//   test.skip('Valid Login', async ({ page }) => {

//     await page.goto("https://google.com");

//     console.log("Valid Login");

// });

//   test.skip('Valid Login', async ({ page }) => {

//     await page.goto("https://neebal.com");

//     console.log("Valid Login");

//   });})
// //   test('Invalid Login', async () => {

// //     console.log("Invalid Login");

// //   });

// // });

// test.describe('Search Module', () => {

//   test('Search Laptop', async () => {

//     console.log("Searching Laptop");

//   });

//   test('Search Mobile', async () => {

//     console.log("Searching Mobile");

//   });

// });

// test.describe("Login Module", () => {

//     test.only("Valid Login", async ({ page }) => {
//       await page.goto("https://google.com");
//       console.log("Valid login");
//     });
  
//     test("Invalid Login", async () => {
//       console.log("Invalid login");
//     });
  
//   });
  
//   test.describe("Search Module", () => {
  
//     test.only("Search Laptop", async ({ page }) => {
//       await page.goto("https://neebal.com");
//       console.log("Searching Laptop");
//     });
  
//     test("Search Mobile", async () => {
//       console.log("Searching mobile");
//     });
  
//   });