// Assignment 7


import { test, expect } from '@playwright/test';

// Test 1: GET request for a nonexistent product
test('Negative Test - Product not found', async ({ request }) => {

    // Step 1: Send GET request with invalid product ID
    const response = await request.get('https://dummyjson.com/products/999999');

    // Step 2: Validate status code
    expect(response.status()).toBe(404);

    console.log('GET Status Code:', response.status());

    // Step 3: Parse error response
    const responseBody = await response.json();

    console.log('Error Response:', responseBody);

    // Step 4: Validate error message
    expect(responseBody.message).toBeTruthy();
    expect(responseBody.message).toContain('999999');

    console.log('Error Message:', responseBody.message);
    console.log('Nonexistent product validation passed');
});


// Test 2: POST request with missing password
test('Negative Test - Login with missing password', async ({ request }) => {

    // Step 1: Prepare invalid request payload
    const requestBody = {
        username: 'emilys'
        // Password is intentionally missing
    };

    // Step 2: Send POST request
    const response = await request.post('https://dummyjson.com/auth/login', {
        data: requestBody
    });

    // Step 3: Validate error status code
    expect(response.status()).toBe(400);

    console.log('POST Status Code:', response.status());

    // Step 4: Parse response JSON
    const responseBody = await response.json();

    console.log('Login Error Response:', responseBody);

    // Step 5: Validate error details
    expect(responseBody.message).toBeTruthy();
    expect(typeof responseBody.message).toBe('string');

    console.log('Error Message:', responseBody.message);
    console.log('Missing password validation passed');
});
