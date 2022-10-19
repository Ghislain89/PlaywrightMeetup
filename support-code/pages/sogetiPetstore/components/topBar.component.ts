import { Locator, Page } from "@playwright/test";

export default class TopBarComponent {
  page: Page;
  component: Locator;
  myAccount: Locator;
  register: Locator;

  constructor(page: Page) {
    this.page = page
    this.component = this.page.locator("#top")
    this.myAccount = this.component.locator(`span:text-is("My Account")`)
    this.register = this.component.locator(`a:text-is("Register")`)

  }

  async registerAccount() {
    await this.myAccount.click();
    await this.register.click();
  }
}