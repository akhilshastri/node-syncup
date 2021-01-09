const inquirer = require('inquirer'); //

//import inquirer from 'inquirer';

const fistQuestion = {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  } ;

const questionsList = [ fistQuestion  ];

function showAnswers( answers ) {
    console.log(
        answers
        );
}

inquirer
.prompt(questionsList)   // <= wait
.then( showAnswers );
