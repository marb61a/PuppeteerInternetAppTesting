import ChallengingDomPage from '../pages/ChallengingDomPage';

describe('Challenging DOM Page tests', () => {
    let challengingDomPage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        challengingDomPage = new ChallengingDomPage();
    });

    it('should visit challenging DOM page', async() => {
        await challengingDomPage.visit();
    });

});
