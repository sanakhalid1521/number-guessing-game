#! /urs/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 +1);
//console.log(randomNumber);

const answers = await inquirer.prompt([
{
    name : "userGuessedNumber",
    type : "number",
    message : "please guess a number 1-6:",
},
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Gongratulation! you guess right number");
}
else
{
    console.log("you guess wrong number");
}

