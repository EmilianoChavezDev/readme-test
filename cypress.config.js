const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 660,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
});
