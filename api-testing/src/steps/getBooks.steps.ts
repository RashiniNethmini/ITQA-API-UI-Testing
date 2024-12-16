import { Given, Then } from '@cucumber/cucumber';
import { request } from '../support/playwright';
import chai from 'chai';

const expect = chai.expect;

let response: any;

Given('I send a GET request to {string}', async (endpoint: string) => {
    response = await request.get(endpoint, {
        headers: {
            'Authorization': `Basic ${Buffer.from('admin:password').toString('base64')}`
        }
    });
});

Then('the response status should be {int}', (status: number) => {
    expect(response.status()).to.equal(status);
});

Then('the response should contain a list of books', async () => {
    const responseBody = await response.json();
    console.log(response.data);
    expect(responseBody).to.be.an('array');
    expect(responseBody.length).to.be.greaterThan(0);
});
