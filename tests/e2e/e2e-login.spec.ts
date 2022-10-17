import{ test, expect } from '@playwright/test'

test.describe('Hook Add',() => {
    test.beforeEach(async ({page})=>{
       await page.goto('http://zero.webappsecurity.com')
    })
    test.afterEach(async ()=>{
       
    })
    test( 'Applying Before and After hook @hook', async ({page})  => {
       //Here goes the test code
       //await page.goto('http://zero.webappsecurity.com')
       await page.click('#signin_button');   // Id selector
       await page.type('#user_login','some txt');
       await page.type('#user_password','some password');
       await page.click('text=Sign in');
    
       const errorMessage = await page.locator('.alert-error');//Class Selector
       await expect(errorMessage).toContainText('Login and/or password are wrong')
       //FullPage ScreenShot command
       await page.screenshot({path:'screenshot.jpg',fullPage:true})
    })
    
    test( 'Applying hook @hook', async ({page})  => {
       //Here goes the test code
      // await page.goto('http://zero.webappsecurity.com')
       await page.click('#signin_button');   // Id selector
       await page.type('#user_login','some txt');
       await page.type('#user_password','some password');
       await page.click('text=Sign in');
    
       const errorMessage = await page.locator('.alert-error');//Class Selector
       await expect(errorMessage).toContainText('Login and/or password are wrong')
       
       //SingleLine ScreenShot Command
       await errorMessage.screenshot({path:'Singlescreenshot.jpg'})
    })
 })