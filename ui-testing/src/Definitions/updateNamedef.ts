import { Page } from 'playwright';
import { updateNameLocators } from '../Locators/updateNameLocators';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { register } from '../pageObjects/register';
import { Login } from '../pageObjects/login';

export async function registerUser(page: Page) {
   await register(page);
}

export async function loginUser(page: Page, username: string, password: string) {
  const loginPage = new Login(page);
  await loginPage.login(username, password);
  const title = await page.title();
  console.log('Page title:', title);
}

export async function navigateToProfilePage(page: Page) {
  const profileButton = page.locator(updateNameLocators.profileButton);
  await profileButton.click();
  await page.waitForTimeout(2000);
  
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Profile - Practice Software Testing - Toolshop - v5.0');
}

export async function changeNameAndUpdateProfile(page: Page) {
  const randomName = faker.person.firstName();
  await page.locator(updateNameLocators.firstNameInput).fill(randomName);
  await page.locator(updateNameLocators.updateProfileButton).click();
  return randomName; 
}

export async function verifyProfileUpdate(page: Page) {
  const successMessage = page.locator(updateNameLocators.successMessage);
  await expect(successMessage).toBeVisible();
  await expect(successMessage).toContainText('Your profile is successfully updated!');
}

export async function verifyNameChange(page: Page, randomName: string) {
  const navMenuLink = page.locator(updateNameLocators.navMenuLink);
  await expect(navMenuLink).toHaveText(`${randomName}user`);
}
