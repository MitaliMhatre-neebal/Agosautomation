
import { test, expect } from '@playwright/test';

test('API Test 1 - Verify product availability and details', async ({ request }) => {

    // 1. Send GET request
    const response = await request.get('https://dummyjson.com/products/1');

    // Verify status code
    expect(response.status()).toBe(200);

    // Parse response
    const responseBody = await response.json();

    console.log('GET Status:', response.status());

    // 2. Verify product availability
    expect(responseBody.id).toBe(1);
    expect(responseBody.stock).toBeGreaterThan(0);

    console.log('Product is available');

    // 3. Validate product name and price
    expect(responseBody.title).toBeTruthy();
    expect(responseBody.price).toBeGreaterThan(0);

    console.log('Product Name:', responseBody.title);
    console.log('Product Price:', responseBody.price);

    console.log('Product API validation passed');
});


test('API Test 2 - Add product to cart and validate quantity', async ({ request }) => {

    // Prepare request payload
    const requestBody = {
        userId: 1,
        products: [
            {
                id: 1,
                quantity: 2
            }
        ]
    };

    // 4. Send POST request
    const response = await request.post('https://dummyjson.com/carts/add', {
        data: requestBody
    });

    // Verify response status
    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log('POST Status:', response.status());

    // 5. Validate cart contains products
    expect(responseBody.products.length).toBeGreaterThan(0);

    // Validate product ID
    expect(responseBody.products[0].id).toBe(1);

    // Validate cart quantity
    expect(responseBody.products[0].quantity).toBe(2);

    console.log('Cart ID:', responseBody.id);
    console.log('Product ID:', responseBody.products[0].id);
    console.log('Cart Quantity:', responseBody.products[0].quantity);

    console.log('Cart API validation passed');
});
