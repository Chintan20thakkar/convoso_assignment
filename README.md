Convos Assignment Cypress Page Object Model (POM) Project

This repository contains a test automation framework using Cypress with the Page Object Model (POM) design pattern. The POM is a popular design pattern in test automation for enhancing test maintenance and reducing code duplication. A page object is created for each page that encapsulates the page structure and behaviors.

Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Before you begin, ensure you have the following installed:

1.Node.js (Preferably the latest stable version)
2.NPM (Node Package Manager)


Installation

1.Clone the repository
git clone https://yourrepositorylink.git

2.Navigate to the project directory
cd path of project directory

3.Install dependencies
npm i

4.To run your tests in headless mode (without the GUI), use:
npx cypress run --spec cypress/e2e/Tests/convoso.assignment.cy.js

5.To run your tests in headed mode (without the GUI), use:
npx cypress run --spec cypress/e2e/Tests/convoso.assignment.cy.js --headed --browser name_of_the_browser eg chrome/firefox

6.To run your tests in using GUI:
npx cypress open select E2E testing select the browser type and then select the spec file to run

7.Create Local Environment

Create a new file with name 'cypress.env.json' in 'CONVOSO_ASSIGNMENT' folder
Update username, password in below json and add updated json to 'cypress.env.json' file

{

    "username" : "enterusername",
    "password" : "enterpassword"

}

Project Structure

cypress-pom-project/
├── cypress/
│   ├── fixtures/
│   ├── e2e
│   │   └── Tests/           # Test files
│   ├── support/
│   │   ├── pageObjects/     # Page object classes
│   │   └── commands.js
├── cypress.json             # Cypress configuration file
├── package.json
└── README.md

Key Directories and Files
cypress/e2e/Tests/: Contains the test files. Each test file typically corresponds to a test suite for a specific page or feature.

cypress/support/pageObjects/: Contains the page object files. Each file represents a page in the web application and contains methods for interacting with the page.

cypress/support/pageObjects/locators.json: Contains all the locators

cypress/fixtures: 
Inclused all the testdata file

cypress.config.js: Configuration file for Cypress settings and options.
package.json: Contains scripts and dependencies for the project.


