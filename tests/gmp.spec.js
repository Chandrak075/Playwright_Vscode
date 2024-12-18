const { test } = require("@playwright/test");

test.describe("Live IPO GMP Extractor", () => {
  const BASE_URL = "https://www.investorgain.com/report/live-ipo-gmp/331/";

  const extractIPOData = async (page, row) => {
    const nameSelector = `//tbody/tr[${row}]/td[1]/a[1]`;
    const valueSelector = `//tbody/tr[${row}]/td[4]/b[1]`;
    const singleSelector = `//tbody/tr[${row}]/td[7]`;
    const profitSelector = `//tbody/tr[${row}]/td[3]/b[1]`;

    await page.waitForSelector(nameSelector);
    const name = await page.locator(nameSelector).innerText();
    const value = await page.locator(valueSelector).innerText();
    const single = parseFloat(await page.locator(singleSelector).innerText());
    const profit = parseFloat(await page.locator(profitSelector).innerText());

    return { name, value, single, profit };
  };

  const calculateAndLogProfit = ({ name, value, single, profit }) => {
    const totalProfit = single * profit;
    console.log(`${name} - ${value} - ${totalProfit}`);
  };

  test("Test 1: Extract data for first IPO", async ({ page }) => {
    await page.goto(BASE_URL);
    const ipoData = await extractIPOData(page, 2);
    calculateAndLogProfit(ipoData);
  });

  test("Test 2: Extract data for second IPO", async ({ page }) => {
    await page.goto(BASE_URL);
    const ipoData = await extractIPOData(page, 3);
    calculateAndLogProfit(ipoData);
  });

  test("Test 3", async ({ page }) => {
    await page.goto(BASE_URL);
    const ipoData = await extractIPOData(page, 4);
    calculateAndLogProfit(ipoData);
  });

  test("Test 4", async ({ page }) => {
    await page.goto(BASE_URL);
    const ipoData = await extractIPOData(page, 5);
    calculateAndLogProfit(ipoData);
  });

  test("Test 5", async ({ page }) => {
    await page.goto(BASE_URL);
    const ipoData = await extractIPOData(page, 6);
    calculateAndLogProfit(ipoData);
  });

  test("Test 6", async ({ page }) => {
    await page.goto(BASE_URL);
    const ipoData = await extractIPOData(page, 8);
    calculateAndLogProfit(ipoData);
  });

  test("Test 7", async ({ page }) => {
    await page.goto(BASE_URL);
    const ipoData = await extractIPOData(page, 9);
    calculateAndLogProfit(ipoData);
  });

  test("Test 8", async ({ page }) => {
    await page.goto(BASE_URL);
    const ipoData = await extractIPOData(page, 10);
    calculateAndLogProfit(ipoData);
  });

  test("Test 9", async ({ page }) => {
    await page.goto(BASE_URL);
    const ipoData = await extractIPOData(page, 11);
    calculateAndLogProfit(ipoData);
  });
});