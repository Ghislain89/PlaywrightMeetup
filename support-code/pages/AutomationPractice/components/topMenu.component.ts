import { Locator, Page } from "@playwright/test";

export default class TopMenu {
    page: Page;
    private swiperContainer: Locator;
    private component: Locator;

    constructor(page: Page) {
        this.page = page
        this.component = this.page.locator("#block_top_menu")
    }

    async SelectProductCategory(productCategory: string): Promise<void> {
      await this.component.locator(`a:text-is("${productCategory}")`).click();

    }
}