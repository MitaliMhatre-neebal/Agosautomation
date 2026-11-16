import { test, expect } from '@playwright/test';


const baseURL = 'https://dummyjson.com';


test('API E2E - Login, product and cart', async ({ request }) => {


  // 1. LOGIN
  const loginResponse = await request.post(
    `${baseURL}/auth/login`,
    {
      data: {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30
      }
    }
  );


  console.log('Login status:', loginResponse.status());
  expect(loginResponse.status()).toBe(200);


  const login = await loginResponse.json();
  expect(login.accessToken).toBeTruthy();


  console.log('Login successful:', login.username);


  // 2. GET PRODUCTS
  const productsResponse = await request.get(
    `${baseURL}/products`
  );




  console.log('Products status:', productsResponse.status());
  expect(productsResponse.status()).toBe(200);
 


  const productsData = await productsResponse.json();
  expect(productsData.products.length).toBeGreaterThan(0);


  const product = productsData.products.find(
    productlistItem=> productlistItem.id === 2
  );


  expect(product).toBeTruthy();
  expect(product.price).toBeGreaterThan(0);


  console.log('Product:', product.title);
  console.log('Price:', product.price);


  // 3. ADD PRODUCT TO CART
  const cartResponse = await request.post(
    `${baseURL}/carts/add`,
    {
      data: {
        userId: 1,
        products: [
          {
            id: product.id,
            quantity: 1
          }
        ]
      }
    }
  );


  console.log('Cart status:', cartResponse.status());
  expect(cartResponse.status()).toBe(201);


  const cart = await cartResponse.json();


  expect(cart.products.length).toBeGreaterThan(0);
  expect(cart.products[0].id).toBe(product.id);
  expect(cart.products[0].quantity).toBe(1);


  console.log('Cart created:', cart.id);
  console.log('API E2E PASSED');
});