import EntryAdPage from '../pages/EntryAdPage';

describe('Entry Ad Page tests', () => {
    let entryAdPage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        entryAdPage = new EntryAdPage();
    });

    it('should visit entry ad page', async() => {
        await entryAdPage.visit();
    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/entryad.png",
            fullPage: true
        });
    });

});
