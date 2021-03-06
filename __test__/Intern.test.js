const Intern = require('../lib/Intern')

test('Can get intern object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object');
});

test("can get inter's school", () => {
    const school = "school";
    const intern = new Intern("John", 123, "test@testing.com", school);
    expect(intern.school).toBe(school)
})

test("can get role", ()=> {
    const role = "Intern";
    const intern = new Intern();
    expect(intern.getRole()).toBe(role)
})