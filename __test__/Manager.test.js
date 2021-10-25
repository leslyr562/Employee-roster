const Manager = require("../lib/Manager");

test("can get the manager object", () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

test("can get the office number of the manager", () => {
    const officeNumber = "officeNumber";
    const manager = new Manager("Walter", 123, "test@testing.com", officeNumber);
    expect(manager.officeNumber).toEqual(officeNumber);
});
