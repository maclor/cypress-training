describe('Log into the account with invalid credentials using fixture', () => {
    it('Should open url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login')
    })

    it('Perform login using fixture', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
        })

        cy.contains('Sign in').click()
    })

    it('Should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.')
    })
    
})