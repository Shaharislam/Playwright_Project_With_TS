import { expect, Locator, Page, PlaywrightTestConfig } from "@playwright/test";

export class HomePage{
    //Define Selectors
    readonly page:Page
    readonly signInButton:Locator


    //Init selector using constructor
    constructor(page:Page){
        this.page=page
        this.signInButton=page.locator('#signin_button')

    }

    //Define login page Methods
    async visit(){
        await this.page.goto('http://zero.webappsecurity.com')
    }
    async clickOnSignIn(){
        await this.signInButton.click()
    }

  
}