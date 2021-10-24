module.exports = templateData => {
const {} = templateData;

return `

<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Roaster</title>
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center">
        <h1 class="page-title text-secondary ">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
    </main>
    <footer class="container text-center ">
      <h3 class="text-dark">Made by Lesly</h3>
    </footer>
  </body>
  </html>
  `;
}
  