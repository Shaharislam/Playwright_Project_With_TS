import{ test, expect } from '@playwright/test'

test( 'Simple basic test', async ({page})  => {
   //Here goes the test code
   await page.goto('https://example.com/')
   const pageTitle = await page.locator('h1')
   await expect(pageTitle).toContainText('Example Domain')
})

test( 'Click on Elements', async ({page})  => {
   //Here goes the test code
   await page.goto('http://zero.webappsecurity.com')
   await page.click('#signin_button');   // Id selector
   await page.click('text=Sign in');

   const errorMessage = await page.locator('.alert-error');//Class Selector
   await expect(errorMessage).toContainText('Login and/or password are wrong')
})

// test( 'Selectors', async ({page})  => {
//    //text
//    await page.click('text=some text')

//    //css selctor
//    await page.click('button')
//    await page.click('#id')       //id selector
//    await page.click('.class')    //class selector

//    //only visible css selector
//    await page.click('.submit-button:visible')

//    //combinations
//    await page.click('#username .first')

//    //Xpath
//    await page.click('//button')
// })
test( 'Working with Input', async ({page})  => {
   //Here goes the test code
   await page.goto('http://zero.webappsecurity.com')
   await page.click('#signin_button');   // Id selector
   await page.type('#user_login','some txt');
   await page.type('#user_password','some password');
   await page.click('text=Sign in');

   const errorMessage = await page.locator('.alert-error');//Class Selector
   await expect(errorMessage).toContainText('Login and/or password are wrong')
})