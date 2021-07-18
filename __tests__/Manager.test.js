const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("set manager object", () => {
  const officeNumber = 20;
  const employee = new Manager(
    "Delta",
    2,
    "delta@email.com",
    officeNumber
  );
  expect(employee.officeNumber).toBe(officeNumber);
});

test("get role to return manager", () => {
  const role = "Manager";
  const employee = new Manager("Delta", 2, "delta@email.com");
  expect(employee.getRole()).toBe(role);
});

test("get office number", () => {
  const officeNumber = 20;
  const employee = new Manager(
    "Delta",
    2,
    "delta@email.com",
    officeNumber
  );
  expect(employee.getOfficeNumber()).toBe(officeNumber);
});
