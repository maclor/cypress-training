describe('Cypress.$ function', () =>  {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('Expose jQuery element in the current window', () => {
        const signInButton = Cypress.$('#signin_button')  // not recommened
        cy.log(signInButton.height())
    })
})