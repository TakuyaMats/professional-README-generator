// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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

## License\n
🏆 
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
${data.license}\n

## Badges\n
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
${data.badges}\n
${renderLicenseLink(data.license)}

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
