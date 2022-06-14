// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  }
  if (license === 'GNU') {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]"
  }
  if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }
  if (license === 'BSD-2') {
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]"
  }
  if (license === 'BSD-3') {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"
  }
  if (license === 'Boost') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  }
  if (license === 'Creative') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  }
  if (license === 'Eclipse') {
    return "[![License][![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]"
  }
  if (license === 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
  } else return '';

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } 
  if (license === 'GNU') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } 
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  } 
  if (license === 'BSD-2') {
    return '(https://opensource.org/licenses/BSD-2-Clause)'
  } 
  if (license === 'BSD-3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  } 
  if (license === 'Boost') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  } 
  if (license === 'Creative') {
    return '(https://creativecommons.org/licenses/by/4.0/)'
  } 
  if (license === 'Eclipse') {
    return '(https://opensource.org/licenses/EPL-1.0)'
  } 
  if (license === 'Mozilla') {
    return '(https://opensource.org/licenses/MPL-2.0)'
  } 
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'Apache') {
    return `${data.license}`
  }
  if (license === 'GNU') {
    return `${data.license}`
  }
  if (license === 'MIT') {
    return `${data.license}`
  }
  if (license === 'BSD-2') {
    return `${data.license}`
  }
  if (license === 'BSD-3') {
    return `${data.license}`
  }
  if (license === 'Boost') {
    return `${data.license}`
  }
  if (license === 'Creative') {
    return `${data.license}`
  }
  if (license === 'Eclipse') {
    return `${data.license}`
  }
  if (license === 'Mozilla') {
    return `${data.license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]

## Contributors
${data.contributors}

## Tests
${data.test}

## Questions
Email me with any questions: ${data.questions}
`;
};

module.exports = generateMarkdown;
