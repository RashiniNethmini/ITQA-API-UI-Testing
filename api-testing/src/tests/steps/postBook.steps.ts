import { Given, When, Then } from '@cucumber/cucumber';
import { RequestFactory } from '../../requests/requestFactory';
import { BooksPage } from '../../pageObjects/BooksPage';
import { credentials } from '../../config';
import {  validateBookCreationResponse } from '../../requests/BookCreation';
import {  validateResponseTwoStatus } from '../../requests/ValidateResponseStatus'; 

let booksPage: BooksPage;
let response: any;

Given('I am an authenticated POST admin API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.admin, credentials.password);
    booksPage = new BooksPage(request);
});

Given('I am an authenticated POST user API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.user, credentials.password);
    booksPage = new BooksPage(request);
});

When('I send a POST request to the {string} endpoint with valid book details', async function (endpoint: string) {
    if (endpoint === 'books') {
        const bookDetails = {
            title: 'New Book Title4',
            author: 'Author Name'
        };
        response = await booksPage.createBook(bookDetails);
    } else {
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
});

Then('the response status of POST should be either {int} or {int}', (status1: number, status2: number) => {
    validateResponseTwoStatus(response, status1, status2);
});

Then('the response should contain the created book details', async () => {
    await validateBookCreationResponse(response);
});
