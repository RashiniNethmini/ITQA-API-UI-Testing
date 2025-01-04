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

export async function validateBookCreationResponseDifferentTiltle(response: any, randomTitle:any) {
    let responseBody;
    try {
        responseBody = await response.json();
    } catch (error) {
        responseBody = await response.text();
    }
    expect(responseBody.title).toBe(`${randomTitle}`);
    expect(responseBody.author).toBe('Author Name');
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

export async function validateBookCreationResponseNullAuthor(response: any, randomTitle: any) {
    let responseBody;
    try {
        responseBody = await response.json();
    } catch (error) {
        responseBody = await response.text();
    }

    if (typeof responseBody === 'object') {
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('title', randomTitle);
        expect(responseBody).toHaveProperty('author', null);
    } else {
        throw new Error('Response body is not valid JSON');
    }
}
