import{ test, expect } from '@playwright/test'

test.describe('Transfer Funds and Make payments',() => {
    test.beforeEach(async ({page})=>{
       await page.goto('http://zero.webappsecurity.com')
       await page.click('#signin_button')
       await page.type('#user_login','username');
       await page.type('#user_password','password');
       await page.click('text=Sign in');
       
    })
    test.afterEach(async ()=>{
       
    })
    test( 'Transfer Funds', async ({page})  => {
       //Here goes the test code
    //    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
       await page.click('#transfer_funds_tab')
       await page.selectOption('#tf_fromAccountId','2')
       await page.selectOption('#tf_toAccountId','3')
       await page.type('#tf_amount','500')
       await page.type('#tf_description','Test Message')
       await page.click('#btn_submit')

       //Assertion
       const boardHeader = await page.locator('h2.board-header');
       await expect(boardHeader).toContainText('Verify')
       await page.click('#btn_submit')

       const message = await page.locator('.alert-success')
       await expect(message).toContainText('You successfully submitted your transaction')
       //FullPage ScreenShot command
       await page.screenshot({path:'search.jpg',fullPage:true})
    })

 })