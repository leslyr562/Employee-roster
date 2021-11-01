
const managerCard = (data) => {
  return `<div class="card m-2" style="width: 18rem;">
   <div class="card-body bg-primary text-white">
     <h5 class="card-title">${data.name}</h5>
     <i class="bi bi-cup-fill"></i>
     <h5 class="card-title">Manager</h5>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">Id: ${data.id}</li>
     <li class="list-group-item">Email: <a href="mailto:${data.email}" class="card-link">${data.email}</a></li>
     <li class="list-group-item">Office Number: ${data.officeNumber}</li>
   </ul>
   </div>`
};

const engineerCard = (data) => {
  return `<div class="card m-2" style="width: 18rem;">
   <div class="card-body bg-primary text-white">
     <h5 class="card-title">${data.name}</h5>
     <i class="bi bi-eyeglasses"></i>
     <h5 class="card-title">Engineer</h5>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">Id: ${data.id}</li>
     <li class="list-group-item">Email: <a href="mailto:${data.email}" class="card-link">${data.email}</a></li>
     <li class="list-group-item">Github: <a href="https://github.com/${data.github}" class="card-link">${data.github}</a></li>
   </ul>
   </div>`
};

const internCard = (data) => {
  return `<div class="card m-2" style="width: 18rem;">
   <div class="card-body bg-primary text-white">
     <h5 class="card-title">${data.name}</h5>
     <i class="bi bi-people"></i>
     <h5 class="card-title">Intern</h5>
   </div>
   <ul class="list-group list-group-flush">
     <li class="list-group-item">Id: ${data.id}</li>
     <li class="list-group-item">Email: <a href="mailto:${data.email}" class="card-link">${data.email}</a></li>
     <li class="list-group-item">School: ${data.school}</li>
   </ul>
   </div>`
}



const templateData = (array) => {
  let cards = ``;
  for (let i = 0; i < array.length; i++) {
    if (array[i].getRole() === "Manager") {
      cards += managerCard(array[i]);
    } else if (array[i].getRole() === "Engineer") {
      cards += engineerCard(array[i]);
    } else {
      cards += internCard(array[i]);
    }
  }
  return `

<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Employee Roaster</title>
  </head>
  
  <body>

    <header>
     <h1 class= "bg-primary text-center">
       My Team
      </h1>
    </header>

    <main>
         <div class="container">
            <div class="row mt-2 justify-content-center" id="TeamCards">
           ${cards}
            </div>
         <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
          <!-- CSS only -->
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </main>


    <footer class="container text-center ">
      <h3 class="text-dark"></h3>
    </footer>
  </body>
  </html>
  `;
}
module.exports = templateData