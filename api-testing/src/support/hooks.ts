import { Before, After } from '@cucumber/cucumber';
import { request } from './playwright';

Before(async () => {
    // Any setup before the tests run
});

After(async () => {
    await request.dispose();
});
