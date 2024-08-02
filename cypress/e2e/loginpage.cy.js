/// <reference types="cypress" />

describe('Login Page Test', function(){

it('Valid Login Test', function(){
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    cy.get('#input-email').type('ankitpokharelqa@gmail.com')
    cy.get('#input-password').type('AbhaY$#21')
    cy.get('form > .btn').click()
})

it('Invalid Login Test', function(){
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    cy.get('#input-email').type('ankitpokharelqa@gmail.com')
    cy.get('#input-password').type('AbhaY$#213')
    cy.get('form > .btn').click()
})

it('Empty Field Login Test', function(){
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    cy.get('#input-email')
    cy.get('#input-password')
    cy.get('form > .btn').click()
})


})