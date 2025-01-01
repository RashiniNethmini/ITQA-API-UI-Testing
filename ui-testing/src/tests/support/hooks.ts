import { Before, After, setDefaultTimeout  } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page  } from "@playwright/test";
import { CustomWorld } from './world';

let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
  await this.init(context, page);
});

After(async function () {
  await context.close();
  await browser.close();
});