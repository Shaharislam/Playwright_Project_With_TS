import{ test, expect } from '@playwright/test'

test.describe('FeedBack Add',() => {
    test.beforeEach(async ({page})=>{
       await page.goto('http://zero.webappsecurity.com/')
       await page.click('#feedback')
    })
    //Reset FeedBack Form
    test( 'Reset feedback form', async ({page})  => {
       await page.type('#name','some name');
       await page.type('#email','someemail@gmail.com');
       await page.type('#subject','Type Subject');
       await page.type('#comment','Wright somthing about feedback')
       await page.click("input[name='clear']")

       //Assertions
       const nameInput = await page.locator('#name')
       const commentInput = await page.locator('#comment')

       await expect(nameInput).toBeEmpty()
       await expect(commentInput).toBeEmpty()
    
       //FullPage ScreenShot command
       await page.screenshot({path:'screenshot.jpg',fullPage:true})
    })
    test( 'Submit feedback form', async ({page})  => {
        await page.type('#name','name');
        await page.type('#email','someemail123@yopmail.com');
        await page.type('#subject','Subject2');
        await page.type('#comment',' somthing about feedback')
        await page.click("input[type='submit']")
 
        //Assertions
        await page.waitForSelector('#feedback-title')
        //FullPage ScreenShot command
        await page.screenshot({path:'screenshot.jpg',fullPage:true})
     })
     
 })