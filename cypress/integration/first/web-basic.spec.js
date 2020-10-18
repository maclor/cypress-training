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

    it('Should wait for 1 sec', () => {
        cy.wait(1000)
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

    it('Reload the browser', () => {
        cy.log('Before page reload')
        cy.reload()
        cy.log('After page reload')
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

describe('Third test with web - log into the account with invalid credentials', () => {
    it('Should open url', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login')
    })

    it('Enter login', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('invalid-login')
    })

    it('Enter password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('invalid-password', {delay: 100}) // delay entering next chars, usefull for autocomplete
    })

    it('Mark `keep me signed in` checkbox', () => {
        cy.get('#user_remember_me').check()
    })

    it('Submit login form', () => {
        // cy.get('.btn-primary').click()
        cy.contains('Sign in').click()
    })

    it('Should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain.text', 'Login and/or password are wrong.')
    })
    
})

describe('Fourth test with web - log into the account with valid credentials and clear session', () => {
        it('Should open url', () => {
            cy.visit('http://zero.webappsecurity.com/login.html')
            cy.url().should('include', 'login')
        })
    
        it('Enter login', () => {
            cy.get('#user_login').as('username')
            cy.get('@username').clear()
            cy.get('@username').type('username')
        })
    
        it('Enter password', () => {
            cy.get('#user_password').as('password')
            cy.get('@password').clear()
            cy.get('@password').type('password')
        })
    
        it('Submit login form', () => {
            cy.get('.btn-primary').click()
        })

        it('Should be logged in', () => {
            cy.get('h2').should('contain.text', 'Cash Accounts')
            cy.get('h2').should('contain.text', 'Investment Accounts')
        })

        it('Clear cookies and local storage and reload', () => {
            cy.clearCookies({ log: true})
            cy.clearLocalStorage({ log: true})
            cy.reload()
        })

        it('Should be on login page again', () => {
            cy.url().should('include', 'login')
            cy.get('#user_login').should('be.visible')
            cy.get('#user_password').should('be.visible')
        })
})