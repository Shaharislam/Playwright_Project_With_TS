import { expect, Locator, Page } from "@playwright/test";

export class FeedBackPage{
    //Define Selectors
    readonly page:Page
    readonly nameInput:Locator
    readonly emailInput:Locator
    readonly subjectInput:Locator
    readonly commentInput:Locator
    readonly submitButton:Locator
    readonly feebBackTitle:Locator
    readonly clearButton:Locator



    //Init selector using constructor
    constructor(page:Page){
        this.page=page
        this.nameInput=page.locator('#name')  
        this.emailInput=page.locator('#email')
        this.commentInput=page.locator('#comment')
        this.subjectInput=page.locator('#subject')
        this.submitButton=page.locator("input[type='submit']")
        this.feebBackTitle=page.locator('#feedback-title')
        this.clearButton=page.locator("input[name='clear']")
        
    }

    //Define  Methods
    async fillForm(
        name:string,
        email:string,
        subject:string,
        comment:string
        )
        {
        await this.nameInput.type(name)
        await this.emailInput.type(email)
        await this.subjectInput.type(subject)
        await this.commentInput.type(comment)

    }

    async resetForm(){
        await this.clearButton.click()
    }

    async submitForm(){
        await this.submitButton.click()
    }

    async assertReset(){
        await expect(this.nameInput).toBeEmpty()
        await expect(this.commentInput).toBeEmpty()

    }

    async feedBackAssert(){
        await expect(this.feebBackTitle).toBeVisible()
    }

}