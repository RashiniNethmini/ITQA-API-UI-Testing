module.exports = {
    default: {
        require: ['src/**/*.ts'],
        format: ['progress', 'json:reports/cucumber-report.json'],
        paths: ['features/*.feature'],
        publishQuiet: true
    }
};
