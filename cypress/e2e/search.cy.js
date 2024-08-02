/// <reference types="cypress" />


describe('Search Module', function(){

    beforeEach(() => {
        // Visit login page and perform login before each test
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        cy.get('#input-email').type('ankitpokharelqa@gmail.com');
        cy.get('#input-password').type('AbhaY$#21');
        cy.get('form > .btn').click();   
      });

it('Valid Search', function(){
    cy.get('.form-control').type('Nikon D300')
    cy.get('.input-group-btn > .btn').click()

})

it('Invalid Search', function(){
    cy.get('.form-control').type('Ni4567')
    cy.get('.input-group-btn > .btn').click()

})

it('Empty Field Search', function(){
   
    cy.get('.form-control')
    cy.get('.input-group-btn > .btn').click()

})


})