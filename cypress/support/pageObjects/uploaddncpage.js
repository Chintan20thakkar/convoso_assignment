import locators from "../../support/locators.json"

class UploadDNCPage {

    get uploaddncbuttonlocator() { return cy.xpath(locators.uploaddncbuttonlocator); }
    get countrydropdwonlocator() { return cy.xpath(locators.countrydropdwonlocator); }
    get campaigndropdownlocator() { return cy.xpath(locators.campaigndropdownlocator); }
    get phonenumbertextboxlocator() { return cy.xpath(locators.phonenumbertextboxlocator); }
    get addbuttonlocator() { return cy.xpath(locators.addbuttonlocator); }
    get successmessagelocator() { return cy.xpath(locators.successmessagelocator); }

    click_upload_dnc_button() {
        this.uploaddncbuttonlocator.click({ force: true });

    }

    adding_single_number(phonenumber, countrydropdownval, campaigndropdownval) {
        this.countrydropdwonlocator.select(countrydropdownval, { force: true });
        this.campaigndropdownlocator.select(campaigndropdownval, { force: true });
        this.phonenumbertextboxlocator.clear().type(phonenumber, { force: true });
        this.addbuttonlocator.click({ force: true });
        cy.wait(1000);

    }

    verifying_success_message(successmessage){
        this.successmessagelocator.invoke('text').then((text) => {
            var new_string = text.trim();
            expect(new_string).to.eq(successmessage);

        })
    }

}

export default UploadDNCPage;