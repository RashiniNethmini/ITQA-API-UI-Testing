// {
// "default": {
//     "dryRun": false,
//     "formatOptions": {
//         "snippetInterface": "aysnc-await"
//     },
//     "paths": [
//         "src/tests/features/*/.feature"
//     ],
//     "require": [
//         "src/tests/support/*/.ts",
//         "src/tests/steps/*/.ts"
//     ],
//     "requireModule": [
//         "ts-node/register"
//     ],
//     "format": [
//         "allure-cucumberjs/reporter"
        
//     ]
// }
// }

const { config1, config2 } = require('./cucumber-configs');

// Use the CONFIG environment variable to determine which configuration to load
const selectedConfig = process.env.CONFIG === 'allure' ? config1 : config2;

module.exports = selectedConfig;
