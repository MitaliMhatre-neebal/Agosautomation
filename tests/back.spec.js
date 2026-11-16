import { test,expect } from '@playwright/test'

test('Navigation Check', async ({ page }) => {
    await page.goto('https://www.icicibank.com');
    await page.goto("https://netbanking.hdfcbank.com");
    await page.goBack();
    await page.goForward();
    await page.reload();
}
)