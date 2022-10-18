import{ test, expect } from '@playwright/test'
import{LoginPage} from '../../page-objects/LoginPage'
import{HomePage} from '../../page-objects/HomePage'

test.describe('Filter Transactions',() => {
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


    test( 'Verify Filter Transactions', async ({page})  => {
       //Here goes the test code
        await page.click('#account_activity_link')
        await page.selectOption('#aa_accountId','2')
        const checkingAccount = await page.locator('#all_transactions_for_account tbody tr')
        await expect(checkingAccount).toHaveCount(3)

        await page.selectOption('#aa_accountId','4')
        const loanAccount = await page.locator('#all_transactions_for_account tbody tr')
        await expect(loanAccount).toHaveCount(2)
    
        await page.selectOption('#aa_accountId','6')
        const noResult = await page.locator('.well')
        await expect(noResult).toBeVisible()

       //FullPage ScreenShot command
       await page.screenshot({path:'screenshot.jpg',fullPage:true})
    })
    
})