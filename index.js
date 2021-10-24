const inquirer = require('inquirer');
const fs = require('fs')
// const generatePage = require('./template');
let employees =  [];
let eemployeeId = 0;
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's your name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter employees id.",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter a valid id');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address.",
        validate: function (email) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log("Please enter valid email!")
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: "confirmRole",
        message: "Would you like to add an engenieer or inter",
        default: true
    },
    {
        type: 'list',
        name: 'role',
        message: 'Choose your nest team member',
        choices: ["Engineer", "Intern", "Finish"],
        when: ({ confirmRole }) => confirmRole
    }
];

function addEmployee() {
    inquirer
    .prompt(questions);
}

addEmployee();