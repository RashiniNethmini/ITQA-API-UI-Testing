import { APIRequestContext } from 'playwright';
import { API_BASE_URL, credentials } from '../config';
import { RequestFactory } from '../requests/requestFactory';

export class BooksPage {
    private request: APIRequestContext;
    private baseURL: string;

    constructor(request: APIRequestContext) {
        this.request = request;
        this.baseURL = API_BASE_URL;
        
    }

    async getBooks() {
        const response = await this.request.get(`${this.baseURL}/books`);
        return response;
    }

    async getBookById(bookId: number) {
        const response = await this.request.get(`${this.baseURL}/books/${bookId}`);
        return response;
    }

    async createBookWithoutResponse(bookDetails: { title: string, author: string }) {
        const response = await this.request.post(`${this.baseURL}/books`, {
            data: bookDetails
        });
    }

    async createBook(bookDetails: { title: any, author: any }) {
        const response = await this.request.post(`${this.baseURL}/books`, {
            data: bookDetails
            
        });
        let responseBody: any;

    try {
        // Check if the response Content-Type is JSON
        const contentType = response.headers()['content-type'];
        if (contentType && contentType.includes('application/json')) {
            responseBody = await response.json();
        } else {
            responseBody = await response.text(); // Handle non-JSON responses
            console.error('Non-JSON response:', responseBody);
        }
    } catch (error) {
        console.error('Error parsing response:', error);
        throw new Error('Failed to parse response from the API.');
    }

    // Check if the responseBody is an object and the title is null
    if (typeof responseBody === 'object' && responseBody?.title === null) {
        // Create an authenticated request context
        const authRequest = await RequestFactory.createRequest('Basic', credentials.user, credentials.password);

        // Extract book ID from the response
        const bookId = responseBody?.id;

        if (bookId) {
            // Delete the book
            await authRequest.delete(`${this.baseURL}/books/${bookId}`);
        }
    }
        return response;
    }

    async updateBook(id: number, updatedBookData: {id: number, title:any, author: any}) {
        const response = await this.request.put(`${this.baseURL}/books/${id}`, {
            data: updatedBookData
        });
        return response;
    }

    async deleteBook(bookId: number) {
        const response = await this.request.delete(`${this.baseURL}/books/${bookId}`);
        return response;
    }


}