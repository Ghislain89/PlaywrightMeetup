// // global-setup.ts
// import { chromium, FullConfig } from '@playwright/test';
// import StoreIndex from '../pages/AutomationPractice/store.index';
// import TestDataGenerator from '../../support-code/utilities/testdata-generator';

// async function globalSetup(config: FullConfig) {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   const webshop = new StoreIndex(page)

//   let randomAccount = TestDataGenerator.generateAccount()
//   await page.goto('http://automationpractice.com')
//   await webshop.homePage.NavBar.navigateToSignIn()
//   await webshop.authenicationPage.createAccount(randomAccount.email)
//   await webshop.authenicationPage.setPersonalInformation(randomAccount)
//   await webshop.authenicationPage.setShippingInformation(randomAccount)
//   await webshop.authenicationPage.submitAccountCreation()
//   // Save signed-in state to 'storageState.json'.
//   await page.context().storageState({ path: 'storageState.json' });
//   await browser.close();
// }

// export default globalSetup;