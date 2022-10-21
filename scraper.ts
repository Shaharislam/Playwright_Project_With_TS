//scraper code start

const playwright = require('@playwright/test')
const random_useragent = require('random-useragent')
 const fs = require('fs');

const BASE_URL = 'https://github.com/topics/playwright'

;(async ()=>{
    const agent =random_useragent.getRandom()
    const browser = await playwright.chromium.launch({headless:false})
    const context = await browser.newContext({userAgent: agent})
    const page = await context.newPage({bypassCSP:true})
    await page.setDefaultTimeout(30000)
    await page.setViewportSize({width:800,height:600})
    await page.goto(BASE_URL)

    //Get data from website
    const repositories = await page.$$eval('article.border',(repoCards)=>{
        return repoCards.map((card)=>{
            const [user,repo] =card.querySelectorAll('h3 a')
            const formatText = (element) => element && element.innerText.trim()

            return{
                user: formatText(user),
                repo: formatText(repo),
                url: repo.href,
            }
        })
    })
// Store data
 const logger = fs.createWriteStream('Scraper_Data.txt',{flag: 'w'})
      logger.write(JSON.stringify(repositories, null, ' '))
    //await console.log(repositories)
    await console.log(agent)
    await browser.close()
})().catch((error)=>{
    console.log(error)
    process.exit(1)
})