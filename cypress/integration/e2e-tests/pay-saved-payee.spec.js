describe('Do payment', () => {
    before(() => {
        cy.visit('login.html')
        cy.fixture('user').then( user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
        })
        cy.get('#pay_bills_tab').click()
    })

    it('Fill payment form', () => {
        cy.get('#sp_payee').select('apple')
        cy.get('#sp_account').select('Loan')
        cy.get('#sp_amount').type(10)
        cy.get('#sp_description').type('Test payment')
        cy.get('#sp_date').type('2021-01-10')
        cy.get('#pay_saved_payees').click()
    })

    it('Payment should be done', () => {
        cy.get('#alert_content').should('be.visible').and('contain.text', 'The payment was successfully submitted.')
    })
})