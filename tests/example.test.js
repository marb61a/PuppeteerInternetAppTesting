import HomePage from '../pages/HomePage';
import CheckboxPage from '../pages/CheckboxPage';

describe("Homepage visit", async () => {
    let homePage;
    let checkboxPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
        checkboxPage = new CheckboxPage();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

    it('should visit checkbox page', async() => {
        await checkboxPage.visit();
    });

});
