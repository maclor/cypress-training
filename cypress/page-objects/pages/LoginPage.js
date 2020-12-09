import BasePage from "../BasePage"

export default class LoginPage extends BasePage {
    static login(username, password) {
        cy.login(username, password)
    }

    static clickForgotPassword() {
        cy.contains('Forgot your password').click()
    }

    static displayErrorMessage() {
        cy.isVisible('.alert-error')
    }
}