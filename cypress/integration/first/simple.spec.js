describe('Sample test with Cypress without web', () => {
    it('True should be true', () => {
        expect(true).to.equal(true)
    })

    it('Do some math', () => {
        expect(5).to.equal(3+2)
    })
})

describe('Next sample test with Cypress without web', () => {
    it('False should be equal to false', () => {
        expect(false).to.equal(false)
    })
})

describe('First test with web', () => {
    it('Should open url', () => {
        cy.visit('http://automationpractice.com/', {timeout: 40000})
    })

    it('Should contain corrext url', () => {
        cy.url().should('include', 'automationpractice.com')
    })

    it('Should wait for 3 sec', () => {
        cy.wait(3000)
    })

    it('Should pause test execution', () => {
        cy.pause()
    })

    it('Should contain correct element', () => {
        cy.get('h1').should('be.visible')
    })
})