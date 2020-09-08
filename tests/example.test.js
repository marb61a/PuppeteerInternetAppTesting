import HomePage from '../pages/HomePage';
import CheckboxPage from '../pages/CheckboxPage';
import ContextMenuPage from '../pages/ContextMenuPage';
import NewWindowPage from '../pages/NewWindowPage';
import RedirectPage from '../pages/RedirectPage';
import KeyPressPage from '../pages/KeyPressPage';
import EntryAdPage from '../pages/EntryAdPage';

describe("Homepage visit", async () => {
    let homePage;
    let checkboxPage;
    let contextMenuPage;
    let newWindowPage;
    let redirectPage;
    let keyPressPage;
    let entryAdPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
        checkboxPage = new CheckboxPage();
        contextMenuPage = new ContextMenuPage();
        newWindowPage = new NewWindowPage();
        redirectPage = new RedirectPage();
        keyPressPage = new KeyPressPage();
        entryAdPage = new EntryAdPage();
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

    it('should visit key press page', async() => {
        await keyPressPage.visit();
    });

    it('should visit entry ad page', async() => {
        await entryAdPage.visit();
    });

});
