import HomePage from '../pages/HomePage';

describe("Homepage visit", () => {
    let homePage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
    });

    afterAll(async () => {
        await global.__BROWSER_GLOBAL__.close();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

});
