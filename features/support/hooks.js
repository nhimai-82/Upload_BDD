const playwright = require('@playwright/test');
const { Before,BeforeStep, AfterStep, After } = require('@cucumber/cucumber');
const UploadPage = require('../../pages/uploadPage');
const { Status } = require('@cucumber/cucumber');

let uploadPage;
let page;

Before(async function () {
  const browser = await playwright.chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  page = await context.newPage();
  uploadPage = new UploadPage(page);
  this.uploadPage = uploadPage;
});

BeforeStep(function () {
  // This hook will be executed before all steps in a scenario with tag @foo
});


AfterStep(async function ({ result }) {
  if (result.status == Status.FAILED) {
      await new Promise(resolve => setTimeout(resolve, 500));
      await page.screenshot({ path: `screenshot_${Date.now()}.png` });
      
  }


});


After(function () {
  console.log("I am last to execute");
});

module.exports = { uploadPage };