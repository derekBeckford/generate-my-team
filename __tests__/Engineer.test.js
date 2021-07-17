const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("set engineer object", () => {
    const github = 'GithubUser'
    const employee = new Engineer("Moe", 3, "moe@email.com", "engineer", "GithubUser");
    expect(employee.github).toBe(github)
  });
  
  test("get role to return engineer", () => {
    const role = "Engineer"
    const employee = new Engineer("Moe", 3, "moe@email.com", role);
    expect(employee.role).toBe(role);
  });
  
  test("get github username", () => {
    const github = 'GithubUser'
    const employee = new Engineer("Moe", 3, "moe@email.com", "Engineer", github)
    expect(employee.github).toBe(github)
  });