const Employee = require('./Employee')

class Intern {
    constructor(name, id, email) {
        super(name, id, email)
        this.school = school;

    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }
    
}


module.exports = Intern