import { Locator, Page } from "@playwright/test";

export default class shoppingCartComponent {
    page: Page;
    private component: Locator;
    private title: Locator;
    private cartDetails: Locator;
    private productInfo: Locator;
    private productTotal: Locator;
    private shippingCost: Locator;
    private cartTotal: Locator;
    private proceedToCheckout: Locator;

    constructor(page: Page) {
        this.page = page
        this.component = this.page.locator("#layer_cart")
        this.productInfo = this.component.locator(".layer_cart_product")
        this.title = this.productInfo.locator("h2")

        this.cartDetails = this.component.locator(".layer_cart_cart")
        this.productTotal = this.cartDetails.locator(".ajax_block_products_total")
        this.shippingCost = this.cartDetails.locator(".ajax_cart_shipping_cost")
        this.cartTotal = this.cartDetails.locator(".ajax_block_cart_total")

        this.proceedToCheckout = this.cartDetails.locator(`a[title="Proceed to checkout"]`)
    }

    async getTitle() {
        return this.title
    }

    async getProductTotal() {
        return this.productTotal
    }

    async getShippingCost() {
        return this.shippingCost
    }

    async getCartTotal() {
        return this.cartTotal
    }

    async navigateToCheckout() {
        await this.proceedToCheckout.click()

    }
}