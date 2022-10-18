import { expect, Locator, Page, PlaywrightTestConfig } from "@playwright/test";

export class NavBar{
    //Define Selectors
    readonly page:Page
    readonly accountSummary:Locator
    readonly accountActivity:Locator
    readonly transferFund:Locator
    readonly payBills:Locator
    readonly myMoneyApp:Locator
    readonly onlineStateMents:Locator


    //Init selector using constructor
    constructor(page:Page){
        this.page=page
        this.accountSummary=page.locator('#account_summary_tab')
        this.accountActivity=page.locator('#account_activity_tab')
        this.transferFund=page.locator('#transfer_funds_tab')
        this.payBills=page.locator('#pay_bills_tab')
        this.myMoneyApp=page.locator('#money_map_tab')
        this.onlineStateMents=page.locator('#online_statements_tab')
    }
    async clickOnTab(tabName){
        switch(tabName){
            case 'Account Summary':
                await this.accountSummary.click()
                break;
            case 'Account Activity':
                await this.accountActivity.click()
                break;
            case 'Transfer Funds':
                await this.transferFund.click()
                break;
            case 'Pay Bills':
                await this.payBills.click()
                break;
            case 'My Money App':
                await this.myMoneyApp.click()
                break;
            case 'Online Statements':
                await this.onlineStateMents.click()
                break;
            default:
                throw new Error("This tab does not exit..")
                break;

        }


    }
}