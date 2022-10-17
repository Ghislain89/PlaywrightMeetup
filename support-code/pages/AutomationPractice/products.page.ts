import { Locator, Page } from "@playwright/test";
import MessageComponent from "./components/message.component";
import TopMenu from "./components/topMenu.component";
import shoppingCartComponent from "./components/shoppingCart.component";

export default class ProductsPage {
    page: Page;
    TopMenu: TopMenu;
    messageComponent: any;
    shoppingCartComponent: shoppingCartComponent
    
    pageLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.pageLocator = this.page.locator("#category")
        this.TopMenu = new TopMenu(this.page)
        this.messageComponent = new MessageComponent(this.page)
        this.shoppingCartComponent = new shoppingCartComponent(this.page)

    }

    async selectProduct(productName: string): Promise<void> {
        await this.pageLocator.locator(`a[class="product-name"]:text-is("${productName}")`).click()
    }

}