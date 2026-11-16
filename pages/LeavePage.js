import { BasePage } from './BasePage.js';

export class LeavePage extends BasePage {
    constructor(page) {
        super(page);

        this.leaveMenu = page.getByRole('link', { name: 'Leave' });
        this.leaveHeading = page.locator('h6').filter({ hasText: 'Leave' });
        this.myLeave = page.getByRole('link', { name: 'My Leave' });
    }

    async open() {
        await this.leaveMenu.click();
        await this.leaveHeading.waitFor({ state: 'visible' });
    }
}