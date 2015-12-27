"use strict";

var HomePage = require("./pages/home");
var Ksenia = require("./user/ksenia");

module.exports = function () {
    var page = new HomePage();
    var user = new Ksenia();

    this.Given('there is a LinguaLeo user Ksenia', function(){
        return;
    });
    this.Given('I am on the LinguaLeo home page', function () {
        return page.visit().then(function () {
            return expect(browser.getCurrentUrl()).to.eventually.eql("https://lingualeo.com/ru");
        });
    });

    this.Then('I should see registration form', function () {
        return expect(page.isRegistrationFormPresent()).to.be.eventually.true;
    });

    this.Given('I see login button', function(){
        return expect(page.isLoginButtonPresent()).to.be.eventually.true;
    });
    this.When('I press login button', function(){
        return page.pressLoginButton();
    });
    this.Then('I should see login popup', function(){
        return expect(page.isLoginPopupPresent()).to.be.eventually.true;
    });

    this.When('I enter user email and password', function(){
        return page.enterLogin(user.login)
            .then(function(){
                return page.enterPassword(user.password);
            });
    });
    this.When('I press popup login button', function(){
        return page.pressPopupLoginButton();
    });
    this.Then('I should be on the dashboard page',function(){
        return expect(browser.getCurrentUrl()).to.eventually.eql("https://lingualeo.com/ru/dashboard");
    });
    this.Then('I should see "$text" title', function (title) {
        return expect(page.getTitle()).to.be.eventually.eql(title);
    });
    this.When('I enter user email and incorrect password',function(){
        return page.enterLogin(user.login)
            .then(function(){
                return page.enterPassword("aaa");
            });
    });
    this.Then('I should be on the login page', function(){
        return page.visitLoginPage().then(function () {
            return expect(browser.getCurrentUrl()).to.eventually.eql("https://lingualeo.com/ru/login");
        });
    });
    this.Then('I should see error message', function(){
        return expect(page.getErrorMessage()).to.be.eventually.true;
    });
};
