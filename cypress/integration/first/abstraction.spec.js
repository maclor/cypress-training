class BasePage {
    static loadPage() {
        cy.visit('http://zero.webappsecurity.com')
    }
}

class HomePage extends BasePage {
    static scrollTop() {
        cy.get('#homeMenu').scrollIntoView()
    }

    static scrollBottom() {
        cy.get('#terms_of_use_link').scrollIntoView()
    }
}


describe('Little abstraction with classes', () => {

    before(function () {
        // runs at the begining of tests
        cy.log('before called')
    })

    beforeEach(function () {
        // runs before each it
        cy.log('before each called')
    })

    afterEach(function () {
        // runs after each it
        cy.log('after each called')
    })

    after(function() {
        // runs after all tests
        cy.log('after called')
    })

    it('Should open url', () => {
        HomePage.loadPage()
    })

    it('Scroll page down', () => {
        HomePage.scrollBottom()
    })

    it('Scroll page up', () => {
        HomePage.scrollTop()
    })
    
})