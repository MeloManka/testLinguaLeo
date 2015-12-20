"use strict";

function HomePage() {
    this.title = element(by.css(".hero-unit .center h1"));
}

HomePage.prototype.visit = function () {
    return browser.get("https://angularjs.org/");
};

HomePage.prototype.getTitle = function () {
    return this.title.getText();
};

module.exports = HomePage;