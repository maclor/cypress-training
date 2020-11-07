describe('Visual regression - Login Page', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
        cy.get('#user_login').type('test')
        cy.get('#user_password').type('test')
        cy.get('#user_remember_me').click()
    })

    it('Desktop layout test', () => {
        cy.setResolution([1280, 720])
        cy.matchImageSnapshot()
    })

    it('Tablet layout test', () => {
        cy.setResolution('ipad-2')
        cy.matchImageSnapshot()
    })

    it('Mobile layout test', () => {
        cy.setResolution('iphone-6')
        cy.matchImageSnapshot()
    })
})