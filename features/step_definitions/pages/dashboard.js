'use strict';

var DashboardPage = function(){
    this.greeting = element(by.css(".dash-intro__title"));
};
DashboardPage.prototype.visit = function(){
    return browser.get("https://lingualeo.com/ru/dashboard");
};
DashboardPage.prototype.getGreeting = function(){
    return this.greeting.getText();
};

module.exports = DashboardPage;