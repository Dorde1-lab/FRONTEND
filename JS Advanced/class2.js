// Create 3 inputs:    prvi HTML

// Color
// FontSize
// Text
// Create a button for generating titles
// When the button is clicked generate a new h1 element with the color, font size, and text from the inputs




// let color = document.getElementById("input1");
// let fontSize = document.getElementById("input2");
// let text = document.getElementById("input3");
// let button = document.getElementById("btn");
// let div = document.getElementById("div");


// function myFunction(){
// let input1Value = color.value;
// let input2Value = fontSize.value;
// let input3Value = text.value;

// let header = `<h1>${input1Value} ${input2Value} ${input3Value}</h1>`;

// // let header = document.createElement("h1");                                        ....... ovo je drugi nacin sa document.createElement()
// // header.textContent = `${input1Value} ${input2Value} ${input3Value}`;              .......  ovo je drugi nacin sa document.createElement()


// div.appendChild(header);
// }






// ...................................................................


// Create an HTML page
// On every refresh the page should pick a random color and change the background of the page
// The RGB values of the color should be shown in the center of the page on every restart



// function getRandomNumber() {
//        const r = Math.floor(Math.random() * 256);        
//        const g = Math.floor(Math.random() * 256);                                                 
//        const b = Math.floor(Math.random() * 256);  
//        return `rgb(${r}, ${g}, ${b})`;                                               
                                         
// }

// function changeBackground() {
//    const randomColor = getRandomNumber();
//    document.body.style.backgroundColor = randomColor;
//    document.body.innerHTML = `<div>${randomColor}</div>`;
// }

// changeBackground()





// ................................................................... drugi HTML



// let list = document.getElementById("list");

// let niz = ["Milica", "Sava", "Djordje", "Zarko", "Sava"];

// function newList(){
//     for (let ime of niz){
//         list.innerHTML += `<li> ${ime}  </li>`
//     }
// }


// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
 
// function fillList() {
//   let list = document.getElementById("name-list");
//   for (let i = 0; i < names.length; i++) {
//     let item = document.createElement("li");
//     item.textContent = names[i];
//     list.appendChild(item);
//   }
// }






// ................................................................... treci HTML


// Create 3 inputs:    to je trezi HTML
// Color
// FontSize
// Items
// Create a button for generating unordered lists
// When the button is clicked generate a new ul element with the color, font size, and items from the inputs
// Items should be added separated by comma (,) in the input





// const generateBtn = document.getElementById("generateBtn");
// const colorInput = document.getElementById("colorInput");
// const fontSizeInput = document.getElementById("fontSizeInput");
// const itemsInput = document.getElementById("itemsInput");

// function onGenerate() {
//   const list = document.createElement("ul");
//   const itemsArray = itemsInput.value.split(","); // ['aa', 'bbb', 'ccc'];
//   const color = colorInput.value;
//   const fs = fontSizeInput.value;
//   let isFormValid = true;

//   if (!colorInput.value) {
//     console.warn("Color is required");
//     isFormValid = false;
//   }
//   if (!fontSizeInput.value || isNaN(fontSizeInput.value)) {
//     console.warn("font size is required and must be a number");
//     isFormValid = false;
//   }
//   if (!itemsInput.value) {
//     console.warn("items are required");
//     isFormValid = false;
//   }

//   if (isFormValid) {
//     itemsArray.forEach(function (element) {
//       const li = document.createElement("li");
//       li.style.color = color;
//       li.style.fontSize = `${fs}px`;
//       li.innerText = element;
//       list.appendChild(li);
//     });

//     document.body.appendChild(list);

//     colorInput.value = "";
//     fontSizeInput.value = "";
//     itemsInput.value = "";
//   }
// }

// function onGenerate2() {
//   let list = '<ul>';
//   const itemsArray = itemsInput.value.split(',');// ['aa', 'bbb', 'ccc'];

//   itemsArray.forEach(function(element){
//     list += `<li>${element}</li>`;
//   });

//   list += '</ul>';

//   console.log(list);

//   document.body.innerHTML += list;
// }

// generateBtn.addEventListener("click", onGenerate);





// ................................................................... cetvrti HTML
// Create a movie renting app
// There should be an array of movie names
// There should be an input and a search button
// When the person enters a name of a movie it should search the array
// If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// The input should not be case sensitive ( it should find the movie regardless of capital or small letters )



// let movies = ["Lord of the rings", "Harry Poter", "Joker", "Besa", "The Godfather"];
// let resultHeader = document.getElementById("result");
// let searchInput = document.getElementById("searchInput");
// let searchBtn = document.getElementById("searchBtn");

// function showResult(){
//     resultHeader.innerText="";
//     resultHeader.style.color = "black";
//     if(!searchInput.value){
//         resultHeader.innerText = "You must enter a film";
//     }
//     else{
//         let searchResult = searchMovie();
//         if(!searchResult){
//             resultHeader.innerText = "The movie was not found";
//             resultHeader.style.color = "red";
//         }
//         else{
//             resultHeader.innerText = "The movie can be rented";
//             resultHeader.style.color = "green";
//         }
//     }
//     //reset the input
//     searchInput.value="";
// }

// function searchMovie(){
//     for(let movie of movies){
//         //if(movie.toLowerCase().includes(searchInput.value.toLowerCase())){
//         if(movie.toLowerCase() === searchInput.value.toLowerCase()){    
//             return movie;
//         }
//     }
// }

// searchBtn.addEventListener("click", showResult);





// ............................................ moj kod sa FLAG 


let movies = ["Lord of the rings", "Harry Poter", "Joker", "Besa", "The Godfather"];
let header = document.getElementById("result");
let input = document.getElementById("searchInput");
let button = document.getElementById("searchBtn");



function rentingApp(){
     header.innerText="";

    if(!input.value){
        header.innerText = "You must enter a film";
        header.style.color = "black";
    } else {
        let result = findMovie();
        if(!result){
            header.innerText = "The movie was not found";
            header.style.color = "red";
        } else {
            header.innerText = "The movie can be rented";
            header.style.color = "green";
        }

    }
    input.value = "";
}

function findMovie(){
    let flag = false;
    for(movie of movies){
    if(input.value.toLowerCase() === movie.toLowerCase()){
        flag = true;
        break;
    }
}
return flag;
}
button.addEventListener("click", rentingApp);






// ............................................ moj kod


// let movies = ["Lord of the rings", "Harry Poter", "Joker", "Besa", "The Godfather"];
// let header = document.getElementById("result");
// let input = document.getElementById("searchInput");
// let button = document.getElementById("searchBtn");


// function rentingApp(){
//     header.innerText = " ";

//     if (!input.value){
//         header.innerText = "You must enter a film";
//         return;
//     } 

//     for(movie of movies){
//         if (input.value.toLowerCase() === movie.toLowerCase()){
//          header.innerText = "The movie can be rented";   
//          header.style.color = "green";
//          return;
//         } 
//         if (input.value.toLowerCase() !== movie.toLowerCase()){
//             header.innerText = "The movie can't be rented";   
//             header.style.color = "red"; 
//         }
//     }
//     input.value = "";
// }

// button.addEventListener("click", rentingApp);