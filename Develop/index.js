// TODO: Include packages needed for this application
const inquirer = require('inquirer');
inquirer.registerPrompt('directory', require('inquirer-directory'));
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?'
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'solve',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?'
    },
    {
        type: 'confirm',
        name: 'images_confirm',
        message: 'Would you like to add screenshots to your Readme?',
    },
    {
        type: "input",
        name: 'images',
        message: ' Please add your images to the readMePhotos folder and provide image name here.',
        when: function (answers) {
            return answers.images_confirm;
        },
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.'
    },
    {
        type: 'input',
        name: 'tutorials',
        message: 'If you followed tutorials, include links to those here as well.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Let other developers know what they can and cannot do with your project.',
        choices: ['MIT License', 'Apache License 2.0', 'ISC License']
    },
    {
        type: 'input',
        name: 'fullName',
        message: 'Please provide your full name.'
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'If you created an application or package and would like other developers to contribute it, include guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Successfully created new README.md!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var newData = {year: 2021, ...data}
        const readMeContent = generateMarkdown(newData);
        

        writeToFile('README.md', readMeContent, (err) => {
            err ? console.log(err) : console.log('Successfully created new README.md!')
        });
    })
};

// Function call to initialize app
init();