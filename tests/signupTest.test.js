const { test, expect } = require('@playwright/test');
const SignupPage = require('../pages/signupPage.js')

test('User should be able to sign up successfully', async ({ page }) => {
  const signupPage = new SignupPage(page);


  const userData = {
    name: 'Tester01',
    email: 'tester01' + Date.now() + '@gmail.com',
    password: 'Tester01',
    day: '4',
    month: '8',
    year: '2016',
    firstName: 'Tester',
    lastName: '01',
    company: 'ABCD',
    address1: 'Mirpur',
    address2: 'Mirpur',
    country: 'Singapore',
    state: 'Singapore',
    city: 'Singapur1',
    zipcode: '1206',
    mobile: '01983883',
  };

  await signupPage.navigate();
  await signupPage.fillSignupForm(userData);
  await signupPage.completeAccountDetails(userData);
  await signupPage.assertAccountCreated();

  await expect(page.locator('h2:has-text("Account Created!")')).toBeVisible();
});
