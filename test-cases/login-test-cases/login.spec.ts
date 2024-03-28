const { test, expect } = require('../../module-imports/testFixtures.import')
import loginTestData from "../../test-data/login-test-data/login-test-data.json"

test.describe('Login Module', () => {

    test('Login With Correct Credentials', async ({loginPage}) => {
        await loginPage.navigateToLoginPage()
        await loginPage.clickLoginBtnToNavigate()
        await loginPage.enterCredentialsAndClickOnLoginBtn()
        await expect(loginPage.userIconBox).toHaveText(loginTestData.userIconBoxText)
    });

});