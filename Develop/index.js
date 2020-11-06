const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
// import generateMarkdown module
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

const questions = [
  {
    message: "What is your project's title?",
    type: "input",
    name: "title",
    default: "name_project",
  },
  {
    message: "Enter a short description of your project.",
    type: "input",
    name: "description",
    default: "This project creats an application.",
  },

  {
    message: "What are required to install this project?",
    type: "input",
    name: "installation",
    default: "Brief of installation ",
  },
  {
    message: "Why and how will this project be used?",
    type: "input",
    name: "usage",
    default: "Description and instruction of usage ",
  },

  {
    message: "A short instruction of how to contribut to this project. ",
    type: "input",
    name: "contribution",
    default: "Information of contrubuting",
  },
  {
    message: "What tests has been runned for testing this project?",
    type: "input",
    name: "tests",
    default: "Example of test process",
  },

  {
    message: "A license is required for your project?",
    type: "list",
    name: "licenses",
    choices: [
      "Apache License 2.0",
      "Boost Software License 1.0",
      "GNU AGPLv3",
      "IBM Public License Version 1.0",
      "ISC License (ISC)",
      "The MIT License",
      "Mozilla Public License 2.0",
    ],
    default: "A required license ",
  },
  {
    message: "What is your GitHub username?",
    type: "input",
    name: "username",
    default: "",
  },

  {
    message: "What is your email address?",
    type: "input",
    name: "email",
    default: "email info",
  },
];

// async function to initialize program
const init = async () => {
  try {
    const response = await inquirer.prompt(questions);
    // use axios to call GitHub api for user info
    const githubData = await axios.get(
      `https://api.github.com/users/${response.username}`
    );
    console.log(githubData);
    const markdown = generateMarkdown(response);
    // console.log(response.email);
    fs.writeFileSync(
      `${response.title.toUpperCase().replace(" ", "")}.md`,
      markdown
    );
    console.log("Success!");
  } catch (error) {
    console.log(error);
  }
};
// function call to initialize program
init();
