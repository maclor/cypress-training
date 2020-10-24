describe('Transfer founds test', () => {
    before(() => {
        cy.visit('login.html')
        cy.fixture('user').then( user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)
        })
        cy.get('#transfer_funds_tab').click()
        cy.get('h2').contains('Transfer Money & Make Payments').should('be.visible')
    })

    it('Fill transform form', () => {
        cy.get('#tf_fromAccountId').select('2')
        cy.get('#tf_toAccountId').select('4')
        cy.get('#tf_amount').type(150)
        cy.get('#tf_description').type('Test transfer')
        cy.get('#btn_submit').click()
    })

    it('Verify payment should have proper data', () => {
        cy.get('h2').contains('Transfer Money & Make Payments - Verify').should('be.visible')
        cy.get('#tf_fromAccountId').should('have.value','Checking')
        cy.get('#tf_toAccountId').should('have.value','Loan')
        cy.get('#tf_amount').should('have.value','150')
        cy.get('#tf_description').should('have.value','Test transfer')
    })

    it('Perform transfer', () => {
        cy.get('#btn_submit').click()
    })

    it('Transfer should be done', () => {
        cy.get('.alert').should('be.visible').and('contain.text', 'You successfully submitted your transaction.')
    })
})