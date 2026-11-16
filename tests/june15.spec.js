import { test, expect } from '@playwright/test';

 test('Demo', async ({ page }) => {
//   redirect to demoqa.com/select-menu
    await page.goto('https://demoqa.com/select-menu');

//  Validate and print page title

let title = await page.title();

console.log(title);

await expect(page).toHaveTitle(title);

    await expect(page).toHaveURL('https://demoqa.com/select-menu');

    await page.waitForTimeout(2000);

    await page.selectOption('#oldSelectMenu','1');

    await page.waitForTimeout(2000);

    let color = await page.inputValue('#oldSelectMenu');

    if (color === '1') {
        console.log('Blue is selected');
    } else {
        console.log('Incorrect');
    }

    await page.locator('#react-select-4-placeholder').screenshot({path:'screenshots/dropdown5.png'});
    await page.waitForTimeout(2000);

    await page.screenshot({path:'screenshots/fullpage5.png'});
   fullPage:true

    //await page.screenshot[{path:'fullpage5.png'}];
   // fullPage:true
    await page.waitForTimeout(2000);

    await page.goto('https://demoqa.com/text-box');
    await page.waitForTimeout(2000);

    await expect (page.locator('#userName')).toBeVisible();

    await expect (page.locator('#userEmail')).toBeVisible();

    await page.screenshot[{path:'textbox.png'}];

    await page.waitForTimeout(2000);

    await page.goBack();
 await page.waitForTimeout(2000);

 await expect(page).toHaveURL(/select-menu/);
 await page.waitForTimeout(2000);

 const pageTitle = await page.title();

console.log('Page Title:', pageTitle);
await page.waitForTimeout(2000);
})
