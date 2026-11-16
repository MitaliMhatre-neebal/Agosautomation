import { test, expect } from '@playwright/test';

const baseURL = 'https://jsonplaceholder.typicode.com';

test.describe('API CRUD Testing', () => {

  test('GET - Verify post details', async ({ request }) => {

    const response = await request.get(`${baseURL}/posts/1`);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);

    expect(body.userId).toBe(1);

    expect(body.title).toBeTruthy();

  });

});