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
1. data: contains upload files
2. features: contains BDD TestCases
3. output: contains screenshot while test failed
4. pages: contains page object model for each page
5. step_definitions: define BDD steps written based on Cucumber
6. Support: contains hooks to run before or after each scenario.

## Roadmap
1. Moduler project structure, allowing execute multiple sites in one testcase: admin site, email, ...
2. Support parallel execution
3. Multiple environment execution
4. Reporing (using Allure)
5. Support other Application Under Tests: Mobile, Desktop, API, ...