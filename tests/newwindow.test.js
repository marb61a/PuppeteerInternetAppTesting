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

    it('should open a new browser tab', async () => {
        
    })

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/newwindow.png",
            fullPage: true
        });
    });

});
