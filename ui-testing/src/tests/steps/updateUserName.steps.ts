import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, BrowserContext } from 'playwright';
import {
  registerUser,
  loginUser,
  navigateToProfilePage,
  changeNameAndUpdateProfile,
  verifyProfileUpdate,
  verifyNameChange,
} from '../../Definitions/updateNamedef';

let browser: Browser;
let page: Page;
let context: BrowserContext;

Given("I'm a registered user", async function () {
  await registerUser(this.page);
});

Given("I have logged in", async function () {
  if (!browser) {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
  }

  await loginUser(page, 'randomuser@gmail.com', 'RANDOm12@');
});

Given("I'm in my profile page", async function () {
  await navigateToProfilePage(page);
});

When("I change my name and update profile", async function () {
  this.randomName = await changeNameAndUpdateProfile(page);
});

Then("It should display that the name was changed successfully", async function () {
  await verifyProfileUpdate(page);
});

Then("It should change immediately", async function () {
  const randomName = this.randomName;
  await verifyNameChange(page, randomName);
});
