describe('Passowr reminder test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Click Sign in button', () => {
        cy.get('#signin_button').click()
    })

    it('Go to forgoten password page', () => {
        cy.get('.offset3 > a').click()
    })

    it('Fill and submit email form', () => {
        cy.get('#user_email').type('dummy@email.com')
        cy.get('.btn-primary').click()
    })

    it('Should be informed about sending email', () => {
        cy.contains('Your password will be sent to the following email: dummy@email.com').should('be.visible')
    })
})