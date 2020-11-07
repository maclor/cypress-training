describe('Visual regression - percy', () => {
    it('should take percy snapshot', () => {
        cy.visit('https://www.example.com')
        cy.wait(1000)
        cy.percySnapshot()
    })
})