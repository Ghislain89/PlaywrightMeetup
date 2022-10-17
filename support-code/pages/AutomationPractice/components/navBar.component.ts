import { Locator, Page } from "@playwright/test";

export default class NavBar {
  page: Page;
  private swiperContainer: Locator;
  component: Locator;
  categoryDropdown: Locator;
  signIn: Locator;

  constructor(page: Page) {
    this.page = page
    this.component = this.page.locator(".nav")
    this.signIn = this.component.locator(`.login`)
  }

  async navigateToSignIn() {
    await this.signIn.click();
  }

}