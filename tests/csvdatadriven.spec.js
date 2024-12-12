const { test, expect } = require("@playwright/test");
const fs = require("fs");
const csv = require("csv-parser");

// Function to read data from CSV
function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on("data", (data) => results.push(data))
            .on("end", () => resolve(results))
            .on("error", (error) => reject(error));
    });
}

test.describe("Data driven using CSV", () => {
    let testData;

    // Load test data before running tests
    test.beforeAll(async () => {
        testData = await readCSV("./Testdata/datadriven.csv"); // Update with your correct file path
    });

    test("Run data-driven tests", async ({ page }) => {
        for (const { TestCase, Username, Password } of testData) {
            console.log(`Running test: ${TestCase}`);

            // Navigate to the login page
            await page.goto("https://practicetestautomation.com/practice-test-login/");
            await page.locator("#username").fill(Username);
            await page.locator("#password").fill(Password);
            await page.locator("#submit").click();

            // Check if login was successful or failed
            if (Username === "student" && Password === "Password123") {
                const successMessage = await page.locator(".post-title").innerText();
                console.log(`Success: ${successMessage}`);
                await page.locator("//a[normalize-space()='Log out']").click();
                await page.waitForTimeout(500);
                // await expect(page.locator(".post-title")).toHaveText("Logged In Successfully");
            } else {
                const errorMessage = await page.locator("#error").innerText();
                console.log(`Error: ${errorMessage}`);
                // await expect(page.locator("#error")).toBeVisible(); 
            }
        }
    });
});
