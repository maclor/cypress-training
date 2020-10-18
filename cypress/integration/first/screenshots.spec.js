describe('Taking screenshots actions', () => {
    it('full page screenshot', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.screenshot({capture: "fullPage"})
    })

    it('single element screenshot', () => {
        cy.get('#online_banking_features').screenshot()
        cy.get('#searchTerm').screenshot()
    })
})