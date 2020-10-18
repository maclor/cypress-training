describe('First test with web - check number of books on page', () => {
    it('Should open url', () => {
        cy.visit('http://books.toscrape.com/', {timeout: 10000})
    })

    it('Should contain corrext url', () => {
        cy.url().should('include', 'toscrape')
    })

    it('Should contain correct header', () => {
        cy.get('h1').should('be.visible')
    })

    it('Should wait for 3 sec', () => {
        cy.wait(3000)
    })

    it('Click fantasy category', () => {
        cy.get('a').contains('Fantasy').click()
    })

    it('Art category should be open', () => {
        cy.get('h1').should('contain.text', 'Fantasy')
    })

    it('Should display proper number of books for page', () => {
        cy.get('.product_pod').its('length').should('be.lessThan', 21)
    })

    // it('Should pause test execution', () => {
    //     cy.pause()
    // })
})

describe('Second test with web - check book price', () => {
    it('Should open url', () => {
        cy.visit('http://books.toscrape.com/', {timeout: 10000})
        cy.url().should('include', 'toscrape')
        cy.log('How to log something on console?')
    })

    it('Click `fantasy` category', () => {
        cy.get('a').contains('Fantasy').click()
    })

    it('Click `Masks and Shadows` book', () => {
        cy.get('.product_pod').contains('Masks and Shadows').click()
        cy.get('h1').should('contain.text', 'Masks and Shadows')
    })

    it('Should display proper book price', () => {
        cy.get('.price_color').should('contain.text', '56.40')
    })
})