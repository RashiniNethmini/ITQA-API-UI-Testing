import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import {
  navigateToHomePage,
  searchForTool,
  clickSearchButton,
  verifySearchedProduct,
} from '../../definitions/searchdef';

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given('I am in the Home Page', async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  }
  await navigateToHomePage(page);
});

When('I search for a specific tool', async function () {
  await searchForTool(page, 'Circular Saw');
});

When('I click on the search button', async function () {
  await clickSearchButton(page);
});

Then('I should see the product I searched', async function () {
  await verifySearchedProduct(page, 'Circular Saw');
});
