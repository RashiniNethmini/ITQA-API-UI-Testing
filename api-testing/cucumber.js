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

module.exports = {
    default: {
        require: ['src/tests/steps/*/.ts', 'src/tests/support/*/.ts'],
        format: ['progress', 'json:reports/allure-cucumberjs/reporter', ],
        paths: ['src/tests/features/*.feature'],
        publishQuiet: true
    }
};