import { Given, When, Then } from '@cucumber/cucumber';
import { createABook } from '../../requests/BookAquisition'; 
import { RequestFactory } from '../../requests/requestFactory';
import { credentials } from '../../config';
import { expect } from 'playwright/test';
import { BooksPage } from '../../pageObjects/BooksPage';

let response: any;
let booksPage: BooksPage;

Given('there is a book entry in the system', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.admin, credentials.password);
    const bookData = {
        title: 'Sample Book',
        author: 'Sample Author',
    };
    response = await createABook(request, bookData);
});

Given('I am an authenticated admin API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.admin, credentials.password);
    booksPage = new BooksPage(request);
});

Given('I am an authenticated user API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.user, credentials.password);
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
    expect(response.status()).toBe(status);
});

Then('the response should contain a list of books', async () => {
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);
});
