const inquirer = require('inquirer');

const questions = [
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'Choice',
      choices: ['View all departments', 'View all roles', 'view all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role' ],
    },
  ];

  function init() {
    inquirer
  .prompt(questions)
  .then((data) => {
    var generatedPage = generateReadME(data);
    writeToFile('README.md', generatedPage);
  });
}

init();