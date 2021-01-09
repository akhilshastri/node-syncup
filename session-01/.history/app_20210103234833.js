const inquirer = require('inquirer'); //

//import inquirer from 'inquirer';

const fistQuestion = {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  } ;

const questionsList = [ fistQuestion  ];

function showAnswers( answers ) {
    console.log(JSON.stringify(answers, null, '  '));
}

inquirer
.prompt(questionsList)   
.then( showAnswers );
