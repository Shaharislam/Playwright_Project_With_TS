import{ test, expect } from '@playwright/test'
import{getRandomNumber,getRandomString} from '../../utils/data-helpers'

test.describe('Tips and Trics Section',()=> {

    test.beforeEach(async({page})=>{

    })
    test('Tips & Tricks', async({page},testInfo)=>{
        await page.goto('https://example.com/')
         console.log(testInfo.title)
         console.log(testInfo.expectedStatus)
         let number= await getRandomNumber()
         let randomString= await getRandomString()
         console.log(randomString)
         console.log(number)
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
    test( 'Mouse Movement Simulation', async({page})=>{
        await page.goto('https://example.com/')
        await page.mouse.move(0,0)
        await page.mouse.down()
        await page.mouse.move(0,100)
        await page.mouse.up()
    })

    test( 'Multiple Browser Tabs Open in One Browser', async({browser})=>{
        const context = await browser.newContext()
        const page1 =await context.newPage()
        const page2 =await context.newPage()
        const page3 =await context.newPage()
        await page1.goto('https://example.com/')
        await page2.goto('https://example.com/')
        await page3.goto('https://example.com/')
        //await page1.waitForTimeout(6000)
    })
    //Device Emulation Command
    //npx playwright open --device="iPhone 11" wikipedia.org

    // Website to PDF command
    //npx playwright pdf facebook.com fb.pdf
    //npx playwright pdf wikipedia.org  wiki.pdf
    //npx playwright pdf rootnext.com rootnext.pdf

    //special ScreenShot Command
    //npx playwright screenshot --device="iPhone 11" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone-image.png
    
    //special reporter command
    //npx playwright test --config=playwright.config.ts --reporter=reporter.ts  --headed --project=firefox
})