import { Page } from 'playwright';
import { searchLocators } from '../Locators/searchLocators';
import { expect } from '@playwright/test';
import { UI_BASE_URL } from '../config';

export async function navigateToHomePage(page: Page) {
  await page.goto(UI_BASE_URL,);
  const title = await page.title();
  expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
}

export async function searchForTool(page: Page, toolName: string) {
  const searchInput = page.locator(searchLocators.searchInput);
  await searchInput.fill(toolName);
}

export async function clickSearchButton(page: Page) {
  const searchButton = page.locator(searchLocators.searchButton);
  await searchButton.click();
}

export async function verifySearchedProduct(page: Page, expectedProduct: string) {
  await page.waitForTimeout(3000);
  const productNameElement = page.locator(searchLocators.productNameElement);
  const productNameText = await productNameElement.textContent();
  await expect(productNameText?.trim()).toBe(expectedProduct);

  const count = await page.locator(searchLocators.productNameElement).count();
  await expect(count).toBe(1);
}
