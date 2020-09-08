import BasePage from './BasePage';

export default class ContextMenuPage extends BasePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/context_menu");
    }
}
