import BasePage from './BasePage';

export default class EntryAdPage extends BasePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/entry_ad");
    }
}
