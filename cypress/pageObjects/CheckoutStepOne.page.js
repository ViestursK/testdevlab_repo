import BasePage from "./Base.page";


class CheckoutStepOne extends BasePage {
    static get url() {
        return "/checkout-step-one.html";
    }

    static get firstNameField(){
        return cy.get('[data-test="firstName"]');
    }
    
    static get lastNameField(){
        return cy.get('[data-test="lastName"]');
    }

    static get postalCodeField(){
        return cy.get('[data-test="postalCode"]');
    }

    static get continueButton(){
        return cy.get('#continue');
    }
}

export default CheckoutStepOne;