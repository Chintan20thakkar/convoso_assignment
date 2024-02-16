import testdata from "../fixtures/testdata.json"
import LoginPage from "../support/pageObjects/loginpage";
import HomePage from "../support/pageObjects/homepage";
import DNCPage from "../support/pageObjects/DNCpage";
import DeleteAPI from "../support/pageObjects/deleteapi";
import UploadDNCPage from "../support/pageObjects/uploaddncpage";
import UpdateNumber from "../support/pageObjects/updatenumber";
const util = require('util');

describe('Convoso Automation Assignment', () => {

    const loginPage = new LoginPage();
    const dncpage = new DNCPage();
    const homepage = new HomePage();
    const uploaddncpage = new UploadDNCPage();
    const updatenumber = new UpdateNumber();
    const deleteapi = new DeleteAPI();

    beforeEach(() => {

        //Login into application
        loginPage.login(testdata.url, Cypress.env('username'), Cypress.env('password'));
        cy.wait(1000);

    });

    after(() => {

        //Deleting Automation campaign Numbers using Delete API
        deleteapi.deleting_numbers_through_api(testdata.searchapimethod, testdata.searchapiurl, testdata.automationcampaignsearchapibody,
        testdata.contentype, testdata.deleteapimethod, testdata.deleteapiurl);
        dncpage.search_numbers(testdata.filterval, testdata.automationcampaignval);
        cy.wait(2000);
        dncpage.verify_empty_table(testdata.noresultfoundval);

        //Deleting Global campaign Numbers using Delete API
        deleteapi.deleting_numbers_through_api(testdata.searchapimethod, testdata.searchapiurl, testdata.globalsearchapibody,
        testdata.contentype, testdata.deleteapimethod, testdata.deleteapiurl);
        dncpage.search_numbers(testdata.filterval, testdata.glovalcampaignval);
        cy.wait(2000);
        dncpage.verify_empty_table(testdata.noresultfoundval);

    });

    it('E2E flow', () => {

        homepage.closing_warning_popup()

        //Closing warning pop-up window
        homepage.closing_warning_popup();

        //Verifying login is successfull by verifying the title and url after login
        cy.verifying_title(testdata.homepagetitle);
        cy.verifying_url(testdata.homepageurl);

        //Navigating to "DNC" section.
        homepage.navigate_to_section();
        cy.wait(2000);

        //Clikcing on Upload DNC button
        dncpage.click_upload_dnc_button();

        //Verifying user is navigated to Upload DNC page
        cy.verifying_title(testdata.uploaddncpagetitle);
        cy.verifying_url(testdata.uploadpageurl);

        // //adding numbers one by one 
        var phonenumber = ["8884568889", "8884568888", "8884568887", "8884568886", "8884568885", "8884568884", "8884568883",
        "8884568882", "8884568881", "8884568880"];
        for (var i = 0; i < phonenumber.length; i++) {
            var success_message = "Added DNC number " + phonenumber[i] + " to Global DNC List";
            uploaddncpage.adding_single_number(phonenumber[i], testdata.countrydropdownval, testdata.campaigndropdownval);
            cy.wait(1000);
            uploaddncpage.verifying_success_message(success_message);
            cy.wait(1000);

        }

        //moving back to manage DNC page
        homepage.navigate_to_section();
        cy.wait(3000);

        //Searching the numbers in manage DNC page
        dncpage.search_numbers(testdata.filterval, testdata.glovalcampaignval);
        cy.wait(2000);

        //Verifying count of total rows of table 
        dncpage.verifyrowcountoftable(10);

        //Verifying the list of phone numbers in table
        dncpage.comparing_input_phonenumber_with_table(phonenumber);

        //Updating the penultimate number 
        updatenumber.updating_number_details(1, testdata.newphonenumber, testdata.newcampaign);

        //Navigating to manage DNC page
        homepage.navigate_to_section();
        cy.wait(2000);

        //Searching the numbers in manage DNC page
        dncpage.search_numbers(testdata.filterval, testdata.automationcampaignval);
        cy.wait(2000);

        //Verifying count of total rows of table 
        dncpage.verifyrowcountoftable(1);

        //Verifying the list of phone numbers in table
        var newarray = new Array();
        newarray.push(testdata.newphonenumber)
        dncpage.comparing_input_phonenumber_with_table(newarray);

        //Verifying campign value in table
        dncpage.verify_campaignname_in_table(testdata.newphonenumber, testdata.newcampaign, testdata.newcampaign);

    });

});