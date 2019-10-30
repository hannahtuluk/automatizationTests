const { Builder } = require('selenium-webdriver');
const driver = async () => (await new Builder().forBrowser('chrome').build())();

describe("Epam", function () {
  const Epam = require('../../src/Epam');

  beforeEach(function () {
    epam = new Epam('https://www.training.epam.ua');
  });

  it("open page", function () {
    const epamSpy = spyOn(epam, 'open').withArgs(driver).and.returnValue(undefined);

    epam.open(driver);

    expect(epamSpy).toHaveBeenCalled();
  });

  it("sign in", function () {
    const epamSpy = spyOn(epam, 'signIn').withArgs(driver).and.returnValue(undefined);

    epam.signIn(driver);

    expect(epamSpy).toHaveBeenCalled();
  });

  it("register", function () {
    const epamSpy = spyOn(epam, 'register').withArgs(driver).and.returnValue(undefined);

    epam.register(driver);

    expect(epamSpy).toHaveBeenCalled();
  });

  it("past link", function () {
    const epamSpy = spyOn(epam, 'pastLink').withArgs(driver).and.returnValue(undefined);

    epam.pastLink(driver);

    expect(epamSpy).toHaveBeenCalled();
  });

  it("past password", function () {
    const epamSpy = spyOn(epam, 'pastPassword').withArgs(driver).and.returnValue(undefined);

    epam.pastPassword(driver);

    expect(epamSpy).toHaveBeenCalled();
  });

  it("accept rule", function () {
    const epamSpy = spyOn(epam, 'acceptRule').withArgs(driver).and.returnValue(undefined);

    epam.acceptRule(driver);

    expect(epamSpy).toHaveBeenCalled();
  });

  it("finish registration", function () {
    const epamSpy = spyOn(epam, 'finishRegistration').withArgs(driver).and.returnValue(undefined);

    epam.finishRegistration(driver);

    expect(epamSpy).toHaveBeenCalled();
  });
})
