import BasePage from './BasePage';

export default class CheckboxPage extends BasePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/checkboxes");
    }

    async isCheckboxPresent(){
        await page.waitForSelector("#checkboxes");
    }

    // async checkCheckBox(){
    //     await page.waitForSelector('#checkboxes > input:nth-child(1)');
    //     await page.click('#checkboxes > input:nth-child(1)');
    // }

}
