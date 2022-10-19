import { APIRequestContext, APIResponse } from "@playwright/test";


export default class ConfirmApi {
    request: APIRequestContext;
    merchantId: string;

    constructor(APIRequestContext: APIRequestContext, merchantId: string) {
        this.request = APIRequestContext
        this.merchantId = merchantId
    }

    async getOrderOverview(sessionId: string): Promise<APIResponse> {
        const response = await this.request.post("/api/rest/confirm",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId,
                    "X-Oc-Session": sessionId
                },
            }
        )
        return response
    }

    async confirmOrder(sessionId: string): Promise<APIResponse> {
        const response = await this.request.put("/api/rest/confirm",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId,
                    "X-Oc-Session": sessionId
                },
            }
        )
        return response
    }


}