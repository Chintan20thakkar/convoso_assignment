import locators from "../../support/locators.json"

class HomePage {

    get warningpopuplocator() { return cy.xpath(locators.warningpopuplocator); }
    get callcenterheaderlocator() { return cy.xpath(locators.callcenterheaderlocator); }
    get dncsectionlocator() { return cy.xpath(locators.dncsectionlocator); }

    closing_warning_popup() {
        this.warningpopuplocator.click({ force: true });

    }

    navigate_to_section() {
        this.callcenterheaderlocator.click({ force: true });
        this.dncsectionlocator.click({ force: true });

    }

}

export default HomePage;