const base = require('@playwright/test');
const { LoginPage } = require('../pages/login/login.page')
const { ArtWorkPage } = require('../pages/art-work/art-work.page')

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    artWorkPage: async ({ page }, use) => {
        await use(new ArtWorkPage(page));
    },
});

exports.expect = base.expect;