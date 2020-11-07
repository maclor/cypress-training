const URL = 'http://zero.webappsecurity.com/feedback.html'
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_INPUT = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'

class FeedbackPage {
    static open() {
        cy.visit(URL)
    }

    static enterName(name) {
        cy.get(NAME_INPUT).type(name)
    }

    static enterEmail(email) {
        cy.get(EMAIL_INPUT).type(email)
    }

    static enterSubject(subject) {
        cy.get(SUBJECT_INPUT).type(subject)
    }

    static enterComment(comment) {
        cy.get(COMMENT_INPUT).type(comment)
    }

    static clickSubmit() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default FeedbackPage