import EntryAdPage from '../pages/EntryAdPage';

describe('Context Menu Page tests', async () => {
    let entryAdPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        entryAdPage = new EntryAdPage();
    });

    it('should visit entry ad page', async() => {
        await entryAdPage.visit();
    });

});
