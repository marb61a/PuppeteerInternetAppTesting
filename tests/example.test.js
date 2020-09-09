import HomePage from '../pages/HomePage';
import CheckboxPage from '../pages/CheckboxPage';
import NewWindowPage from '../pages/NewWindowPage';
import RedirectPage from '../pages/RedirectPage';
import KeyPressPage from '../pages/KeyPressPage';
import EntryAdPage from '../pages/EntryAdPage';
import ChallengingDomPage from '../pages/ChallengingDomPage';
import FileUploadPage from '../pages/FileUploadPage';

describe("Homepage visit", async () => {
    let homePage;
    let checkboxPage;
    let newWindowPage;
    let redirectPage;
    let keyPressPage;
    let entryAdPage;
    let challengingDomPage;
    let fileUploadPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
        checkboxPage = new CheckboxPage();
        newWindowPage = new NewWindowPage();
        redirectPage = new RedirectPage();
        keyPressPage = new KeyPressPage();
        entryAdPage = new EntryAdPage();
        challengingDomPage = new ChallengingDomPage();
        fileUploadPage = new FileUploadPage();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
    });

    it('should visit checkbox page', async() => {
        await checkboxPage.visit();
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

    it('should visit challengind dom page', async() => {
        await challengingDomPage.visit();
    });

    it('should visit file upload page', async() => {
        await fileUploadPage.visit();
    });
});
