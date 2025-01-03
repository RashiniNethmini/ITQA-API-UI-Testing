import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import {
  navigateToHomePage,
  clickLanguageButton,
  clickDutchOption,
  verifyOptionIsDutch,
  verifyLanguageIsDutch,
} from '../../Definitions/changeLanguagedef';

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given("I am on the home page", async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  }
  await navigateToHomePage(page);
});

When("I click on the language button", async function () {
  await clickLanguageButton(page);
});

When("I click on the Dutch option", async function () {
  await clickDutchOption(page);
});

Then("the option must turn to Dutch", async function () {
  await verifyOptionIsDutch(page);
});

Then("the language must turn to Dutch", async function () {
  await verifyLanguageIsDutch(page);
});
