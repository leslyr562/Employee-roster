const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const fs = require('fs')
const templateData = require('./lib/template');
let employees = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter manager's name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter manager's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter manager's id.",
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
        type: 'input',
        name: 'officeNumber',
        message: "Enter office number",
        validate: numberInput => {
            if (numberInput) {
                return true;
            } else {
                console.log('Please enter a valid number');
                return false;
            }
        },
        when: function (answers) {
            return answers.role === "Manager"
        }

    }
]

const employeeQuestions = [
    {
        type: 'list',
        name: 'role',
        message: 'Choose your next team member',
        choices: ["Engineer", "Intern", 'Manager'],
    },
    {
        type: 'input',
        name: 'name',
        message: "Enter employee's name",
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
        message: "Enter employee's id.",
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
        message: "Please enter employee's email address.",
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
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
        when: function (answers) {
            return answers.role === "Engineer"
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter inter's school",
        when: function (answers) {
            return answers.role === "Intern"
        }
    },

];

const indexQuestions = [
    {
        type: 'list',
        name: "menu",
        message: "Would you like to add another employee or build your team?",
        choices: ["Add another employee", "Build a team"]
    }
]

function addEmployee() {
    inquirer
        .prompt(employeeQuestions)
        .then(response => {
            console.log(response)
            menu()
        })
}

function addManager() {
    inquirer
        .prompt(managerQuestions)
        .then(response => {
            console.log('manager', response)
            menu();
        })
}

function menu() {
    inquirer
        .prompt(indexQuestions)
        .then(response => {
            console.log('menu', response)
            if (response.menu === "Add another employee") {
                addEmployee();
            } else {
                buildTeam();
            }
        })

}

function buildTeam() {
    console.log('build team!')
    let template = templateData(employees)
    fs.writeFile("./dist/index.html", template, err => {
        if (err) {
            console.log(err)
        } else {
            console.log('Success! Your team has been created!')
        }
    })
}



addManager();