describe('Transfer founds test', () => {
    before(() => {
        cy.visit('login.html')
        cy.fixture('user').then( user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
        })
        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('h2').contains('Find Transactions').should('be.visible')
    })

    it('Search for transactions by aount range', () => {
        cy.get('#aa_fromAmount').type(100)
        cy.get('#aa_toAmount').type(1000)

        cy.get('.btn-primary').click()
    })

    it('Should display search results', () => {
        cy.get('#filtered_transactions_for_account').as('results_table')
        cy.get('@results_table').should('be.visible')
        cy.get('@results_table').get('tbody > tr').its('length').should('be.gt', 0)
    })
})