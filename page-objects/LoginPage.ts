import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage } from "./AbstractPage";

export class LoginPage extends AbstractPage{
    //Define Selectors
    readonly page:Page
    readonly usernameInput:Locator
    readonly passwordInput:Locator
    readonly submitButton:Locator
    readonly errorMessage:Locator
    readonly loginForm: Locator

    //Init selector using constructor
    constructor(page:Page){
        super(page)
        this.usernameInput=page.locator('#user_login')
        this.passwordInput=page.locator('#user_password')
        this.submitButton=page.locator('text=Sign in')
        this.errorMessage=page.locator('.alert-error')
        this.loginForm = page.locator('#login_form')
    }

    //Define login page Methods
    async login(username:string,password:string){
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.submitButton.click()
    }
    async logOut(){
        await this.page.goto('http://zero.webappsecurity.com/logout.html')
    }
    async assertErrorMessage(){
        await expect(this.errorMessage).toContainText('Login and/or password are wrong')
    }
    async assertLogOut(){
        await expect(this.page).toHaveURL('http://zero.webappsecurity.com/index.html')
    }

    async snapshotLoginForm(){
        await expect(this.loginForm.screenshot()).toMatchSnapshot('login-form.png')
    }

    async snapshotErrormessage(){
        await expect(this.errorMessage.screenshot()).toMatchSnapshot('errormessage.png')
    }

}