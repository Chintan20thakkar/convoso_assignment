import locators from "../../support/locators.json"
const util = require('util');

class UpdateNumber {

    get tablelocator() { return cy.xpath(locators.tablelocator); }
    get editcampaigndropdwonlocator() { return cy.xpath(locators.editcampaigndropdwonlocator); }
    get editphonenumbertextboxlocator() { return cy.xpath(locators.editphonenumbertextboxlocator); }
    get applychangeslocator() { return cy.xpath(locators.applychangeslocator); }

    updating_number_details(index, newphonenumber, newcampaignname) {
        this.tablelocator.then((count) => {
            cy.xpath(util.format(locators.settingbuttonlocator, count - index)).click({force:true});
            cy.xpath(util.format(locators.editbuttonlocator, count - index)).click({force:true});
            this.editcampaigndropdwonlocator.select(newcampaignname);
            this.editphonenumbertextboxlocator.clear({force:true}).type(newphonenumber, {force:true});
            this.applychangeslocator.click({force:true});
            cy.wait(3000);
        })
    }
    
}

export default UpdateNumber;