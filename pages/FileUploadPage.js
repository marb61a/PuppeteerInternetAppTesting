import BasePage from './BasePage';

export default class FileUploadPage extends BasePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/upload");
    }
}
