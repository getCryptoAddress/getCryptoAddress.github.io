# Contributing to Get Crypto Address

Thank you for considering contributing to Get Crypto Address!
We appreciate your interest in helping us improve the project.
This guide provides instructions and best practices to make contributing as
smooth as possible.

## 1. Setting Up the Local Development Environment for Pull Requests

To get started with contributing, you'll need to set up the project on your
local machine. Please follow these steps:

1. **Clone the repository**:
   Clone the repository to your local machine using SSH or HTTPS:
   ```shell
   git clone git@github.com:getCryptoAddress/getCryptoAddress.github.io.git
   # or: 
   # git clone https://github.com/getCryptoAddress/getCryptoAddress.github.io.git 
   
   cd getCryptoAddress.github.io
   ```
2. **Install [Node.js](https://nodejs.org/)**:
   Ensure that you have [Node.js](https://nodejs.org/) installed.
   The required version can be found in the `engine.node` field in the
   [package.json](../package.json)  file.
3. **Install project dependencies**:
   Once Node.js is set up, install the project dependencies using npm:
    ```shell
    npm install
    ```
4. **Run the project locally**:
   Start the local development server to ensure everything works as expected.
    ```shell
    npm run dev
    ```
5. **Make your changes**:
   Make the necessary changes to the project and test them locally.
6. **Test your changes**:
   Run the unit tests to ensure that your changes don't break existing
   functionality.
    ```shell
    npm run test:unit
    ```
   Run the end-to-end tests via [Playwright](https://playwright.dev)
   to ensure that your changes don't break the user
   interface.
    ```shell
   # Install browsers for the first run
    npx playwright install

   # Runs the end-to-end tests
    npm run test:e2e
    # Runs the tests only on Chromium
    npm run test:e2e -- --project=chromium
    # Runs the tests of a specific file
    npm run test:e2e -- tests/example.spec.ts
    # Runs the tests in debug mode
    npm run test:e2e -- --debug
    ```
   Build the project for production to ensure that your changes don't introduce
   any issues.
    ```shell
    npm run build;
    npm run prerender;
    PLAYWRIGHT_USE_BUILD=1 npm run test:e2e;
    ```

7. **Commit your changes**:
   Once you're satisfied with your changes, commit them to your fork.
   Don't forget about [Eslint](https://eslint.org/)
   and [Prettier](https://prettier.io/).
   You can run them with:
    ```shell
    npm run lint;
    npm run format;
    ```

