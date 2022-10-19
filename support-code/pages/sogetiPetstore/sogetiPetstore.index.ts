import { Page } from "@playwright/test";
import AccountPage from "./account.page";
import CheckoutPage from "./checkout.page";
import HomePage from "./home.page";
import ProductDetailPage from "./productDetail.page";
import ProductsPage from "./products.page";
import ShoppingCartPage from "./shoppingCart.page";
import SuccessPage from "./success.page";

export default class SogetiPetStoreIndex {
    page: Page;
    homePage: HomePage;
    accountPage: AccountPage
    productsPage: ProductsPage;
    shoppingCartPage: ShoppingCartPage;
    checkoutPage: CheckoutPage;
    successPage: SuccessPage;
    productDetailPage: ProductDetailPage;


    constructor(page: Page) {
        this.page = page 
        this.homePage = new HomePage(page)
        this.productsPage = new ProductsPage(page)
        this.shoppingCartPage = new ShoppingCartPage(page)
        this.checkoutPage = new CheckoutPage(page)
        this.successPage = new SuccessPage(page)
        this.productDetailPage = new ProductDetailPage(page)
        this.accountPage = new AccountPage(this.page)
    }
}