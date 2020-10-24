describe('Exchange foreign currency', () => {
    before(() => {
        cy.visit('login.html')
        cy.fixture('user').then( user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
        })
        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
    })

    it('Fill form and calculate costs', () => {
        cy.get('#pc_currency').select('GBP')
        cy.get('#pc_amount').type(150)
        cy.get('#pc_inDollars_true').click()
        cy.get('#pc_calculate_costs').click()
    })

    it('Calculations should be done properly', () => {
        cy.get('#pc_conversion_amount').should('be.visible').and('contain.text', '= 150.00 U.S. dollar (USD)')
    })

    it('Click purchase', () => {
        cy.get('#purchase_cash').click()
    })

    it('Purchase should be done', () => {
        cy.get('#alert_content').should('be.visible').and('contain.text', 'The payment was successfully submitted.')
    })
})