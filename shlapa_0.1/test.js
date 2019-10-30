const { Builder, By, Key, until } = require('selenium-webdriver');

(async function getMail() {
  const driver = await new Builder().forBrowser('chrome').build();
  driver.manage().window().maximize();
  try {

    const urls = {
        urlTempMail: 'https://temp-mail.org/ru/',
        urlEpam: 'https://www.training.epam.ua'
    }

    await driver.get(urls.urlTempMail);
    //Copy mail to Buffer from tempMail 
    
    const copyButton = await driver.wait(until.elementLocated(By.id("click-to-copy")), 10000);
  
    await driver.executeScript("arguments[0].scrollIntoView()", copyButton);

    await driver.findElement(By.id("click-to-copy")).click()

    await driver.get(urls.urlEpam);
    await driver.findElement(By.className("header-auth__signin")).click()

    await driver.wait(until.elementLocated(
      By.className("popup-reg-footer-actions__register ng-binding")), 10000).click();


    await driver.wait(until.elementLocated(
      By.id('registrationEmail')), 10000).sendKeys(Key.CONTROL, "v", Key.RETURN);

    await driver.findElement(By.id('registrationPassword')).sendKeys("veryHardPassword");
    await driver.findElement(By.className("section-accept-data-processing__description ng-binding")).click();
    await driver.findElement(By.className("reg-form__btn-registration")).click();

    await driver.get(urls.urlTempMail);
    await driver.wait(until.urlIs(urls.urlTempMail), 10000);

    const register = await driver.wait(until.elementLocated(
      By.linkText("Реєстрація")), 10000);

    driver.executeScript("arguments[0].scrollIntoView()", register);

    await driver.findElement(By.linkText("Реєстрація")).click();

    await driver.wait(until.elementLocated(
      By.partialLinkText(`${urls.urlEpam}/Auth/FinishRegister`)), 10000).click();
    
  } catch (error) {
    console.log(error)
  } finally {
    // await driver.quit();
  }
})();
