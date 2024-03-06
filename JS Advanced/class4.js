//  tri nacina pisanja funkcije arrow


function validateEmail(email){
    return email.includes("@");
}

const validateEmail2 = (email) => {
    return email.includes("@");
}

const validateEmail3 = (email) => email.includes("@");


const myEmail = "perapera@yahoo.com";

console.log("validateEmail", validateEmail(myEmail));
console.log("validateEmail2", validateEmail2(myEmail));
console.log("validateEmail3", validateEmail3(myEmail));










// Vezbe :

//  Da funkcija ispisuje broj cifara koje cine neki broj koji je ujedno parametar funkcije.

// const number1 = 12345;

// const digitsNumber = (number) => {
//     const digits = number.toString();
//     return digits.length
// }

// console.log("Digits:",  digitsNumber(number1))


// // Da uzme broj iz parametra funkcije i da prikaze da li je even ili odd.



// const numbers = (number) => {
//    return number % 2 === 0 ? "even" : "odd";                    // ternarni prikaz uslova
// }
// console.log(numbers(number1))


// // Da vrati broj iz parametra ako je pozitivan ili negativan

// const typeNumbers = (number) => {
//     if (number > 0) {
//         return ("Positive");
//     } else {
//         return ("Negative");
//     }
// }

// console.log(typeNumbers(number1));


// // glavna unkcija koja prikazuje sve ove gore i poziva ih.

// const myFunction = (number) => {
//      const digits = digitsNumber(number);
//      const evenOrOdd = numbers(number);
//      const positiveOrNegative = typeNumbers(number);
//      return `${digits}  ${evenOrOdd}  ${positiveOrNegative}`
// }

// console.log(myFunction(number1));





// vezba 2 sa html - om.


// const inputColor = document.getElementById("color");
// const inputSize = document.getElementById("textSize");
// const button = document.getElementById("btn");
// const header = document.getElementById("h1");


// button.addEventListener("click", () => {
//     const colorValue = inputColor.value;
//     const sizeValue = inputSize.value;
//     myFunction1(header, colorValue);
//     myFunction2(header, sizeValue);

// })

// const myFunction1 = (element, color) => {
//     element.style.color = color;
// }

// const myFunction2 = (element, fontSize) => {
//     if( fontSize === ""){
//         element.style.fontSize = "24px";
//     } else 
//     {element.style.fontSize = fontSize + "px";;
// }
    
// }







//   const header = document.getElementById("h1");
// const textSizeInp = document.getElementById("textSize");
// const textColorInp = document.getElementById("color");
 
// const genTextColor = (element, color) => {
//   element.style.color = color ? color : "black";
// };
 
// const genTextSize = (element, textSize) => {
//   element.style.fontSize = textSize ? textSize + "px" : "24 px";
// };
 
// function handleStyle() {                          //  onclick u HTML- u se desava ova funkcija.
//   genTextColor(header, textColorInp.value);
//   genTextSize(header, textSizeInp.value);
// }

// arrow function


// const header = document.getElementById("h1");
// const textSizeInp = document.getElementById("textSize");
// const textColorInp = document.getElementById("color");


// const genTextColor = (element, color) => {
//     element.style.color = color ? color : "black";
// };

// const genTextSize = (element, textSize) => {
//     element.style.fontSize = textSize ? textSize + "px" : "24px";
// }

// const finalfunction = () => {
//     genTextColor(header, textColorInp.value);
//     genTextSize(header, textSizeInp.value);
// }











//  vezba 3

//  arrow function 

// const button = document.getElementById("btn");
// const mainTable = document.getElementById("mainTable");

// button.addEventListener("click", () => { 
//     const url = "https://swapi.dev/api/planets/?page=1https://swapi.dev/api/planets/?page=1"
//     starWars(url);
// }) 

//  const starWars = (url) => {
//    fetch(url)
//    .then(response => response.json())
//    .then( data => {
    
//    })
//  }


// witout arrow


// const button = document.getElementById("btn");
// const mainTable = document.getElementById("mainTable");
// let page = 1;

// button.addEventListener("click", function(){
//     starWars();

