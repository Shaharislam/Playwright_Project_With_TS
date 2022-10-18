import{ test, expect } from '@playwright/test'
import{LoginPage} from '../../page-objects/LoginPage'
import{HomePage} from '../../page-objects/HomePage'
import{PaymentPage} from '../../page-objects/PaymentPage'
import{NavBar} from '../../page-objects/components/NavBar'

test.describe('New Payment',() => {
   let loginPage:LoginPage
   let  homePage:HomePage
   let  payMentPage:PaymentPage
   let  navBar:NavBar

    test.beforeEach(async ({page})=>{
      loginPage=new LoginPage(page)
      homePage =new HomePage(page)
      navBar =new NavBar(page)

      await homePage.visit()
      await homePage.clickOnSignIn()
      await loginPage.login('username','password')
    })
    test.afterEach(async ()=>{
       
    })
    test( 'Should send new payment', async ({page})  => {
       //Here goes the test code
       await navBar.clickOnTab('Pay Bills')
       await payMentPage.createPayment()
       await payMentPage.assertSuccessMessage()
    
    })

 })