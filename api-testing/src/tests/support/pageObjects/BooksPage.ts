import { APIRequestContext } from 'playwright';
import { API_BASE_URL } from '../config';  // Access the base URL from environment

export class BooksPage {
    private request: APIRequestContext;
    private baseURL: string;

    constructor(request: APIRequestContext) {
        this.request = request;
        this.baseURL = API_BASE_URL; // Use the base URL from environment
        
    }

    async getBooks() {
        const response = await this.request.get(`${this.baseURL}/books`);
        return response;
    }
}