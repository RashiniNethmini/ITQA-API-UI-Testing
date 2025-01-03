import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import { registerUser, loginUser, navigateToHomePage, addToFavorites, verifyFavorites } from '../../Definitions/addToFavouritesdef';

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given("I'm registered", async function () {
  await registerUser(this.page);
});

Given("I'm logged in", async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  }
  
  await loginUser(page, 'randomuser@gmail.com', 'RANDOm12@');
});

Given("I'm in the products page", async function () {
  await navigateToHomePage(page);
});

When("I add a product to my favourites", async function () {
  await addToFavorites(page);
});

Then("It should appear in my favourites", async function () {
  await verifyFavorites(page);
});
