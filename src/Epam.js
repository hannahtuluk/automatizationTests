const Page = require('./Page');
const { By, Key, until } = require('selenium-webdriver');

class Epam extends Page {
  constructor(url) {
    super(url);
    this.email = [By.id("registrationEmail"), By.id("signInEmail")]
    this.password = "veryHardPassword"
    this.passwordId = By.id("registrationPassword")
    this.signInPopUp = By.className("header-auth__signin")
    this.registerPopUp = By.className("popup-reg-footer-actions__register ng-binding")
    this.ruleCheckbox = By.className("section-accept-data-processing__description ng-binding")
    this.finishRegistrationClass = By.className("reg-form__btn-registration")
  }

  async signIn(driver) {
    await driver.findElement(this.signInPopUp).click()
  }

  async register(driver) {
    await driver.wait(until.elementLocated(this.registerPopUp), 10000).click();
  }

  async pastLink(driver) {
    await driver.wait(until.elementLocated(this.email[0] || this.email[1]), 10000).sendKeys(Key.CONTROL, "v", Key.RETURN);
  }

  async pastPassword(driver) {
    await driver.findElement(this.passwordId).sendKeys(this.password);
  }

  async acceptRule(driver) {
    await driver.findElement(this.ruleCheckbox).click();
  }

  async finishRegistration(driver) {
    await driver.findElement(this.finishRegistrationClass).click();
  }
}

module.exports = Epam
