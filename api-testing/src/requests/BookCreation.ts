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

export async function validateBookCreationResponseEmpty(response: any) {
    let responseBody;
    try {
        responseBody = await response.json();
    } catch (error) {
        responseBody = await response.text();
    }


    if (typeof responseBody === 'object') {
        expect(responseBody).toHaveProperty('id');
        expect(responseBody.title).toBe('');
        expect(responseBody.author).toBe('');
    } else {
        expect(responseBody).toBe('Book Already Exists');
    }
}

export async function validateBookCreationResponseDifferentTiltle(response: any) {
    let responseBody;
    try {
        responseBody = await response.json();
    } catch (error) {
        responseBody = await response.text();
    }

    if (Array.isArray(responseBody)) {
        expect(responseBody.length).toBe(2);
        expect(responseBody[0].title).toBe('First Book Title');
        expect(responseBody[0].author).toBe('Author Name');
        expect(responseBody[1].title).toBe('Second Book Title');
        expect(responseBody[1].author).toBe('Author Name');
    } else {
        expect(responseBody).toBe('Book Already Exists');
    }
}

export async function validateBookCreationResponseDifferentAuthors(responses: any[]) {
    const responseBodies = await Promise.all(
        responses.map(async (response) => {
            let responseBody;
            try {
                responseBody = await response.json();
            } catch (error) {
                responseBody = await response.text();
            }
            return responseBody;
        })
    );
    expect(responseBodies.length).toBe(2);
    const [book1, book2] = responseBodies;
    expect(book1.title).toBe(book2.title);
    expect(book1.author).not.toBe(book2.author);
}
