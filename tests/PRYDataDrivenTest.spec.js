const { test, expect } = require('@playwright/test');
const data1 = require('../Testdata/PRYLogin.json');

test.describe('Data driven test', function () {
    data1.forEach((data, index) => {
        test(`Login test with data set ${index + 1}`, async ({ page }) => {
            await page.goto('https://demo-pry2.sequelstring.com/login/');

            await page.locator('#email').fill(data.username);
            await page.locator('#password').fill(data.pass);
            await page.locator("button[type='submit']").click();

            // await expect(page.locator('.css-njbp03')).toContainText('Invalid email or password');

            // Verify the error message
            if (data.username !== "rahul52us@gmail.com") {
                await expect(page.locator('.css-njbp03')).toContainText('Invalid email or password');
                let errorTexts = await page.locator(".css-njbp03").allInnerTexts();
                console.log('Wrong Email ID '+errorTexts);
            } 
            else if (data.pass !== "Rahul@123") {
                await expect(page.locator('.css-njbp03')).toContainText('unauthorized');
                let errorTexts2 = await page.locator(".css-njbp03").allInnerTexts();
                console.log('Email id was correct but password is wrong :'+errorTexts2);
            } 
            else {
                
                // If both username and password are correct, you may want to add a check for successful login 
                await expect(page.locator('.css-njbp03')).toContainText('Welcome Back!');
                let errorTexts3 = await page.locator(".css-njbp03").allInnerTexts();
                console.log("Login Sucessful "+errorTexts3);
                await page.locator("button[id='menu-button-:r8:']").click();
                await page.locator("button[id='menu-list-:r8:-menuitem-:rc:']").click();
                await page.waitForTimeout(500);

            }
        });
    });
});
