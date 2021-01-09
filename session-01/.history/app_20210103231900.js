const inquirer = require('inquirer');
const fistQuestion = {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  } ;

const questionsList = [ fistQuestion  ];


inquirer
.prompt(fistQuestion)   //<=
.then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

console.log('Hello from nodejs');