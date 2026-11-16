import { test } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage';
import userdata from './userdata.json';

test('Fill Text Box Form using JSON data', async ({ page }) => {

    const textBox = new TextBoxPage(page);

    await textBox.openPage();

    await textBox.fillForm(userdata);

    await textBox.clickSubmit();

    await page.screenshot({
        path: 'screenshots/TextBoxForm.png',
        fullPage: true
    });

    console.log('successful');

});