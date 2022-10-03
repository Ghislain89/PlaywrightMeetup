### Playwright Documentation
https://playwright.dev/, the documentation is great! Take some time to read up on it :-)! I seem to know alot, but in reality I have just become an expert at quickly going through documentation!

### Installation
* Install NodeJS LTS https://nodejs.org/en/
* Clone Repository
* Run ```npm install``` in your terminal, this will install all the libraries as defined in the package.json
* Run ```npx playwright install``` in your terminal, this will install all browser binaries required by Playwright/Test.

### Running Tests
You can run tests either through VSCode's plugin for Playwright: Playwright Test for VSCode
Run tests through the terminal using ```npx playwright test```

All artifacts and reports will be created in ```./test-results/```. By default, traces are only kept for testcases that have failed.


### Showing the report
You can serve the HTML report through the terminal using ```npx playwright show-report ./test-results/html-report/```. This will include traces for any failed testcases. 