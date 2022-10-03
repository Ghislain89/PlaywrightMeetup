import { Locator, Page } from "@playwright/test";

export default class shoppingCartPage {
    page: Page;
    private component: Locator;
    private subTotalAmount: Locator;
    private taxAmount: Locator;
    private totalAmount: Locator;
    private checkout: Locator;


    constructor(page: Page) {
        this.page = page
        this.component = this.page.locator("#content")
        this.subTotalAmount = this.component.locator('strong:text-is("Sub-Total:") >> //ancestor::tr >> td >> nth=1')
        this.taxAmount = this.component.locator('strong:text-is("BTW (21%):") >> //ancestor::tr >> td >> nth=1')
        this.totalAmount = this.component.locator('strong:text-is("Total:") >> //ancestor::tr >> td >> nth=1')
        this.checkout = this.component.locator('.btn:text-is("Checkout")')
    }

    async getSubtotalAmount() {
        return this.subTotalAmount
    }

    async getTaxAmount(){
        return this.taxAmount
    }

    async getTotalPrice() {
        return this.totalAmount
    }
    
    async proceedToCheckout(): Promise<void> {
        await this.checkout.click();
    }

}