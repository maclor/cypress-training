const pages = [ 'http://example.com/' ]
const sizes = [ 'iphone-6', 'ipad-2', [1024, 768]] 

describe('Visual regression - whole page', () => {
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

describe('Visual regression - single element on page', () => {
    sizes.forEach(size => {
        pages.forEach( page => {
            it(`Should match ${page} in resolution ${size}`, () => {
                cy.setResolution(size)
                cy.visit(page)
                cy.get('h1').matchImageSnapshot()
            })
        })
    })
})

describe('Visual regression - ability to ovverride the options', () => {
    sizes.forEach(size => {
        pages.forEach( page => {
            it(`Should match ${page} in resolution ${size}`, () => {
                cy.setResolution(size)
                cy.visit(page)
                cy.get('h1').matchImageSnapshot({
                    failureTreshold: 10.0,
                    failureTresholdType: "pixels"
                })
            })
        })
    })
})