const { test } = require("@playwright/test");

test("Screenshot of captcha", async ({ page }) => {
    await page.goto("https://www.mca.gov.in/mcafoportal/login.do");

    for (let i = 0; i < 50; i++) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const path = `tests/Onlytest/${timestamp}-Captcha-${i}.png`;
        
        await page.locator("#captcha").screenshot({ path });
        await page.locator('img[title="Refresh"]').click();
        await page.waitForTimeout(500);
    }

    await page.close();
});