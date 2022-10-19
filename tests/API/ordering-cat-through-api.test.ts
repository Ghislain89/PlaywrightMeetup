import { expect } from '@playwright/test';
import { test } from '../../support-code/pages/index'

let sessionId: string
let orderId: string

test.beforeEach(async ({ API }) => {
  sessionId = await API.sessionApi.initializeSession()
});

test(`Ordering a British Shorthair Cat through the API`, async ({ API}) => {
  await test.step('Add Item to Cart', async () => {
    const response = await API.cartApi.addItemToCart(sessionId, "56", "1")
    expect(response.ok()).toBe(true)
    //Could assert the entire responseBody if you wanted.
  });

  await test.step('Create Guest User', async () => {
    const response = await API.guestApi.createGuestUser(sessionId)
    expect(response.ok()).toBe(true)
  });

  await test.step('Add new shipping address', async () => {
    const response = await API.shippingApi.setGuestShippingAdress(sessionId)
    expect(response.ok()).toBe(true)
  });

  await test.step('Get available shipping methods', async () => {
    const response = await API.shippingApi.getShippingMethods(sessionId)    
    expect(response.ok()).toBe(true)
  });

  await test.step('Set Prefered shipping method', async () => {
    const response = await API.shippingApi.setShippingMethod(sessionId)    
    expect(response.ok()).toBe(true)
  });

  await test.step('Get available payment methods', async () => {
    const response = await API.paymentApi.getPaymentMethods(sessionId)    
    expect(response.ok()).toBe(true)
  });

  await test.step('set prefered payment methods', async () => {
    const response = await API.paymentApi.setPaymentMethod(sessionId)    
    expect(response.ok()).toBe(true)
  });

  await test.step('get order overview', async () => {
    const response = await API.confirmApi.getOrderOverview(sessionId)    
    expect(response.ok()).toBe(true)
    const jsonBody = await response.json();
    orderId = jsonBody.data.order_id
  });

  await test.step('get order overview', async () => {
    const response = await API.confirmApi.confirmOrder(sessionId)    
    expect(response.ok()).toBe(true)
  });

});
