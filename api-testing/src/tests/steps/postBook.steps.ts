import { Given, When, Then } from '@cucumber/cucumber';
import { RequestFactory } from '../../requests/requestFactory';
import { BooksPage } from '../../pageObjects/BooksPage';
import { credentials } from '../../config';
import {  validateBookCreationResponse,validateBookCreationResponseDifferentTiltle,validateBookCreationResponseEmpty, validateBookCreationResponseDifferentAuthors, validateBookCreationResponseNullAuthor } from '../../requests/BookCreation';
import {  validateResponseTwoStatus, validateResponseStatus } from '../../requests/ValidateResponseStatus'; 
import { expect } from 'playwright/test';

let booksPage: BooksPage;
let response: any;
let randomTitle: any;

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

When('I send a POST request to the {string} endpoint with empty title and author', async function (endpoint: string) {
    if (endpoint === 'books') {
        const bookDetails = {
            title: '', // Empty title
            author: '' // Empty author
        };
        response = await booksPage.createBook(bookDetails);
    } else {
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
});

When('I send a POST request to the "books" endpoint with two different titles and the same author', async function () {
    const bookDetails1 = {
        title: 'First Book Title',
        author: 'Author Name'
    };
    const bookDetails2 = {
        title: 'Second Book Title',
        author: 'Author Name'
    };
    response = await booksPage.createBook(bookDetails1);
    await booksPage.createBook(bookDetails2);
});

When('I send a POST request to the {string} endpoint with empty title', async function (endpoint: string) {
    if (endpoint === 'books') {
        const bookDetails = {
            title: '', // Empty title
            author: 'Some Author'
        };
        response = await booksPage.createBook(bookDetails);
    } else {
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
});

When('I send 2 POST requests to the {string} endpoint with the same title but different authors', async function (endpoint: string) {
    if (endpoint === 'books') {
        const bookDetails1 = {
            title: 'Common Book Title',
            author: 'Author One'
        };
        const randomAuthor = `Author-${Math.floor(Math.random() * 100000)}`; // Randomly generated author
        const bookDetails2 = {
            title: 'Common Book Title',
            author: randomAuthor
        };
    await booksPage.createBookWithoutResponse(bookDetails1);
    await booksPage.createBook(bookDetails2);
    } else {
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
});

When('I send a POST request to the {string} endpoint without title', async function (endpoint: string) {
    if (endpoint === 'books') {
        const bookDetails = {
            title: null,
            author: 'Some Author'
        };
        response = await booksPage.createBook(bookDetails);
    } else {
        throw new Error(`Unknown endpoint: ${endpoint}`);
    }
});

When('I send a POST request to the {string} endpoint with title and without author', async function (endpoint: string) {
    if (endpoint === 'books') {
        randomTitle = `Book-${Math.floor(Math.random() * 100000)}`;
        const bookDetails = {
            title: randomTitle,
            author: null 
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

Then('the response should contain the created book details with empty title and author', async () => {
    await validateBookCreationResponseEmpty(response);
});

Then('the response should contain the details of both books', async () => {
    await validateBookCreationResponseDifferentTiltle(response);
});

Then('the response should contain the details of both books with the same title but different authors', async () => {
    await validateBookCreationResponseDifferentAuthors(response);
});


Then('the response status of POST should be {int}', async (status: number) => {
    await validateResponseStatus(response, status);
});

Then('the response should contain the created book details with title and null author', async () => {
    await validateBookCreationResponseNullAuthor(response, randomTitle);
});
