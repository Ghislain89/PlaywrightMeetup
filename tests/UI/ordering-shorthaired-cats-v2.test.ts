import { expect } from '@playwright/test';
import {test} from '../../support-code/pages/index'

test.beforeEach(async ({ page, SogetiPetStore }) => {
  await page.goto('')
  await expect(await SogetiPetStore.homePage.getPageLocator()).toBeVisible()
});

test(`Ordering a British Shorthair Cat`, async ({page, SogetiPetStore }) => {
  await test.step('Select Category and Product', async () => {
    await SogetiPetStore.homePage.navBarComponent.SelectCategory("Cats", "Short Haired Cats")
    await SogetiPetStore.productsPage.selectProduct("British Shorthair")
    await SogetiPetStore.productDetailPage.addProductToCartWithAmount("2")
    await expect(await SogetiPetStore.productsPage.messageComponent.getSuccesMessageLocator()).toContainText("Success: You have added British Shorthair to your shopping cart!")
  });

  await test.step('The product has been added to the shopping Cart', async () => {
    await SogetiPetStore.productsPage.shoppingCartComponent.openCart()
    await expect(await SogetiPetStore.productsPage.shoppingCartComponent.getProduct()).toContainText("British Shorthair")
    await expect(await SogetiPetStore.productsPage.shoppingCartComponent.getAmount()).toContainText("x2")
    await expect(await SogetiPetStore.productsPage.shoppingCartComponent.getTotalPrice()).toContainText("1,870.00€")
  });

  await test.step('The correct price breakdown should be displayed on the shopping cart page', async () => {
    await SogetiPetStore.productsPage.shoppingCartComponent.viewCartPage()
    await expect(await SogetiPetStore.shoppingCartPage.getSubtotalAmount()).toContainText("1,700.00€")
    await expect(await SogetiPetStore.shoppingCartPage.getTaxAmount()).toContainText("170.00€")
    await expect(await SogetiPetStore.shoppingCartPage.getTotalPrice()).toContainText("1,870.00€")
  });

  await test.step('Proceed to checkout as a guest', async () => {
    await SogetiPetStore.shoppingCartPage.proceedToCheckout();
    await SogetiPetStore.checkoutPage.setGuestCheckout();
    await SogetiPetStore.checkoutPage.proceedToBillingDetails();
  });

  await test.step('Add Personal Details to order and set billing and shipping adress to the same adress', async () => {
    await SogetiPetStore.checkoutPage.setPersonalDetails("Ghislain", "Gabriëlse", "ghislain.gabrielse@sogeti.com", "06123456789")
    await SogetiPetStore.checkoutPage.setAddressDetails("Lange Dreef 17", "Vianen", "4131NJ", "Netherlands", "Utrecht")
    await expect (await SogetiPetStore.checkoutPage.getSameAddressCheckbox()).toBeChecked();
  });

  await test.step('Proceed to delivery method and verify shipping method and price', async () => {
    await SogetiPetStore.checkoutPage.proceedToDeliveryDetails();
    await expect(await SogetiPetStore.checkoutPage.getShipingMethod()).toContainText("5.50€")
  });

  await test.step('Proceed to payment method and accept terms & conditions', async () => {
    await SogetiPetStore.checkoutPage.proceedToPaymentMethod();
    await SogetiPetStore.checkoutPage.acceptTermsAndConditions();
  });

  await test.step('Proceed to confirm order and verify price breakdown', async () => {
    await SogetiPetStore.checkoutPage.proceedToConfirmOrder();
    await expect (await SogetiPetStore.checkoutPage.getUnitPrice()).toContainText("1,870.00€")
    await expect (await SogetiPetStore.checkoutPage.getSubTotal()).toContainText("1,700.00€")
    await expect (await SogetiPetStore.checkoutPage.getShippingRate()).toContainText("5.00€")
    await expect (await SogetiPetStore.checkoutPage.getTaxAmount()).toContainText("170.50€")
    await expect (await SogetiPetStore.checkoutPage.getTotalAmount()).toContainText("1,875.50€")
  });

  await test.step('Confirm Order and veriy success message', async () => {
    await SogetiPetStore.checkoutPage.confirmTheOrder();
    await expect(await SogetiPetStore.successPage.getTitle()).toContainText("Your order has been placed!")
    await SogetiPetStore.successPage.continueToHomePage();
  });

});