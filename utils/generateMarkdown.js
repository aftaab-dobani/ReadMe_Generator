// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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
    7. []

 ## Description
 ${data.description}

 ## Installation
 ${data.installation}

 ## Usage
 ${data.usage}

 ## Test
 ${data.test}

 ## License
 ${data.license}

`;
}

module.exports = generateMarkdown;
