// import { BooksPage } from '../pageObjects/BooksPage';
// import { APIRequestContext } from 'playwright';
import { expect } from 'playwright/test';

// export async function createABook(request: APIRequestContext, bookDetails: { title: string, author: string }) {
//     const booksPage = new BooksPage(request);
//     const response = await booksPage.createBook(bookDetails);
//     expect([201, 208].includes(response.status())).toBe(true);  
//     return response;
// }

// Function to get a list of books
// export async function getBooks(request: APIRequestContext) {
//     const booksPage = new BooksPage(request);
//     const response = await booksPage.getBooks();
//     return response;
// }

export async function validateBookByIdDetails(response: any, bookId: number, randomTitle: string) {
    let responseBody;
    try {
        responseBody = await response.json();
    } catch (error) {
        responseBody = await response.text();
    }
    if (typeof responseBody === 'object') {
        expect(responseBody.id).toBe(bookId);
        expect(responseBody.title).toBe(randomTitle);
        expect(responseBody.author).toBe('Random Author');
    }
}


