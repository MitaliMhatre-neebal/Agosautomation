// import { test, expect } from '@playwright/test';

// test('Normal Click Assignment', async ({ page }) => {

//     await page.goto('https://demoqa.com/buttons');
//     await page.waitForTimeout(1000);

//     await page.locator("//button[text()='Click Me']").click();

//     await page.waitForTimeout(3000);

//     await expect(page.locator('#dynamicClickMessage'))

//         .toContainText('You have done a dynamic click');

// });

// import { test, expect } from '@playwright/test';

// test('Double Click Assignment', async ({ page }) => {

//     await page.goto('https://demoqa.com/buttons');

//     await page.waitForTimeout(2000);

//     await page.locator('#doubleClickBtn').dblclick();

     

//     await page.waitForTimeout(3000);

//     await expect(page.locator('#doubleClickMessage'))

//         .toContainText('You have done a double click');

// });

// import { test, expect } from '@playwright/test';

//  test('Right Click Assignment', async ({ page }) => {

//     await page.goto('https://demoqa.com/buttons');
// await page.locator('#rightClickBtn').click({ button: 'right'});

// await expect(page.locator('#rightClickMessage')).
// toContainText('You have done a right click');

//  })

// import { test, expect } from '@playwright/test';

//   test('Hover', async ({ page }) => {

//      await page.goto('https://demoqa.com/menu');
//      await page.locator('text=Main Item 2').hover();
//      //await page.waitForTimeout(2000);
// //await expect(page.locator('text=SUB SUB LIST')).toBeVisible();
// await page.locator('text=SUB SUB LIST').hover();
// await page.locator('text=Sub Sub Item 2').hover();

// await page.locator('text=Sub Sub Item 2').first().click();

//   });

import { test, expect } from '@playwright/test';

   test('Keyboard', async ({ page }) => {
      await page.goto('https://demoqa.com/text-box');

      await page.locator('#userName').fill('Mitali');
      await page.keyboard.press('Tab');

      await page.keyboard.type('test@gmail.com');
      await page.keyboard.press('Tab');

      await page.keyboard.type('Mumbai');
      await page.waitForTimeout(2000);
       
      await page.keyboard.press('Control+A');

      await page.keyboard.press('Control+C');
      await page.keyboard.press('Tab');
      
      await page.keyboard.press('Control+V');
      await page.locator('#submit').click();


   })


      
