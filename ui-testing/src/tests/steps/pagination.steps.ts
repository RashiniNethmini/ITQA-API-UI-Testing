import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import { expect } from '@playwright/test';
import { navigateToHomePage, clickPageNumber, getCurrentPageNumber, getProductNames } from '../../Definitions/paginationdef';

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given("I am on the home page now", async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: true }); // Set to false for debugging
    context = await browser.newContext();
    page = await context.newPage();
  }
  await navigateToHomePage(page);
});

When("I click on {string} in the pagination", async function (pageNumber: string) {
  await clickPageNumber(page, pageNumber);
});

Then("I should be navigated to the second page", async function () {
  const currentPage = await getCurrentPageNumber(page);
  expect(currentPage).toBe("2");
});

Then("the products displayed should be updated for the second page", async function () {
  const productNames = await getProductNames(page);
//   console.log('Products on second page:', productNames);
  expect(productNames.length).toBeGreaterThan(0); // Ensure there are products
  
  const page1Products = [
    "Pliers",
    "Bolt Cutters",
    "Long Nose Pliers",
    "Slip Joint Pliers",
    "Claw Hammer with Shock Reduction Grip",
    "Hammer",
    "Claw Hammer",
    "Thor Hammer"
  ];

  page1Products.forEach(productName => {
    expect(productNames).not.toContain(productName); // Ensure none of these products are on Page 2
  });
});
