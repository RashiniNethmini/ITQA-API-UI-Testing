module.exports = {
    default: {
        require: ['src/tests/steps/**/*.ts', 'src/tests/support/**/*.ts'],
        format: ['progress', 'json:reports/cucumber-report.json'],
        paths: ['src/tests/features/*.feature'],
        publishQuiet: true
    }
};
