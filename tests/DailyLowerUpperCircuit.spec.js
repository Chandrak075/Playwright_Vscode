// const { test, expect } = require('@playwright/test');


//  // Generate a timestamp
//  const generateTimestamp = () => {
//     const now = new Date();
//     return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}_${String(now.getHours()).padStart(2, '0')}-${String(now.getMinutes()).padStart(2, '0')}-${String(now.getSeconds()).padStart(2, '0')}`;
// };
// const timestamp = generateTimestamp();



// test("Daily Upper circuit Stocks", async ({ page }) => {
   
//     await page.goto("https://www.moneycontrol.com/stocks/marketstats/onlybuyers.php");
//     await page.locator("table[width='100%'][border='0']").screenshot({ path: `tests/screenshot/Upper_Circuit_${timestamp}.png` });
// });


// test("Daily Lower circuit Stocks", async ({ page }) => {

//     await page.goto("https://www.moneycontrol.com/stocks/marketstats/onlysellers.php");
//     await page.locator("table[width='100%'][border='0']").screenshot({ path: `tests/screenshot/Lower_Circuit_${timestamp}.png` });
// });
