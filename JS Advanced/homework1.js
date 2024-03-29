
const button = document.getElementById("btn");
const mainTable = document.getElementById("mainTable");
let page = 1;

button.addEventListener("click", () =>{
  starWars();

  const newButton = document.createElement("button");
  newButton.innerText = "Next 10";
  newButton.addEventListener("click", starWars2);

  document.body.appendChild(newButton);
});

const starWars = () => {
  fetch("https://swapi.dev/api/planets/?page=1")
    .then( response => response.json())

    .then(data => {
      const planets = data.results;
      contentTable(planets);
    });
}

const starWars2 = () => {
  page++;
//   console.log("page", page);
  fetch("https://swapi.dev/api/planets/?page=" + page)
    .then(response => response.json())

    .then( data => {
      const otherPlanets = data.results;
      contentTable(otherPlanets);
    });
}

const contentTable = (planets) => {
  mainTable.innerHTML = "";
  let arrayNames = ["Planet Name", "Population", "Climate", "Gravity"];
  const headerTr = document.createElement("tr");

  arrayNames.forEach( names => {
    const cell = document.createElement("th");
    cell.innerText = names;

    headerTr.appendChild(cell);
  });
  mainTable.appendChild(headerTr);

  const arrayValues = ["name", "population", "climate", "gravity"];

  planets.forEach( planet => {
    const headerValues = document.createElement("tr");

    arrayValues.forEach( values => {
      const cell = document.createElement("td");
      cell.innerText = planet[values]; //  pogledati forEach planet[values]

      headerValues.appendChild(cell);
    });

    mainTable.appendChild(headerValues);
  });
}
