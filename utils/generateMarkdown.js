// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
    else if (license === "APACHE 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    else if (license === "CC0") {
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
    }
    else if (license === "None") {
      return "No license needed"
    }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.name}
  
  ## Table of Contents 
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contributing](#contributing)
    5. [Test](#test)
    6. [License](#license)
    
    

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

 ## Contributing
 ${data.contributing}

## QUESTIONS 
If you have any questions, feel free to email me at ${data.email}. You can also find my other work at ${data.username}. 

`;
}

module.exports = generateMarkdown;
