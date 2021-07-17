const inquierer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

async function prompt() {
  response = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
      validate: (employeeName) => {
        if (employeeName) {
          return true;
        } else {
          console.log("PLease enter an employee name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Enter Employees ID: ",
      validate: (employeeId) => {
        if (employeeId) {
          return true;
        } else {
          console.log("Please enter an employee ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter Employees Email: ",
      validate: (employeeEmail) => {
        if (employeeEmail) {
          return true;
        } else {
          console.log("Please enter an employees Email!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "role",
      message: "What is the employees role ",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  roleClar = "";

  if (response.role === "Engineer") {
    roleClar = inquirer.prompt([
      {
        type: "input",
        name: "github",
        message: "Please enter employee's github username: ",
        validate: (githubEmp) => {
          if (githubEmp) {
            return true;
          } else {
            console.log("please enter the employees github!");
            return false;
          }
        },
      },
    ]);
    const engineer = new Engineer(
      response.name,
      response.id,
      response.email,
      roleClar.github
    );
  }
  if (response.role === "Manager") {
    roleClar = inquirer.prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter employee's office number: ",
        validate: (empON) => {
          if (empON) {
            return true;
          } else {
            console.log("please enter the employees office number!");
            return false;
          }
        },
      },
    ]);
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      roleClar.officeNumber
    );
  }
  if (response.role === "Intern") {
    roleClar = inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "Please enter the school the intern is attending: ",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("please enter interns school!");
            return false;
          }
        },
      },
    ]);
    const intern = new Intern(
      response.employeeName,
      response.id,
      response.email,
      roleClar.school
    );
  }
}

prompt();
