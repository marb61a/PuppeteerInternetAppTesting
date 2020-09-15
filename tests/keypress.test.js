import KeyPressPage from '../pages/KeyPressPage';

describe('Keypress tests', () => {
    let keyPressPage;

    beforeAll(async () => {
        jest.setTimeout(15000);
        keyPressPage = new KeyPressPage();
    });

    it('should visit key press page', async() => {
        await keyPressPage.visit();
    });

    it('should enter keys into the input nox', async() => {
        // Entering a key into the input box, this will be
        // automatically overwritten by the next typed character
        // in the message below the text input
        await page.waitForSelector('#target');
        
        // Screenshot should show n as it is the final letter in the 
        // result element, the input will show martin, alphabetical
        // characters will be raised to uppercase if not already
        await page.type('#target', 'Martin');

    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/keypress.png",
            fullPage: true
        });
    });

});
