import { test as baseTest } from '@playwright/test'
import WebshopIndex from './webshop/webshop.index'
import ApiIndex from '../API/api.index'

export const test = baseTest.extend<{
    webshop: WebshopIndex
    API: ApiIndex

}>({
    webshop: async ({ page }, use) => {
        await use(new WebshopIndex(page))
    },
    API: async ({ request }, use) => {
        await use(new ApiIndex(request))
    }
}



)