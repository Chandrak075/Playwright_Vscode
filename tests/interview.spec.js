const {test , expect} = require("@playwright/test");


//thinksys round 1
test("Orange HRM Test", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(2000);
    let email = await page.locator("//p[text()='Username : Admin']").innerText();
    let pass = await page.locator("//p[text()='Password : admin123']").innerText();

    let newEmail = email.split(':')
    let newPass = pass.split(':')

    console.log(`Email = ${newEmail[1]}  and password = ${newPass[1]}`);
})