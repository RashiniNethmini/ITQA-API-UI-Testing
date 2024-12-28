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

const config1 = {
    default: {
        require: ['src/tests/steps/**/*.ts', 'src/tests/support/**/*.ts'],
        format: ['allure-cucumberjs/reporter'],
        formatOptions: {
            resultsDir: 'allure-results',
        },
        paths: ['src/tests/features/*.feature'],
    
    },
};

const config2 = {
    default: {
        require: ['src/tests/steps/**/*.ts', 'src/tests/support/**/*.ts'],
        format: ['progress', 'json:reports/cucumber-report.json'],
        paths: ['src/tests/features/*.feature'],

    },
};

module.exports = {
    config1,
    config2,
};
