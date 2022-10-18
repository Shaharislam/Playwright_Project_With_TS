import { expect, Locator, Page, PlaywrightTestConfig } from "@playwright/test";

export class HomePage{
    //Define Selectors
    readonly page:Page
    readonly signInButton:Locator
    readonly searchBox:Locator
    readonly feedBackLink:Locator


    //Init selector using constructor
    constructor(page:Page){
        this.page=page
        this.signInButton=page.locator('#signin_button')
        this.searchBox=page.locator('#searchTerm')
        this.feedBackLink=page.locator('#feedback')

    }

    //Define login page Methods
    async visit(){
        await this.page.goto('http://zero.webappsecurity.com')
    }
    async clickOnSignIn(){
        await this.signInButton.click()
    }
    async searchFor(phrase:string){
        await this.searchBox.type(phrase);
       await this.page.keyboard.press('Enter')
    }

    async clickOnFeedBackLink(){
        await this.feedBackLink.click()
    }
}