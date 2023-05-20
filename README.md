## How to setup and run the project
1. Clone the repository
2. Install the dependencies: npm install
3. Run the test by using command: npx cucumber-js --exit
4. If you want to generate html report, we can use this command to run the test: npx cucumber-js --exit --format html:cucumber-report.html

## Features
1. Tests are written in Javascript using Playwight framework
2. Tests are written in Page Object Model
3. Tests are written in BDD style (Gherkin language)

## Folder structure
data: contains upload files
features: contains BDD TestCases
output: contains screenshot while test failed
pages: contains page object model for each page
step_definitions: define BDD steps written based on Cucumber

## Roadmap
1. Moduler project structure, allowing execute multiple sites in one testcase: admin site, email, ...
2. Support parallel execution
3. Multiple environment execution
4. Reporing (using Allure)
5. Support other Application Under Tests: Mobile, Desktop, API, ...