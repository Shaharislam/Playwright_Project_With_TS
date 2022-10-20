const reporter = require('cucumber-html-reporter')

const options = {
    theme:'bootstrap',
    jsonFile:'cucumber_report.jsom',
    output:'reports/cucumber_report.html',
    reportSuiteAsScenario:true,
    scenarioTimestamp:true,
    launchReport:true,
    metadata:{
        'App Version': '2.0.0',
        'Test Environment': 'STAGING',
        Browser: 'Chrome 106.0',
        Platform: 'Windows 10',
    },
}
reporter.generate(options)