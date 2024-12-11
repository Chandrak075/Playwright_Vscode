const { test, expect } = require('@playwright/test');
const data2 = require('../Testdata/NSEData.json');

// test.describe('NSE data extractor', () => {
    data2.forEach((data, index) => {
        test(`Stock ${index+1}: Extract data for stock ${data.stock}`, async ({ page }) => {
            await page.goto(`https://www.nseindia.com/get-quotes/equity?symbol=${data.stock}`);

            // Wait for the elements to be available
            await page.waitForSelector('#orderSellTq', { timeout: 10000 });
            await page.waitForSelector('#orderBuyTq', { timeout: 10000 });
            await page.waitForSelector('#quoteLtp', { timeout: 10000 });
            await page.waitForSelector('#priceInfoStatus', { timeout: 10000 });

            // Extract the text content from the elements
            const textSell = await page.locator('#orderSellTq').innerText();
            const textBuy = await page.locator('#orderBuyTq').innerText();
            const currentPrice = await page.locator('#quoteLtp').innerText();
            const currentPercent = await page.locator('#priceInfoStatus').innerText();

            // Log the text content in the desired format
            console.log(`Stock: ${data.stock} - Current Price: ${currentPrice}, Percentage: ${currentPercent}, Buy: ${textBuy}, Sell: ${textSell}`);

            // Optionally, you can make assertions
            // expect(textBuy).not.toBeNull();
            // expect(textSell).not.toBeNull();
        });
    });
// });
