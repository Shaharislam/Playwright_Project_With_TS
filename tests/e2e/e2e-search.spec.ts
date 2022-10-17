import{ test, expect } from '@playwright/test'

test.describe('Search Test',() => {
    test.beforeEach(async ({page})=>{
       await page.goto('http://zero.webappsecurity.com')
    })
    test.afterEach(async ()=>{
       
    })
    test.only( 'Search Test Case', async ({page})  => {
       //Here goes the test code
       await page.type('#searchTerm','Bank');
       await page.keyboard.press('Enter')
    
       //Assertion
       const numberOfLink = await page.locator('li > a');
       await expect(numberOfLink).toHaveCount(2)
       //FullPage ScreenShot command
       await page.screenshot({path:'search.jpg',fullPage:true})
    })

 })