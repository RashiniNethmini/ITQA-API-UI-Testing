import { Page } from 'playwright';
import { contactFormLocators } from '../Locators/contactFormLocators';
import { expect } from '@playwright/test';
import { Login } from '../pageObjects/login';


export async function fillContactFormValid(
  page: Page,
  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  message: string
) {
  await page.locator(contactFormLocators.firstNameInput).fill(firstName);
  await page.locator(contactFormLocators.lastNameInput).fill(lastName);
  await page.locator(contactFormLocators.emailInput).fill(email);
  await page.locator(contactFormLocators.subjectSelect).selectOption({ value: subject });
  await page.locator(contactFormLocators.messageTextarea).fill(message);
}

export async function submitForm(page: Page) {
  await page.locator(contactFormLocators.submitButton).click();
  await page.waitForTimeout(3000);
}

export async function verifySuccessMessage(page: Page) {
  const successAlert = page.locator(contactFormLocators.successAlert, {
    hasText: 'Thanks for your message! We will contact you shortly.',
  });
  await expect(successAlert).toBeVisible();
}




