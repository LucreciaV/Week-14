import HomePage from "../pageobjects/homePage";

describe("Testing fill inputs empty", () =>{
    it("Username and password fields are empty, should display an error", async() =>{
        await HomePage.open();
        await HomePage.login("","");
        await HomePage.loginModalBtnClick();
        expect(await HomePage.errorMessage.getText()).toContain("Epic sadface: Username is required");
    })
})
describe("Username testing inputs", () =>{
    it("Username field empty, should display an error", async() =>{
        await HomePage.open();
        await HomePage.login("","secret_sauce")
        await HomePage.loginModalBtnClick();
        await expect(HomePage.errorMessage).toHaveText("Epic sadface: Username is required")
    })
})    
describe("Password testing inputs", () =>{
    it("Password field invalid, should display an error", async() =>{
        await HomePage.open()
        await HomePage.login("locked_out_user","invalid")
        await HomePage.loginModalBtnClick();
        await expect(HomePage.errorMessage).toHaveText("Epic sadface: Username and password do not match any user in this service")
    })
})  

describe ("Login to standard user", ()=>{
it ("Verify login process.", async()=>{
    await HomePage.open()
    await expect(HomePage.userNameInput).toBeDisplayed();
    await HomePage.login("locked_out_user","secret_sauce");
    await HomePage.loginModalBtnClick();
    await expect(HomePage.errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.")
})
})