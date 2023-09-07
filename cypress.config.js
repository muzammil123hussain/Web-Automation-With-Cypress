const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return {
        watchForFileChanges: false,
      };
    },
  },
});
