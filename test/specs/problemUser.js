import HomePage from "../pageobjects/homePage";
import inventoryPage from "../pageobjects/inventoryPage";

describe ("Login to standard user", ()=>{
    it ("Verify login process.", async()=>{
         await HomePage.open()
         await expect(HomePage.userNameInput).toBeDisplayed();
         await HomePage.login("problem_user","secret_sauce");
         await HomePage.loginModalBtnClick();
     })
 
     it ("Verify problem user page.", async ()=>{
         await expect(inventoryPage.productsPage).toBeDisplayed();
         await expect(inventoryPage.inventoryItems).toBeDisplayed();
     })
 })
 
 describe ("Add items to the cart", () =>{
     it ("Verify shopping cart process.", async()=>{
         await HomePage.open()
         await expect(HomePage.userNameInput).toBeDisplayed();
         await HomePage.login("standard_user","secret_sauce");
         await HomePage.loginModalBtnClick();
         await inventoryPage.addBtnClick();
     });
 })

 describe ("Remove items", () =>{
    it ("Verify remove button bug process.", async()=>{
        await HomePage.open()
        await expect(HomePage.userNameInput).toBeDisplayed();
        await HomePage.login("problem_user","secret_sauce");
        await HomePage.loginModalBtnClick();
        await expect(inventoryPage.inventoryItems).toBeDisplayed();
        await inventoryPage.addBtnClick();
        await inventoryPage.removeBtnClick();
    });
})