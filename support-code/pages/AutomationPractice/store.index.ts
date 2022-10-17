import { Page } from "@playwright/test";
import HomePage from "./home.page";
import ProductDetailPage from "./productDetail.page";
import ProductsPage from "./products.page";
import OrderSummaryPage from "./orderSummary.page";
import AuthenticationPage from "./authenication.page";
import orderConfirmationPage from "./orderConfirmation.page";
import MyAccountPage from "./myAccount.page";

export default class StoreIndex {
    page: Page;
    homePage: HomePage;
    productsPage: ProductsPage;
    orderSummaryPage: OrderSummaryPage;
    productDetailPage: ProductDetailPage;
    authenicationPage: AuthenticationPage;
    orderConfirmationPage: orderConfirmationPage;
    myAccountPage: MyAccountPage;


    constructor(page: Page) {
        this.page = page 
        this.homePage = new HomePage(this.page)
        this.myAccountPage = new MyAccountPage(this.page)
        this.productsPage = new ProductsPage(this.page)
        this.orderSummaryPage = new OrderSummaryPage(this.page)
    
        this.productDetailPage = new ProductDetailPage(this.page)
        this.authenicationPage = new AuthenticationPage(this.page)
        this.orderConfirmationPage = new orderConfirmationPage(this.page)
    }
}