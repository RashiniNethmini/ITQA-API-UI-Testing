import { request as playwrightRequest, APIRequestContext } from '@playwright/test';
import { after, before } from 'node:test';

let request: APIRequestContext;

before(async () => {
    request = await playwrightRequest.newContext({
        baseURL: 'http://localhost:7081/api',
    });
});

after(async () => {
    await request.dispose();
});

export { request };
