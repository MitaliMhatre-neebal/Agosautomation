// import { test , expect } from '@playwright/test';
// test ('validation', async ({ page }) => {

// // Login to W&B Open URL and enter credentials
//     await page.goto('https://d2pixnftayl5sy.cloudfront.net/login');
//     const textBoxes = page.locator('input');

// // Username field (first input)
//     await textBoxes.nth(0).click();
//     await page.keyboard.type('mitali.mhatre@neebal.com');

// // Password field (second input)
//     await textBoxes.nth(1).click();
//     await page.keyboard.type('Agos@2026');

// // Click Submit/Login button
//     await page.getByRole('button').click();
//     console.log('Login button clicked');
//     await page.waitForTimeout(3000);


// // Create user flow Click on Master Management dropdown

//     await page.getByText('Master Management', {exact: true}).click();
//     console.log('Master Management dropdown clicked');

// // Click User Management only once
//     await page.locator('a[href="/master-management/user-management/user-list"]'
//     ).click();
//     console.log('User Management tab clicked');

// // Wait for User Management page
//     await expect(page).toHaveURL(/master-management\/user-management\/user-list/);
//     console.log('User Management page opened successfully');
//     await page.getByRole('button', { name: 'Create User' }).click();
//     console.log('Create User window opened');

// // Verify Create User popup
//     await expect(page.getByText('Create User', { exact: true }).first()
//     ).toBeVisible();


// // Click Role dropdown
//     await page.locator('label').filter({hasText: 'Role'}).locator('..').click();
//     console.log('Role dropdown opened');

// // Select CLC Team
//     await page.getByText('CLC Team', {exact: true}).last().click();
//     console.log('CLC Team selected');



// // Enter First Name
//     await page.locator('#firstName').fill('Automation');
//     console.log('First Name entered successfully');


// // Enter Last Name
//     await page.locator('#lastName').fill('testing');
//     console.log('Last Name entered successfully');

// // Click Designation dropdown
//     await page.locator('label').filter({hasText: 'Designation'}).locator('..').click();
//     console.log('Designation dropdown opened');

// // Select Load Controller
//     await page.getByText('Load Controller', {exact: true}).last().click();
//     console.log('Load Controller selected');


// // Enter Email
//     await page.locator('#email').fill('mitali.mhatre@neebal.com');
//     console.log('Email entered successfully');


// // Enter Mobile Number
//     await page.locator('[formcontrolname="mobileNumber"]').fill('5667887878');
//     console.log('Mobile Number entered successfully');

// // Open Assigned Airports dropdown
//     await page.getByTitle('Assigned Airport').getByRole('combobox').click();
//     console.log('Assigned Airports dropdown opened');

// // Select BOM
//     await page.getByRole('option', { name: 'BOM', exact: true }).click();
//     console.log('BOM selected');

// // Open dropdown again
//     await page.getByTitle('Assigned Airport').getByRole('combobox').click();

// // Select DEL
//     await page.getByRole('option', { name: 'DEL', exact: true }).click();
//     console.log('DEL selected');

// // Open Airlines Name dropdown
//     await page.getByTitle('Airlines Name').getByRole('combobox').click();
//     console.log('Airlines dropdown opened');

// // Select Alerce Airlines
//     await page.getByText('Alerce Airlines', { exact: true }).last().click();
//     console.log('Alerce Airlines selected');

// // Select Active Status
//     await page.getByRole('radio', {name: 'Active',exact: true}).check();
//     console.log('Active status selected');

// // Click Create User button inside the popup
//     await page.getByRole('dialog').getByRole('button', {name: 'Create User',exact: true}).click();
//     console.log('Create User button clicked successfully');








import { test , expect } from '@playwright/test';
test ('validation', async ({ page }) => {

// Login to W&B Open URL and enter credentials
    await page.goto('https://d2pixnftayl5sy.cloudfront.net/login');
    const textBoxes = page.locator('input');

// Username field (first input)
    await textBoxes.nth(0).click();
    await page.keyboard.type('mitali.mhatre@neebal.com');

// Password field (second input)
    await textBoxes.nth(1).click();
    await page.keyboard.type('Agos@2026');

// Click Submit/Login button
    await page.getByRole('button').click();
    console.log('Login button clicked');
    await page.waitForTimeout(3000);


// Create user flow Click on Master Management dropdown

    await page.getByText('Master Management', {exact: true}).click();
    console.log('Master Management dropdown clicked');

// Click Aircraft Management only once
    await page.locator('a[href="/master-management/aircraft-management/aircraft-list"]'
    ).click();
    console.log('Aircraft Management tab clicked');

// Wait for Aircraft Management page
    await expect(page).toHaveURL(/master-management\/aircraft-management\/aircraft-list/);
    console.log('Aircraft Management page opened successfully');
    await page.getByRole('button', { name: ' Create Aircraft ' }).click();
    console.log('Create Aircraft window opened');

// Verify Create Aircraft popup
    await expect(page.getByText('Create Aircraft', { exact: true }).first()
    ).toBeVisible();

})