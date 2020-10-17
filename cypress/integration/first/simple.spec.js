describe('Sample test with Cypress', () => {
    it('True should be true', () => {
        expect(true).to.equal(true)
    })

    it('Do some math', () => {
        expect(5).to.equal(3+2)
    })
})

describe('Next sample test with Cypress', () => {
    it('False should be equal to false', () => {
        expect(false).to.equal(false)
    })
})

describe('First test with web', () => {
    it('Should open url', () => {
        cy.visit('http://automationpractice.com/', {timeout: 40000})
    })
})