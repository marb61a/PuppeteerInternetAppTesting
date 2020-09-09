import ContextMenuPage from '../pages/ContextMenuPage';

describe('Context Menu Page tests', async () => {
    let contextMenuPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        contextMenuPage = new ContextMenuPage();
    });

    it('should visit context-menu page', async() => {
        await contextMenuPage.visit();
    });

    it('should check the checkboxes', async () => {
        await page.waitForSelector('#checkboxes > input:nth-child(1)');
        await page.click('#checkboxes > input:nth-child(1)');
    });

});
