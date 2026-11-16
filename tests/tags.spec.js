
import { test } from '@playwright/test';

const users = [
  {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  {
    username: 'problem_user',
    password: 'secret_sauce'
  }
];

function displayLoginData() {
  console.log('Login Details');
  console.log('--------------------------');

  users.forEach((user, index) => {
    console.log(`User ${index + 1}`);
    console.log(`Username: ${user.username}`);
    console.log(`Password: ${user.password}`);
  });
}

test('Display login data', async () => {
  displayLoginData();
});
