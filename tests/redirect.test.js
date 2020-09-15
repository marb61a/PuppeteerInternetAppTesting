import RedirectPage from '../pages/RedirectPage';

describe('Redirect Page tests', () => {
    let redirectPage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        redirectPage = new RedirectPage();
    });

    it('should visit redirect page', async() => {
        await redirectPage.visit();
    });

    it('should go to a new url', async() => {
        await page.waitForSelector('#redirect');

        // Clicking the link on the page should change page to the 
        // status codes page
        await page.click('#redirect');

        // Will need to add a delay to be able to avoid error from moving
        // to a new page. Screenshot taken will also show the redirected page
        await page.waitFor(5000);
    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/redirect.png",
            fullPage: true
        });
    });

});
