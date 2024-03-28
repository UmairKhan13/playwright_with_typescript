const { test, expect } = require('../../module-imports/testFixtures.import')
const { PlaywrightCore, UserFunctions } = require('../../module-imports/helperFunctions.import')
import artWorkTestData from "../../test-data/art-work-test-data/art-work-test-data.json"

test.beforeEach(async({loginPage}) => {
    await loginPage.navigateToLoginPage()
    await loginPage.clickLoginBtnToNavigate()
    await loginPage.enterCredentialsAndClickOnLoginBtn()
})

test.describe('Art Work Module', () => {

    test('Create a New Art Work', async ({artWorkPage}) => {
        await artWorkPage.navigateToCreateArtWorkPage()
        await artWorkPage.createArtWork()
        await expect(artWorkPage.artWorkCreatedMsg).toHaveText(artWorkTestData.artworkCreatedMsgTxt)
    });

    test('check artwork is in the list after it is created', async ({artWorkPage}) => {
        await artWorkPage.navigateToArtWorkPage()
        await PlaywrightCore.click(artWorkPage.searchBar)
        await PlaywrightCore.fill(artWorkPage.searchBar, UserFunctions.readFile(artWorkTestData.artWorkFilePath))
        await PlaywrightCore.click(artWorkPage.artworkNameOnSearch)
        await PlaywrightCore.scrollIntoViewIfNeeded(artWorkPage.artWorkNameOnList)
        await expect(artWorkPage.artWorkNameOnList).toHaveText(UserFunctions.readFile(artWorkTestData.artWorkFilePath))
    });

    test('add a review for the artwork', async ({artWorkPage}) => {
        await PlaywrightCore.click(artWorkPage.searchBar)
        await PlaywrightCore.fill(artWorkPage.searchBar, UserFunctions.readFile(artWorkTestData.artWorkFilePath))
        await PlaywrightCore.click(artWorkPage.artworkNameOnSearch)
        await artWorkPage.addReviewOnArtWork()
        await expect(artWorkPage.reviewCreatedMsg).toHaveText(artWorkTestData.reviewCreatedMsgTxt)
    });

});