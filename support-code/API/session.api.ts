import { APIRequestContext } from "@playwright/test";


export default class SessionApi {
    request: APIRequestContext;
    merchantId: string;


    constructor(APIRequestContext: APIRequestContext, merchantId: string) {
        this.request = APIRequestContext 
        this.merchantId = merchantId
    }


    async initializeSession(): Promise<string> {
       const response = await this.request.get("api/rest/session",
            {
                headers: {
                    "X-Oc-Merchant-Id": this.merchantId
                }
            }
        )
        const responseBody = await response.json()
        console.log(response)
        return responseBody.data.session
    }

}