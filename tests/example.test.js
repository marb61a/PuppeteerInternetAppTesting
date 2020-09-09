import HomePage from '../pages/HomePage';
import NewWindowPage from '../pages/NewWindowPage';
import RedirectPage from '../pages/RedirectPage';
import KeyPressPage from '../pages/KeyPressPage';
import FileUploadPage from '../pages/FileUploadPage';

describe("Homepage visit", () => {
    let homePage;
    let newWindowPage;
    let redirectPage;
    let keyPressPage;
    let fileUploadPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
        newWindowPage = new NewWindowPage();
        redirectPage = new RedirectPage();
        keyPressPage = new KeyPressPage();
        fileUploadPage = new FileUploadPage();
    });

    it('Homepage should work', async () => {
        await homePage.visit();
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

    it('should visit file upload page', async() => {
        await fileUploadPage.visit();
    });
});
