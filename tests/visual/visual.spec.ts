import{test,expect} from '@playwright/test'

test.describe('Visual Regression Testing Example',()=> {
    test('Full Page Sanpshot', async({page})=>{
       await page.goto('https://example.com/')
       expect(await page.screenshot()).toMatchSnapshot('homepage-Webkit-darwin.png')
    })
})