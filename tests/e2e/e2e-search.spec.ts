import{ test, expect } from '@playwright/test'
import{HomePage} from '../../page-objects/HomePage'

test.describe('Search Test',() => {
   let  homePage:HomePage
       
    test.beforeEach(async ({page})=>{
      homePage =new HomePage(page)
      await homePage.visit()
    })
    test.afterEach(async ()=>{
       
    })
    test( 'Search Test Case', async ({page})  => {
       //Here goes the test code
       await homePage.searchFor('bank')
    
       //Assertion
       const numberOfLink = await page.locator('li > a');
       await expect(numberOfLink).toHaveCount(2)
       //FullPage ScreenShot command
       await page.screenshot({path:'search.jpg',fullPage:true})
    })

 })