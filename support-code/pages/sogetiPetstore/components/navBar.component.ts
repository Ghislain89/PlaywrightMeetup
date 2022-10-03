import { Locator, Page } from "@playwright/test";

export default class NavBarComponent {
    page: Page;
    private swiperContainer: Locator;
    component: Locator;
    navDropdown: Locator;

    constructor(page: Page) {
        this.page = page
        this.component = this.page.locator("nav.navbar")
        this.navDropdown = this.component.locator(".dropdown-menu")
    }

    async SelectCategory(navItem: string, category: string): Promise<void> {
      await this.component.locator(`a:text-is("${navItem}")`).hover();
      await this.navDropdown.locator(`a:has-text("${category}")`).click();
    }
}