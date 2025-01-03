import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import {
  
  fillContactFormValid,
  submitForm,
  verifySuccessMessage,
} from '../../Definitions/contactFormdef';

let browser: Browser;
let page: Page;
let context: BrowserContext;



Given("I'm in the contact form page", async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  }
  await page.goto('https://practicesoftwaretesting.com/contact', { waitUntil: 'networkidle' });
});

When('I add all valid details', async function () {
  await fillContactFormValid(page, 'Morgan', 'Freeman', 'morgan.freeman@example.com', 'customer-service', 'This is a sample message with less than fifty characters for testing purposes.');
});


When('I press submit', async function () {
  await submitForm(page);
});

Then('the form must be submitted', async function () {
  await verifySuccessMessage(page);
});

