const {test , expect, chromium} = require("@playwright/test");

test("Print all HTML code", async ()=> {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()

    await page1.goto("https://www.simplilearn.com/manual-testing-interview-questions-and-answers-article")
    const HtmlText = await page1.content() //print all page html code
    // console.log(HtmlText)

    const con = await page1.context()
    // console.log(con) //print all page context

    await page1.pdf({ path: 'tests/Screenshot/page.pdf', format:'A4' }); // print the whole web page in a PDF file, make a PDF file
})
