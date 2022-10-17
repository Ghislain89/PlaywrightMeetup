import { Locator, Page } from "@playwright/test";

export default class orderConfirmationPage {
    page: Page;
    private pageLocator: Locator;
    private confirmOrderButton: Locator;
    private orderComplete: Locator;


    constructor(page: Page) {
        this.page = page
        this.pageLocator = this.page.locator("#order-confirmation")
        this.orderComplete = this.pageLocator.locator(".cheque-indent strong")
    }


    async getOrderConfirmationText() {
        return this.orderComplete
    }

}