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