
const playwright = require('@playwright/test');
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { uploadPage } = require('../support/hooks'); // Import the uploadPage object from hooks.js

Given('I am on the Upload page', function() {
 this.uploadPage.navigateToUploadPage();
});

When('I select a {string} file within the allowed file size limit', async function (filename) {
  const filePath = `data/${filename}`; 
  await this.uploadPage.selectFile(filePath);
});

When('accept the terms', async function() {
  await this.uploadPage.setTerms(true);
});

When('not accept the terms', async function() {
  await this.uploadPage.setTerms(false);
});

When('click on the Submit button', function () {
  this.uploadPage.clickSubmitButton();
});

Then('I should see a {string} message', async function (statusMessage) {
  let expectedMessage ='';
  const successMessage = await this.uploadPage.getSuccessMessage();

  if (statusMessage==='success') {
      expectedMessage = "1 file has been successfully uploaded.";
      expect(expectedMessage).toEqual(successMessage);
  }
  else {
    expectedMessage = "1 file has been successfully uploaded.";
    expect(expectedMessage).not.toEqual(successMessage);
  }
  
  
});

