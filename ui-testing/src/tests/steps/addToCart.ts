import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import {
  navigateToPlierProductPage,
  clickAddToCartButton,
  goToCart,
  verifyItemInCart,
} from '../../Definitions/cartdef';

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given("I navigate to the Combination Plier product page", async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
  }
  await navigateToPlierProductPage(page);
});

When("I click on the Add to Cart Button", async function () {
  await clickAddToCartButton(page);
});

When("I go to my Cart by pressing on cart button", async function () {
  await goToCart(page);
});

Then("the item must appear in the cart", async function () {
  await verifyItemInCart(page);
});
