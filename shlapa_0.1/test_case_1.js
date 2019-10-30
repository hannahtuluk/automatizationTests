const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();

  try {
    await driver.get('https://temp-mail.org');
  } finally {
    //await driver.quit();
  }
})();