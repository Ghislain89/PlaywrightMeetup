import { test as baseTest } from '@playwright/test'
import SogetiPetStoreIndex from './sogetiPetstore/sogetiPetstore.index'
import ApiIndex from '../API/api.index'
import orderQueries from '../database/orderQueries.database'

export const test = baseTest.extend<{
    SogetiPetStore: SogetiPetStoreIndex
    API: ApiIndex
    Database: orderQueries

}>({
    SogetiPetStore: async ({ page }, use) => {
        await use(new SogetiPetStoreIndex(page))
    },
    API: async ({ request }, use) => {
        await use(new ApiIndex(request))
    },
    Database: async ({}, use) => {
        await use(new orderQueries())
    }
}



)