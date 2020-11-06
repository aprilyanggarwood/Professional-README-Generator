# Professional README Generator: Node.js

## Description

A professianl README is important for users to understand your application that how your application will work for them, how they install your application,how to report issues as well as how other developers can contribute to this application at the first touch.

## Table of Contents

- [Installation](#Installation)
- [Usage](#usage)
- [ES6-syntax-and-code](#ES6-syntax-and-code)
- [Demo](#Demo)
- [License](#license)
- [Questions](#questions)

## Installation

User will run this application with `Node.js` , and is invoked with `node index.js` and a import module of `generateMarkdown.js`.

In the terminal, user will run `npm install` for installing two package dependencies which are `inquirer` and `axios` in the package.json in order to answer the prompted questions and fetch user's info from GitHub api to generate his/her own README.

## Usage

- User will be given the prompted questions about project info and GitHub info by runing `npm index.js`.

- User can answer or skip questinos when he/she goes though the inquirer prompts, then this application will generate a README file basd on user's responses to the prompts. For example, if user skips some questions, such as contribution and test questions, these two sections will not be included in the README file. Also this application will fetch the GitHub info from GitHub api when user puts her/his github username.

- The markdown format and a table of contents will come with the generated README file.The each list of contents will link to the each matched section.

- A bage link will come with the selected license.

## ES6-syntax-and-code

- const
- arrow functions
- template literals
- async function / await for a promise
- try and catch statements
- axios to fetch info from api
- fs.writeFileSync promise method.

## Demo

![ProfessionalREADMEGenerator](./Develop/demo/ProfessionalREADMEGenerator.gif)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions?

If you have any questions about this README Generater Apprlication, please feel free to reach me via the link of my [GitHub](https://github.com/aprilyanggarwood) and my Email: <aprilyanggarwood@gmail.com>
