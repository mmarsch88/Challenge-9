//variables for npm packages
//var inquirer = require('inquirer')

//array of question to ask user about project
var questions = [
    {
        type: "input",
        name: "project",
        message: "What is the name of your project?",
    }
]

//function to start app
function startApp() {
    console.log("starting")
    inquirer.prompt(questions)
        .then(answers => console.log(answers))
}

startApp()