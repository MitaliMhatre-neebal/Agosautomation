// Assignment 6


import { test, expect } from '@playwright/test';

test('POST API - Add products to cart', async ({ request }) => {

    // Step 1: Prepare request payload
    const requestBody = {
        userId: 1,
        products: [
            {
                id: 1,
                quantity: 2
            }
        ]
    };

    // Step 2: Send POST request
    const response = await request.post('https://dummyjson.com/carts/add', {
        data: requestBody
    });

    console.log('POST API request sent successfully');

    // Step 3: Validate response status
    expect(response.status()).toBe(201);

    console.log('Status Code:', response.status());

    // Step 4: Parse response JSON
    const responseBody = await response.json();

    console.log('API Response:', responseBody);

    // Step 5: Verify cart contains at least one product
    expect(responseBody.products.length).toBeGreaterThan(0);

    // Step 6: Verify product ID
    expect(responseBody.products[0].id).toBe(1);

    // Step 7: Verify requested quantity
    expect(responseBody.products[0].quantity).toBe(2);

    // Verify user ID
    expect(responseBody.userId).toBe(1);

    // Step 8: Print cart ID
    console.log('Cart ID:', responseBody.id);

    console.log('Product ID:', responseBody.products[0].id);
    console.log('Product Quantity:', responseBody.products[0].quantity);

    console.log('All POST API validations passed successfully');
});
