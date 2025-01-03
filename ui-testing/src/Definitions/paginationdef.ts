import { Page } from 'playwright';
import { paginationLocators } from '../Locators/paginationLocators';
import { expect } from '@playwright/test';
import { UI_BASE_URL } from '../config';

export async function navigateToHomePage(page: Page) {
  await page.goto(UI_BASE_URL);
  const title = await page.title();
  expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
}

export async function clickPageNumber(page: Page, pageNumber: string) {
  const pageLink = page.locator(paginationLocators.pageLink(pageNumber));
  await pageLink.waitFor({ state: 'visible', timeout: 30000 });
  await pageLink.click();
}

export async function getCurrentPageNumber(page: Page): Promise<string> {
  const activePage = await page.locator(paginationLocators.activePageLink).getAttribute('aria-label');
  return activePage ? activePage.replace('Page-', '') : '';
}

export async function getProductNames(page: Page): Promise<string[]> {
  await page.waitForTimeout(3000);
  const productElements = await page.locator(paginationLocators.productName).allTextContents();
  return productElements.map(product => product.trim());
}
