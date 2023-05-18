import BasePage from "./Base.page";


class CheckoutComplete extends BasePage {
    static get url() {
        return "/checkout-complete.html";
    }

    static get completeMessage() {
        return cy.get('.complete-header');
    }
}

export default CheckoutComplete;