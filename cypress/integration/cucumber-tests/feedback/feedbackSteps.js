import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'

Given('I am on the feedback page', () => {
    FeedbackPage.open()
})

When('I fill feedback form', () => {
    FeedbackPage.enterName('Maciek')
    FeedbackPage.enterEmail('email@email.com')
    FeedbackPage.enterSubject('Some dummy topic')
    FeedbackPage.enterComment('Lorem ipsum....')
})

When('I click send button', () => {
    FeedbackPage.clickSubmit()
})

When('I see that my feedback is send', () => {
    cy.get('.row').contains('Thank you for your comments').should('be.visible')
})