describe('Adding new payee test', () => {
    before(() => {
        cy.visit('login.html')
        cy.fixture('user').then( user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
        })
    })
    
    it('Add new payee to the list', () => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('Payee name')
        cy.get('#np_new_payee_address').type('Payee address')
        cy.get('#np_new_payee_account').type('Payee account')
        cy.get('#np_new_payee_details').type('Payee details')
        cy.get('#add_new_payee').click()
    })

    it('Payee should be added', () => {
        cy.get('#alert_content').should('be.visible').and('contain.text', 'The new payee Payee name was successfully created.')
    })
})