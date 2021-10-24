const Employee = require('../lib/Employee')

test('Creates an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object')
});

test("Can get employee's name", () => {
    const name = 'John';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Can get employees email', () => {
   const testValue = "test@test.com";
   const empoloyee = new Employee("John,",1,testValue)
    expect(empoloyee.email).toBe(testValue)
});

test('Can get employees id', () => {
    const testValue = 10;
    const employee = new Employee("John", testValue)
    expect(employee.id).toBe(testValue)
})
