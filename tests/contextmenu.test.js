import ContextMenuPage from '../pages/ContextMenuPage';

describe('Context Menu Page tests', () => {
    let contextMenuPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        contextMenuPage = new ContextMenuPage();
    });

    it('should visit context-menu page', async() => {
        await contextMenuPage.visit();
    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/contextmenu.png",
            fullPage: true
        });
    });

});
