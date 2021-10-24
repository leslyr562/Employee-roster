const inquirer = require('inquirer')

class employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getname() {
        inquirer.prompt({
            type: 'input',
            name: 'name',
            message: "What is the manager's your name?",
        })
    }
}
