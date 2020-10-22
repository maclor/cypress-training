describe('Keyboard press - xpath selctors', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('should simulte searching with pressing enter', () => {
        cy.xpath('.//*[@id="searchTerm"]').type('some dummy search {backspace}{backspace}{backspace}')
        cy.xpath('.//*[@id="searchTerm"]').type('{enter}')
    })

    it('should display search results', () => {
        cy.xpath('.//h2').contains('Search Results').should('be.visible')
    })
})