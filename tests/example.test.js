import HomePage from '../pages/HomePage';
import NewWindowPage from '../pages/NewWindowPage';
import KeyPressPage from '../pages/KeyPressPage';
import FileUploadPage from '../pages/FileUploadPage';

describe("Homepage visit", () => {
    let homePage;
    let newWindowPage;
    let keyPressPage;
    let fileUploadPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        homePage = new HomePage();
        newWindowPage = new NewWindowPage();
        keyPressPage = new KeyPressPage();
        fileUploadPage = new FileUploadPage();
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

    it('should visit file upload page', async() => {
        await fileUploadPage.visit();
    });
});
