import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Page, BrowserContext } from 'playwright';

export class CustomWorld extends World {
  page!: Page;
  context!: BrowserContext;

  async init(context: BrowserContext, page: Page) {
    this.context = context;
    this.page = page;
  }
}

setWorldConstructor(CustomWorld);
