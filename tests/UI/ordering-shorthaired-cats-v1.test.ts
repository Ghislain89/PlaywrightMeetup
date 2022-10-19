import { expect } from '@playwright/test';
import {test} from '../../support-code/pages/index'
import TestDataGenerator from '../../support-code/utilities/testdata-generator';

const RandomAccount = TestDataGenerator.generatePerson()

test(`Ordering a Bombay Cat`, async ({page, webshop}) => {
  await test.step('Select Category and Product', async () => {
    await page.goto('')
    await webshop.homePage.topBarComponent.registerAccount()
    await webshop.accountPage.setPersonalDetails(RandomAccount)
    await webshop.accountPage.setPassword(RandomAccount)
    
    await webshop.homePage.navBarComponent.SelectCategory("Cats", "Short Haired Cats")
    await webshop.productsPage.addProductToCart("Bombay")
    await expect(await webshop.productsPage.messageComponent.getSuccesMessageLocator()).toContainText("Success: You have added Bombay to your shopping cart!")
  });

  await test.step('The product has been added to the shopping Cart', async () => {
    await webshop.productsPage.shoppingCartComponent.openCart()
    await expect(await webshop.productsPage.shoppingCartComponent.getProduct()).toContainText("Bombay")
    await expect(await webshop.productsPage.shoppingCartComponent.getAmount()).toContainText("x1")
    await expect(await webshop.productsPage.shoppingCartComponent.getTotalPrice()).toContainText("935.00€")
  });

  await test.step('The correct price breakdown should be displayed on the shopping cart page', async () => {
    await webshop.productsPage.shoppingCartComponent.viewCartPage()
    await expect(await webshop.shoppingCartPage.getSubtotalAmount()).toContainText("850.00€")
    await expect(await webshop.shoppingCartPage.getTaxAmount()).toContainText("85.00€")
    await expect(await webshop.shoppingCartPage.getTotalPrice()).toContainText("935.00€")
  });

  await test.step('Proceed to checkout', async () => {
    await webshop.shoppingCartPage.proceedToCheckout();
  });

  await test.step('Add Personal Details to order and set billing and shipping adress to the same adress', async () => {
    await webshop.checkoutPage.setPersonalDetails(RandomAccount)
    await webshop.checkoutPage.setAddressDetails(RandomAccount)

  });

  await test.step('Proceed to delivery method and verify shipping method and price', async () => {
    await webshop.checkoutPage.proceedToDeliveryDetails();
    await expect (await webshop.checkoutPage.getSameAddressCheckbox()).toBeChecked();
    await webshop.checkoutPage.proceedToDeliveryMethod()
  });

  await test.step('Proceed to payment method and accept terms & conditions', async () => {
    await webshop.checkoutPage.proceedToPaymentMethod();
    await webshop.checkoutPage.acceptTermsAndConditions();
  });

  await test.step('Proceed to confirm order and verify price breakdown', async () => {
    await webshop.checkoutPage.proceedToConfirmOrder();
    await expect (await webshop.checkoutPage.getUnitPrice()).toContainText("935.00€")
    await expect (await webshop.checkoutPage.getSubTotal()).toContainText("850.00€")
    await expect (await webshop.checkoutPage.getShippingRate()).toContainText("5.00€")
    await expect (await webshop.checkoutPage.getTaxAmount()).toContainText("85.50€")
    await expect (await webshop.checkoutPage.getTotalAmount()).toContainText("940.50€")
  });

  await test.step('Confirm Order and veriy success message', async () => {
    await webshop.checkoutPage.confirmTheOrder();
    await expect(await webshop.successPage.getTitle()).toContainText("Your order has been placed!")
    await webshop.successPage.continueToHomePage();
  });

});
