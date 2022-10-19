import { APIRequestContext, APIResponse } from "@playwright/test";


export default class ShippingApi {
    request: APIRequestContext;
    merchantId: string;

    constructor(APIRequestContext: APIRequestContext, merchantId: string) {
        this.request = APIRequestContext
        this.merchantId = merchantId
    }

    async setGuestShippingAdress(sessionId: string): Promise<APIResponse> {
        const response = await this.request.post("/api/rest/guestshipping",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId,
                    "X-Oc-Session": sessionId
                },
                data: {
                    "firstname": "Ghislain",
                    "lastname": "Gabriëlse",
                    "city": "Vianen",
                    "address_1": "Lange Dreef 17",
                    "country_id": "81",
                    "postcode": "4131NJ",
                    "zone_id": "1256"
                },
            }
        )
        return response
    }

    async getShippingMethods(sessionId: string): Promise<APIResponse> {
        const response = await this.request.get("/api/rest/shippingmethods",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId,
                    "X-Oc-Session": sessionId
                }
            }
        )
        return response
    }

    async setShippingMethod(sessionId: string): Promise<APIResponse> {
        const response = await this.request.post("/api/rest/shippingmethods",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId,
                    "X-Oc-Session": sessionId
                },
                data: {
                    "shipping_method": "flat.flat",
                    "comment": "comment"
                }
            }
        )
        return response
    }
}