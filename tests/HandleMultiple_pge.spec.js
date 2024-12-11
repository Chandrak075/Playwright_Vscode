const { test, expect, chromium } = require("@playwright/test");
const exp = require("constants");

test("Handle mutiple pages", async () => {

    const browser = await chromium.launch()
    const context  = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto("https://www.google.com/");
    await page2.goto("https://www.facebook.com/")

    await page1.waitForTimeout(2000);
    await page2.waitForTimeout(2000);
}); // 2 ata page aka bele lunch haba alaga alaga tab re.



test("Handle multiple tabs", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    // Navigate to the first page
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Click on a link that opens a new page
    const pagePromise = context.waitForEvent("page");
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    // Wait for the new page to be created
    const newPage = await pagePromise;


    // Assertions on the new page
    // await expect(newPage.locator("//h1")).toHaveText("Welcome to OrangeHRM, Inc");

    // Optionally wait for some time
    await page1.waitForTimeout(2000);

    // Close the browser
    await browser.close();
});