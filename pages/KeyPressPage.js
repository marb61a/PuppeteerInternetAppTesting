import BasePage from './BasePage';

export default class KeyPressPage extends BasePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/key_presses");
    }
}
