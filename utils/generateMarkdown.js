// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.name}
  
  ## Table of Contents 
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Test](#test)
    5. [License](#license)
    6. [Dependencies](#dependencies)
    

 ## Description
 ${data.description}

 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage}

 ## Test
 ${data.test}

 ## License
 ${renderLicenseBadge(data.license)}

 ## Dependencies
 ${data.dependencies}

## QUESTIONS 
If you have any questions, feel free to email me at ${data.email}. You can also find my other work at ${data.username}. 

`;
}

module.exports = generateMarkdown;
