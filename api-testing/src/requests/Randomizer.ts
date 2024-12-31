import { RequestFactory } from '../requests/requestFactory';
import { BooksPage } from '../pageObjects/BooksPage';
import { credentials } from '../config';
import { expect } from 'playwright/test';

export async function createRandomTitleBook() {
    const randomTitle = `Book-${Math.floor(Math.random() * 100000)}`; // Randomly generated title
    const bookData = {
        title: randomTitle,
        author: 'Random Author',
    };

    const request = await RequestFactory.createRequest('Basic', credentials.admin, credentials.password);
    const booksPage = new BooksPage(request);

    const addResponse = await booksPage.createBook(bookData);
    expect([201, 208].includes(addResponse.status())).toBe(true);

    const createdBook = await addResponse.json();
    const bookId = createdBook.id;
    expect(bookId).toBeTruthy();

    return { randomTitle, bookId };
}
