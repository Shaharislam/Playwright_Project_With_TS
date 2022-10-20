const { Given, When, Then, defineStep} = require('@cucumber/cucumber')
const {LoginPage} = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I visit a login page',async function () {
    //await page.goto('https://www.saucedemo.com/')
    await loginPage.navigateToLoginScreen()
  });

When('I fill the login form with valid credentials',async function () {
   // await page.fill('#user-name','standard_user')
   // await page.fill('#password','secret_sauce')
   // await page.click('#login-button')
   await loginPage.submitLoginForm()
 });

Then('I should see the home page',async function () {
   //await page.waitForSelector('.inventory_list')
   await loginPage.assertUserIsLogIn()
 });

 When('I fill the login form with {string} and {string}',async function (username, password) {
        await loginPage.loginFormInvalidCredentials(username,password)
 });
 Then('I wait for 3 seconds', async function () {
      await loginPage.push()
   });