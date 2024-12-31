// import { expect } from 'playwright/test';

// export async function validateUpdatedBookDetails(response: any) {
//     let responseBody;
//     try {
//         responseBody = await response.json();
//     } catch (error) {
//         responseBody = await response.text();
//     }

//     if (typeof responseBody === 'object') {
//         expect(responseBody).toHaveProperty('id');
//         expect(responseBody).toHaveProperty('title');
//         expect(responseBody).toHaveProperty('author');

//         // Validate expected details
//         if (expectedDetails.id) {
//             expect(responseBody.id).toBe(expectedDetails.id);
//         }

//         if (expectedDetails.title) {
//             expect(responseBody.title).toBe(expectedDetails.title);
//         }

//         if (expectedDetails.author !== undefined) {
//             expect(responseBody.author).toBe(expectedDetails.author);
//         }
//     } else {
//         throw new Error('Response is not in the expected format');
//     }
// }






