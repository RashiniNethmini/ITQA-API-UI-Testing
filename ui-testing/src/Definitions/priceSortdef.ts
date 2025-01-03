import { Page } from 'playwright';
import { priceSortLocators } from '../Locators/priceSortLocators';
import { expect } from '@playwright/test';

export async function navigateToHomePage(page: Page) {
  await page.goto('https://practicesoftwaretesting.com/');
  const title = await page.title();
  expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
}

export async function selectOptionFromSortDropdown(page: Page, option: string) {
  const sortSelect = page.locator(priceSortLocators.sortSelect);
  await Promise.all([
    page.waitForSelector(priceSortLocators.sortSelect, { state: 'visible' }),
    page.waitForLoadState('load'),
  ]);
  await sortSelect.selectOption(option);  // Select the provided option
}

export async function verifyProductsSortedByPrice(page: Page, isDescending: boolean) {
  await page.waitForTimeout(2000); // Wait for products to load

  const productNames = await page.locator(priceSortLocators.productNames).allTextContents();
  const productPrices = await page.locator(priceSortLocators.productPrices).allTextContents();

  // Convert the price values to numbers and sort them accordingly
  const pricesWithNames = productPrices.map((price, index) => ({
    name: productNames[index],
    price: Number(price.replace(/[^\d.-]/g, '')) // Remove any non-numeric characters
  }));

  const sortedPrices = pricesWithNames.slice().sort((a, b) => isDescending ? b.price - a.price : a.price - b.price); // Sort by price
  const sortedNames = sortedPrices.map(item => item.name); // Extract sorted names based on prices

  // Validate that prices are sorted
  const actualPrices = pricesWithNames.map(item => item.price);
  const expectedPrices = sortedPrices.map(item => item.price);
  await expect(actualPrices).toEqual(expectedPrices);

  // Validate that names are sorted according to price order
  const actualNames = productNames;
  await expect(actualNames).toEqual(sortedNames);

//   console.log(`Sorted Product Prices (${isDescending ? 'desc' : 'asc'}):`, sortedPrices.map(item => item.price));
//   console.log(`Sorted Product Names (${isDescending ? 'desc' : 'asc'}):`, sortedNames);
}
