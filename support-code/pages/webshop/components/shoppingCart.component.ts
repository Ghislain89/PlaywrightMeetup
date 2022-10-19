import { Locator, Page } from "@playwright/test";

export default class shoppingCartComponent {
    page: Page;
    private component: Locator;
    private productTable: Locator;
    private product: Locator;
    private amount: Locator;
    private totalPrice: Locator;
    private viewCart: Locator;

    constructor(page: Page) {
        this.page = page
        this.component = this.page.locator("#cart")
        this.productTable = this.component.locator("table >> nth=0")
        this.product = this.productTable.locator("td >> nth=1 >> a")
        this.amount = this.productTable.locator("td >> nth=2")
        this.totalPrice = this.productTable.locator("td >> nth=3")
        this.viewCart = this.component.locator('strong:text-is("View Cart")')
        
    }

async openCart(): Promise<void> {
    await this.component.click();
}   
async getProduct(): Promise<Locator> {
    return this.product
}

async getAmount(): Promise<Locator> {
    return this.amount
}

async getTotalPrice(): Promise<Locator> {
    return this.totalPrice
}

async viewCartPage(): Promise<void> {
    await this.viewCart.click();
}


    
}