import{ test, expect } from '@playwright/test'
import{LoginPage} from '../../page-objects/LoginPage'
import{HomePage} from '../../page-objects/HomePage'

test.describe.parallel('Login/LogOut Flow',() => {
   let loginPage:LoginPage
   let  homePage:HomePage
   //Before Hook
    test.beforeEach(async ({page})=>{
       loginPage=new LoginPage(page)
       homePage =new HomePage(page)
       await homePage.visit()
    })
    test.afterEach(async ()=>{
       
    })
    test( 'Applying Before and After hook @hook', async ({page})  => {
       //Here goes the test code
       await homePage.clickOnSignIn()
       await loginPage.login("Invalid Username",'Invalid Password')
       await loginPage.assertErrorMessage()
       //FullPage ScreenShot command
       await page.screenshot({path:'screenshot.jpg',fullPage:true})
    })
    
    test( 'Positive Scenario for Login-LogOut', async ({page})  => {
       //Here goes the test code
       await homePage.clickOnSignIn()
       await loginPage.login('username','password')
       //await loginPage.wait(9000)
       await page.goto("http://zero.webappsecurity.com/bank/account-summary.html")
       const accountSummaryTab = await page.locator('#account_summary_tab');
       await expect(accountSummaryTab).toBeVisible()
       
       await loginPage.logOut()
       await loginPage.assertLogOut()

       })
 })