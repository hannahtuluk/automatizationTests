const Page = require('./Page');
const { By, until } = require('selenium-webdriver');

class TempMail extends Page {
  constructor(url) {
    super(url);
    this.buttonCopy = By.id("click-to-copy");
    this.register = By.linkText("Реєстрація");
    this.epamLinkText = By.partialLinkText("https://www.training.epam.ua/Auth/FinishRegister")
  }

  async copyLink(driver) {
    const button = await driver.wait(until.elementLocated(this.buttonCopy), 10000);
    await driver.executeScript("arguments[0].scrollIntoView()", button);

    await driver.findElement(this.buttonCopy).click()
  }

  async waitForLoading(driver) {
    await driver.wait(until.urlIs(this.url), 10000);
  }

  async registration(driver) {
    const regist = await driver.wait(until.elementLocated(this.register), 10000);
    await driver.executeScript("arguments[0].scrollIntoView()", regist);
    await driver.findElement(this.register).click();
  }

  async finishRegister(driver) {
    await driver.wait(until.elementLocated(this.epamLinkText), 10000).click();
  }
}


module.exports = TempMail
