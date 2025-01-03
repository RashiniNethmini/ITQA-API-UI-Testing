import { Page } from 'playwright';
import {cartLocators} from '../Locators/cartLocators';
import { expect } from '@playwright/test';
import { UI_BASE_URL } from '../config';

export async function navigateToPlierProductPage(page: Page) {
  await page.goto(UI_BASE_URL, { waitUntil: 'networkidle' });
  const plierImage = page.locator(cartLocators.plierImage);
  await plierImage.click();
  await page.waitForTimeout(2000);

  const title = await page.title();
  expect(title).toBe('Combination Pliers - Practice Software Testing - Toolshop - v5.0');
}

export async function clickAddToCartButton(page: Page) {
  const addToCartButton = page.locator(cartLocators.addToCartButton);
  await addToCartButton.click();
  await page.waitForTimeout(1000);

  const cartElement = page.locator(cartLocators.cartElement);
  await expect(cartElement).toBeVisible();
}

export async function goToCart(page: Page) {
  const cartElement = page.locator(cartLocators.cartElement);
  await cartElement.click();
  await page.waitForURL('https://practicesoftwaretesting.com/checkout', { waitUntil: 'networkidle' });

  const title = await page.title();
  expect(title).toBe('Checkout - Practice Software Testing - Toolshop - v5.0');
}

export async function verifyItemInCart(page: Page) {
  const productTitleElement = page.locator(cartLocators.productTitleElement);
  await expect(productTitleElement).toHaveText('Combination Pliers');
}

export async function changeProductQuantityInCart(page: Page, quantity: string) {
  const inputField = await page.locator(cartLocators.productQuantityInput);
  await inputField.fill(quantity);
  const value = await inputField.inputValue();
  expect(value).toBe(quantity);
  await inputField.press('Enter');
}

export async function verifyPriceChange(page: Page, expectedPrice: string) {
  await page.waitForTimeout(3000); // Wait for price update
  const linePrice = await page.locator(cartLocators.linePrice);
  const textContent = await linePrice.textContent();
  expect(textContent).toBe(expectedPrice);
}
