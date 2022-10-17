import { Locator, Page } from "@playwright/test";
import shoppingCartComponent from "./components/shoppingCart.component";

export default class ProductDetailPage {
    page: Page;
    private pageLocator: Locator;
    private productForm: Locator;
    private quantity: Locator;
    private size: Locator;
    private addToCartButton: Locator;
    public cartDialog: shoppingCartComponent;

    constructor(page: Page) {
        this.page = page
        this.pageLocator = this.page.locator("#product")
        this.productForm = this.pageLocator.locator(`#buy_block`)
        this.quantity = this.productForm.locator("#quantity_wanted")
        this.size = this.productForm.locator("#group_1")
        this.addToCartButton = this.productForm.locator("#add_to_cart")
        this.cartDialog = new shoppingCartComponent(this.page)
    }

    async addProductToCart(quantity: string, size: string) {
        await this.setQuantity(quantity)
        await this.setSize(size)
        await this.addToCartButton.click();
    }


    async setQuantity(amount: string = "1") {
        await this.quantity.fill(amount)
    }

    async setSize(size: string = "L"){
        await this.size.selectOption({label: size})
    }
}