const { chromium } = require("@playwright/test")

exports.PlaywrightCore = class PlaywrightCore {
    static async PressFromKeyboard(page, Keys) {
        await page.keyboard.press(Keys)
    }
    static async allInnerTexts(locator) {
        return await locator.allInnerTexts()
    }
    static async allTextContents(locator) {
        return await locator.allTextContents()
    }
    static async check(locator, options = {}) {
        await locator.check(options)
    }
    static async clear(locator, options = {}) {
        await locator.clear(options)
    }
    static async uploadFile(locator, fileName) {
        await locator.setInputFiles(fileName);
    }
    static async click(locator, options = {}) {
        await locator.click(options)
    }
    static async count(locator) {
        return await locator.count()
    }
    static async doubleClick(locator, options = {}) {
        await locator.dblclick(options)
    }
    static async dragAndDrop(sourceLocator, targetLocator, options = {}) {
        await sourceLocator.dragTo(targetLocator, options)
    }
    static async fill(locator, textToFill, options = {}) {
        await locator.fill(textToFill, options)
    }
    static async filter(locator, options = {}) {
        return await locator.filter(options)
    }
    static async first(locator) {
        return await locator.first()
    }
    static async focus(locator, options = {}) {
        await locator.focus(options)
    }
    static async goTo(page, url, options = {}) {
        await page.goto(url, options)
    }
    static async getAttribute(locator, attributeName, options = {}) {
        return await locator.getAttribute(attributeName, options)
    }
    static async hover(locator, options = {}) {
        await locator.hover(options)
    }
    static async innerHTML(locator, options = {}) {
        return await locator.innerHTML(options)
    }
    static async innerText(locator, options = {}) {
        return await locator.innerText(options)
    }
    static async inputValue(locator, options = {}) {
        return await locator.inputValue(options)
    }
    static async isChecked(locator, options = {}) {
        return await locator.isChecked(options)
    }
    static async isDisabled(locator, options = {}) {
        return await locator.isDisabled(options)
    }
    static async isEditable(locator, options = {}) {
        return await locator.isEditable(options)
    }
    static async isEnabled(locator, options = {}) {
        return await locator.isEnabled(options)
    }
    static async isHidden(locator, options = {}) {
        return await locator.isHidden(options)
    }
    static async isVisible(locator, options = {}) {
        return await locator.isVisible(options)
    }
    static async locator(locator, selector, options = {}) {
        return locator.locator(selector, options)
    }
    static async press(locator, textTopress, options = {}) {
        await locator.press(textTopress, options)
    }
    static async scrollIntoViewIfNeeded(locator, options = {}) {
        await locator.scrollIntoViewIfNeeded(options)
    }
    static async selectDropDownOption(locator, optionToSelect, options = {}) {
        await locator.selectOption(optionToSelect, options)
    }
    static async setCheckBox(locator, toCheck, options = {}) {
        await locator.setChecked(toCheck, options)
    }
    static async setRadioBtn(locator, options = {}) {
        await locator.check(options)
    }
    static async textContent(locator, options = {}) {
        return await locator.textContent(options)
    }
    static async uncheck(locator, options = {}) {
        await locator.uncheck(options)
    }
    static async waitFor(locator, options = {}) {
        await locator.waitFor(options)
    }
    static async waitForEvent(page,event,options = {}){
        return page.waitForEvent(event,options)
    }
    static async chromiumLaunch()
    {
        return await chromium.launch()
    }
    static async newBrowserContext(browser)
    {
        let context = await browser.newContext();
        return context
    }
    static async newPage(context)
    {
        let page = await context.newPage();
        return page
    }
}