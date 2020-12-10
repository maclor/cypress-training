import { url } from '../../../config'
import BasePage from '../BasePage'

export default class FeadbackPage extends BasePage {
    static open() {
        cy.visit(url + '/feedback.html')
    }
    
    static submitFeedback() {
        cy.fixture('feedback').then(data => {
            const name = data.name
            const email = data.email
            const subject = data.subject
            const message = data.message

            cy.get('#name').type(name)
            cy.get('#email').type(email)
            cy.get('#subject').type(subject)
            cy.get('#comment').type(message)

            cy.contains('Send Message').click()
        })
    }

    static displaySucessMessage() {
        cy.contains('Thank you for your comments').should('be.visible')
    }
}