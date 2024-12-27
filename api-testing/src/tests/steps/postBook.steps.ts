// import { Given, Then } from '@cucumber/cucumber';
// import { request } from '../support/playwright';
// import chai from 'chai';


// const expect = chai.expect;


// let response: any;
// let payload: any;


// Given('I send a POST request to {string} with the following details:', async (endpoint: string, dataTable) => {
//     const rows = dataTable.hashes();
//     payload = rows[0]; // Extract first row data
//     // console.log("Payload:", payload);  // Log the payload


//     response = await request.post(endpoint, {
//         data: {
//             id: parseInt(payload.id),
//             title: payload.title,
//             author: payload.author
//         },
//         headers: {
//             'Authorization': `Basic ${Buffer.from('admin:password').toString('base64')}`,
//             'Content-Type': 'application/json'
//         }
//     });
// });


// Then('the POST response status should be {int}', (status: number) => {
//     expect(response.status()).to.equal(status);
// });


// Then('the response should contain the created book details:', async (dataTable) => {
//     const rows = dataTable.hashes();
//     const expectedData = rows[0];
//     const responseBody = await response.json();


//     expect(responseBody).to.have.property('id', parseInt(expectedData.id));
//     expect(responseBody).to.have.property('title', expectedData.title);
//     expect(responseBody).to.have.property('author', expectedData.author);
// });
