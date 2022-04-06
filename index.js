// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
  {
    type: 'input',
    message: 'Write your title here.',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Write your description here.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Write your installation instructions here.',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Write your usage instructions here.',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'Write your usage instructions here.',
    name: 'license',
    choices: ['BSD','MIT', 'GPL']
  },
  {
    type: 'input',
    message: 'Write your contribution guidlines here.',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Write your test instructions here.',
    name: 'tests',
  },
]);
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFileSync('README.md', generateMarkdown(data), (err) =>
//       err ? console.log(err) : console.log('Successfully created README.md!')
//     );
// }

// TODO: Create a function to initialize app
function init() {
  questions()
  // .then((answers) => {
  //   const htmlPageContent = generateHTML(answers);

  //   fs.writeFile('index.html', htmlPageContent, (err) =>
  //     err ? console.log(err) : console.log('Successfully created index.html!')
  //   );
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully created README.md!'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();

