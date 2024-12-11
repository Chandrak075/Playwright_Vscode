const { test, expect } = require('@playwright/test');
const data1 = require('../Testdata/LoginTest.json');

// test.describe('Data driven test', function () {
    data1.forEach((data, index) => {
        test(`Login test with data set ${index + 1}`, async ({ page }) => {
            await page.goto('https://practicetestautomation.com/practice-test-login/');

            await page.locator('#username').fill(data.username);
            await page.locator('#password').fill(data.pass);
            await page.locator('#submit').click();

            // Verify the error message
            if (data.username !== "student") {
                await expect(page.locator('#error')).toContainText('Your username is invalid!');
                let errorTexts = await page.locator("#error").allInnerTexts();
                console.log(errorTexts);
            } else if (data.pass !== "Password123") {
                await expect(page.locator('#error')).toContainText('Your password is invalid!');
                let errorTexts2 = await page.locator("#error").allInnerTexts();
                console.log(errorTexts2);
            } else {
                // If both username and password are correct, you may want to add a check for successful login
                await expect(page.locator('.post-title')).toContainText('Logged In Successfully');
                let errorTexts3 = await page.locator(".post-title").allInnerTexts();
                console.log(errorTexts3);
                await page.getByText("Log out").click();
            }
        });
    });
// });
