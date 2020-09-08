import BasePage from './BasePage';

export default class NewWindowPage extends BasePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/windows");
    }
}
