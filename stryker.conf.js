/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress", "dashboard"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  thresholds: {
    high: 95,
    low: 85,
    break: 80
  }

};
