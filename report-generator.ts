import reporter from 'cucumber-html-reporter';
import os from 'os';

const options: reporter.Options = {
  theme: 'bootstrap',
  jsonFile: 'reports/report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'STAGING',
    'Browser': 'Chrome',
    'Platform': os.platform(),
    'Executed': 'Local'
  }
};

reporter.generate(options);
