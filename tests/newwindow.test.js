import NewWindowPage from '../pages/NewWindowPage';

describe('New Window Page tests', () => {
    let newWindowPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        newWindowPage = new NewWindowPage();
    });

    it('should visit new-window page', async() => {
        await newWindowPage.visit();
    });

});
