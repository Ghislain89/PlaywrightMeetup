import { Locator, Page } from "@playwright/test";
import NavBar from "./components/navBar.component";
import TopMenu from "./components/topMenu.component";

export default class HomePage {
    page: Page;
    
    public TopMenu: TopMenu;
    private pageLocator: Locator;
    public NavBar: NavBar;

    constructor(page: Page) {
        this.page = page
        this.pageLocator = this.page.locator("#index")
        this.TopMenu = new TopMenu(this.page)
        this.NavBar = new NavBar(this.page)
    }


    async getPageLocator(): Promise<Locator>{
        return this.pageLocator
    }

}