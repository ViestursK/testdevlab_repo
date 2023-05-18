import BasePage from "./Base.page";


class CartPage extends BasePage {
    static get url() {
        return "/cart.html";
    }

    static get itemNames() {
        return cy.get(".inventory_item_name");
    }

    static get CheckoutLink(){
        return cy.get("#checkout");
      }
}

export default CartPage;