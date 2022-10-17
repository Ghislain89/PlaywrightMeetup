import { APIRequestContext, APIResponse } from "@playwright/test";


export default class GuestApi {
    request: APIRequestContext;
    merchantId: string;

    constructor(APIRequestContext: APIRequestContext, merchantId: string) {
        this.request = APIRequestContext
        this.merchantId = merchantId 
    }

    async createGuestUser(sessionId: string): Promise<APIResponse> {
       const response = await this.request.post("/api/rest/guest",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId,
                    "X-Oc-Session": sessionId
                },
                data: {
                    "lastname": "Gabriëlse",
                    "firstname": "Ghislain",
                    "confirm": "password",
                    "telephone": "06123456789",
                    "city": "Vianen",
                    "address_1": "Lange Dreef 17",
                    "country_id": "81",
                    "postcode": "4131NJ",
                    "agree": "1",
                    "zone_id": "1256",
                    "email": "ghislain.gabrielse@sogeti.com",
                    "password": "ThisIsADummyPassword",
                    "company_id": "1",
                    "company": "Sogeti",
                },
            }
        )
       return response
    }
}