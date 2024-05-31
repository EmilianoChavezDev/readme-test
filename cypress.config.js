const { defineConfig } = require('cypress')
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
    viewportWidth: 1500,
    viewportHeight: 660,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
    requestTimeout: 20000,
    e2e: {
        setupNodeEvents(on, config) {
            allureCypress(on)
        },
        env: {
            commandDelay: 200
        }
    }
})