//     const newButton = document.createElement("button");
//     newButton.innerText = "Next 10";
//     newButton.addEventListener("click", starWars2)

// document.body.appendChild(newButton);
// });  




// function starWars() {
//     fetch("https://swapi.dev/api/planets/?page=1")
//     .then(function(response){
//         return response.json(); 
//     })
//     .then(function(data){
//         const planets = data.results;                    
//         contentTable (planets);
//     })

// }

// function starWars2() {
//     page++                                                            //  pogledaj ovo page++ i sam url je izmenjen
//     console.log("page", page);
//     fetch("https://swapi.dev/api/planets/?page=" + page)
//     .then(function(response){
//          return response.json()
//     })
//     .then(function(data){
//         const otherPlanets = data.results;
//         contentTable(otherPlanets);
//     })
// }

// function contentTable (planets){
//     mainTable.innerHTML = "";
//         let arrayNames = ["Planet Name", "Population", "Climate", "Gravity"];
//     const headerTr = document.createElement("tr");

//     arrayNames.forEach(function(names){
//         const cell = document.createElement("th");
//         cell.innerText = names;
//         headerTr.appendChild(cell);

//         });
//         mainTable.appendChild(headerTr);

  

//     const arrayValues = ["name", "population", "climate", "gravity"];

//     planets.forEach(function(planet){                                                    //    razmisli opet zasto planets.forEach
//         const headerValues = document.createElement("tr");
 
//         arrayValues.forEach(function(values){
//          const cell = document.createElement("td");
//          cell.innerText = planet[values];                                                //  Zasto planet[values]

//          headerValues.appendChild(cell);
//     });

//     mainTable.appendChild(headerValues);

//     });
// };


//  with arrow function


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
  fetch("https://swapi.dev/api/planets/?page=" + page)                 //  obrati paznju na page
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




// ..........................................................



// const addBtn = document.getElementById("addBtn");
// const namesArray = [];

// function onAddClicked() {
//   const newName = prompt("Enter a name");

//   namesArray.push(newName);
//   console.log("names array => ", namesArray);
// }
// console.log("niz => ", namesArray);//[]

// addBtn.addEventListener("click", onAddClicked);




// .......................................!!!!!!!!!!!!!!!!!!

function getFullName(fName, lName) {
      // parameters
      return `${fName} ${lName}`;
    }
    
    
    const fullName = getFullName("Milica", "Dj.");                  // arguments, tu pozivano funkciju u varijabli
    console.log(fullName);

 function displayStudentInfo(student) {
      console.log("Student", getFullName(student.firstName, student.lastName));
      console.log("Age", student.age);
    }
    
    console.log(getFullName("Tamara", "D."));
    

const obj = {
  firstName: "Aida",
  lastName: "P",
  age: 18,
};
displayStudentInfo(obj);




// ..................................


// anonymous functions

// const getFullName = function (fName, lName) {        // vrednost ove varijable je zapravo ova anonimna funkcija
//   return `${fName} ${lName}`;
// };

// getFullName("aaa", "vbbb");

// addBtn.addEventListener("click", function () {         // kako na ovaj nacin znamo da pozivamo ovu gore funkciju ??
//   console.log("clicked on button");  
// });


// ..................................


// anonymous arrow functions

// const getSum = (num1, num2) => {
//   console.log("Sum", num1 + num2);
// };

// addBtn.addEventListener("click", () => {
//   console.log("clicked!!");
// });

// getSum(3, 4);






// exercise 1



// const countDigits = (number) => Math.abs(number).toString().length;

// const isEvenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

// const isPositiveOrNegative = (number) => {
//   // 0
//   if (number > 0) {
//     return "Positive";
//   }                               

//   if (number < 0) {
//     return "Negative";
//   }
//   return "Zero";
// };

// const getNumberStats = (number) => {
//   const numDigits = countDigits(number);
//   const evenOrOdd = isEvenOrOdd(number);                                                  //  U varijabli mozes da pozoves funkciju!!!!!
//   const posOrNeg = isPositiveOrNegative(number);

//   console.log(`${numDigits} Digits, ${evenOrOdd}, ${posOrNeg}`);
// };

// getNumberStats(-25);



