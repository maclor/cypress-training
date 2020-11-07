import { defineStep } from 'cypress-cucumber-preprocessor/steps'

defineStep('I want to wait {int} miliseconds', time => {
    cy.wait(time)
})

defineStep('I see {string} in the title', title => {
    cy.title().should('include', title)
})