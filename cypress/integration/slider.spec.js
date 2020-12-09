describe('Slider', () => {
    it('Should pick value from slider', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#tried-test-cafe').click()
        cy.contains('6').click()
    })
})