describe('Write and read data - json file', () => {
    it('Write data into json', () => {
        cy.writeFile('log.json', { firstname: 'Maciej', lastname: 'Lorenc' })
    })

    it('Write data into txt', () => {
        cy.writeFile('log.txt', 'Maciej Lorenc')
    })

    it('Read data from json', () => {
        cy.readFile('log.json').its('lastname').should('eq', 'Lorenc')
    })

    it('Read data from txt', () => {
        cy.readFile('log.txt').should('eq', 'Maciej Lorenc')
    })
})