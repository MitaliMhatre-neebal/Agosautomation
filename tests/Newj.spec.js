import { test,expect } from "@playwright/test";

test ('demo1', async ( {page} ) =>
{
await page.goto('https://demoqa.com/automation-practice-form');
await expect (page).toHaveTitle('demosite');
await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
await page.waitForTimeout(2000);

await page.locator('#firstName').fill('John');
await page.locator('#lastName').fill('Smith');
await page.locator('#userEmail').fill('johnsmith@test.com');

await page.locator("label[for='gender-radio-1']").click();
await page.locator("label[for='hobbies-checkbox-1']").click();
await page.locator("label[for='hobbies-checkbox-2']").click();
await page.waitForTimeout(2000);

await expect(page.locator('#hobbies-checkbox-1')).toBeChecked();
await expect(page.locator('#hobbies-checkbox-2')).toBeChecked();
await page.waitForTimeout(2000);

await page.locator('#hobbiesWrapper').screenshot({path:'screenshots/hobbies_section.png'});
await page.waitForTimeout(2000);

await page.goto('https://demoqa.com/select-menu');

await page.selectOption('#oldSelectMenu','1');
await page.waitForTimeout(2000);

await page.locator('#react-select-4-placeholder').screenshot({path:'screenshots/dropdown_validation.png'});
await page.waitForTimeout(2000);

await expect(page).toHaveTitle('demosite');
     let title = await page.title();
    console.log(`Page Title: ${title}`);

    await expect(page).toHaveURL('https://demoqa.com/select-menu');
    await page.waitForTimeout(2000);

    await page.goBack();

    await page.goto('https://demoqa.com/automation-practice-form');

    await expect(page).toHaveURL(/automation-practice-form/);

    console.log('URL contains automation-practice-form');
    await page.waitForTimeout(2000);

    await page.screenshot({path:'screenshots/practice_form_fullpage.png'});
    fullPage:true
    await page.waitForTimeout(2000);
})