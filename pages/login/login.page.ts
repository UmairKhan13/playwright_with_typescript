const { PlaywrightCore } = require('../../module-imports/helperFunctions.import')
import { Locator, Page } from '@playwright/test';
import Locators from './login.locator.json'
require('dotenv').config()

exports.LoginPage = class LoginPage {
    page: Page;
    BaseUrl: string;
    username: any;
    password: any;
    navigateLoginBtn: Locator;
    userIconBox: Locator
    constructor(page) {
      this.intializePage(page)
    }
    intializePage(page)
    {
      this.page = page;
      this.BaseUrl = "./"
      this.navigateLoginBtn = this.page.locator(Locators.loginNavigateBtn)
      this.userIconBox = this.page.locator(Locators.userIconBox)
      this.username = process.env.EMAIL
      this.password = process.env.PASSWORD
    }
    async navigateToLoginPage() {
        await PlaywrightCore.goTo(this.page,  this.BaseUrl, { timeout: 0 })
      }
    async clickLoginBtnToNavigate(){
        await PlaywrightCore.click(this.navigateLoginBtn)
        await this.page.waitForTimeout(2000)
    }
    async enterCredentialsAndClickOnLoginBtn(){
        await PlaywrightCore.fill(this.page, Locators.emailTextBox, this.username)
        await PlaywrightCore.fill(this.page, Locators.passwordTextBox, this.password)
        await PlaywrightCore.click(this.page, Locators.loginBtn)
        await this.page.waitForTimeout(2000)
    }
}