import{ test, expect } from '@playwright/test'

test.describe('Filter Transactions',() => {
    test.beforeEach(async ({page})=>{
       await page.goto('http://zero.webappsecurity.com')
       await page.click('#signin_button');   // Id selector
       await page.type('#user_login','some txt');
       await page.type('#user_password','some password');
       await page.click('text=Sign in');   
       
    })
    test.afterEach(async ()=>{
       
    })
    // test('user login', async({page})=>{

    // })
    test( 'Verify Filter Transactions', async ({page})  => {
       //Here goes the test code
        page.waitForNavigation({ url: 'http://zero.webappsecurity.com/bank/account-activity.html' });
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