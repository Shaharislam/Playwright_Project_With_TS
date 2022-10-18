import{ test, expect } from '@playwright/test'
import{HomePage} from '../../page-objects/HomePage'
import{FeedBackPage} from '../../page-objects/FeedBackPage'

test.describe('FeedBack Add',() => {
   let  homePage:HomePage
   let  feedBackPage:FeedBackPage

    test.beforeEach(async ({page})=>{
       homePage =new HomePage(page)
       feedBackPage = new FeedBackPage(page) 
       await homePage.visit()
       await homePage.clickOnFeedBackLink()
    })
    //Reset FeedBack Form
    test( 'Reset feedback form', async ({page})  => {
      //  await page.type('#name','some name');
      //  await page.type('#email','someemail@gmail.com');
      //  await page.type('#subject','Type Subject');
      //  await page.type('#comment','Wright somthing about feedback')
      //  await page.click("input[name='clear']")

       await feedBackPage.fillForm(
          'name',
          'email@yommail.com',
          'subject',
           'my Awesome message'
       )
       await feedBackPage.resetForm()

       //Assertions
       await feedBackPage.assertReset()
       //FullPage ScreenShot command
       await page.screenshot({path:'screenshot.jpg',fullPage:true})
    })
    test( 'Submit feedback form', async ({page})  => {
      //   await page.type('#name','name');
      //   await page.type('#email','someemail123@yopmail.com');
      //   await page.type('#subject','Subject2');
      //   await page.type('#comment',' somthing about feedback')
      //   await page.click("input[type='submit']")
      await feedBackPage.fillForm(
         'name',
          'email@yommail.com',
          'subject',
           'my Awesome message'
      )
      await feedBackPage.submitForm()
 
        //Assertions
      await feedBackPage.feedBackAssert()
        //FullPage ScreenShot command
        await page.screenshot({path:'screenshot.jpg',fullPage:true})
     })
     
 })