

// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let input3 = document.getElementById("input3");
// let button = document.getElementById("btn");
// let div = document.getElementById("div");


// function myFunction(){
// let input1Value = input1.value;
// let input2Value = input2.value;
// let input3Value = input3.value;

// let header = `<h1>${input1Value} ${input2Value} ${input3Value}</h1>`;

// // let header = document.createElement("h1");                                        ....... ovo je drugi nacin sa document.createElement()
// // header.textContent = `${input1Value} ${input2Value} ${input3Value}`;              .......  ovo je drugi nacin sa document.createElement()


// div.appendChild(header);
// }






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







// function getRandomNumber() {
//   // 0 - 255
//   return Math.floor(Math.random() * 256);                                                 
// }

// function getColor() {
//   // rgb(123, 22, 33)
//   return `rgb(${getRandomNumber()}, ${getRandomNumber()},  ${getRandomNumber()})`;
// }











// Create 3 inputs:
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
//   console.log(itemsArray);

//   itemsArray.forEach(function(element){
//     list += `<li>${element}</li>`;
//   });

//   list += '</ul>';

//   console.log(list);

//   document.body.innerHTML += list;
// }

// generateBtn.addEventListener("click", onGenerate);