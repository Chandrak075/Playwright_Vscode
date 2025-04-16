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


//infostride
test("Invalid login attempts with wrong ID and Password", async ({ page }) => {

    //Initialize the test for 3 minutes
    // test.setTimeout(180000);

    // Navigate to the login page and Fill in the ID and Password
    await page.goto("https://qa-app-01.qventus.com/login?next=/");
    await page.locator("#idp-discovery-username").fill("BadUser");
    await page.locator("#idp-discovery-submit").click();
    await page.waitForSelector("label[for='okta-signin-password']");
    await page.locator("#okta-signin-password").fill("BadPassword");
    await page.locator("#okta-signin-submit").click(); 

    // Validation Check
    await expect(page.locator("div[role='alert'] p")).toHaveText("Unable to sign in");

    // Set timeout to 2 minutes
    await page.waitForTimeout(120000);
}); // interview task thila



test("Handle Shadow DOM elements", async ({ page }) => {
    // await page.goto("https://books-pwakit.appspot.com/");
    // Select the input field inside shadow DOM and type text
    // await page.locator("book-app").locator("input#input").fill("Playwright Testing");

    await page.goto("https://www.cigna.com/medicare/")
    await page.waitForSelector("#zip-input-id-leaf")
    await page.locator("div[slot='form'] #zip-input-id-leaf").fill("11002");
    await page.waitForTimeout(2000)
}); // interview task thila


test("Shadow dom 2 ", async ({page}) => {

    await page.goto("https://practice.expandtesting.com/shadowdom");
    let value = await page.locator("#shadow-host #my-btn").innerText();
    console.log(value);
    await page.waitForTimeout(3000);
})