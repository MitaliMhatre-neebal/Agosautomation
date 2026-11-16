// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage.js';

// test('Login Test with Exception Handling', async ({ page }) => {

//     const login = new LoginPage(page);

//     try {

//         console.log("Open Application");

//         await page.goto("https://demoqa.com/login");

//         console.log("Logged In");

//         await login.login("testuser", "test123");

//         console.log("Login completed");

//     }
//     catch (error) {

//         console.log("Test Failed");

//         console.log(error.message);

//         await page.screenshot({
//             path: "./screenshots/LoginFailure.png",
//             fullPage: true
//         });

//         throw error;   
//     }
//     finally {

//         console.log("Closing Browser");

//     }

// });



import {test, expect} from '@playwright/test';

test('Try, catch & finally', async({page}) =>

{

    try

    {

        await page.goto("https://www.google.com");

        await expect(page).toHaveURL("https://www.wikipedia.com");

    }

    catch(error)

    {

        console.log("The URL doesn't match");

       console.log("This is the message",error.message);

        console.log("This is the name",error.name);

        console.log("This is the stack",error.stack);

        await page.screenshot({path:'C:/Users/Neebal/Pictures/Playwright-new screenshots/catchFail.png', fullPage: true});

        //throw error;

    }

    finally

    {

        console.log("This part of the code will always executed");

    }

}

)