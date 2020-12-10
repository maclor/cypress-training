import { url, username, password } from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'

describe('Login failed test', () => {
    before( () => {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('Try to login with invalid credentials', () => {
        LoginPage.login('invalid', 'invalid')
    })

    it('Should display error message', () => {
        LoginPage.displayErrorMessage()
    })
})

describe('Login success test', () => {
    before( () => {
        cy.visit(url)
        Navbar.clickSignIn()
    })

    it('Try to login with valid credentials', () => {
        LoginPage.login(username, password)
    })

    it('Should be able to logout', () => {
        Navbar.logout()
    })

    it('Sign In button should be visible', () => {
        Navbar.displaySignInButton()
    })
})