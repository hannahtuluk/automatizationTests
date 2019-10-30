const { Builder, By, Key, until } = require('selenium-webdriver');

(async function getMail() {
  const driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();
  
  await driver.get('https://www.training.epam.ua');
  await driver.findElement(By.className("header-auth__signin")).click()
})();