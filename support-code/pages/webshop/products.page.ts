import { Locator, Page } from "@playwright/test";
import MessageComponent from "./components/message.component";
import NavBarComponent from "./components/navBar.component";
import shoppingCartComponent from "./components/shoppingCart.component";

export default class ProductsPage {
    page: Page;
    navBarComponent: NavBarComponent;
    productCategoryPage: Locator;
    messageComponent: any;
    shoppingCartComponent: shoppingCartComponent;
    productQuantity: Locator;
    productPage: Locator;

    constructor(page: Page) {
        this.page = page
        this.productCategoryPage = this.page.locator("#product-category")
        this.productPage = this.page.locator("#product-product")
        this.navBarComponent = new NavBarComponent(this.page)
        this.messageComponent = new MessageComponent(this.page)
        this.shoppingCartComponent = new shoppingCartComponent(this.page)
        this.productQuantity = this.page.locator("#input-quantity")

    }


    async addProductToCart(productName: string): Promise<void> {
        const productLocator = await this.productCategoryPage.locator(`img[title="${productName}"] >> //ancestor::div[@class='product-thumb']`)
        await productLocator.locator('button span:has-text("Add to Cart")').click() 
    }

    async selectProduct(productName: string): Promise<void> {
        await this.productCategoryPage.locator(`img[title="${productName}"]`).click()
    }

}