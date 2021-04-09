// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
  {
    type: "input",
    name: "name",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a description for your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are needed to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the instructions for usage?",
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run test?",
  },
  {
    type: "input",
    name: "license",
    message: "What is kind of licence should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?",
    choices: ["NPM i"],
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run test?",
    choices: ["npm test"],
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

    .then((data) => {
      const readMeContent = generateMarkdown(data);
      // TODO: Create a function to write README file
      fs.writeFile("README.md", readMeContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.MD!")
      );
    });
}

// Function call to initialize app
init();
