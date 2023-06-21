class checkoutPage{
    get checkForm() {
        return $("#checkout_info_container > div > form");
    }

    get firstNameInput() {
        return $("#first-name");
    }

    get lastNameInput() {
        return $("#last-name");
    }

    get zipInput() {
        return $("#postal-code");
    }

    get continueBtn() {
        return $("#continue");
    }
    
    async setFirstName(firstname) {
        await this.firstNameInput.setValue(firstname);
    }

    async setLastName(lastname) {
        await this.lastNameInput.setValue(lastname);
    }

    async setZip(zip) {
        await this.zipInput.setValue(zip);
    }

    async continueBtnClick() {
        await this.continueBtn.click(); 
    }

    async infoForm(firstname, lastname, zip) {
        await this.setFirstName(firstname);
        await this.setLastName(lastname);
        await this.setZip(zip);
        await this.continueBtn.click();
    }
}
export default new checkoutPage();