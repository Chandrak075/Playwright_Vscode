import { test, expect } from '@playwright/test';

test('Todays Top Loosers', async ({ page }) => {
  await page.goto("https://ticker.finology.in/market/top-losers");

  let val = await page.locator("//td[@class='left']//a").count();
  console.log("Total items:", val);

  if (val === 0) {
    console.log("No data Found Today");
  }
  else {
  for (let i = 0; i < val; i++) {

    let row = await page.locator(`//tr[@data-index="${i}"]`)
    let name = await row.locator("//td[@class='left']//a").textContent()
    let amount = await row.locator("//td[@class='Number']").textContent()
    console.log(`Stock Name = ${name} , Last Trade Amount= ${amount}`);
    }}
});


test("Todays Top gainers", async ({ page }) => {
  await page.goto("https://ticker.finology.in/market/top-gainers");

  let val = await page.locator("//td[@class='left']//a").count();
  console.log("Total items:", val);

  if (val === 0) {
    console.log("No data Found Today");
  }
  else {
  for (let i = 0; i < val; i++) {

    let row = await page.locator(`//tr[@data-index="${i}"]`)
    let name = await row.locator("//td[@class='left']//a").textContent()
    let amount = await row.locator("//td[@class='Number']").textContent()
    console.log(`Stock Name = ${name} , Last Trade Amount= ${amount}`);
  }}
});