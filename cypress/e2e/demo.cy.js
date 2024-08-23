/// <reference types="cypress" />

describe("Demo Using Fixture", function(){

    beforeEach(() => {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        cy.fixture('logindata').as('logindata')
      })

      it('should login successfully with valid credentials', function() {
            cy.get('@logindata').then((loginData) => {
            cy.get('#input-email').type(loginData.validCredentials.username);
            cy.get('#input-password').type(loginData.validCredentials.password);
            cy.get('form > .btn').click();
        })
    })

    it('should not login with invalid credentials', function() {
            cy.get('@logindata').then((loginData) => {
            cy.get('#input-email').type(loginData.invalidCredentials.username);
            cy.get('#input-password').type(loginData.invalidCredentials.password);
            cy.get('form > .btn').click();
        })
    })

    it('should show validation messages for empty credentials', function() {
        cy.get('@logindata').then((loginData) => {
            cy.get('#input-email').type(loginData.emptyCredentials.username);
            cy.get('#input-password').type(loginData.emptyCredentials.password);
            cy.get('form > .btn').click();
    })
})
})
