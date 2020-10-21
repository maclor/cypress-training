describe('Scroll page', () => {
    it('Should open url', () => {
        cy.visit('http://zero.webappsecurity.com')
    })

    it('Scroll page down', () => {
        cy.get('#terms_of_use_link').scrollIntoView()
    })

    it('Scroll page up', () => {
        cy.get('#homeMenu').scrollIntoView()
    })
    
})