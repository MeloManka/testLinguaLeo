"use strict";

function HomePage() {
    this.registrationForm = element(by.css(".register-form"));
    this.loginButton = element(by.css("#headEnterBtn"));
    this.loginPopup = element(by.css(".login-form"));
    this.loginInput = element(by.css("#landingPopupEmailSign"));
    this.passwordInput = element(by.css("#landingPopupPasswordSign"));
    this.popupLoginButton = element(by.css('#landingPopupBtnSign'));
    this.errorMessage = element(by.css(".error_list"));
}

HomePage.prototype.visit = function () {
    return browser.get("https://lingualeo.com/ru");
};
HomePage.prototype.isRegistrationFormPresent = function () {
    return this.registrationForm.isPresent();
};

HomePage.prototype.isLoginButtonPresent = function(){
    return this.loginButton.isPresent();
};
HomePage.prototype.pressLoginButton = function () {
    return this.loginButton.click();
};
HomePage.prototype.isLoginPopupPresent = function(){
    return this.loginPopup.isPresent();
};
HomePage.prototype.enterLogin = function(login){
    return this.loginInput.sendKeys(login);
};
HomePage.prototype.enterPassword = function(password){
    return this.passwordInput.sendKeys(password);
};
HomePage.prototype.pressPopupLoginButton = function(){
    return this.popupLoginButton.click();
};
HomePage.prototype.visitLoginPage = function(){
    return browser.get("https://lingualeo.com/ru/login");
};
HomePage.prototype.getErrorMessage = function(){
    return this.errorMessage.isPresent();
};
module.exports = HomePage;