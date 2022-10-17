import { Locator, Page } from "@playwright/test";

export default class TopMenu {
    page: Page;
    private swiperContainer: Locator;
    component: Locator;
    categoryDropdown: Locator;

    constructor(page: Page) {
        this.page = page
        this.component = this.page.locator("#block_top_menu")
        this.categoryDropdown = this.component.locator(`.submenu-container[style="display: block;"]`)
    }

    async SelectProductCategory(productCategory: string, category: string): Promise<void> {
      await this.component.locator(`a:text-is("${productCategory}")`).hover();
      await this.categoryDropdown.locator(`a:text-is("${category}")`).click();
    }
}