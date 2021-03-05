const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// github username input
const gitHubQuestion = [
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  }
]
// email input
const submitEmail = [
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  }
]
// questions about project
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project'
  }
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project'
  }
  {
    type: 'input',
    name: 'installation',
    message: 'What do you need to install for the app to work?'
  }
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this app?'
  }
  {
    type: 'input',
    name: 'test',
    message: 'what kind of test are ran on this app?'
  }
  {
    type: 'list',
    name: 'contributors',
    message: 'Are there any developers to contribute to your project?',
    choices: [
      'Yes',
      'No'
    ]
  }
  {
    type: 'list',
    name: 'license',
    message: 'What type of license would you like?',
    choices: [

    ]
]