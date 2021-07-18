const inquierer = require("inquirer");
const util = require("util");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./src/generate-site");

var myEmployees = {};

const employeePrompt = () => {
  console.log(`
  =================
  Add a New Employee
  =================
  `);

  if (!myEmployees.employees) {
    myEmployees.employees = [];
  }

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?",
      validate: (employeeName) => {
        if (employeeName) {
          return true;
        } else {
          console.log("Please enter an employee name!");
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
};

const employeeRolePrompt = async (response) => {
  roleClar = "";
  let employee;

  if (response.role === "Engineer") {
    roleClar = await inquirer.prompt([
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
    employee = new Engineer(
      response.name,
      response.id,
      response.email,
      roleClar.github
    );
  }
  if (response.role === "Manager") {
    roleClar = await inquirer.prompt([
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
    employee = new Manager(
      response.name,
      response.id,
      response.email,
      roleClar.officeNumber
    );
  }
  if (response.role === "Intern") {
    roleClar = await inquirer.prompt([
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
    employee = new Intern(
      response.name,
      response.id,
      response.email,
      roleClar.school
    );
  }

  return employee;
};

const startInput = () => {
  employeePrompt().then((input) => {
    employeeRolePrompt(input).then((role) => {
      return inquirer
        .prompt([
          {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add another employee to your roster?",
            default: false,
          },
        ])
        .then((confirmation) => {
          myEmployees.employees.push(role);
          if (confirmation.confirmAddEmployee) {
            return startInput();
          } else {
            return generatePage(myEmployees);
          }
        })
        .then((pageHTML) => {
          console.log(pageHTML);
          return writeFile(pageHTML);
        })
        .then((writeFileResponse) => {
          console.log(writeFileResponse);
          return copyFile();
        });
    });
  });
};

startInput();

// .then((copyFileResponse) => {
//   console.log(copyFileResponse);
// })
// .catch((err) => {
//   console.log(err);
// });
