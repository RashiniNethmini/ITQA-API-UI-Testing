import { Page } from 'playwright';
import { UI_BASE_URL } from '../config';

export class Login {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.goto(`${UI_BASE_URL}/auth/login`, { waitUntil: 'networkidle' });

    const emailInput = this.page.locator('input[formcontrolname="email"]');
    await emailInput.fill(email);

    const passwordInput = this.page.locator('input[data-test="password"]');
    await passwordInput.fill(password);

    const loginButton = this.page.locator('input[data-test="login-submit"]');
    await loginButton.click();

    await this.page.waitForTimeout(3000); // You can adjust or wait for a specific element to be visible
  }
}
