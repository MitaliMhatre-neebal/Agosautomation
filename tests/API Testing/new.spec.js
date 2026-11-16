import { test, expect } from '@playwright/test';


const baseURL = 'https://dummyjson.com';


test('API E2E - Login, products and cart', async ({ request }) => {


  // 1. Login
  const loginResponse = await request.post(`${baseURL}/auth/login`, {
    data: {
      username: 'emilys',
      password: 'emilyspass',
      expiresInMins: 30
    }
  });


  expect(loginResponse.status()).toBe(200);


  const loginData = await loginResponse.json();


  expect(loginData.accessToken).toBeTruthy();
  expect(loginData.username).toBe('emilys');


  console.log('LOGIN PASSED');


  // 2. Get products
  const productsResponse = await request.get(`${baseURL}/products`);


  expect(productsResponse.status()).toBe(200);


  const productsData = await productsResponse.json();


  expect(productsData.products.length).toBeGreaterThan(0);


  const product = productsData.products.find(
    item => item.id === 1
  );


  expect(product).toBeTruthy();
  expect(product.price).toBeGreaterThan(0);


  console.log('PRODUCT:', product.title);
  console.log('PRICE:', product.price);
  console.log('PRODUCT VALIDATION PASSED');


  // 3. Add product to cart
  const cartResponse = await request.post(`${baseURL}/carts/add`, {
    data: {
      userId: 1,
      products: [
        {
          id: product.id,
          quantity: 1
        }
      ]
    }
  });


  expect([200, 201]).toContain(cartResponse.status());


  const cartData = await cartResponse.json();


  expect(cartData.products.length).toBeGreaterThan(0);
  expect(cartData.products[0].id).toBe(product.id);
  expect(cartData.products[0].quantity).toBe(1);


  console.log('CART ID:', cartData.id);
  console.log('ADD TO CART PASSED');


  // 4. Verify an existing cart
  const getCartResponse = await request.get(`${baseURL}/carts/1`);


  expect(getCartResponse.status()).toBe(200);


  const existingCart = await getCartResponse.json();


  expect(existingCart.id).toBe(1);
  expect(existingCart.products.length).toBeGreaterThan(0);


  console.log('CART RETRIEVAL PASSED');
});