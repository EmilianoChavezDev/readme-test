const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 660,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
});
