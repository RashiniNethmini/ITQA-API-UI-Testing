import { Given, When, Then } from '@cucumber/cucumber';
import { RequestFactory } from '../support/requestFactory';
import { BooksPage } from '../support/pageObjects/BooksPage';
import { credentials } from '../support/config';
import { expect } from 'playwright/test';


let booksPage: BooksPage;
let response: any;

Given('I am an authenticated admin API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.admin,credentials.password);
    booksPage = new BooksPage(request);
});

Given('I am an authenticated user API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.user,credentials.password);
    booksPage = new BooksPage(request);
});

When('I send a GET request to the {string} endpoint', async (endpoint: string) => {
    if (endpoint === 'books') {
        response = await booksPage.getBooks();
    } else {
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
});

Then('the response status should be {int}', (status: number) => {
    expect(response.status()).toBe(status); // 'toBe' is Jest's equivalent of 'equal'
});

Then('the response should contain a list of books', async () => {
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBe(true); // Check if responseBody is an array
    expect(responseBody.length).toBeGreaterThan(0); // Assert the array has more than 0 elements
});

