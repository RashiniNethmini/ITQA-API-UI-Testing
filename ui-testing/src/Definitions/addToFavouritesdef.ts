import { Page } from 'playwright';
import { addToFavouritesLocators } from '../Locators/addToFavouritesLocators';
import { expect } from '@playwright/test';
import { Login } from '../pageObjects/login';
import { register } from '../pageObjects/register';

export async function registerUser(page: Page) {
  await register(page);
}

export async function loginUser(page: Page, username: string, password: string) {
  const loginPage = new Login(page);
  await loginPage.login(username, password);
  const title = await page.title();
  // console.log('Page title:', title);
}

export async function navigateToHomePage(page: Page) {
  const homeLink = page.locator(addToFavouritesLocators.homeLink);
  await homeLink.click();
  await page.waitForTimeout(3000);
  const title = await page.title();
  expect(title).toBe('Practice Software Testing - Toolshop - v5.0');
}

export async function addToFavorites(page: Page) {
  const pliersImage = page.locator(addToFavouritesLocators.pliersImage);
  await pliersImage.click();

  const addToFavoritesButton = page.locator(addToFavouritesLocators.addToFavoritesButton);
  await addToFavoritesButton.click();
}

export async function verifyFavorites(page: Page) {
  const dropdownLink = page.locator(addToFavouritesLocators.dropdownLink);
  await dropdownLink.click();

  const myFavoritesLink = page.locator(addToFavouritesLocators.myFavoritesLink);
  await myFavoritesLink.click();

  const productName = page.locator(addToFavouritesLocators.productName);
  await expect(productName).toBeVisible();
  await expect(productName).toHaveText('Combination Pliers');
}
