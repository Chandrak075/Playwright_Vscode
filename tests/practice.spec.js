const {expect, test}=  require("@playwright/test");

test("Login ", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await expect(page).toHaveTitle("OrangeHRM");
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")

    await page.locator("button[type='submit']")

    await expect(page.locator(".oxd-topbar-header-breadcrumb")).toHaveText("Dashboard");

    await page.waitForTimeout(5000)

    
})
//interview prasna thila