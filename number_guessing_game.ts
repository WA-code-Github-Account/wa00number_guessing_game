#! /usr/bin/env node

import inquirer from "inquirer"


const ramdomNumber = Math.floor(Math.random()*6 + 1);


const answers = await inquirer.prompt ([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 - 6:",

},
])
if(answers.userGuessNumber === ramdomNumber) {
    console.log("Congtratulations! you guessed right number");
}
else{
    console.log("You gussed a wrong number");
    
}