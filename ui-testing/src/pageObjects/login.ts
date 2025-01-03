// import { expect, Page } from '@playwright/test';
// import { chromium, Browser, BrowserContext } from '@playwright/test';

// let browser: Browser;
// let page: Page;
// let context: BrowserContext;

// export async function login(page: Page): Promise<void> {

    

//     await page.goto('https://practicesoftwaretesting.com/auth/login', { waitUntil: 'networkidle' });
//     const emailInput = page.locator('input[formcontrolname="email"]');
//     await emailInput.fill('randomuser@gmail.com');

//     const passwordInput = page.locator('input[data-test="password"]');
//     await passwordInput.fill('RANDOm12@');

//     const loginButton = page.locator('input[data-test="login-submit"]');
//     await loginButton.click();

//     await page.waitForTimeout(3000);
// const title = await page.title();
//     console.log('Page title:', title);
// }
 

// pageObjects/login.ts
import { Page } from 'playwright';

export class Login {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.goto('https://practicesoftwaretesting.com/auth/login', { waitUntil: 'networkidle' });

    const emailInput = this.page.locator('input[formcontrolname="email"]');
    await emailInput.fill(email);

    const passwordInput = this.page.locator('input[data-test="password"]');
    await passwordInput.fill(password);

    const loginButton = this.page.locator('input[data-test="login-submit"]');
    await loginButton.click();

    await this.page.waitForTimeout(3000); // You can adjust or wait for a specific element to be visible
  }
}
