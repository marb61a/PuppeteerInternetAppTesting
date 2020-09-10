import RedirectPage from '../pages/RedirectPage';

describe('Redirect Page tests', () => {
    let redirectPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        redirectPage = new RedirectPage();
    });

    it('should visit redirect page', async() => {
        await redirectPage.visit();
    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/redirect.png",
            fullPage: true
        });
    });

});
