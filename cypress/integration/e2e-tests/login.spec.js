describe('Login and logout test', () => {
    before(() => {
        cy.visit('/login.html')
        cy.get('#login_form').should('be.visible')
    })

    it('Try to login with invalid data', () => {
        cy.get('#user_login').type('invalid-username')
        cy.get('#user_password').type('invalid-password')
        cy.get('.btn-primary').click()
    })

    it('Should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.')
    })

    it('Try to login with valid data', () => {
        cy.fixture('user').then( user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('.btn-primary').click()
        })
    })

    it('Should be logged into application', () => {
        cy.get('h2').contains('Cash Accounts').should('be.visible')
    })

    it('Logout', () => {
        cy.get('.dropdown-toggle').contains('username').click()
        cy.get('#logout_link').click()
    })

    it('Should be logged out', () => {
        cy.get('#signin_button').should('be.visible')
    })
})