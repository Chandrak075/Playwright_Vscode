const{test, expect}= require("@playwright/test");


test("Visual Test (Same page)", async ({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await expect(page.locator('.custom-logo')).toHaveScreenshot('Practice_page.png');
});


test("Visual Test (Different page) (Ye sabu bele fail haba au difference dekhei dava)", async ({page}) => {
    await page.goto("https://timesofindia.indiatimes.com/");
    await expect(page).toHaveScreenshot('TimesOfIndia_page.png');
});


test("Visual Test (Full page)", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await expect(page).toHaveScreenshot("Fullpage.png",{fullPage: true});
});


// test("Ignore if the pixel diff 800 (800 maximum level playwright allow, yathu adhika habni km hei pariba.)", async ({page}) =>{

//     await page.goto("https://practicetestautomation.com/practice-test-login/");
//     await expect(page).toHaveScreenshot("Fullpage.png",{maxDiffPixels: 800});
// });


// test("remove adds from visual testing", async ({page}) => {
//     await page.goto("https://practicetestautomation.com/practice-test-login/")
//     await page.locator("").click();
    
// });