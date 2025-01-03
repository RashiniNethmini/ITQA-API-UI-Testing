import { Page } from '@playwright/test';
import { chromium, Browser, BrowserContext } from '@playwright/test';
import { UI_BASE_URL } from '../config';

let browser: Browser;
let page: Page;
let context: BrowserContext;

export async function register(page: Page): Promise<void> {

    if (!browser) {
            browser = await chromium.launch({ headless: true });
            context = await browser.newContext();
            page = await context.newPage();
        }

    await page.goto(`${UI_BASE_URL}/auth/register`, { waitUntil: 'networkidle' });
    
    const firstNameInput = page.locator('[formcontrolname="first_name"]');
    await firstNameInput.fill('random');

    const lastNameInput = page.locator('[formcontrolname="last_name"]');
    await lastNameInput.fill('user');

    const dobInput = page.locator('[formcontrolname="dob"]');
    await dobInput.fill('1995-12-25');

    const addressInput = page.locator('[formcontrolname="address"]');
    await addressInput.fill('no 100, park street');

    const postcodeInput = page.locator('[formcontrolname="postcode"]');
    await postcodeInput.fill('1200');

    const cityInput = page.locator('[formcontrolname="city"]');
    await cityInput.fill('Panadura');

    const stateInput = page.locator('[formcontrolname="state"]');
    await stateInput.fill('Kaluthara');

    const countrySelect = page.locator('#country');
    await countrySelect.selectOption({ value: 'LK' });

    const phoneInput = page.locator('[formcontrolname="phone"]');
    await phoneInput.fill('0760853850');

    const emailInput = page.locator('[formcontrolname="email"]');
    await emailInput.fill('randomuser@gmail.com');

    const passwordInput = page.locator('[id="password"]');
    await passwordInput.fill('RANDOm12@');

    const registerButton = page.locator('[data-test="register-submit"]');
    await registerButton.click();



}