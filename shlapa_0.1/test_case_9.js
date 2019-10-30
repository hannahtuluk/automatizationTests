const { Builder, By, Key, until } = require('selenium-webdriver');

(async function getMail() {
  const driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();

  await driver.get('https://www.training.epam.ua');
  await driver.findElement(By.className("header-auth__signin")).click()

  setTimeout(async () => {
    await driver.findElement(By.className("popup-reg-footer-actions__register ng-binding")).click();
    await driver.findElement(By.id('registrationEmail')).sendKeys("annahtuluk@gmail.com");
    await driver.findElement(By.id('registrationPassword')).sendKeys("veryHardPassword");
    await driver.findElement(By.className("section-accept-data-processing__description ng-binding")).click();
    await driver.findElement(By.className("reg-form__btn-registration")).click();
  }, 2000)

})();