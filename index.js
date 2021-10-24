const inquirer = require('inquirer');
const fs = require('fs')
const generatePage = require('./template');
const validator = require('email-validator')

class addMember {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }


    getName() {
        inquirer
            .prompt({
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
            })
            .then(({ name }) => {
                this.employee = new Employee(name);
            })
    }

    getId() {
        inquirer
            .prompt({
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
            })
    }

    getEmail() {
        inquirer
            .prompt({
                type: 'input',
                name: 'email',
                message: "Please enter your email address.",
                validate: validator
            })
    }

    getRole() {
        inquirer
            .prompt({
            type: 'confirm',
            name: "confirmRole",
            message: "Would you like to add an engenieer or inter",
            default: true
            },
            {
                type:'list',
                name: 'role',
                message: 'Choose your nest team member',
                choices: ["Engineer","Intern", "Finish"],
                when: ({confirmRole}) => confirmRole
            }
            )



        
    }

};

module.exports = Employee;
