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