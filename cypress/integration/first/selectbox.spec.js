describe('Use some selectbox', () => {
    it('Open bank website url and login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
        // session lost between steeps (it)?
        cy.get('a').contains('Loan').click()
        cy.get('#aa_accountId').as('selectbox')
        cy.get('@selectbox').select('Brokerage')
    })
})