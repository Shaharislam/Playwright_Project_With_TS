import{ test, expect } from '@playwright/test'

test.describe.only('Tips and Trics Section',()=> {

    test.beforeEach(async({page})=>{

    })
    test('Tips & Tricks', async({page},testInfo)=>{
        await page.goto('https://example.com/')
         console.log(testInfo.title)
         console.log(testInfo.expectedStatus)
    })
    test( 'Browser Skip Test Case', async({page,browserName})=>{
        test.skip(browserName==='chromium','Feature Not Ready')
        await page.goto('https://example.com/')
    })
    test( 'Fixme Annotation Test Case', async({page,browserName})=>{
        test.fixme(browserName==='chromium','Feature Not Ready')
        await page.goto('https://example.com/')
    })
})