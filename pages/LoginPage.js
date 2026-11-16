// class LoginPage {

//     constructor(page) {
//         this.page = page;

//         // Locators
//         this.username = page.locator('input[name="username"]');
//         this.password = page.locator('input[name="password"]');
//         this.loginButton = page.locator('button[type="submit"]');
//         this.errorMessage = page.locator('.oxd-alert-content-text');
//     }

//     // Navigate to Login Page
//     async goto() {
//         await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     }

//     // Enter Username
//     async enterUsername(username) {
//         await this.username.fill(username);
//     }

//     // Enter Password
//     async enterPassword(password) {
//         await this.password.fill(password);
//     }

//     // Click Login Button
//     async clickLogin() {
//         await this.loginButton.click();
//     }

//     // Complete Login
//     async login(username, password) {
//         await this.enterUsername(username);
//         await this.enterPassword(password);
//         await this.clickLogin();
//     }

//     // Get Invalid Login Error
//     async getErrorMessage() {
//         return await this.errorMessage.textContent();
//     }

// }

// module.exports = LoginPage;


// export default class LoginPage {
//   constructor(page) {
//     this.page = page;
//     this.username = '#userName';
//     this.password = '#password';
//     this.loginBtn = '#login';
//   }

//   async openApplication() {
//     await this.page.goto('https://demoqa.com/login');
//   }

//   async login(username, password) {
//     await this.page.fill(this.username, username);
//     await this.page.fill(this.password, password);
//     await this.page.click(this.loginBtn);
//   }
// }



// import { expect } from '@playwright/test';

// export class LoginPage {

//     constructor(page) {

//         this.page = page;

//         this.username = page.locator('#userName');

//         this.password = page.locator('#password');

//         this.loginButton = page.locator('#login');

//     }

//     async login(user, pass) {

//         await this.username.fill(user);

//         await this.password.fill(pass);

//         await this.loginButton.click();

//     }

// }

//Project OrangeHRM Login Page 

import { BasePage } from './BasePage.js';
import config from '../config/config.js';

const { username, password } = config;

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.dashboardHeader = page.locator('h6').filter({ hasText: 'Dashboard' });
  }

  async open() {
    await this.goto('/web/index.php/auth/login');
  }

  async login(user = username, pass = password) {
    await this.fill(this.usernameInput, user);
    await this.fill(this.passwordInput, pass);
    await this.click(this.loginButton);
  }

  async loginAsDefaultUser() {
    await this.login();
  }
}

