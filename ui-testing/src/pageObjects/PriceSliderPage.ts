import { Page } from 'playwright';

export class PriceSliderPage {
  private page: Page;
  private sliderMinHandle = '#slider-min-handle';
  private sliderMaxHandle = '#slider-max-handle';
  private productPrices = '.product-price'; // Selector for product prices

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(): Promise<void> {
    await this.page.goto('https://practicesoftwaretesting.com/');
  }


}
