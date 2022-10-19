import { APIRequestContext, APIResponse } from "@playwright/test";


export default class CartApi {
    request: APIRequestContext;
    merchantId: string;

    constructor(APIRequestContext: APIRequestContext, merchantId: string) {
        this.request = APIRequestContext
        this.merchantId = merchantId 
    }

    async addItemToCart(sessionId: string, productId: string , quantity: string): Promise<APIResponse> {
       const response = await this.request.post("/api/rest/cart",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId,
                    "X-Oc-Session": sessionId
                },
                data: {
                    "product_id": productId,
                    "quantity": quantity
                },
                
            }
        )
       return response
    }

}