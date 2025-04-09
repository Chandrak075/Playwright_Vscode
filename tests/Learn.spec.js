const { expect, test } = require("@playwright/test");
const exp = require("constants");
const { beforeEach } = require("node:test");

// Test to validate Google homepage
test("Login", async ({ page }) => {
    await page.goto("https://www.google.com");
    
    // Check the title of the page
    await expect(page).toHaveTitle("Google");

    // Check the URL of the page
    await expect(page).toHaveURL("https://www.google.com/");

    // Capture the URL and print it to the terminal
    const pageurl = page.url();
    console.log("Page URL is :- ", pageurl);

    // Close the page
    await page.close();
});



// Test to validate built-in locators on OrangeHRM login page
test("Playwright Built-in locators", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Check if an image with the alt text "company-branding" is visible
    const textAlt = page.getByAltText("company-branding");
    await expect(textAlt).toBeVisible();

    // Fill the username and password fields using placeholders
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    // Click the submit button
    await page.getByRole("button", { type: 'submit' }).click();

    // Wait for a few seconds
    // await page.waitForTimeout(3000);
});



// Test with assertions to validate various elements on OrangeHRM login page
test("Assertions: - Validation for a webpage testing", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Validate the URL
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Validate the title
    await expect(page).toHaveTitle("OrangeHRM");

    // Check if the login branding is visible
    await expect(page.locator(".orangehrm-login-branding")).toBeVisible();

    // Check if the submit button is enabled
    await expect(page.locator("button[type='submit']")).toBeEnabled();

    // Validate the attribute of the submit button
    await expect(page.locator("button[type='submit']")).toHaveAttribute('type', 'submit');

    // Check if the login heading has the correct text //hear we need to paas full text 
    await expect(page.locator("//h5[normalize-space()='Login']")).toHaveText("Login");

    //hear we need to paas partial value.//arhire half text dele b chaliba.
    await expect(page.locator("//h5[normalize-space()='Login']")).toContainText("Log");

    await page.getByPlaceholder("Username").fill("Hello");
    await expect(page.getByPlaceholder("Username")).toHaveValue("Hello");

    //drop down re kete ta value achhi count pain use hue.
    // await (page.locator("")).toHaveCount();
});



test("Hard assertion vs Soft assertion", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");

    // Hard Assertions:
    await expect(page).toHaveTitle("Register"); // Check the title of the page
    await expect(page).toHaveURL("https://demo.automationtesting.in/Register.html"); // Check the URL of the page
    await expect(page.locator("//h2[normalize-space()='Register']")).toBeVisible(); // Check if the Register header is visible

    // Soft Assertions:
    // We use the 'soft' keyword with expect to perform soft assertions
    await expect.soft(page.locator("//h2[normalize-space()='Register']")).toHaveText("Register"); // This will not stop the test if it fails
    await expect.soft(page).toHaveURL("https://demo.automationtesting.in/Register.html"); // This will not stop the test if it fails

    // Add a wait to observe the behavior
    // await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});



test("Handle Dropdown menu", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Register.html");

    await page.locator("#Skills").selectOption({label: 'C'});

    //check particular option present in dropdown or not.
    const textCon = await page.locator("#Skills").textContent();
    await expect(textCon.includes('HTML')).toBeTruthy();
    // await page.waitForTimeout(3000);
});



test('select multiple options from multi-select dropdown', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select multiple options from the dropdown
    await page.selectOption('#colors', ['Blue', 'Red']);

    // Get all options and validate the count
    const options = await page.locator('#colors option');
    const optionCount = await options.count();
    console.log('Total number of options:', optionCount);

    // Check the presence of specific options in the dropdown
    const optionTexts = await options.allTextContents();
    console.log('Options:', optionTexts);
    await expect(optionTexts.includes('Red')).toBeTruthy();
    await expect(optionTexts.includes('Blue')).toBeTruthy();

    // await page.waitForTimeout(3000);
});



test("Handle Bootstrap dropdown", async ({ page }) => {

    // Navigate to the target URL
    await page.goto("https://getbootstrap.com/docs/5.0/components/dropdowns/"); // Example Bootstrap dropdown page

    // Click to open the dropdown (update the selector to target the correct dropdown button on your page)
    await page.click('.dropdown-toggle');

    // Select options within the dropdown (update the selector to target your dropdown options)
    const options = await page.$$("ul>li label");
    
    for (let option of options) {
        const value = await option.textContent();
        console.log("Value is : - ", value);

        if (value.includes('Angular') || value.includes('Java')) {
            await option.click();
        }
    }

    // Wait for a while to see the result
    await page.waitForTimeout(3000);
});



test("Handle hidden dropdown", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("button[type='submit']").click();
    await page.locator("//span[normalize-space()='PIM']").click();

    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();

    await page.waitForTimeout(3000);

    const options  = await page.$$("//div[@role='listbox']//span");

    for (let option of options)
        {
            const jobTitle = await option.textContent();
            // console.log(jobTitle);
            if(jobTitle.includes("QA Engineer")) {
                await option.click();
            }
        }

        await page.waitForTimeout(5000);
});



test("Alert with ok button only", async ({ page }) => {

    //Alert with ok button only
    await page.goto("https://testautomationpractice.blogspot.com/");
    

    page.on('dialog' , async dialog =>{
        // expect(dialog.type()).toContain('alert')
        // expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();
    })

    await page.locator('#alertBtn').click()
    await page.waitForTimeout(1000);

});   



