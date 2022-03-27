<h1>Testing instructions:</h1>

Welcome to The Brookly Brothers coding challenge!

Before we begin, clone this repository by running the following line in your terminal:

```
git clone git@github.com:daviraquel/desafio_brooklyn_brothers_davi.git
```

Then please check the package.json file for following libraries:

- [jest-dom](https://github.com/testing-library/jest-dom)
- [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
- [cypress-real-events](https://github.com/dmtrKovalenko/cypress-real-events)

If they're not installed, add them through the terminal using "yarn add" or "npm install". For more information click the links for their documentation.

Now we're good to go!

## 1 - Jest tests

Open the terminal inside the project folder run the following command:

```
yarn test
```

or

```
npm test
```

Wait for a while and you should see the results in the terminal.

## 2 - Starting the server for Cypress tests.

Open the terminal inside the project folder and run:

```
yarn start
```

or

```
npm start
```

This should open a browser window with the page, the url should be something like "http://localhost:3000/"

## 3 - Open Cypress

Open another terminal inside the project folder and run:

```
yarn run cypress open
```

If you're not using yarn, take a look [here](https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress).

Now you should see the Cypress window with the files to select from

## 4 - Run the tests in Cypress

Simply click the "dropDownMenus.spec.js" in the list. This should open a browser window controlled by Cypress in which it will start running the tests. You can check the progress and subsequent results on the left side of the screen.

## Notice

[This is the folder](https://github.com/daviraquel/desafio_brooklyn_brothers_davi/tree/main/src/__tests__/components) with the Jest tests.
And [this is the folder](https://github.com/daviraquel/desafio_brooklyn_brothers_davi/tree/main/cypress/integration) with the Cypress tests
