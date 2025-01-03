import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import {
  navigateToHomePage,
  selectOptionFromSortDropdown,
  verifyProductsSortedByPrice,
} from '../../Definitions/priceSortdef';

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given('I navigate to the Home Page', async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  }
  await navigateToHomePage(page);
});

When('I select {string} from the sort dropdown', async function (option: string) {
  await selectOptionFromSortDropdown(page, option);
});

Then('the products should be sorted by price in ascending order', async function () {
  await verifyProductsSortedByPrice(page, false);  // false for ascending order
});

Then('the products should be sorted by price in descending order', async function () {
  await verifyProductsSortedByPrice(page, true);  // true for descending order
});
