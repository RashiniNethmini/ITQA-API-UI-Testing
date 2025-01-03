// module.exports = {
//     default: {
//         require: ['src/tests/steps/**/*.ts', 'src/tests/support/**/*.ts'],
//         format: ['progress', 'json:reports/cucumber-report.json'],
//         paths: ['src/tests/features/*.feature'],

//     }
//   };
  


const { config1, config2 } = require('./cucumber-configs');

// Use the CONFIG environment variable to determine which configuration to load
const selectedConfig = process.env.CONFIG === 'allure' ? config1 : config2;

module.exports = selectedConfig;