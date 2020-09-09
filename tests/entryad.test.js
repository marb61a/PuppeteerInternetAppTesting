import EntryAdPage from '../pages/EntryAdPage';

describe('Entry Ad Page tests', () => {
    let entryAdPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        entryAdPage = new EntryAdPage();
    });

    it('should visit entry ad page', async() => {
        await entryAdPage.visit();
    });

});
