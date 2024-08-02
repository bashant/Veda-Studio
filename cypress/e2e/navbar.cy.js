/// <reference types="cypress" />

describe('Navbar', function(){

    beforeEach(() => {
        // Visit login page and perform login before each test
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        cy.get('#input-email').type('ankitpokharelqa@gmail.com');
        cy.get('#input-password').type('AbhaY$#21');
        cy.get('form > .btn').click();   
      });
      it('Dropdown', function(){
        cy.get(':nth-child(8) > .dropdown-toggle').click()
        cy.get('.dropdown-inner > :nth-child(2) > :nth-child(4) > a').click()
      })
})