import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page ,BrowserContext} from 'playwright';
import { PriceSliderPage } from '../../pageObjects/PriceSliderPage';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';


let browser: Browser;
let page: Page;
let context: BrowserContext;

// Given('I am on the home page', async function () {

// });


//use timer if requried

Given("I am on the home page", async function () {
  if (!browser) {
      browser = await chromium.launch({ headless: true });
      context = await browser.newContext();
      page = await context.newPage();
  }
  await page.goto('https://practicesoftwaretesting.com/');

  const title = await page.title();
  expect(title).toBe('Practice Software Testing - Toolshop - v5.0');


});

When('I see the price range slider', async function (this: CustomWorld) {
  // Wait for the entire slider to be visible
  const slider = this.page.locator('ngx-slider');
  await slider.waitFor({ state: 'visible', timeout: 5000 });
  
  // Wait for the individual handles to appear
  const sliderMinHandle = this.page.locator('span.ngx-slider-pointer-min');
  const sliderMaxHandle = this.page.locator('span.ngx-slider-pointer-max');
  
  // Ensure that the handles exist in the DOM
  await sliderMinHandle.waitFor({ state: 'visible', timeout: 5000 });
  await sliderMaxHandle.waitFor({ state: 'visible', timeout: 5000 });

  // Validate that both the handles are visible and interactable
  await expect(sliderMinHandle).toBeVisible({ timeout: 5000 });
  await expect(sliderMaxHandle).toBeVisible({ timeout: 5000 });
});







