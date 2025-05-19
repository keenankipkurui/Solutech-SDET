import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {

    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    specPattern: "cypress/integration/**/*.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
  },
});