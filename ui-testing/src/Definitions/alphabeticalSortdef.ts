import { Page } from 'playwright';
import { alphabeticalSortLocators } from '../Locators/alphabeticalSortLocators';
import { expect } from '@playwright/test';
import { UI_BASE_URL } from '../config';

export async function navigateToHomePage(page: Page) {
  await page.goto(UI_BASE_URL);
  const title = await page.title();
  expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
}

export async function selectSortOption(page: Page, option: string) {
  const sortSelect = page.locator(alphabeticalSortLocators.sortSelect);
  
  await Promise.all([
      page.waitForSelector(alphabeticalSortLocators.sortSelect, { state: 'visible' }),
      page.waitForLoadState('load')
  ]);
  
  await sortSelect.selectOption(option);  
}

export async function verifySortedProductsAscending(page: Page) {
  await page.waitForTimeout(2000); 

  const productNames = await page.locator(alphabeticalSortLocators.productNames).allTextContents();
//   console.log('Product Names(asc):', productNames);

  const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b)); // Verify sorting
  await expect(productNames).toEqual(sortedNames);

//   console.log('Sorted Product Names(asc):', sortedNames);
}

export async function verifySortedProductsDescending(page: Page) {
  await page.waitForTimeout(2000); 

  const productNames = await page.locator(alphabeticalSortLocators.productNames).allTextContents();
//   console.log('Product Names(desc):', productNames);

  const sortedNames = [...productNames].sort((a, b) => b.localeCompare(a)); 
  await expect(productNames).toEqual(sortedNames);

//   console.log('Sorted Product Names(desc):', sortedNames);
}
