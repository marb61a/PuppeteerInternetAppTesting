import KeyPressPage from '../pages/KeyPressPage';

describe('Keypress tests', () => {
    let keyPressPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        keyPressPage = new KeyPressPage();
    });

    it('should visit key press page', async() => {
        await keyPressPage.visit();
    });

});
