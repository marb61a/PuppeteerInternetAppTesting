import ContextMenuPage from '../pages/ContextMenuPage';

describe('Context Menu Page tests', () => {
    let contextMenuPage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        contextMenuPage = new ContextMenuPage();
    });

    it('should visit context-menu page', async() => {
        // await page.on('displayMessage', async ()=> {
        //     await displayMessage.dismiss();
        // });

        await contextMenuPage.visit();
    });

    it('should generate a JS alert', async() => {
        await page.waitForSelector('#hot-spot');

        // Using the right hand button to click
        await page.click('#hot-spot', {
            button: 'right'
        });
    
    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/contextmenu.png",
            fullPage: true
        });
    });

});
