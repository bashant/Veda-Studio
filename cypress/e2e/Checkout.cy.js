/// <reference types="cypress" />

describe('Checkout Process', function() {

    beforeEach(() => {
      // Visit login page and perform login before each test
      cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
      cy.get('#input-email').type('ankitpokharelqa@gmail.com');
      cy.get('#input-password').type('AbhaY$#21');
      cy.get('form > .btn').click();   
    });
  it('Add to Cart', function(){
    cy.get('.nav > :nth-child(4) > a').click()
    cy.get('h4 > a').click()
    cy.get('#button-cart').click()
  })

  
  it('Update Quantity', function(){
        
    cy.get('.btn-inverse').click()
    cy.get('[href="https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart"] > strong').click()
    cy.get(':nth-child(1) > :nth-child(4) > .input-group > .form-control').clear().type(3)
    cy.get(':nth-child(1) > :nth-child(4) > .input-group > .input-group-btn > .btn-primary').click()
})
  
it('Remove From Cart', function(){
  cy.get('#cart-total').first().click()
  cy.get('[href="https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart"] > strong').click()
  cy.get('.input-group-btn > .btn-danger').first().click()

})


  
  });
  