import FileUploadPage from '../pages/FileUploadPage';

describe('File upload tests', () => {
    let fileUploadPage;

    beforeAll(async () => {
        jest.setTimeout(10000);
        fileUploadPage = new FileUploadPage();
    });

    it('should visit file upload page', async() => {
        await fileUploadPage.visit();
    });

    it('should generate screenshot', async () => {
        await page.screenshot({
            path: "screenshots/fileupload.png",
            fullPage: true
        });
    });

});
