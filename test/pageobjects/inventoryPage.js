class inventoryPage {
    get productsPage() {
        return $("#header_container > div.header_secondary_container > span");
    }
    get inventoryItems(){
        return $("#inventory_container");
    }
}

export default new inventoryPage();