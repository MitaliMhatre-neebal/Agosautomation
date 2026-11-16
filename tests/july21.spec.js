// Assignment 1

import { test, expect } from '@playwright/test';


test('Verify About Us Page', async ({ page }) => {

  await page.goto('https://neebal.com/about-us/');

  await expect(page).toHaveURL(/about-us/);

  await expect(
    page.getByRole('heading', { name: 'About Us', exact: true })
  ).toBeVisible();

});


test('Verify Products Page', async ({ page }) => {

  await page.goto('https://neebal.com/products/');

  await expect(page).toHaveURL(/products/);

  await expect(
    page.getByRole('heading', { name: 'Products', exact: true })
  ).toBeVisible();

});

test.describe('DemoQA Website Tests', () => {

  test('Verify DemoQA Home Page', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await expect(page).toHaveTitle(/demosite/i);
  });

  test('Verify Text Box Page', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');
    await expect(page).toHaveURL(/text-box/);

    await page.locator('#userName').fill('John Doe');
    await page.locator('#userEmail').fill('john@test.com');
    await page.locator('#currentAddress').fill('Mumbai');
    await page.locator('#permanentAddress').fill('Pune');

    await page.locator('#submit').click();

    await expect(page.locator('#output')).toBeVisible();
  });

  test('Verify Buttons Page', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.locator("//button[text()='Click Me']").click();
    await expect(page.locator('#dynamicClickMessage'))
      .toHaveText('You have done a dynamic click');
  });

});


// Assignment 2


// test.describe('Neebal Website Test Suite', () => {

//   // Test Case 1 - Execute
//   test.only('TC01 - Verify Neebal homepage title', async ({ page }) => {

//     await page.goto('https://neebal.com');

//     await expect(page).toHaveTitle(/Neebal/i);

//   });


//   // Test Case 2 - Execute
//   test.only('TC02 - Verify homepage heading is visible', async ({ page }) => {

//     await page.goto('https://neebal.com');

//     await expect(
//       page.getByRole('heading').first()
//     ).toBeVisible();

//   });


//   // Test Case 3 - Not executed
//   test('TC03 - Verify About Us link text', async ({ page }) => {

//     await page.goto('https://neebal.com');

//     await expect(
//       page.getByText('About Us').first()
//     ).toBeVisible();

//   });


//   // Test Case 4 - Not executed
//   test('TC04 - Verify Products link text', async ({ page }) => {

//     await page.goto('https://neebal.com');

//     await expect(
//       page.getByText('Products').first()
//     ).toBeVisible();

//   });


//   // Test Case 5 - Not executed
//   test('TC05 - Verify page URL', async ({ page }) => {

//     await page.goto('https://neebal.com');

//     await expect(page)
//       .toHaveURL(/neebal\.com/);

//   });

// });


// Assignment 3

// test.describe('Neebal Website Test Suite', () => {

//   test('TC01 - Verify page title', async ({ page }) => {
//     await page.goto('https://neebal.com');
//     await expect(page).toHaveTitle(/Neebal/i);
//   });

//   test('TC02 - Verify homepage heading', async ({ page }) => {
//     await page.goto('https://neebal.com');
//     await expect(page.getByRole('heading').first()).toBeVisible();
//   });

//   test.skip('TC03 - Verify About Us link', async ({ page }) => {
//     await page.goto('https://neebal.com');
//     await expect(page.getByRole('link', { name: 'About Us' }).first()).toBeVisible();
//   });

//   test('TC04 - Verify Products link', async ({ page }) => {
//     await page.goto('https://neebal.com');
//     await expect(page.getByRole('link', { name: 'Products' }).first()).toBeVisible();
//   });

//   test('TC05 - Verify URL', async ({ page }) => {
//     await page.goto('https://neebal.com');
//     await expect(page).toHaveURL('https://neebal.com/');
//   });

// });



