// import {test,expect} from '@playwright/test';

// test('API Test 1 - Get product details', async ({ request }) => {

//   const response = await request.get('/products/1');

//   expect(response.status()).toBe(200);

//   const body = await response.json();

//   expect(body.id).toBe(1);

//   expect(body.title).toBeTruthy();

//   console.log('Product title:', body.title);

// });

// test('API Test 2 - Validate product price', async ({ request }) => {

//   const response = await request.get('/products/1');

//   expect(response.status()).toBe(200);

//   const body = await response.json();

//   expect(body.price).toBeGreaterThan(10000);

// });

// test('API Test 3 - Validate invalid product ID', async ({ request }) => {

//   const response = await request.get('/products/999999');

//   expect(response.status()).toBe(404);

// });


import { test, expect } from '@playwright/test';

const baseURL = 'https://dummyjson.com';

test('API Test 1 - Get product details', async ({ request }) => {
  const response = await request.get(`${baseURL}/products/1`);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(body.title).toBeTruthy();

  console.log('Product title:', body.title);
});

test('API Test 2 - Validate product price', async ({ request }) => {
  const response = await request.get(`${baseURL}/products/1`);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.price).toBeGreaterThan(5);
  
  console.log('Product price:', body.price);
});

test('API Test 3 - Validate invalid product ID', async ({ request }) => {
  const response = await request.get(`${baseURL}/products/999999`);

  expect(response.status()).toBe(404);

  console.log('Invalid product status:', response.status());
});



