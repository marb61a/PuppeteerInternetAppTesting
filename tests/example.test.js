import HomePage from '../pages/HomePage';
import CheckboxPage from '../pages/CheckboxPage';
import ContextMenuPage from '../pages/ContextMenuPage';
import NewWindowPage from '../pages/NewWindowPage';
import RedirectPage from '../pages/RedirectPage';

describe("Homepage visit", async () => {
    let homePage;
    let checkboxPage;
    let contextMenuPage;
    let newWindowPage;
    let redirectPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
        checkboxPage = new CheckboxPage();
        contextMenuPage = new ContextMenuPage();
        newWindowPage = new NewWindowPage();
        redirectPage = new RedirectPage();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

    it('should visit checkbox page', async() => {
        await checkboxPage.visit();
    });

    it('should visit context-menu page', async() => {
        await contextMenuPage.visit();
    });

    it('should visit new-window page', async() => {
        await newWindowPage.visit();
    });

    it('should visit redirect page', async() => {
        await redirectPage.visit();
    });

});
