import { Locator, Page } from "@playwright/test";

export default class CheckoutPage {
    page: Page;
    
    
    private guestCheckout: Locator;
    private continueButton: Locator;

    private personalDetails: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private email: Locator;
    private telephone: Locator;
    private addressDetails: Locator;
    private address: Locator;
    private city: Locator;
    private postalCode: Locator;
    private countryDropdown: Locator;
    private regionDropdown: Locator;
    private sameAddressCheckbox: Locator;
    private continueToBillingDetails: Locator;
    private continueToDeliveryMethod: Locator;
    private continueToPaymentMethod: Locator;
    private termsConditions: Locator;
    private confirmOrderSection: Locator;
    private subTotalAmount: Locator;
    private taxAmount: Locator;
    private totalAmount: Locator;
    private UnitAmount: Locator;
    private continueToConfirmOrder: Locator;
    private shippingRateAmount: Locator;
    private checkoutOptionsSection: Locator;
    private billingDetailsSection: Locator;
    private deliveryMethodSection: Locator;
    private paymentMethodSection: Locator;
    private shippingMethod: Locator;
    private confirmOrder: Locator;
    deliveryDetailsSection: Locator;
    continueToDeliveryDetails: Locator;

    constructor(page: Page) {
        this.page = page
        this.checkoutOptionsSection = this.page.locator("#collapse-checkout-option")

        this.billingDetailsSection = this.page.locator("#collapse-payment-address")
        this.deliveryDetailsSection = this.page.locator("#collapse-shipping-address")
        this.deliveryMethodSection = this.page.locator("#collapse-shipping-method")
        this.paymentMethodSection = this.page.locator("#collapse-payment-method")
        this.confirmOrderSection = this.page.locator("#collapse-checkout-confirm")

        this.guestCheckout = this.checkoutOptionsSection.locator('input[value="guest"]')
        this.continueToBillingDetails = this.checkoutOptionsSection.locator('input[value="Continue"]')
        

        this.personalDetails = this.billingDetailsSection.locator("#payment-new")
        this.firstName = this.personalDetails.locator("#input-payment-firstname")
        this.lastName = this.personalDetails.locator("#input-payment-lastname")
        this.email = this.personalDetails.locator("#input-payment-email")
        this.telephone = this.personalDetails.locator("#input-payment-telephone")

        this.address = this.personalDetails.locator("#input-payment-address-1")
        this.city = this.personalDetails.locator("#input-payment-city")
        this.postalCode = this.personalDetails.locator("#input-payment-postcode")
        this.countryDropdown = this.personalDetails.locator("#input-payment-country")
        this.regionDropdown = this.personalDetails.locator("#input-payment-zone");
        this.sameAddressCheckbox = this.deliveryDetailsSection.locator('input[type="radio"][name="shipping_address"][value="existing"]')
        this.continueToDeliveryDetails = this.billingDetailsSection.locator('input[value="Continue"]')
        this.continueToDeliveryMethod = this.deliveryDetailsSection.locator('input[value="Continue"]')
        
        this.shippingMethod = this.deliveryMethodSection.locator('input[type="radio"][name="shipping_method"] >> //ancestor::label')
        this.continueToPaymentMethod = this.deliveryMethodSection.locator('input[value="Continue"]')
        
        this.termsConditions = this.paymentMethodSection.locator('input[type="checkbox"][name="agree"]')
        this.continueToConfirmOrder = this.paymentMethodSection.locator('input[value="Continue"]')

        this.UnitAmount = this.confirmOrderSection.locator("tbody td >> nth=4")
        this.subTotalAmount = this.confirmOrderSection.locator('strong:text-is("Sub-Total:") >> //ancestor::tr >> td >> nth=1')
        this.shippingRateAmount = this.confirmOrderSection.locator('strong:text-is("Flat Shipping Rate:") >> //ancestor::tr >> td >> nth=1')
        this.taxAmount = this.confirmOrderSection.locator('strong:text-is("BTW (21%):") >> //ancestor::tr >> td >> nth=1')
        this.totalAmount = this.confirmOrderSection.locator('strong:text-is("Total:") >> //ancestor::tr >> td >> nth=1')
        this.confirmOrder = this.confirmOrderSection.locator('input[value="Confirm Order"]')
    }

    async setGuestCheckout(): Promise<void> {
        await this.guestCheckout.check()
        await this.page.waitForTimeout(1000)
    }

    async proceedToBillingDetails(): Promise<void>{
        await this.continueToBillingDetails.click();
    }



    async proceedToDeliveryDetails(): Promise<void> {
        await this.continueToDeliveryDetails.click()
    }

    async proceedToDeliveryMethod(): Promise<void> {
        await this.continueToDeliveryMethod.click()
    }

    async proceedToPaymentMethod(): Promise<void> {
        await this.continueToPaymentMethod.click();
    }

    async proceedToConfirmOrder(): Promise<void> {
        await this.continueToConfirmOrder.click()
    }   

    async confirmTheOrder(): Promise<void> {
        await this.confirmOrder.click()
    }

    async setPersonalDetails(personalDetails: {firstName: string, lastName: string}): Promise<void> {
        await this.firstName.fill(personalDetails.firstName)
        await this.lastName.fill(personalDetails.lastName)
    }

    async setAddressDetails(personalDetails: {address: string, city: string, postalCode: string, country: string, province: string}): Promise<void> {
        await this.address.fill(personalDetails.address)
        await this.city.fill(personalDetails.city)
        await this.postalCode.fill(personalDetails.postalCode)
        await this.countryDropdown.selectOption({label: personalDetails.country})
        await this.page.waitForTimeout(1000)
        await this.regionDropdown.selectOption({label: personalDetails.province})
        await this.page.waitForTimeout(1000)
    }

    async getSameAddressCheckbox(): Promise<Locator> {
        return this.sameAddressCheckbox
    }

    async getShipingMethod(): Promise<Locator> {
        return this.shippingMethod
    }

    async acceptTermsAndConditions(): Promise<void> {
        await this.termsConditions.check()
    }
    async getUnitPrice(): Promise<Locator> {
        return this.UnitAmount
    }
    
    async getSubTotal(): Promise<Locator> {
        return this.subTotalAmount
    }

    async getShippingRate(): Promise<Locator>{
        return this.shippingRateAmount
    }

    async getTaxAmount(): Promise<Locator> {
        return this.taxAmount
    }

    async getTotalAmount(): Promise<Locator> {
        return this.totalAmount
    }

}