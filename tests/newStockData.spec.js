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



test("52 week High Stocks", async ({ page }) => {
    await page.goto("https://ticker.finology.in/market/52-week-high");
  
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
      let Day_high = await row.locator("span[class='Number']").textContent()
      console.log(`Stock Name = ${name} , Last Trade Amount= ${amount}, Day_high = ${Day_high}`);
    }}
  });




  test("52 week Low Stocks", async ({ page }) => {
    await page.goto("https://ticker.finology.in/market/52-week-low");
  
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
      let Day_low = await row.locator("span[class='Number']").textContent()
      console.log(`Stock Name = ${name} , Last Trade Amount= ${amount}, Day_Low = ${Day_low}`);
    }}
  });



// Test for Gold
test.only("Gold Only", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://www.goodreturns.in/gold-rates/");

    let GoldVal22 = await page.locator("//div[@id='moneyweb-container']//section[4]//table//tbody[1]//tr[3]//td[2]").textContent();
    let GoldVal22_change = await page.locator("//div[@id='moneyweb-container']//section[4]//table//tbody[1]//tr[3]//td[4]").textContent();
    console.log(`22 carat Gold 10 GM price Today = ${GoldVal22}, change Today = ${GoldVal22_change}`);

    let GoldVal24 = await page.locator("//div[@id='moneyweb-container']//section[5]//table//tbody[1]//tr[3]//td[2]").textContent();
    let GoldVal24_change = await page.locator("//div[@id='moneyweb-container']//section[5]//table//tbody[1]//tr[3]//td[4]").textContent();
    console.log(`24 carat Gold 10 GM price Today = ${GoldVal24}, change Today = ${GoldVal24_change}`);
    await page.close();
});

// Test for Silver
test.only("Silver Only", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://www.goodreturns.in/silver-rates/");

    let Silver1Kg = await page.locator("//div[@id='moneyweb-container']//section[5]//table//tbody[1]//tr[5]//td[2]").textContent();
    let Silver1Kg_change = await page.locator("//div[@id='moneyweb-container']//section[5]//table//tbody[1]//tr[5]//td[4]").textContent();
    console.log(`Today's Silver 1 KG price is= ${Silver1Kg}, change Today= ${Silver1Kg_change}`);
    await page.close();
});

// Test for Platinum
test.only("Platinum Only", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://www.goodreturns.in/platinum-price.html");

    let Platinum10g = await page.locator("//div[@id='moneyweb-container']//section[5]//table//tbody[1]//tr[3]//td[2]").textContent();
    let Platinum10g_change = await page.locator("//div[@id='moneyweb-container']//section[5]//table//tbody[1]//tr[3]//td[4]").textContent();
    console.log(`Today's Platinum 10g price is= ${Platinum10g}, change Today= ${Platinum10g_change}`);
    await page.close();
});
