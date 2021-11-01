const Employee = require("../lib/Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }

    get_office_number() {
        return this.officeNumber
    }

}

module.exports = Manager;