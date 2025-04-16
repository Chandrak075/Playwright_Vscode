const{test, expect} = require("@playwright/test")
class flipcart{
    constructor(page){
        this.page = page;
        this.bar = "input[class='Pke_EE']"
        // this.button= "//button[@type='submit']"
        this.phone="(//div[@class='KzDlHZ']) [1]"

    }

    async getDetails(){
        await this.page.fill(this.bar, "samsung mobile")
        await this.page.keyboard.press("Enter")
        await this.page.waitForTimeout(3000)
        await this.page.click(this.phone)
    }
    

}

module.exports = flipcart