import HomePage from '../pages/HomePage';

describe("Homepage visit", () => {
    let homePage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/homepage.png",
            fullPage: true
        });
    });

});
