import { Given, When, Then } from '@cucumber/cucumber';
import { RequestFactory } from '../../requests/requestFactory';
import { credentials } from '../../config';
import { expect } from 'playwright/test';
import { BooksPage } from '../../pageObjects/BooksPage';
import { createRandomTitleBook } from '../../requests/Randomizer';
import { validateResponseStatus } from '../../requests/ValidateResponseStatus';

let booksPage: BooksPage;
let response: any;
let bookId: string;
let randomTitle: string;


Given('I create a new book entry with a random title', async () => {
    const result = await createRandomTitleBook();
        randomTitle = result.randomTitle; 
        bookId = result.bookId; 
});

Given('I am an authenticated PUT admin API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.admin, credentials.password);
    booksPage = new BooksPage(request);
});

Given('I am an authenticated PUT user API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.user, credentials.password);
    booksPage = new BooksPage(request);
});

When('I send a PUT request to the endpoint with the new author {string}', async (author: string) => {
    const updatedBookData = {
        id: bookId,
        title: randomTitle,
        author: author,
    };
    response = await booksPage.updateBook(bookId, updatedBookData);
});

When('I send a PUT request with different title and without author field', async () => {
    const updatedBookData = {
        id: bookId,
        title: `Updated-${randomTitle}`,
        author: null, // Add a valid author field
    };
    response = await booksPage.updateBook(bookId, updatedBookData);
});




Then('the response should contain the updated book details with author {string}', async (author: string) => {
    const responseBody = await response.json();
    console.log('Response Body:', responseBody);
    expect(responseBody.author).toBe(author);
});



Then('the response status of PUT should be {int}', async (status: number) => {
    await validateResponseStatus(response, status);
});


Then('the response should be {string}', async (expectedMessage: string) => {
    
    let actualMessage;
    try {
        const responseBody = await response.json();
        actualMessage = responseBody.message || responseBody;
    } catch {
        actualMessage = await response.text();
    }

    // Handle case where API adds a period at the end of the message
    if (expectedMessage === "User is not permitted") {
        expect(actualMessage).toBe(expectedMessage + ".");
    } else {
        expect(actualMessage).toBe(expectedMessage);
    }
});



// Then('the response should contain an error message {string}', async (message: string) => {
//     const responseBody = await response.string();
//     expect(responseBody.message).toBe(message);
// });
