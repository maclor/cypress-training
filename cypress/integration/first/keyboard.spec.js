describe('Keyboard press', () => {
    it('should simulte searching with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#searchTerm').type('some dummy search {backspace}{backspace}{backspace}')
        cy.get('#searchTerm').type('{enter}')
    })

    it('should display search results', () => {
        cy.get('h2').contains('Search Results').should('be.visible')
    })
})