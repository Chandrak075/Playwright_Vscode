const {test , expect} = require("@playwright/test");


    //before each - sabu test start haba aagaru ye run kariba
    //after each - sabu test block end re ye run kariba
    //before all - ye 1 thara run kariba test aarambharu
    //after all - ye 1 thara run kariba test end re.


    test.beforeEach(async ({ page }) => {
        // Login
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await page.getByPlaceholder("Username").fill("Admin");
        await page.getByPlaceholder("Password").fill("admin123");
        await page.locator("button[type='submit']").click();
        // Wait for home page to load
        await page.waitForSelector(".oxd-userdropdown-icon");
    }); // ye 2 ta jaka hooks pain login kama kariba



    test.afterEach(async ({page}) => {
        //Logout karib 2 ta jaka hooks test ku
        await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click();
        await page.locator("//a[normalize-space()='Logout']").click();
        await page.waitForTimeout(2000);

    });



    test("Hooks test 1", async ({page}) => {
    
        //Login before each ru aasiba
        //Home page
        await page.locator("//span[normalize-space()='PIM']").click();
        await page.waitForTimeout(2000);
        const prod = await page.$$(".oxd-table-card");
        await expect(prod).toHaveLength(50);

        //log out aftereach ru aasiba
    });



    test("Hooks test 2", async ({page}) => {

        //Login before each ru aasiba
        //Home page
        await page.locator("//span[normalize-space()='PIM']").click();
        await page.waitForTimeout(2000);
        await page.locator("//div[@class='oxd-grid-4 orangehrm-full-width-grid']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]").fill("Amelia");
        await page.locator("button[type='submit']").click();
        await page.waitForTimeout(2000);
        expect (await page.locator("//div[contains(text(),'Amelia')]")).toHaveText("Amelia");

        //log out aftereach ru aasiba

    });