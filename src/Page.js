class Page {
    constructor(url) {
        this.url = url;
    }

    open(driver) {
        driver.get(this.url);
    }

}

module.exports = Page
