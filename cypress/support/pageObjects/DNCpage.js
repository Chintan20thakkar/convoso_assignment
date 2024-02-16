import locators from "../../support/locators.json"
const util = require('util');

class DNCPage {

    get uploaddncbuttonlocator() { return cy.xpath(locators.uploaddncbuttonlocator); }
    get filterbydropdownlocator() { return cy.xpath(locators.filterbydropdownlocator); }
    get filterbytextboxlocator() { return cy.get(locators.filterbytextboxlocator); }
    get globalvallocator() { return cy.xpath(locators.globalvallocator); }
    get searchbuttonlocator() { return cy.xpath(locators.searchbuttonlocator); }
    get tablelocator() { return cy.xpath(locators.tablelocator); }
    get noresultfoundlocator() { return cy.xpath(locators.noresultfoundlocator); }
    get tablephonenumberlocator() { return cy.xpath(locators.tablephonenumberlocator); }
    get tablecampaignnamelocator() { return cy.xpath(locators.tablecampaignnamelocator); }

    click_upload_dnc_button() {
        this.uploaddncbuttonlocator.click({ force: true });

    }

    search_numbers(filterval, campaignvalue) {
        this.filterbydropdownlocator.select(filterval, { force: true });
        this.filterbytextboxlocator.as('inputtext');
        cy.get('@inputtext').click({ multiple: true }, { force: true });
        cy.xpath(util.format(locators.campaignvallocator, campaignvalue)).click({ force: true });
        this.searchbuttonlocator.click({ force: true });

    }

    verifyrowcountoftable(expectedcount) {
        this.tablelocator.then((count) => {
            expect(count).to.eq(expectedcount);
        })

    }

    verify_empty_table(noresultfoundval) {
        this.noresultfoundlocator.should('have.text', noresultfoundval);
    }

    comparing_input_phonenumber_with_table(inputarray) {
        var textArray = new Array();
        const list = this.tablephonenumberlocator;
        list
            .each((element) => {
                const txt = element.text();
                textArray.push(txt);
            })
            .then(() => {
                var sorted_first_array = inputarray.sort();
                var sorted_second_array = textArray.sort();
                expect(sorted_first_array.toString()).to.contain(sorted_second_array.toString());

            });

    }

    verify_campaignname_in_table(newphonenumber, newcampaign, campaignname){
        cy.xpath(util.format(locators.tablecampaignnamelocator, newphonenumber, newcampaign)).should('have.text', campaignname);

    }
    
}

export default DNCPage;