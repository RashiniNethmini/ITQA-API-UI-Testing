import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import {
  navigateToHomePage,
  selectSortOption,
  verifySortedProductsAscending,
  verifySortedProductsDescending,
} from '../../Definitions/alphabeticalSortdef';

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

When('selected {string} from the sort dropdown', async function (option: string) {
  await selectSortOption(page, option);
});

Then('the products should be sorted by name in ascending order', async function () {
  await verifySortedProductsAscending(page);
});

Then('the products should be sorted by name in descending order', async function () {
  await verifySortedProductsDescending(page);
});
