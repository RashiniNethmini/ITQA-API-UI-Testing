import { expect } from 'playwright/test';

export async function sendPostRequest(request: any, bookDetails: { title: string, author: string }) {
    return await request.post('/books', {
        data: bookDetails
    });
}

export async function validateResponseStatus(response: any, status1: number, status2: number) {
    const responseStatus = response.status();
    expect(responseStatus === status1 || responseStatus === status2).toBe(true);
}

export async function validateBookCreationResponse(response: any) {
    let responseBody;
    try {
        responseBody = await response.json();
    } catch (error) {
        responseBody = await response.text();
    }

    if (typeof responseBody === 'object') {
        expect(responseBody).toHaveProperty('id');
        expect(responseBody.title).toBe('New Book Title4');
        expect(responseBody.author).toBe('Author Name');
    } else {
        expect(responseBody).toBe('Book Already Exists');
    }
}
