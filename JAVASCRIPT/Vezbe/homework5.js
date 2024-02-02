// // ...........................................................................



// let promena = document.getElementById("myTitle");
//               promena.innerText = "Novi Tekst";


// let promena1 = document.getElementsByClassName("paragraph");
//             for (let i = 0; i < promena1.length; i++){
//                promena1[i].innerText = "Ovo je imena paragrafa.";
//             }


// let promena2 = document.getElementsByTagName("text");
//              for (let element of promena2){
//                 element.innerText = "Promena po tagu";
//              }

// let promena3 = document.getElementsByTagName("h1");
//            for ( let i = 0; i < promena3.length; i++){
//               promena3[1].innerText = "Promena drugog header-a";
//            }

// let promena4 = document.getElementsByTagName("h3");
//            for ( let i = 0; i < promena4.length; i++){
//               promena4[i].innerText = "Promena kraj";
//            }

// // ...........................................................................


// Array with numbers
let numbers = [2, 4, 5];

// Accessing the <ul> element
let numbersList = document.getElementById("numbersList");
let sum = 0;

// Printing each number as a list item and calculating the sum
let listContent = '';
for (let i = 0; i < numbers.length; i++) {
  listContent += `<li>${numbers[i]}</li>`;
  sum += numbers[i];
}

// Setting the HTML content of the list
numbersList.innerHTML = listContent;

// Displaying the sum
document.getElementById("sum").textContent = "Sum: " + sum;