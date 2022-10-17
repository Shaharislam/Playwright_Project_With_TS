export async function landHomepage(page) {
    await page.goto('https://example.com/')   
}

export async function assertTitle(page) {
    await page.waitForSelector('h1')
}