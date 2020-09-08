import BasePage from './BasePage';

export default class CheckboxPage extends BasePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/checkboxes");
    }
}
