import { Locator, Page } from "@playwright/test";

export default class orderSummaryPage {
    page: Page;
    private pageLocator: Locator;
    private orderDetailSummary: Locator;
    private availability: Locator;
    private totalProductPrice: Locator;
    private totalShippingPrice: Locator;
    private totalPriceWithoutTax: Locator;
    private taxPrice: Locator;
    private totalPrice: Locator;
    confirmOrderDetails: Locator;
    confirmAdressInformation: Locator;
    ShippingInformation: Locator;
    termsOfService: Locator;
    continueToPaymentInformation: Locator;
    paymentOptions: Locator;
    bankWire: Locator;
    confirmOrderButton: Locator;
    cartNavigation: Locator;


    constructor(page: Page) {
        this.page = page
        this.pageLocator = this.page.locator("#order")
        this.orderDetailSummary = this.pageLocator.locator("#order-detail-content")
        this.availability = this.orderDetailSummary.locator(".cart_avail span")
        this.totalProductPrice = this.orderDetailSummary.locator("#total_product")
        this.totalShippingPrice = this.orderDetailSummary.locator("#total_shipping")
        this.totalPriceWithoutTax = this.orderDetailSummary.locator("#total_price_without_tax")
        this.taxPrice = this.orderDetailSummary.locator("#total_tax")
        this.totalPrice = this.orderDetailSummary.locator("#total_price")
        this.cartNavigation = this.pageLocator.locator(".cart_navigation")
        this.confirmOrderDetails = this.cartNavigation.locator(`.button[title="Proceed to checkout"]`)
        this.confirmAdressInformation = this.pageLocator.locator(`[name="processAddress"]`)
        

        this.ShippingInformation = this.pageLocator.locator("#carrier_area")
        this.termsOfService = this.ShippingInformation.locator("#cgv")
        this.continueToPaymentInformation = this.cartNavigation.locator(`.button[name="processCarrier"]`)
        
        this.paymentOptions = this.pageLocator.locator(".payment_module")
        this.bankWire = this.paymentOptions.locator(".bankwire")
        this.confirmOrderButton = this.page.locator(`button[type="submit"] span:text-is("I confirm my order ")`)
    }

    async getProductAvailability() {
        return this.availability
    }

    async getTotalProductsPrice() {
        return this.totalProductPrice
    }

    async getTotalShippingPrice() {
        return this.totalShippingPrice
    }

    async getTotalPriceWithoutTax() {
        return this.totalPriceWithoutTax
    }

    async getTax() {
        return this.taxPrice
    }

    async getTotalPrice() {
        return this.totalPrice
    }

    async proceedToAddressSelect() {
        await this.confirmOrderDetails.click();
    }

    async agreeToTOS(){
        await this.termsOfService.check()
    }

    async proceedToShipping() {
        await this.confirmAdressInformation.click();
    }

    async proceedToPayment() {
        await this.continueToPaymentInformation.click();
    }

    async setPaymentMethod() {
        await this.bankWire.click();
    }

    async confirmOrder() {
        await this.confirmOrderButton.click()
    }

}