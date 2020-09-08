import BasePage from './BasePage';

export default class ChallengingDomPage extends BasePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/challenging_dom");
    }
}
