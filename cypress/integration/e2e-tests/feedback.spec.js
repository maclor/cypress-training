describe('Feedback sending', () => {
    before(() => {
        cy.visit('feedback.html')
        cy.get('#feedback-title').should('be.visible')
    })

    it('Fill abd send feedback form', () => {
        cy.get('#name').type('Lorem ipsum')
        cy.get('#email').type('lorem@email.com')
        cy.get('#subject').type('Lorem ipsum dolor amet....')
        cy.get('#comment').type('Lorem ipsum dolor amet....')
        cy.get('.btn-signin').click()
    })

    it('Information about sent feedback should be visible', () => {
        cy.contains('Thank you for your comments').should('be.visible')
    })
})