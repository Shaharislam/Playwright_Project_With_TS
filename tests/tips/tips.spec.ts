import{ test, expect } from '@playwright/test'

test.describe('Tips and Trics Section',()=> {

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

    const people =['Juveria','Bristy','Mukta']
    for(const name of people){
        test(`Running Test for ${(name)}`, async ({page})=>{
            await page.goto('http://zero.webappsecurity.com/index.html')
            await page.type('#searchTerm',`${name}`)
            //await page.keyboard.press('Enter')
           await expect('#searchTerm').toContainEqual(`${name}`)
            await page.waitForTimeout(6000)
        })
        
    }
})