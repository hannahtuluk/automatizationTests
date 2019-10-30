const { Builder, By, Key, until } = require('selenium-webdriver');

(async function getMail() {
  const driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();

  await driver.get('https://temp-mail.org/ru/');
  //Copy mail to Buffer from tempMail 
  await driver.findElement(By.id("click-to-copy")).click();
  await driver.get('http://www.google.com');
  await driver.findElement(By.name('q')).sendKeys(Key.CONTROL, "v", Key.RETURN);
})();