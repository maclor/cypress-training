import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I am on login page', () => {
    LoginPage.open()
})

When('I submit login', () => {
    LoginPage.enterUsername('username')
    LoginPage.enterPassword('password')
    LoginPage.clickLogin()
})

Then('I am logged into the bank', () => {
    cy.get('#account_summary_tab').should('be.visible')
})