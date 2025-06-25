import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./tests/**/*.spec.ts'],

  maxInstances: 1,

  capabilities: [{
  platformName: 'Android',
  'appium:deviceName': 'Android Remoto',
  'appium:udid': '192.168.0.46:5555',
  'appium:platformVersion': '14',
  'appium:automationName': 'UiAutomator2',
  'appium:appPackage': 'br.tv.watch.watchbrasil',
  'appium:appActivity': 'br.tv.watch.android.activities.MainActivity',
  'appium:noReset': true,
  'appium:fullReset': false,
  'appium:newCommandTimeout': 300
  }],

  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  // CONEXÃO REMOTA COM APPIUM
  hostname: 'localhost',   // ⬅(inserção futura) substitua pelo IP real do servidor Appium remoto
  port: 4723,
  path: '/',

  framework: 'mocha',

  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false,
    }]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: './tsconfig.json'
    }
  }
};
