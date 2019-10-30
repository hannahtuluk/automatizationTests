const Epam = require('./Epam');
const TempMail = require('./TempMail');

const { Builder, By, Key, until } = require('selenium-webdriver');

(async () => {
  try {
    const driver = await new Builder().forBrowser('chrome').build();
    driver.manage().window().maximize();
    
    //Open TempMail portal
    const tempMail = new TempMail('https://temp-mail.org/ru/')
    await tempMail.open(driver)

    //Copy mail to Buffer from tempMail 
    await tempMail.copyLink(driver)

    //Open Epam portal
    const epam = new Epam('https://www.training.epam.ua')
    await epam.open(driver)

    //Registration at Epam portal
    await epam.signIn(driver)
    await epam.register(driver)
    await epam.pastLink(driver)
    await epam.pastPassword(driver)
    await epam.acceptRule(driver)
    await epam.finishRegistration(driver)

    //Open TempMail portal and re-link to Epam personal page
    await tempMail.open(driver)

    // await driver.wait(until.urlIs('https://temp-mail.org/ru/'), 10000);
    await tempMail.waitForLoading(driver);

    // const register = await driver.wait(until.elementLocated(
    //   By.linkText("Реєстрація")), 10000);
    // driver.executeScript("arguments[0].scrollIntoView()", register);
    // await driver.findElement(By.linkText("Реєстрація")).click();

    await tempMail.registration(driver);
    
    await tempMail.finishRegister(driver);
    // await driver.wait(until.elementLocated(
    //   By.partialLinkText("https://www.training.epam.ua/Auth/FinishRegister")), 10000).click();

  } catch (error) {
    console.log(error)
  } finally {
    // await driver.quit();
  }
})()