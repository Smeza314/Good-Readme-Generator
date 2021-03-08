// what the app requires
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')




// questions about project
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What do you need to install for the app to work?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this app?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'what kind of test are ran on this app?'
  },
  {
    type: 'list',
    name: 'contributors',
    message: 'Are there any developers to contribute to your project?',
    choices: [
      'Yes',
      'No'
    ]
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of license would you like?',
    choices: [
      'none'
    ]
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your GitHub email?'
  },
]

// Grabs the response from questions and combines it all to data
async function combinedData() {
  try {
    await inquirer.prompt(questions).then(function (response) {
      return responses = response
    })
    //writes a new readme.md using generateMarkdown
    writeToFile('readmeGenerated.md', generateMarkdown(responses))
  } catch (err) {
    console.log(err);
  }
}
combinedData();
// a function that calls on "writeToFile" properties and then uses fs.writeFile to create the new readme.md and consoles logs "data entered!" once it's done.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) { console.log(err) }
    console.log("Data Entered!")
  })
}