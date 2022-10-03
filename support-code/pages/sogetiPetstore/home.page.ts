import { Locator, Page } from "@playwright/test";
import NavBarComponent from "./components/navBar.component";

export default class HomePage {
    page: Page;
    
    public navBarComponent: NavBarComponent;
    private pageLocator: Locator;

    constructor(page: Page) {
        this.page = page
        this.pageLocator = this.page.locator("#common-home")
        this.navBarComponent = new NavBarComponent(this.page)
    }


    async getPageLocator(): Promise<Locator>{
        return this.pageLocator
    }

}