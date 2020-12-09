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
}