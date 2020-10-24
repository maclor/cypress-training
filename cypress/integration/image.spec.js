describe('Visual regression', () => {
    it('First visual regression test', () =>{
        cy.visit('http://example.com/')
        cy.matchImageSnapshot()
    })
})