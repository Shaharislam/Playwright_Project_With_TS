import{ test, expect } from '@playwright/test'
import{LoginPage} from '../../page-objects/LoginPage'
import{HomePage} from '../../page-objects/HomePage'

test.describe.only('Transfer Funds and Make payments',() => {
   let loginPage:LoginPage
   let  homePage:HomePage

    test.beforeEach(async ({page})=>{
      loginPage=new LoginPage(page)
      homePage =new HomePage(page)
      await homePage.visit()
      await homePage.clickOnSignIn()
      await loginPage.login('username','password')
       
    })
    test.afterEach(async ()=>{
       
    })
    test.only( 'Transfer Funds', async ({page})  => {
       //Here goes the test code
       await page.goto("http://zero.webappsecurity.com/bank/account-summary.html")
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