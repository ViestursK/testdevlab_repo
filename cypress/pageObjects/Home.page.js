import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get stackIcon() {
    return cy.get("#react-burger-menu-btn");
  }

  static get sideBar(){
    return cy.get(".bm-menu-wrap");
  }

  static get logoutButton(){
    return cy.get("#logout_sidebar_link");
  }

  static get addToCartSauceLabsBackpack(){
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  static get removeSauceLabsBackpack(){
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }

  static get addToCartBoltTShirt(){
    return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  }

  static get addToCartOnesie(){
    return cy.get('[data-test="add-to-cart-sauce-labs-onesie"]');
  }

  static get cartBadgeIcon() {
    return cy.get(".shopping_cart_badge");
  }

  static get itemNames() {
    return cy.get(".inventory_item_name");
  }

  static get itemName() {
    return cy.get(".inventory_details_name");
  }

  static get cartLink(){
    return cy.get("#shopping_cart_container");
  }


}

export default HomePage;