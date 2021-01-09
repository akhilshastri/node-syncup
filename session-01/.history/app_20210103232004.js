const inquirer = require('inquirer');

const fistQuestion = {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  } ;

const questionsList = [ fistQuestion  ];

function answers() {
    console.log(JSON.stringify(answers, null, '  '));
}

inquirer
.prompt(questionsList)   
.then( answers );

console.log('Hello from nodejs');