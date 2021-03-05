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

  #Project Description
  ${data.description}

  #Installation
  ${data.installation}

  #Usage
  ${data.usage}
`;
}

module.exports = generateMarkdown;
