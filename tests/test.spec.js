const { test } = require('@playwright/test');
const Flipkart = require('../pages/flipkart');

test('Run in two tabs using POM', async ({ browser }) => {
  
  const context = await browser.newContext();

  // Open first tab
  const page1 = await context.newPage();
  const flipkart1 = new Flipkart(page1);
  await page1.goto('https://www.flipkart.com');
  await flipkart1.getDetails();

  // Open second tab
  const page2 = await context.newPage();
  const flipkart2 = new Flipkart(page2);
  await page2.goto('https://www.flipkart.com');
  await flipkart2.getDetails();


//It will trigger both the tab parallely. just comment line 11,12,17,18 then run it.
/*await Promise.all([
    page1.goto('https://www.flipkart.com'),
    page2.goto('https://www.flipkart.com')
  ]);
  
  await Promise.all([
    flipkart1.getDetails(),
    flipkart2.getDetails()
  ]);*/
  
});
