import { Locator, Page } from "@playwright/test";

export default class AuthenticationPage {
    page: Page;
    
    private pageLocator: Locator;
    private createNewAccountForm: Locator;
    private emailNewAccount: Locator;
    private accountCreationForm: Locator;
    private genderMale: Locator;
    private customerfirstName: Locator;
    private customerLastName: Locator;
    private customerEmail: Locator;
    private customerPassword: Locator;
    private customerDayOfBirth: Locator;
    private customerMonthOfBirth: Locator;
    private customerYearOfBirth: Locator;
    private shippingFirstName: Locator;
    private shippingLastName: Locator;
    private shippingAddress: Locator;
    private shippingCity: Locator;
    private shippingState: Locator;
    private shippingZipCode: Locator;
    private shippingCountry: Locator;
    private shippingMobile: Locator;
    private addressAlias: Locator;
    private createAccountButton: Locator;
    private submitAccount: Locator;

    constructor(page: Page) {
        this.page = page
        this.pageLocator = this.page.locator("#authentication")
        this.createNewAccountForm = this.pageLocator.locator("#create-account_form")
        this.emailNewAccount = this.createNewAccountForm.locator("#email_create")
        this.createAccountButton = this.createNewAccountForm.locator("#SubmitCreate")

        this.accountCreationForm = this.pageLocator.locator("#account-creation_form")
        this.genderMale = this.accountCreationForm.locator("#uniform-id_gender1")
        this.customerfirstName = this.accountCreationForm.locator("#customer_firstname")
        this.customerLastName = this.accountCreationForm.locator("#customer_lastname")
        this.customerEmail = this.accountCreationForm.locator("#email")
        this.customerPassword = this.accountCreationForm.locator("#passwd")
        this.customerDayOfBirth = this.accountCreationForm.locator("#days")
        this.customerMonthOfBirth = this.accountCreationForm.locator("#months")
        this.customerYearOfBirth = this.accountCreationForm.locator("#years")

        this.shippingFirstName = this.accountCreationForm.locator("#firstname")
        this.shippingLastName = this.accountCreationForm.locator("#lastname")
        this.shippingAddress = this.accountCreationForm.locator("#address1")
        this.shippingCity = this.accountCreationForm.locator("#city")
        this.shippingState = this.accountCreationForm.locator("#id_state")
        this.shippingZipCode = this.accountCreationForm.locator("#postcode")
        this.shippingCountry = this.accountCreationForm.locator("#id_country")
        this.shippingMobile = this.accountCreationForm.locator("#phone_mobile")
        this.addressAlias = this.accountCreationForm.locator("#alias")
        this.submitAccount = this.accountCreationForm.locator("#submitAccount")

    }


    async getPageLocator(){
        return this.pageLocator
    }


    async createAccount(email: string) {
        await this.emailNewAccount.fill(email)
        await this.createAccountButton.click()
    }


    async setPersonalInformation(personObject: {firstName: string, lastName: string, password: string, DoB: string, MoB: string, YoB: string}) {
        await this.genderMale.click()
        await this.customerfirstName.fill(personObject.firstName)
        await this.customerLastName.fill(personObject.lastName)
        await this.customerPassword.fill(personObject.password)
        await this.customerDayOfBirth.selectOption({value: personObject.DoB})
        await this.customerMonthOfBirth.selectOption({value: personObject.MoB})
        await this.customerYearOfBirth.selectOption({value: personObject.YoB})
    }

    async setShippingInformation(shipping: {firstName: string, lastName: string, address: string, city: string, state: string, zipcode: string, mobilePhone: string}) {
        await this.shippingFirstName.fill(shipping.firstName) 
        await this.shippingLastName.fill(shipping.lastName)
        await this.shippingAddress.fill(shipping.address)
        await this.shippingCity.fill(shipping.city) 
        await this.shippingZipCode.fill(shipping.zipcode) 
        await this.shippingCountry.selectOption({label: "United States"}) 
        await this.shippingState.selectOption({label: shipping.state}) 
        await this.shippingMobile.fill(shipping.mobilePhone) 
        await this.addressAlias.fill("default") 
    }

    async submitAccountCreation() {
        await this.submitAccount.click()
    }

}