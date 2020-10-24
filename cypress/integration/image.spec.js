const pages = [ 'http://example.com/' ]
const sizes = [ 'iphone-6', 'ipad-2', [1024, 768]] 

describe('Visual regression', () => {
    sizes.forEach(size => {
        pages.forEach( page => {
            it(`Should match ${page} in resolution ${size}`, () => {
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            })
        })
    })
})