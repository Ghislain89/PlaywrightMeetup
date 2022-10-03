import { APIRequestContext } from "@playwright/test";
import CartApi from "./cart.api";
import ConfirmApi from "./confirm.api";
import GuestApi from "./guest.api";
import PaymentApi from "./payment.api";
import SessionApi from "./session.api"
import ShippingApi from "./shipping.api";

export default class ApiIndex {

    merchantId = 'opleiding'

    sessionApi: SessionApi;
    cartApi: CartApi;
    confirmApi: ConfirmApi
    guestApi: GuestApi;
    paymentApi: PaymentApi;
    shippingApi: ShippingApi;
    

    constructor(APIRequestContext: APIRequestContext) {
        this.sessionApi = new SessionApi(APIRequestContext, this.merchantId)
        this.cartApi = new CartApi(APIRequestContext, this.merchantId)
        this.confirmApi = new ConfirmApi(APIRequestContext, this.merchantId)
        this.guestApi = new GuestApi(APIRequestContext, this.merchantId)
        this.paymentApi = new PaymentApi(APIRequestContext, this.merchantId)
        this.shippingApi = new ShippingApi(APIRequestContext, this.merchantId)
    }
}