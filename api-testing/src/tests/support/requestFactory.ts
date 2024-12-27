import { request as playwrightRequest, APIRequestContext } from 'playwright';

export class RequestFactory {
    static async createRequest(authType: 'Basic' | 'None', admin?: string, password?: string): Promise<APIRequestContext> {
        const headers: Record<string, string> = {};

        if (authType === 'Basic' && admin && password) {
            const credentials = `${admin}:${password}`;
            headers['Authorization'] = `Basic ${Buffer.from(credentials).toString('base64')}`;
        } 

     
        if (authType === 'None') {
            
        }

        return await playwrightRequest.newContext({ extraHTTPHeaders: headers });
    }
}

