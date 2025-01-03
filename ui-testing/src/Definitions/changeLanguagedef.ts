import { Page } from 'playwright';
import { changeLanguageLocators } from '../Locators/changeLanguageLocators';
import { expect } from '@playwright/test';
import { UI_BASE_URL } from '../config';

export async function navigateToHomePage(page: Page) {
  await page.goto(UI_BASE_URL);
  const title = await page.title();
  expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
}

export async function clickLanguageButton(page: Page) {
  const languageButton = page.locator(changeLanguageLocators.languageButton);
  await languageButton.click();

  const dropdown = page.locator(changeLanguageLocators.dropdown);
  await dropdown.waitFor({ state: 'visible' });
}

export async function clickDutchOption(page: Page) {
  const dutchOption = page.locator(changeLanguageLocators.dutchOption, { hasText: 'DE' });
  await dutchOption.click();
}

export async function verifyOptionIsDutch(page: Page) {
  const languageButton = page.locator(changeLanguageLocators.languageButton);
  await languageButton.waitFor({ state: 'visible' });
  const languageText = await languageButton.textContent();
  expect(languageText).toContain("DE");
}

export async function verifyLanguageIsDutch(page: Page) {
  await page.waitForTimeout(1000);
  const filtersDiv = page.locator(changeLanguageLocators.filtersDiv);
  const text = await filtersDiv.textContent();
  expect(text).toContain('Nach Kategorie');
}