test("Alert with ok and confirm button only", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    

    page.on('dialog' , async dialog =>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain("Press a button!");
        await dialog.accept(); // close by using ok button
        //await dialog.dismiss();//close using cancel button
    })
    await page.click("#confirmBtn");
    await expect(page.locator("#demo")).toHaveText("You pressed OK!");
    await page.waitForTimeout(3000);

});



test("Prompt popop alert box", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    page.on('dialog' , async dialog =>{
        // expect(dialog.type()).toContain('prompt')
        // expect(dialog.message()).toContain("Please enter your name:");
        // expect(dialog.defaultValue()).toContain('Harry Pott')
        await dialog.accept('CK'); // close by using ok button
        //await dialog.dismiss();//close using cancel button
    })

    await page.click("#promptBtn");
    await expect(page.locator("#demo")).toHaveText("Hello CK! How are you today?");
    // await page.waitForTimeout(3000);

});



test("Handle Table", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    //Extract total no of row and columns
    const columns = await table.locator('thead tr th');
    console.log(await columns.count());

    const rows = await table.locator('tbody tr')
    console.log(await rows.count());

    expect(await rows.count()).toBe(5)
    expect(await columns.count()).toBe(4)


    const matchedRow = rows.filter({
        has: page.locator("td"),
        hasText: 'product 4',
    })

    await matchedRow.locator('input').check()

    await page.waitForTimeout(3000);

});



test("Handle Date picker", async ({ page }) =>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill("#datepicker", "03/15/2024");

    await page.waitForTimeout(3000);
});



test("Mouse Event handling", async ({ page }) => {

    await page.goto("https://stqatools.com/demo/MouseHover.php");

    //Mouse hover
    await page.locator(".dropbtn").hover();
    await page.getByText("Link 2").hover();


    //Mouse Right Click Action
    await page.locator(".dropbtn").click({button:'right'});
    await page.waitForTimeout(3000);

});



test('Mouse Double click updates label to 1', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://stqatools.com/demo/DoubleClick.php');

    // Double-click the button
    await page.locator("//button[normalize-space()='Click Me / Double Click Me!']").dblclick();

    // Get the text content of the label
   await expect(page.locator('#dblClicks')).toHaveCount(1);

    await page.waitForTimeout(3000);
});



test("Handle Mouse Drag and drop",async ({ page }) => {

    await page.goto("https://stqatools.com/demo/Drag&Drop.php");
    
    //source element
    const sourceE = await page.locator("#dragA")

    //Target element
    const trgetE = await page.locator("#dropBox")

    await sourceE.dragTo(trgetE); //drag and drop

    await page.waitForTimeout(3000);
});



test("Handle Keyboard Event", async ({ page }) => {

    await page.goto("https://stqatools.com/demo/Register.php");

    //copydata one box to another box
    await page.locator("#name").fill("ANDHERA KAYAAM RAHE");

    await page.keyboard.press('Control+A') //selec the text
    await page.keyboard.press("Control+C") //copy the text
    await page.keyboard.down("Tab") // press Tab key to go next box
    // await page.waitForTimeout(1000);
    await page.keyboard.press('Control+V') //paste the text second box

    // await page.waitForTimeout(3000);
});



test("Handle Upload single file from local Storage", async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    // Set the file for upload
    await page.locator("#filesToUpload").setInputFiles('C:\\Users\\rafta\\Downloads\\DOCX\\API Testing.pdf');

    // Verify the uploaded file
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText("API Testing.pdf");

    await page.waitForTimeout(2000);

    // Clear the file input
    await page.locator("#filesToUpload").setInputFiles([]);

    // Verify the file list is empty or shows "No Files Selected"
    await expect(page.locator("#fileList")).toHaveText('No Files Selected');

    // Optionally wait for some time to observe the action
    await page.waitForTimeout(3000);
});



test("Handle Upload Multiple files from local Storage", async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    // Set multiple files for upload
    await page.locator("#filesToUpload").setInputFiles([
        'C:\\Users\\rafta\\Downloads\\DOCX\\API Testing.pdf',
        'C:\\Users\\rafta\\Downloads\\DOCX\\download.pdf'
    ]);

    // Optionally wait for some time to observe the action
    await page.waitForTimeout(2000);

    // Verify the uploaded files
    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('API Testing.pdf');
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('download.pdf');

    // Optionally wait for some time to observe the action
    await page.waitForTimeout(2000);

    // Clear the file input
    await page.locator("#filesToUpload").setInputFiles([]);

    // Verify the file list is empty or shows "No Files Selected"
    await expect(page.locator("#fileList")).toHaveText('No Files Selected');

    // Optionally wait for some time to observe the action
    await page.waitForTimeout(2000);
});



test("Take Screenshot", async ({page}) => {

    await page.goto("https://www.sequelstring.com/");
    await page.screenshot({path:'tests/Screenshot/' +Date.now()+ 'HomePage.png'}); // path re first cotation re path aau second re screenshot image ra name kan haba seia lekha heichi. Date.now() file name re date au time lekhi deba.
    
    //take full page screenshot
    await page.screenshot({path:'tests/Screenshot/FullPage123.png', fullPage:true});

    //take screenshot  prticular element
    await page.locator("//div[@class='Box-sc-1pb9i7s-0 Grid-sc-d3zfyy-0 bIrTKs gtgEW']//div[2]").screenshot({path:'tests/Screenshot/'+Date.now()+'Perticular_element.png'});

    //convert image to base64
    // const buffer = await page.screenshot();
    // console.log(buffer.toString('base64'));

    await page.waitForTimeout(2000);
});



test("Handle multiple pages", async ({page}) => {

    await page.goto("");

});