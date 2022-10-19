import { Locator, Page } from "@playwright/test";
import NavBarComponent from "./components/navBar.component";

export default class AccountPage {
    page: Page;
    
    public navBarComponent: NavBarComponent;
    private pageLocator: Locator;
    firstName: Locator;
    LastName: Locator;
    email: Locator;
    telephone: Locator;
    password: Locator;
    passwordConfirm: Locator;
    privacyPolicyCheckbox: Locator;
    continue: Locator;

    constructor(page: Page) {
        this.page = page
        this.pageLocator = this.page.locator("#account-register")
        this.firstName = this.pageLocator.locator("#input-firstname")
        this.LastName = this.pageLocator.locator("#input-lastname")
        this.email = this.pageLocator.locator("#input-email")
        this.telephone = this.pageLocator.locator("#input-telephone")
        this.password = this.pageLocator.locator("#input-password")
        this.passwordConfirm = this.pageLocator.locator("#input-confirm")
        this.privacyPolicyCheckbox = this.pageLocator.locator(`input[name="agree"]`)
        this.continue = this.pageLocator.locator(`input[value="Continue"]`)

    }

    async getPageLocator(): Promise<Locator>{
        return this.pageLocator
    }


    async setPersonalDetails(PersonalDetails: {firstName: string, lastName: string, email: string, telephone: string}){
        await this.firstName.fill(PersonalDetails.firstName)
        await this.LastName.fill(PersonalDetails.lastName)
        await this.email.fill(PersonalDetails.email)
        await this.telephone.fill(PersonalDetails.telephone)
    }

    async setPassword(PersonalDetails: {password: string}) {
        await this.password.fill(PersonalDetails.password)
        await this.passwordConfirm.fill(PersonalDetails.password)
        await this.privacyPolicyCheckbox.check()
        await this.continue.click();
    }

}