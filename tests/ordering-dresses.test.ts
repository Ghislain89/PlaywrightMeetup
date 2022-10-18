import { expect } from '@playwright/test';
import { test } from '../support-code/pages/index'
import TestDataGenerator from '../support-code/utilities/testdata-generator';


let randomAccount: any

test.beforeEach(async ({ page, webshop }) => {
  randomAccount = TestDataGenerator.generateAccount()
  await page.goto('')
  await expect(await webshop.homePage.getPageLocator()).toBeVisible()
  await webshop.homePage.NavBar.navigateToSignIn()
  await webshop.authenicationPage.createAccount(randomAccount.email)
  await webshop.authenicationPage.setPersonalInformation(randomAccount)
  await webshop.authenicationPage.setShippingInformation(randomAccount)
  await webshop.authenicationPage.submitAccountCreation()
})


test(`Ordering an evening dress`, async ({ webshop }) => {
  await test.step('Select Category and Product', async () => {
    await webshop.myAccountPage.TopMenu.SelectProductCategory("Women")
    await webshop.productsPage.selectSubCategory("Dresses")
    await webshop.productsPage.selectSubCategory("Evening Dresses")
    await webshop.productsPage.selectProduct("Printed Dress")
  });

  await test.step('Add Product to Cart', async () => {
    await webshop.productDetailPage.addProductToCart("1", "L")
    await expect(await webshop.productDetailPage.cartDialog.getTitle()).toContainText("Product successfully added to your shopping cart")
  });

  await test.step('Validate product Details', async () => {
    await expect(await webshop.productDetailPage.cartDialog.getProductTotal()).toContainText("$50.99")
    await expect(await webshop.productDetailPage.cartDialog.getShippingCost()).toContainText("$2.00")
    await expect(await webshop.productDetailPage.cartDialog.getCartTotal()).toContainText("$52.99")
  });

  await test.step('Navigate to Checkout', async () => {
    await webshop.productDetailPage.cartDialog.navigateToCheckout();
  });

  await test.step('Validate Product Details during checkout', async () => {
    await expect(await webshop.orderSummaryPage.getProductAvailability()).toContainText("In stock")
    await expect(await webshop.orderSummaryPage.getTotalProductsPrice()).toContainText("$50.99")
    await expect(await webshop.orderSummaryPage.getTotalShippingPrice()).toContainText("$2.00")
    await expect(await webshop.orderSummaryPage.getTax()).toContainText("$2.12")
    await expect(await webshop.orderSummaryPage.getTotalPrice()).toContainText("$55.11")
  });

  await test.step('Proceed to Adress Selection', async () => {
    await webshop.orderSummaryPage.proceedToAddressSelect()
  });

  await test.step('Proceed to Shipping', async () => {
    await webshop.orderSummaryPage.proceedToShipping()
  });

  await test.step('Accept the ToS and continue to Payment', async () => {
    await webshop.orderSummaryPage.agreeToTOS()
    await webshop.orderSummaryPage.proceedToPayment();
  });

  await test.step('Select payment method and confirm order', async () => {
    await webshop.orderSummaryPage.setPaymentMethod();
    await webshop.orderSummaryPage.confirmOrder()
  });

  await test.step('Validate that the order has been confirmed', async () => {
    await expect(await webshop.orderConfirmationPage.getOrderConfirmationText()).toContainText("Your order on My Store is complete.")
  });
});

