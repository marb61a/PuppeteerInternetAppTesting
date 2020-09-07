export default class HomePage{
    async visit(){
        await page.goto("https://the-internet.herokuapp.com/");
    }
}
