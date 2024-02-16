import locators from "../../support/locators.json"

class LoginPage {

    get usernamelocator() { return cy.xpath(locators.usernamelocator); }
    get passwordlocator() { return cy.xpath(locators.passwordlocator); }
    get signinbuttonlocator() { return cy.xpath(locators.signinbuttonlocator); }

    login(url, username,password) {
        cy.visit(url);
        this.usernamelocator.type(username, { log: false });
        this.passwordlocator.type(password, { log: false });
        this.signinbuttonlocator.click({ force: true });

    }

}

export default LoginPage;