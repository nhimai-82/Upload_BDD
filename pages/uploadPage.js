// @ts-check
const { expect } = require('@playwright/test');
class UploadPage {

  constructor(page) {
    this.page = page;
    this.fileInput = this.page.locator("input[id='uploadfile_0']");
    this.btnSubmit = this.page.locator("#submitbutton");
    this.chkAcceptTerm = this.page.locator ("#terms");
    this.responseMessage = this.page.locator("#res");

  }

  async navigateToUploadPage() {

    await this.page.goto('https://demo.guru99.com/test/upload/'); 
  }

  async selectFile(filePath) {

    await this.fileInput.setInputFiles(filePath);
  }

  async setTerms(accept) {
    
    if (accept)
    {
      await this.chkAcceptTerm.check();
    }
    else {
      await this.chkAcceptTerm.uncheck();
    }

  }

  async clickSubmitButton() {
    
    await this.btnSubmit.click();
    setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, 1000);
    await this.page.waitForSelector('.active', {state:'hidden'});
    // await expect(this.page.locator('.active')).toBeHidden()

  }

  async getSuccessMessage() {
    
    let successMessage = await this.responseMessage.allTextContents();
    successMessage = String(successMessage); 
    successMessage = successMessage.replace(/(\r\n|\n|\r)/gm, "");
    return successMessage;
    }

 
 
}

module.exports = UploadPage;