describe('Check if navar works properly', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    
    it('Should display online babnking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('contain', 'online-banking.html')
        cy.get('h1').contains('Online Banking').should('be.visible')
    })

    it('Should display home page - from navbar link', () => {
        cy.get('#homeMenu').click()
        cy.url().should('contain', 'index.html')
        cy.get('#carousel').should('be.visible')
    })

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('contain', 'feedback.html')
        cy.get('#feedback-title').should('be.visible')
    })

    it('Should display home page - from navbar logo', () => {
        cy.get('.navbar-fixed-top a').click()
        cy.url().should('contain', 'index.html')
        cy.get('#carousel').should('be.visible')
    })
})