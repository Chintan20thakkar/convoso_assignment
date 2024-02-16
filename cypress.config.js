const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "sf21c7",
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 300000,
  execTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 50000,
  taskTimeout: 30000,
  redirectionLimit : 500,
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
})
