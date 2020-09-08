import BasePage from './BasePage';

export default class RedirectPage extends BasePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/redirector");
    }
}
