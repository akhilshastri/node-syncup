const inquirer = require('inquirer');


inquirer.prompt([]).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

console.log('Hello from nodejs');