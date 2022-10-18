import{ test } from '@playwright/test'
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