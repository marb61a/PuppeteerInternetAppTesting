import ChallengingDomPage from '../pages/ChallengingDomPage';

describe('Context Menu Page tests', async () => {
    let challengingDomPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        challengingDomPage = new ChallengingDomPage();
    });

    it('should visit challenging DOM page', async() => {
        await challengingDomPage.visit();
    });

});
