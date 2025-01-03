import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import {
  
  fillContactFormValid,
  submitForm,
  verifySuccessMessage,
  fillContactFormInvalid,
  verifyErrorMessages,
  registerUser,
  loginUser,
  navigateToContactPage,
  fillContactFormUser,
  verifyMessageInMyMessages,
  GoToContactPage
} from '../../Definitions/contactFormdef';

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given("Im a registered user", async function () {
  await registerUser(this.page);
});

Given("I have logged in to the site", async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
  }
  await loginUser(page, 'randomuser@gmail.com', 'RANDOm12@');
});


Given("I'm in the contact form page", async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  }
  await GoToContactPage(page);

});

When('I click on the contact button', async function () {
  await navigateToContactPage(page);
});

When('I add all valid details', async function () {
  await fillContactFormValid(page, 'Morgan', 'Freeman', 'morgan.freeman@example.com', 'customer-service', 'This is a sample message with less than fifty characters for testing purposes.');
});

When('I add invalid details', async function () {
  await fillContactFormInvalid(page, 'morgan.freeman', 'Message with less than fifty characters.');
});

When('I add required details', async function () {
  await fillContactFormUser(page, 'customer-service', 'This is a sample message with more than fifty characters for testing purposes.');
  await submitForm(page);
});


When('I press submit', async function () {
  await submitForm(page);
});


Then('there has to be error messages', async function () {
  await verifyErrorMessages(page);
});


Then('the form must be submitted', async function () {
  await verifySuccessMessage(page);
});

Then('the message must be shown in my messages', async function () {
  await verifyMessageInMyMessages(page, /customer-service.*This is a sample message.*NEW/);
});
