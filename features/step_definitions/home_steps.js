"use strict";

var HomePage = require("./pages/home");

module.exports = function () {
    var page = new HomePage();

    this.Given('I am on the angularjs home page', function () {
        return page.visit().then(function () {
            return expect(browser.getCurrentUrl()).to.be.eventually.eql("https://angularjs.org/");
        });
    });

    this.Then('I should see "$text" title', function (title) {
        return expect(page.getTitle()).to.be.eventually.eql(title);
    });
};