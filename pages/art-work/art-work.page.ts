const { PlaywrightCore, UserFunctions } = require('../../module-imports/helperFunctions.import')
import { Locator, Page } from '@playwright/test';
import Locators from './art-work.locator.json'
import artWorkTestData from "../../test-data/art-work-test-data/art-work-test-data.json"

exports.ArtWorkPage = class ArtWorkPage {

    page: Page;
    addArtWorkBtn: Locator;
    viewAllBtn: Locator;
    artNameTextBox: Locator;
    editionsTextBox: Locator;
    limitedEditionOption: Locator;
    descriptionTextBox: Locator;
    currentPricesBox: Locator;
    priceAtPrimarySalesBox: Locator;
    dateAtPrimarySale: Locator;
    dateAtPrimarySaleHeading: Locator;
    primarySaleBuyerTextBox: Locator;
    uploadArtWorkFile: Locator;
    styleOfArtDropDown: Locator;
    nftGenesisDropDown: Locator;
    supplyDropDown: Locator;
    colloboratorTextBox: Locator;
    ownedBytextBox: Locator;
    marketPlaceMintedOn: Locator;
    marketPlaceMintedOnUrl: Locator;
    mintedOnChooseDate: Locator;
    createdOnChooseDate: Locator;
    copyRightDropDown: Locator;
    artistRoyaltyRoundBtn: Locator;
    physicalPieceRoundBtn: Locator;
    publishBtn: Locator;
    uploadArtWorkFileBox: Locator;
    artWorkNameOnList: Locator;
    searchBar: Locator;
    artworkNameOnSearch: Locator;
    reviewBtn: Locator;
    titleBoxReview: Locator;
    reviewDetailsBox: Locator;
    reviewAddBtn: Locator;
    reviewCreatedMsg: Locator;
    artWorkCreatedMsg: Locator;
    artworkName: String;

    constructor(page) {
      this.intializePage(page)
    }

    intializePage(page) {
        this.page = page
        this.viewAllBtn = this.page.locator(Locators.viewAllBtn);
        this.addArtWorkBtn = this.page.locator(Locators.addArtWorkBtn);
        this.artNameTextBox = this.page.locator(Locators.artNameTextBox);
        this.editionsTextBox = this.page.locator(Locators.editionsTextBox);
        this.limitedEditionOption = this.page.getByText(Locators.limitedEditionOption);
        this.descriptionTextBox = this.page.locator(Locators.descriptionTextBox);
        this.currentPricesBox = this.page.locator(Locators.currentPricesBox);
        this.priceAtPrimarySalesBox = this.page.locator(Locators.priceAtPrimarySalesBox);
        this.dateAtPrimarySale = this.page.locator(Locators.dateAtPrimarySale);
        this.dateAtPrimarySaleHeading = this.page.locator(Locators.dateAtPrimarySaleHeading);
        this.primarySaleBuyerTextBox = this.page.locator(Locators.primarySaleBuyerTextBox);
        this.uploadArtWorkFile = this.page.locator(Locators.uploadArtWorkFile);
        this.uploadArtWorkFileBox = this.page.locator(Locators.uploadArtWorkFileBox);
        this.styleOfArtDropDown = this.page.locator(Locators.styleOfArtDropDown);
        this.nftGenesisDropDown = this.page.locator(Locators.nftGenesisDropDown);
        this.supplyDropDown = this.page.locator(Locators.supplyDropDown);
        this.colloboratorTextBox = this.page.locator(Locators.colloboratorTextBox);
        this.ownedBytextBox = this.page.locator(Locators.ownedBytextBox);
        this.marketPlaceMintedOn = this.page.locator(Locators.marketPlaceMintedOn);
        this.marketPlaceMintedOnUrl = this.page.locator(Locators.marketPlaceMintedOnUrl);
        this.mintedOnChooseDate = this.page.locator(Locators.mintedOnChooseDate);
        this.createdOnChooseDate = this.page.locator(Locators.createdOnChooseDate);
        this.copyRightDropDown = this.page.locator(Locators.copyRightDropDown);
        this.artistRoyaltyRoundBtn = this.page.locator(Locators.artistRoyaltyRoundBtn);
        this.physicalPieceRoundBtn = this.page.locator(Locators.physicalPieceRoundBtn);
        this.publishBtn = this.page.locator(Locators.publishBtn);
        this.artWorkNameOnList = this.page.locator(Locators.artWorkNameOnList)
        this.searchBar = this.page.locator(Locators.searchBar)
        this.artworkNameOnSearch = this.page.locator(Locators.artworkNameOnSearch)
        this.reviewBtn = this.page.locator(Locators.reviewBtn)
        this.titleBoxReview = this.page.locator(Locators.titleBoxReview)
        this.reviewDetailsBox = this.page.locator(Locators.reviewDetailsBox)
        this.reviewAddBtn = this.page.locator(Locators.reviewAddBtn)
        this.reviewCreatedMsg = this.page.locator(Locators.reviewCreatedMsg)
        this.artWorkCreatedMsg = this.page.locator(Locators.artWorkCreatedMsg)
        this.artworkName = artWorkTestData.artworkName + UserFunctions.generateUUIDV4()
    }

    async navigateToCreateArtWorkPage() {
        await PlaywrightCore.click(this.viewAllBtn)
        await PlaywrightCore.click(this.addArtWorkBtn)
        await this.page.waitForTimeout(1000)
        await UserFunctions.writeFile(artWorkTestData.artWorkFilePath, this.artworkName)
        await this.page.waitForTimeout(2000)
      }
    
    async navigateToArtWorkPage() {
        await PlaywrightCore.click(this.viewAllBtn)
        await this.page.waitForTimeout(2000)
      }  

    async createArtWork() {
        await PlaywrightCore.fill(this.artNameTextBox, this.artworkName)
        await PlaywrightCore.scrollIntoViewIfNeeded(this.editionsTextBox)
        await PlaywrightCore.click(this.editionsTextBox)
        await PlaywrightCore.click(this.limitedEditionOption)
        await PlaywrightCore.scrollIntoViewIfNeeded(this.priceAtPrimarySalesBox)
        await PlaywrightCore.fill(this.descriptionTextBox, artWorkTestData.descriptionText)
        await PlaywrightCore.fill(this.currentPricesBox, artWorkTestData.currentPriceValue)
        await PlaywrightCore.fill(this.priceAtPrimarySalesBox, artWorkTestData.priceAtPrimarySalesValue)
        await PlaywrightCore.scrollIntoViewIfNeeded(this.primarySaleBuyerTextBox)
        await PlaywrightCore.click(this.dateAtPrimarySale)
        await PlaywrightCore.PressFromKeyboard(this.page, artWorkTestData.spaceKey)
        await PlaywrightCore.click(this.dateAtPrimarySaleHeading)
        await PlaywrightCore.fill(this.primarySaleBuyerTextBox, artWorkTestData.primarySaleBuyerTextBox)
        await PlaywrightCore.scrollIntoViewIfNeeded(this.uploadArtWorkFileBox)
        await PlaywrightCore.uploadFile(this.uploadArtWorkFile, artWorkTestData.filePath)
        await PlaywrightCore.scrollIntoViewIfNeeded(this.styleOfArtDropDown)
        await PlaywrightCore.click(this.styleOfArtDropDown)
        await PlaywrightCore.PressFromKeyboard(this.page, artWorkTestData.spaceKey)
        await PlaywrightCore.scrollIntoViewIfNeeded(this.supplyDropDown)
        await PlaywrightCore.click(this.nftGenesisDropDown)
        await PlaywrightCore.PressFromKeyboard(this.page, artWorkTestData.spaceKey)
        await PlaywrightCore.click(this.supplyDropDown)
        await PlaywrightCore.PressFromKeyboard(this.page, artWorkTestData.spaceKey)
        await PlaywrightCore.scrollIntoViewIfNeeded(this.marketPlaceMintedOnUrl)
        await PlaywrightCore.scrollIntoViewIfNeeded(this.createdOnChooseDate)
        await PlaywrightCore.click(this.createdOnChooseDate)
        await PlaywrightCore.PressFromKeyboard(this.page, artWorkTestData.spaceKey)
        await PlaywrightCore.scrollIntoViewIfNeeded(this.publishBtn)
        await PlaywrightCore.click(this.artistRoyaltyRoundBtn)
        await this.page.waitForTimeout(2000)
        await PlaywrightCore.click(this.publishBtn)
    }

    async addReviewOnArtWork() {
        await PlaywrightCore.scrollIntoViewIfNeeded(this.reviewBtn)
        await PlaywrightCore.click(this.reviewBtn)
        await PlaywrightCore.fill(this.titleBoxReview, artWorkTestData.reviweTitle)
        await PlaywrightCore.fill(this.reviewDetailsBox, artWorkTestData.reviewDescription)
        await PlaywrightCore.click(this.reviewAddBtn)
      } 

}