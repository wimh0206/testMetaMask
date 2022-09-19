const path = require('path');
const packageJson = require('./package.json');
const { defineConfig } = require('cypress');
const synpressPath = path.join(
    process.cwd(),
    '/node_modules/@synthetixio/synpress',
  );
  
const setupNodeEvents = require(`${synpressPath}/plugins/index`);
const fixturesFolder = `${synpressPath}/fixtures`;
const supportFile = "src/support/index.ts";

module.exports = defineConfig({
  userAgent: 'synpress',
  retries: {
    runMode: process.env.CI ? 1 : 0,
    openMode: 0,
  },
  fixturesFolder,
  screenshotsFolder: 'src/screenshots',
  videosFolder: 'src/video',
  chromeWebSecurity: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    coverage: false,
    wallet: {
        "privateKeySecretKey": "5324693d86707468a1517224a76eda53469aef5271cfadf146fbf32fb9a04a72",
        "network": "ethereum",
        "password": "Tester@1234"
    },
    networkType: "testnet",
    timeOut: 3000
  },
  defaultCommandTimeout: process.env.SYNDEBUG ? 0 : 30000,
  pageLoadTimeout: process.env.SYNDEBUG ? 0 : 30000,
  requestTimeout: process.env.SYNDEBUG ? 0 : 30000,
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://web-git-eth-enable-2.pancake.run',
    specPattern: 'src/specs/**/*.{js,jsx,ts,tsx}',
    supportFile: supportFile
  },
  component: {
    setupNodeEvents,
    specPattern: './**/*spec.{js,jsx,ts,tsx}',
    supportFile: supportFile,
  },
});

function getSynpressPath() {
  if (process.env.SYNPRESS_LOCAL_TEST) {
    return '.';
  } else {
    return path.dirname(require.resolve(packageJson.name));
  }
}