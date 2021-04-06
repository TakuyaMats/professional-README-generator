const generateLicense = require('./license');

const { MITLicense } = generateLicense;
const { ApacheLicense } = generateLicense;
const { ISCLicense } = generateLicense;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'ISC License') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return `https://choosealicense.com/licenses/mit/`
  } else if (license === 'Apache License 2.0') {
    return `https://choosealicense.com/licenses/apache-2.0/`
  } else if (license === 'ISC License') {
    return `https://choosealicense.com/licenses/isc/`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT License') {
    return `${ MITLicense }`;
  } else if (license === 'Apache License 2.0') {
    return `${ ApacheLicense }`;
  } else if (license === 'ISC License') {
    return `${ ISCLicense }`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n

## Description\n
What was your motivation?\n
- ${data.motivation}\n
Why did you build this project?\n
- ${data.why}\n
What problem does it solve?\n
- ${data.solve}\n
What did you learn?\n
- ${data.learn}\n

## Table of Contents\n
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)

## Installation\n
${data.steps}\n

## Usage\n
${data.images}\n

## Credits\n
Collaborators:\n 
${data.collaborators}\n
Links:\n 
${data.tutorials}\n

## 🏆 License\n
${renderLicenseLink(data.license)}\n
${renderLicenseSection(data.license)}\n

## Badges\n
${renderLicenseBadge(data.license)}\n

## Features\n
If your project has a lot of features, list them here.
${data.features}\n

## How to Contribute\n
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
${data.contribute}\n

## Tests\n
Go the extra mile and write tests for your application. Then provide examples on how to run them here.
${data.test}\n

`;
}

module.exports = generateMarkdown;
