// import { test } from '@playwright/test';

// test.describe("OrangeHRM", () => {

//   test.describe("Login module", () => {

//     test("Login test", async ({ page }) => {
//       console.log("Login");
//     });

//   });

//   test.describe("Dashboard module", () => {

//     test("Dashboard test", async ({ page }) => {
//       console.log("Dashboard");
//     });

//   });

//});

// import { test } from '@playwright/test';

// test.describe("OrangeHRM", () => {

//     test.beforeAll(async () => {

//         console.log("Application Started");

//     });

//     test.describe("Login Module", () => {

//         test.beforeEach(async () => {

//             console.log("Launching Browser");

//         });

//         test("Login Test", async ({ page }) => {

//             await page.goto("https://google.co.in")

//             console.log("Executing Login");

//         });

//         test.afterEach(async () => {

//             console.log("Closing Browser");

//         });

//     });

// });;

// import { test } from '@playwright/test';

// test('Login Test', async ({ page, browserName }) => {

//     test.fixme(browserName === 'firefox', 'Known issue in Firefox');

//     await page.goto('https://opensource-demo.orangehrmlive.com');

//     console.log("Login Test");

// });


import { test } from "@playwright/test";
import ExcelUtil from "../Utilities/ExcelUtil.js";

test("Read Excel Data", async () => {

    const excel = new ExcelUtil();

    const users = await excel.getLoginData("./TestData/LoginData.xlsx");

    console.log(users);

});