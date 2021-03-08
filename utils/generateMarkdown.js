// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Table of Contents
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributors](#contributors)
  * [License](#license)
  * [Questions](#questions)
  * [Contact](#contact)

  #Project Description
  ${data.description}

  #Installation
  ${data.installation}

  #Usage
  ${data.usage}

  #Tests
  ${data.tests}

  #Contributors
  ${data.contributors}

  #License
  ${data.license}

  #Questions
  If you have any questions, you can contact the owner by using the email below.

  #Contact
  Github username:${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
