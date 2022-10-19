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
    test.only( 'Mouse Movement Simulation', async({page})=>{
        await page.goto('https://example.com/')
        await page.mouse.move(0,0)
        await page.mouse.down()
        await page.mouse.move(0,100)
        await page.mouse.up()
    })
})