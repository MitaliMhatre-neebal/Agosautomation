// import { Page, Locator } from '@playwright/test';

// export class DashboardPage {

//     readonly page: Page;
//     readonly dashboardText: Locator;
//     readonly logoutButton: Locator;

//     constructor(page: Page) {

//         this.page = page;

//         this.dashboardText = page.getByText('Dashboard');

//         this.logoutButton = page.getByText('Logout');
//     }


//     async verifyDashboard() {
//         await this.dashboardText.isVisible();
//     }


//     async logout() {
//         await this.logoutButton.click();
//     }
// }


import { expect } from '@playwright/test';

export default class DashboardPage {
  constructor(page) {
    this.page = page;
    this.userName = '#userName-value';
    this.logoutBtn = '#submit';
  }

  async verifyDashboard(username) {
    await expect(this.page.locator(this.userName)).toContainText(username);
  }

  async logout() {
    await this.page.click(this.logoutBtn);
  }
}