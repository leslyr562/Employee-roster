const Engineer = require('../lib/Engineer')

test('Can get the engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
});

test("Can get engineer's github", () => {
    const gitName = "github";
    const engineer = new Engineer("John", 124, "test@testing.com", gitName);
    expect(engineer.github).toBe(gitName)
});

test("can get engineer's role", () =>{
    const role = "Engineer";
    const engineer = new Engineer();
    expect(engineer.getRole()).toBe(role)
});