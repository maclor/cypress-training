const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const LOGIN_BUTTON = 'input[name="submit"]'

class LoginPage{
    static open() {
        cy.visit(URL)
    }

    static enterUsername(name) {
        cy.get(USERNAME_INPUT).type(name)
    }

    static enterPassword(password) {
        cy.get(PASSWORD_INPUT).type(password)
    }

    static clickLogin() {
        cy.get(LOGIN_BUTTON).click()
    }
}

export default LoginPage