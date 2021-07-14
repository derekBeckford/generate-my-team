const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates a employee object", () => {
  const employee = new Employee("Jan", 1, "jan@email.com");

  expect(employee.name).toBe("Jan");
  expect(employee.id).toBe("1")
  expect(employee.email).toBe("jan@email.com")
});
