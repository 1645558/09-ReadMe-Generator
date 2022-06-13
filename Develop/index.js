// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projecttitle',
        },
        {
            type: 'input',
            message: 'Write a brief description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Write installation process if any',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Write the usages',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'please choose a license used',
            name: 'license',
            choices: [
                'Apache',
                'GNU',
                'MIT',
                'BSD-2',
                'BSD-3',
                'Boost',
                'Creative',
                'Ecplipse',
                'Mozilla',
                'Unlicense'
            ]
        },
        {
            type: 'input',
            message: 'Please list contriibutors if any',
            name: 'contributors',
        },
        {
            type: 'test',
            message: 'Is there a test included?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Please enter a link to your github profile',
            name: 'questions',
        },
        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'questions',
        },
    ])
    .then((data) => {
        fileName = `${data.projecttitle.toLowerCase().split(' ').join('')}.json`

        fs.writeFile(fileName, JSON.stringify(data, null, 2), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(filename, data, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Success! Generating ReadMe!')
})
}
