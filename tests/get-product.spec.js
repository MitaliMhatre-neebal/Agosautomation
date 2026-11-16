
import { test, expect } from '@playwright/test';

test('GET API - Verify product details', async ({ request }) => {

    // Step 1: Send GET request
    const response = await request.get('https://dummyjson.com/products/1');

    console.log('GET API request sent successfully');

    // Step 2: Verify status code
    expect(response.status()).toBe(200);

    console.log('Status Code:', response.status());

    // Step 3: Parse response JSON
    const responseBody = await response.json();

    console.log('API Response:', responseBody);

    // Step 4: Verify product ID
    expect(responseBody.id).toBe(1);

    // Step 5: Verify product title is not empty
    expect(responseBody.title).toBeTruthy();
    expect(responseBody.title.trim().length).toBeGreaterThan(0);

    // Step 6: Verify price is greater than zero
    expect(responseBody.price).toBeGreaterThan(0);

    // Step 7: Print product title and price
    console.log('Product Title:', responseBody.title);
    console.log('Product Price:', responseBody.price);

    console.log('All GET API validations passed successfully');
});
