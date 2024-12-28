import { APIRequestContext } from 'playwright';
import { API_BASE_URL } from '../config';  

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
    async createBook(bookDetails: { title: string, author: string }) {
        const response = await this.request.post(`${this.baseURL}/books`, {
            data: bookDetails
            
        });
        return response;
    }
}