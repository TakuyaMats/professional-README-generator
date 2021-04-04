// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    `
# ${fileName.title}

1. [ Description. ](#description)
2. [ Table of Contents. ](#table-of-contents)
3. [ Installation. ](#installation)
4. [ Usage. ](#usage)
5. [ License. ](#license)
6. [ Contributing. ](#contributing)
7. [ Tests. ](#tests)
8. [ Questions. ](#questions)

<a name="description"></a>

## 1. description



    `
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
