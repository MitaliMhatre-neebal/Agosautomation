// let i=0;
// while(i<10)
// {
//     console.log(i);
//     i++;
// }

import { test } from '@playwright/test';

test('Select State and City', async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form');

    // Select State
    await page.locator('#state').click();
    await page.getByText('NCR', { exact: true }).click();

    // Select City
    await page.locator('#city').click();
    await page.getByText('Delhi', { exact: true }).click();

    await page.waitForTimeout(2000);

});


import { test,expect } from '@playwright/test';

test('validate Google', async ({ page }) => {
    await page.goto('https://www.google.com');  //
    await expect(page).toHaveURL('https://www.google.com');
    await expect(page).toHaveTitle('Google');
    const searchBox = page.locator('[name="q"]');
    await expect(searchBox).toBeVisible();
    await page.getByRole("combobox").fill('Automation testing concept');
    await page.waitForTimeout(2000);
    await page.keyboard.press ('Enter');
    await page.waitForTimeout(2000);
    console.log('Successful');
})