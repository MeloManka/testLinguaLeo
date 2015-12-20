"use strict";

module.exports = function () {
    this.After(function () {
        return browser.driver.manage().deleteAllCookies();
    });
};