const inquirer = require('inquirer'); //

//import inquirer from 'inquirer';

const fistQuestion = {
    type: 'input',
    name: 'first_name',
    message: "What's your first name",
  } ;

const questionsList = [ fistQuestion , {
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default: function () {
      return 'Doe';
    },
  }, 
    {
      type: 'checkbox',
      message: 'Select toppings',
      name: 'toppings',
      choices: [
        new inquirer.Separator(' = The Meats = '),
        {
          name: 'Pepperoni',
        },
        {
          name: 'Ham',
        },
        {
          name: 'Ground Meat',
        },
        {
          name: 'Bacon',
        },
        new inquirer.Separator(' = The Cheeses = '),
        {
          name: 'Mozzarella',
          checked: true,
        },
        {
          name: 'Cheddar',
        },
        {
          name: 'Parmesan',
        },
        new inquirer.Separator(' = The usual ='),
        {
          name: 'Mushroom',
        },
        {
          name: 'Tomato',
        },
        new inquirer.Separator(' = The extras = '),
        {
          name: 'Pineapple',
        },
        {
          name: 'Olives',
          disabled: 'out of stock',
        },
        {
          name: 'Extra cheese',
        },
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return 'You must choose at least one topping.';
        }

        return true;
      },
    }
    ];

// function showAnswers( answers ) {
//     console.log( answers );
// }

inquirer
.prompt(questionsList)   // <= wait
.then( (answer)=> console.log( answers ));
