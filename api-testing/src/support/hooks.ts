import { request as playwrightRequest, APIRequestContext } from '@playwright/test';
import { afterEach, beforeEach } from 'node:test';


let request: APIRequestContext;


beforeEach(async () => {
  request = await playwrightRequest.newContext({
    baseURL: 'http://localhost:7081/api',
  });
});


afterEach(async () => {
  await request.dispose();
});


export { request };