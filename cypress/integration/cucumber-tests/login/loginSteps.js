import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I am on login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I submit login', () => {
    cy.get('#signin_button').click()
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click()
    cy.get('input[name="submit"]').click()
})

Then('I am logged into the bank', () => {
    cy.get('#account_summary_tab').should('be.visible')
})