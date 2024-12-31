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

    async getBookById(bookId: number) {
        const response = await this.request.get(`${this.baseURL}/books/${bookId}`);
        return response;
    }

    async createBookWithoutResponse(bookDetails: { title: string, author: string }) {
        const response = await this.request.post(`${this.baseURL}/books`, {
            data: bookDetails
        });
    }

    async createBook(bookDetails: { title: any, author: string }) {
        const response = await this.request.post(`${this.baseURL}/books`, {
            data: bookDetails
            
        });
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