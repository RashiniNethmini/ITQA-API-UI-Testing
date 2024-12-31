import { Given, When, Then } from '@cucumber/cucumber';
import { RequestFactory } from '../../requests/requestFactory';
import { credentials } from '../../config';
import { expect } from 'playwright/test';
import { BooksPage } from '../../pageObjects/BooksPage';
import { validateResponseStatus } from '../../requests/ValidateResponseStatus';


let booksPage: BooksPage;
let response: any;
let bookId: number;
let randomTitle: string;


Given('a random book is created', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.admin, credentials.password);
    booksPage = new BooksPage(request);
    const bookData = {
        title: `Random Book ${Math.floor(Math.random() * 1000)}`,
        author: 'Random Author',
    };
    const addResponse = await booksPage.createBook(bookData);
    expect([201, 208].includes(addResponse.status())).toBe(true);
    const responseBody = await addResponse.json();
    bookId = responseBody.id; // Assuming the response contains the book ID
    randomTitle = responseBody.title;
});


Given('I am an authenticated DELETE admin API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.admin, credentials.password);
    booksPage = new BooksPage(request);
});


Given('I am an authenticated DELETE user API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.user, credentials.password);
    booksPage = new BooksPage(request);
});


When('I send a DELETE request with an existing book ID', async () => {
    response = await booksPage.deleteBook(bookId);
});


Then('the response status of DELETE should be {int}', async (status: number) => {
    await validateResponseStatus(response, status);
});


Then('the response should contain an error message {string}', async (expectedErrorMessage: string) => {
    const responseBody = await response.json();
    // Check if the error message exists and matches the expected message
    expect(responseBody.error).toBe(expectedErrorMessage);


});
