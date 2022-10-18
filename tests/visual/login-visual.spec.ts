import{ test, expect } from '@playwright/test'
import{LoginPage} from '../../page-objects/LoginPage'
import{HomePage} from '../../page-objects/HomePage'

test.describe('Login Page Visual Tests',()=> {
    let homePage:HomePage
    let loginPage:LoginPage

    test.beforeEach(async({page})=>{
        homePage=new HomePage(page)
        loginPage=new LoginPage(page)

        await homePage.visit()
        await homePage.clickOnSignIn()

    })
    test('Login Form', async({page})=>{
        await loginPage.snapshotLoginForm()
    })
    test('Login Error Message', async({page})=>{
        await loginPage.login('Fall','invalid')
        await loginPage.snapshotErrormessage()
    })
})