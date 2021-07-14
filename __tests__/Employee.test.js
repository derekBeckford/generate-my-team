const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee("jan", 1, "jan@email.com");

    expect(employee.name).toBetoEqual(expect.any(String));
});

