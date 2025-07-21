module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require step-definitions/**/*.ts',
    '--require hooks/**/*.ts',
    '--format progress-bar',
    '--format json:reports/report.json',
    'features/**/*.feature'
  ].join(' ')
};
