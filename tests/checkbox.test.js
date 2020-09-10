import CheckboxPage from '../pages/CheckboxPage';

describe('Checkbox page tests', () => {
    let checkboxPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        checkboxPage = new CheckboxPage();        
    });

    it('should visit checkbox page', async() => {
        await checkboxPage.visit();
    });

    it('should check the checkboxes', async () => {
        await page.waitForSelector('#checkboxes > input:nth-child(1)');
        await page.click('#checkboxes > input:nth-child(1)');

        // Will uncheck box that is checked when loading page
        await page.waitForSelector('#checkboxes > input:nth-child(3)');
        await page.click('#checkboxes > input:nth-child(3)');

        // Will ensure that both boxes are checked
        await page.click('#checkboxes > input:nth-child(3)');
    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/checkbox.png",
            fullPage: true
        });
    });

});
