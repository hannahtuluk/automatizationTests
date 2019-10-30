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

    //Waiting for inviting message and finish registration there 
    await tempMail.waitForLoading(driver);
    await tempMail.registration(driver);
    await tempMail.finishRegister(driver);

  } catch (error) {
    console.log(error)
  } finally {
    // await driver.quit();
  }
})()