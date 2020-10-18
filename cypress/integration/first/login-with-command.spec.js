describe('Log into the account using custom command', () => {
    it('Should open url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login')
    })

    it('Perform login', () => {
        cy.login('username', 'password')
    })

    it('Should be logged in', () => {
        cy.get('h2').should('contain.text', 'Cash Accounts')
        cy.get('h2').should('contain.text', 'Investment Accounts')
    })
})