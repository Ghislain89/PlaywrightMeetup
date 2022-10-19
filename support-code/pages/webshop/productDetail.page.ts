import { Locator, Page } from "@playwright/test";
import MessageComponent from "./components/message.component";
import NavBarComponent from "./components/navBar.component";
import shoppingCartComponent from "./components/shoppingCart.component";

export default class ProductDetailPage {
    page: Page;
    navBarComponent: NavBarComponent;
    productCategoryPage: Locator;
    messageComponent: any;
    shoppingCartComponent: shoppingCartComponent;
    productQuantity: Locator;
    pageLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.pageLocator = this.page.locator("#product-product")
        this.navBarComponent = new NavBarComponent(this.page)
        this.messageComponent = new MessageComponent(this.page)
        this.shoppingCartComponent = new shoppingCartComponent(this.page)
        this.productQuantity = this.page.locator("#input-quantity")
    }


    async addProductToCartWithAmount(amount: string = "1") {
        await this.pageLocator.locator("#input-quantity").fill(amount)
        await this.page.waitForTimeout(1000)
        await this.pageLocator.locator('#button-cart').click();
    }
}