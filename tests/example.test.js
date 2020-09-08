import HomePage from '../pages/HomePage';
import CheckboxPage from '../pages/CheckboxPage';
import ContextMenuPage from '../pages/ContextMenuPage';

describe("Homepage visit", async () => {
    let homePage;
    let checkboxPage;
    let contextMenuPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
        checkboxPage = new CheckboxPage();
        contextMenuPage = new ContextMenuPage();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

    it('should visit checkbox page', async() => {
        await checkboxPage.visit();
    });

    it('should visit context-menu page', async() => {
        await checkboxPage.visit();
    });

});
