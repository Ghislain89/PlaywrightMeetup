import { Locator, Page } from "@playwright/test";

export default class SuccessPage {
    page: Page;
    private title: Locator;
    private continueButton: Locator;


    constructor(page: Page) {
        this.page = page
        this.title = this.page.locator("h1")
        this.continueButton = this.page.locator('a:text-is("Continue")')

    }


    async getTitle(): Promise<Locator>{
        return this.title
    }

    async continueToHomePage():Promise<void> {
        await this.continueButton.click();
    }

}