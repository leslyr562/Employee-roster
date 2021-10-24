const generatePage = require('./template');


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }


    getName() {
        console.log('Hello4')
    }
     
    getId() {
        console.log('Hello3')
    }

    getEmail() {
        console.log('Hello2')
    }

    getRole() {
        console.log('Hello1')
      }

};

module.exports = Employee;