import { chromium, FullConfig } from '@playwright/test';
import WebshopIndex from '../pages/webshop/webshop.index';
import TestDataGenerator from './testdata-generator';


async function globalSetup(config: FullConfig) {
  const  randomAccount = TestDataGenerator.generatePerson()
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const webshop = new WebshopIndex(page)
  await page.goto('http://playwright-meetup.northeurope.cloudapp.azure.com/')
  await webshop.homePage.topBarComponent.registerAccount()
  await webshop.accountPage.setPersonalDetails(randomAccount)
  await webshop.accountPage.setPassword(randomAccount)

  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;