# Project Template with Vite.js and React (JS)

This project template includes a setup for using `Vite.js` + `React` + `JavaScript`, and includes integrations for `eslint` and `prettier`, as well as a pre-commit hook using `lint-staged` and `husky`.

## Getting Started

To get started with this project template, follow these steps:

1. Clone the repository to your local machine using git clone.
1. Run `yarn` to install the necessary dependencies.
1. Run `yarn dev` to start the development server.

## Available Scripts

Besides the default scripts `dev`, `build`, and `preview`, you can run:

- ```
  yarn lint
  ```

  Runs `eslint` on the project to check for any errors or warnings in the code without fixing them.

- ```
  yarn lint:fix
  ```

  Runs `eslint` on the project to check for any errors or warnings in the code trying to fix any auto-fixable problems.

- ```
  yarn format
  ```

  Runs prettier on the project to check the code for formatting issues without fixing them.

- ```
  yarn format:fix
  ```

  Runs prettier on the project to check the code for formatting issues and tries to automatically fix them.

## Pre-Commit Hook

This project template includes a pre-commit hook that will run `prettier` and `eslint` on the files that are about to be committed. This ensures that any code being committed meets the linting and formatting standards defined in the project.

## Configuration

This project template includes a `.eslintrc.cjs` file for configuring `eslint`, and a `.prettierrc.cjs` file for configuring `prettier`. These can be modified to fit the needs of your project.
By default `eslint` enforces the [AirBnB Style Guide](https://github.com/airbnb/javascript)

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE.md) file for details.
