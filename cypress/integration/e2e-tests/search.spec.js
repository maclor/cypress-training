describe('Searchbox test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('type into searchbox and submit with enter', () => {
        cy.get('#searchTerm').type('lorem ipsum{enter}')
    })

    it('Should show search result page', () => {
        cy.get('h2').contains('Search Results').should('be.visible')
    })
})