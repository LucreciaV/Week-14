class HomePage {

    get userNameLabel(){
        return $("#login_button_container > div > form > div:nth-child(1)");
    }

    get userNameInput(){
        return $("#user-name");
    }

    get passwordInput(){
        return $("#password");
    }

    get errorMessage(){
        return $("h3");
    }

    get loginModalBtn(){
        return $("#login-button");        
    }


    async login(username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
    }

    async loginModalBtnClick() {
        await this.loginModalBtn.click(); 
    }

    open(){
        return browser.url("https://www.saucedemo.com")
    }

}

export default new HomePage();