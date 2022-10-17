import { test as baseTest } from '@playwright/test'
import StoreIndex from './AutomationPractice/store.index'

export const test = baseTest.extend<{
    webshop: StoreIndex
}>(
    {
        webshop: async ({ page }, use) => {
            await use(new StoreIndex(page))
        }
    }
)