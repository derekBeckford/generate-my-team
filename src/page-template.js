module.exports = templateData =>{
    //console.log(templateData)
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
        
    `;
}