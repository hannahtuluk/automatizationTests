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
    
    setTimeout(async () => {
      await driver.findElement(By.className("popup-reg-footer-actions__register ng-binding")).click();
      await driver.findElement(By.id('registrationEmail')).sendKeys(Key.CONTROL, "v", Key.RETURN);
      await driver.findElement(By.id('registrationPassword')).sendKeys("veryHardPassword");
      await driver.findElement(By.className("section-accept-data-processing__description ng-binding")).click();
      await driver.findElement(By.className("reg-form__btn-registration")).click();
      
      setTimeout(async () => {
        await driver.get('https://temp-mail.org/ru/');  
        const register = await driver.findElement(By.linkText("Реєстрація"));  
        
        driver.executeScript("arguments[0].scrollIntoView()", register);
        
        setTimeout(async ()=>{
          register.click();
          setTimeout(async () => {
         
            await driver.findElement(By.partialLinkText("https://www.training.epam.ua/Auth/FinishRegister")).click();     
          }, 2000)
  
        }, 1000)
        
      }, 2000)
  
    }, 2000)
  } catch (error) {
    console.log(error)
  } finally {
    // await driver.quit();
  }
})();
