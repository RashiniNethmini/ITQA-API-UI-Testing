import { Given, When, Then } from '@cucumber/cucumber';
// import { createABook } from '../../requests/BookAquisition'; 
import { RequestFactory } from '../../requests/requestFactory';
import { credentials } from '../../config';
import { expect } from 'playwright/test';
import { BooksPage } from '../../pageObjects/BooksPage';
import { validateResponseStatus } from '../../requests/ValidateResponseStatus';
import { validateBookByIdDetails } from '../../requests/BookAquisition'; 
import { createRandomTitleBook } from '../../requests/Randomizer';


let booksPage: BooksPage;
let response: any;
let randomTitle: string;
let bookId: number;  



Given('there is a book entry in the system', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.admin, credentials.password);
    booksPage = new BooksPage(request);
    const bookData = {
        title: 'Sample Book',
        author: 'Sample Author',
    };
    const addResponse = await booksPage.createBook(bookData);
    expect([201, 208].includes(addResponse.status())).toBe(true);
});


Given('I am an authenticated admin API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.admin,credentials.password);
    booksPage = new BooksPage(request);
});


Given('I am an authenticated user API client', async () => {
    const request = await RequestFactory.createRequest('Basic', credentials.user,credentials.password);
    booksPage = new BooksPage(request);
});

Given('I am an unauthenticated person for get books', async () => {
    const request = await RequestFactory.createRequest('None'); // No authentication
    booksPage = new BooksPage(request);
});

Given('I create a new book with a random title', async () => {
    const result = await createRandomTitleBook();
    randomTitle = result.randomTitle; 
    bookId = result.bookId; 
});



When('I send a GET request to the {string} endpoint', async (endpoint: string) => {
    if (endpoint === 'books') {
        response = await booksPage.getBooks();
    } else {
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
});

When('I send a GET request to the {string} endpoint with a non-existing ID', async (endpoint: string) => {
    if (endpoint === 'books/100000') {
        response = await booksPage.getBookById(100000); // Using the fixed non-existing ID
    } else {
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
});

When('I send a GET request with an existing book ID', async () => {
    response = await booksPage.getBookById(bookId);  
});



Then('the response status should be {int}', async (status: number) => {
    await validateResponseStatus(response, status);
    });


Then('the response should contain a list of books', async () => {
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);
});

Then('the response should contain the details of the book', async () => {
    await validateBookByIdDetails(response, bookId, randomTitle);
});
