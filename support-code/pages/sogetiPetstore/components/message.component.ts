import { Locator, Page } from "@playwright/test";

export default class MessageComponent {
    page: Page;
    component: Locator;
    succesMessage: Locator;

    constructor(page: Page) {
        this.page = page
        this.succesMessage = this.page.locator(".alert-success")
    }


    async getSuccesMessageLocator() {
        return this.succesMessage
    }
}