/// <reference types= "cypress" />


describe("check the currency", () => {
    it("visit process", () => {
        cy.visit("https://global.almosafer.com/ar");
        cy.get('.cta__saudi').click()
        cy.get('[data-testid="Header__CurrencySelector"]').should("contain","SAR")
        cy.get('[data-testid="Header__LanguageSwitch"]').should("contain","English")
        cy.get('#uncontrolled-tab-example-tab-flights').should('have.class', "active")

    })
});
