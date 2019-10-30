const { Builder, By, Key, until } = require('selenium-webdriver');

(async function getMail() {
  const driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();
  try {
    await driver.get('https://temp-mail.org/ru/');
    //Copy mail to Buffer from tempMail 
    await driver.findElement(By.id("click-to-copy")).click()

    await driver.get('https://www.training.epam.ua');
    await driver.findElement(By.className("header-auth__signin")).click()

    await driver.wait(until.elementLocated(
      By.className("popup-reg-footer-actions__register ng-binding")), 10000).click();


    await driver.wait(until.elementLocated(
      By.id('registrationEmail')), 10000).sendKeys(Key.CONTROL, "v", Key.RETURN);

    await driver.findElement(By.id('registrationPassword')).sendKeys("veryHardPassword");
    await driver.findElement(By.className("section-accept-data-processing__description ng-binding")).click();
    await driver.findElement(By.className("reg-form__btn-registration")).click();

    await driver.get('https://temp-mail.org/ru/');
    await driver.wait(until.urlIs('https://temp-mail.org/ru/'), 10000);

    const register = await driver.wait(until.elementLocated(
      By.linkText("Реєстрація")), 10000);

    driver.executeScript("arguments[0].scrollIntoView()", register);

    await driver.findElement(By.linkText("Реєстрація")).click();

    await driver.wait(until.elementLocated(
      By.partialLinkText("https://www.training.epam.ua/Auth/FinishRegister")), 10000).click();
    
  } catch (error) {
    console.log(error)
  } finally {
    // await driver.quit();
  }
})();
