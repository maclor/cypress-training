describe('Device tests', () => {
    it('720p', () => {
        cy.viewport(1280, 720)
        cy.visit('http://automationpractice.com/', {timeout: 20000})
    })

    it('1080p', () => {
        cy.viewport(1920, 1080)
        cy.visit('http://automationpractice.com/', {timeout: 20000})
    })

    it('iPhone 7', () => {
        cy.viewport('iphone-7')
        cy.visit('http://automationpractice.com/', {timeout: 20000})
    })

    it('iPad mini', () => {
        cy.viewport('ipad-mini')
        cy.visit('http://automationpractice.com/', {timeout: 20000})
    })

    it('macbook 15', () => {
        cy.viewport('macbook-15')
        cy.visit('http://automationpractice.com/', {timeout: 20000})
    })
})