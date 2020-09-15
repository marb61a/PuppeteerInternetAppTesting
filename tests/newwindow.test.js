import NewWindowPage from '../pages/NewWindowPage';

describe('New Window Page tests', () => {
    let newWindowPage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        newWindowPage = new NewWindowPage();
    });

    it('should visit new-window page', async() => {
        await newWindowPage.visit();
    });

    it('should open a new browser tab', async () => {
        await page.waitForSelector('.example');

        // When clicking the element a new browser tab will
        // be opened
        await page.click('.example');
        
        await page.waitFor(5000);
    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/newwindow.png",
            fullPage: true
        });
    });

});
