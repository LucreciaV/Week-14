import HomePage from "../pageobjects/homePage";
import inventoryPage from "../pageobjects/inventoryPage";
import cartPage from "../pageobjects/cartPage";
import checkoutPage from "../pageobjects/checkoutPage";

describe ("Login to standard user", ()=>{
    it ("Verify login process.", async()=>{
         await HomePage.open()
         await expect(HomePage.userNameInput).toBeDisplayed();
         await HomePage.login("performance_glitch_user","secret_sauce");
         await HomePage.loginModalBtnClick();
     })
 
     it ("Verify performance glitch user page.", async ()=>{
         await expect(inventoryPage.productsPage).toBeDisplayed();
         await expect(inventoryPage.inventoryItems).toBeDisplayed();
     })
 })
 
 describe ("Add items to the cart", () =>{
     it ("Verify shopping cart process.", async()=>{
         await HomePage.open()
         await expect(HomePage.userNameInput).toBeDisplayed();
         await HomePage.login("problem_glitch_user","secret_sauce");
         await HomePage.loginModalBtnClick();
         await inventoryPage.addBtnClick();
     });
 })

 describe ("Add items to the cart", () =>{
    it ("Verify checkout cart process.", async()=>{
        await HomePage.open()
        await expect(HomePage.userNameInput).toBeDisplayed();
        await HomePage.login("problem_glitch_user","secret_sauce");
        await HomePage.loginModalBtnClick();
        await expect(inventoryPage.inventoryItems).toBeDisplayed();
        await inventoryPage.addBtnClick();
        await inventoryPage.cartBtnClick();
        await expect(checkoutPage.checkForm).toBeDisplayed();
        await checkoutPage.infoForm("lucrecia", "vila", "2000");
    });
})