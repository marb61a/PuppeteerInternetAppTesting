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
    });

});
