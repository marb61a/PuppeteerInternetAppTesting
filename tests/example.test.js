import HomePage from '../pages/HomePage';
import NewWindowPage from '../pages/NewWindowPage';
import KeyPressPage from '../pages/KeyPressPage';

describe("Homepage visit", () => {
    let homePage;
    let newWindowPage;
    let keyPressPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
        newWindowPage = new NewWindowPage();
        keyPressPage = new KeyPressPage();
    });

    afterAll(async () => {
        await global.__BROWSER_GLOBAL__.close();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

    it('should visit new-window page', async() => {
        await newWindowPage.visit();
    });

    it('should visit key press page', async() => {
        await keyPressPage.visit();
    });

});
