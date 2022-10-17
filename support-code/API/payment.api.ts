import { APIRequestContext, APIResponse } from "@playwright/test";


export default class PaymentApi {
    request: APIRequestContext;
    merchantId: string;

    constructor(APIRequestContext: APIRequestContext, merchantId: string) {
        this.request = APIRequestContext
        this.merchantId = merchantId
    }

    async getPaymentMethods(sessionId: string): Promise<APIResponse> {
        const response = await this.request.get("/api/rest/paymentmethods",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId,
                    "X-Oc-Session": sessionId
                },
            }
        )
        return response
    }

    async setPaymentMethod(sessionId: string): Promise<APIResponse> {
        const response = await this.request.post("/api/rest/paymentmethods",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId,
                    "X-Oc-Session": sessionId
                },
                data: {
                    "payment_method": "cod",
                    "agree": "1",
                    "comment": "comment"
                }
            }
        )
        return response
    }


}