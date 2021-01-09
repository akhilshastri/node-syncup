const inquirer = require('inquirer');

const questions = [ {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  } ];


inquirer.prompt([]).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

console.log('Hello from nodejs');