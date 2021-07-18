const generateManager = (manager) => {
  return `
  <div class="col-3 mt-3 employee-card">
    <div class="shadow-lg card h-1000">
      <div class="card-header bg-danger text-white">
        <h3>${manager.name}</h3>
        <h4><i class="bi bi-cup-fill"></i> Manager</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: ${manager.id}</p>
        <p class="email">
          Email: <a href="mailto:${manager.email}">${manager.email}</a>
        </p>
        <p class="office-num">Office Number: ${manager.officeNumber}</p>
      </div>
    </div>
</div> 
  `;
};

const generateEngineer = (engineer) => {
  return `
  <div class="col-3 mt-3 employee-card">
    <div class="shadow-lg card h-1000">
      <div class="card-header bg-danger text-white">
        <h3>${engineer.name}</h3>
        <h4><i class="bi bi-eyeglasses"></i> Engineer</h4>
      </div>
      <div class="card-body">
        <p class="id">ID: ${engineer.id}</p>
        <p class="email">
          Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
        </p>
        <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
      </div>
  </div>
</div> 
  `;
};

const generateIntern = (intern) => {
  return `
  <div class="col-3 mt-3 employee-card">
      <div class="shadow-lg card h-1000">
        <div class="card-header bg-danger text-white">
          <h3>${intern.name}</h3>
          <h4><i class="bi bi-book"></i> Intern</h4>
        </div>
        <div class="card-body">
          <p class="id">ID: ${intern.id}</p>
          <p class="email">
            Email: <a href="mailto:${intern.email}">${intern.email}</a>
          </p>
          <p class="school">School: ${intern.school}</p>
        </div>
    </div>
  </div>`;
};

generateHTML = (fileContent) => {
  pageArray = [];
  const employees = fileContent.employees;

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];

    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      pageArray.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
  }

  return pageArray.join("");
};

module.exports = (employeeCards) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="style.css"></link>
      </head>
      <body>
        <header>
          <nav class="navbar" id="navbar ">
            <span
              class="
                navbar-dark
                bg-primary
                display-5
                w-100
                text-center
                py-5
                mx-2
              "
              id="navbar-text"
              >My Team</span
            >
          </nav>
        </header>
        <main>
        </main>
        <div class="container">
        <div class="d-flex flex-row flex-wrap justify-content-center">
        ${generateHTML(employeeCards)}    
        </div>     
      </div>
    </main>
  </body>
</html>
    `;
};
