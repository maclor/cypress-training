export default class Navbar {
    static clickLogo() {
        cy.get('.brand').click()
    }

    static search(text) {
        cy.get('#searchTerm').type(`${text}{enter}`)
    }

    static clickSignIn() {
        cy.get('#signin_button').click()
    }

    static displaySignInButton() {
        cy.isVisible('#signin_button')
    }

    static clickSettings() {
        cy.contains('Settings').click()
    }

    static logout() {
        cy.contains('username').click()
        cy.get('#logout_link').click()
    }
}