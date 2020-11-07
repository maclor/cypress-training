import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I am on login page', () => {
    LoginPage.open()
})

When('I fill username with {string}', (username) => {
    LoginPage.enterUsername(username)
})

When('I fill password with {string}', (password) => {
    LoginPage.enterPassword(password)
})

When('I submit login', () => {
    LoginPage.clickLogin()
})

Then('I am logged into the bank', () => {
    cy.get('#account_summary_tab').should('be.visible')
})

Then('I am on the login page with error message', () => {
    LoginPage.getErrorMessage().should('be.visible')
})