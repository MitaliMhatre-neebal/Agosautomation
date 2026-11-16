// Gmail Link on Google page

// import { test } from '@playwright/test';

// test('Click Gmail link', async ({ page }) => {
// await page.goto('https://www.google.com');
// await page.getByRole('link', { name: 'Gmail' }).click();
// await page.waitForTimeout (1000);

//   console.log('Gmail link clicked successfully');

// });

import { test } from '@playwright/test';
test('click on image link',async ({ page }) =>
{
  await page.goto('https://www.google.com/');
  await page.getByRole('link',{name:'Search for Images '}).click();
  await page.waitForTimeout(2000);

} 
)




