const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("create new employee object", () => {
  const employee = new Employee("Jan", 1, "jan@email.com", "employee");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual("jan@email.com");
  expect(employee.role).toEqual("employee");
});

test("get employee name", () => {
  const newEmployee = "Jan";
  const employee = new Employee(newEmployee);
  expect(employee.getName()).toBe(newEmployee);
});

test("get employee ID", () => {
  const value = 1;
  const employee = new Employee("Jan", value);
  expect(employee.getId()).toBe(value);
});

test("get employee email", () => {
  const email = "jan@email.com";
  const employee = new Employee("Jan", 1, email);
  expect(employee.getEmail()).toBe(email);
});

test("get employee role", () => {
  const role = "employee";
  const employee = new Employee("Jan", 1, "jan@email.com", role);
  expect(employee.getRole()).toBe(role);
});
