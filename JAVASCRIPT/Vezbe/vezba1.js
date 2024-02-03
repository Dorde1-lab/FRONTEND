
// // Provera koji je tip varijable ... IMPORTANT !!!

// var testvar= 5;
// alert (testvar); //shows 5
// alert (typeof testvar); //shows number 

// // Number 

// var first = 1;
// console.log( first, "first");

// // this is a string

// var age = "24";
// console.log(age, "age");

// // this is a number 

// var age = 24;
// console.log(age, "age");

// // This is a boolean

// var knowsHtml = true;
// var knowJS = false;
// console.log(knowsHtml, "knowsHtml");
// console.log(knowJS, "knowJS");

// // arithmetic operators

// var a = 5;
// var b = 2;
// console.log (a + b);
// console.log (a - b);
// console.log (a * b);
// console.log (a / b);
// console.log (a % b);
// console.log (a++);
// console.log (a);
// // u ovom se a uvecava za 1 u odnosu na prethodni rezultat
// console.log (a++);

// console.log (++a);

// c = 5;

// console.log (c++);

// console.log ( c + 9 );
// console.log (++c);



// //comparison operators
// var x = 5;
// var y = 2;
// console.log(x == y); //false
// console.log(x != y); //true
// console.log(x > y); //true
// console.log(x < y); //false
// console.log(x >= y); //true
// console.log(x <= y); //false
 
// //asignment operators
// var x = 5;
// x += 2; // 7
// console.log(x);
// x -= 2; // 5
// console.log(x);
// x *= 2; // 10
// console.log(x);
// x /= 2; // 5
// console.log(x);
// x %= 2; // 1
// console.log(x);


// //  povrsina

//   var a = 2;
//   var b = 2;
// console.log (a*b);

// // obim kruga

// var a = 2;
// var p = 1;
//  console.log (p*a);

//  /*jdsadksjdsaslkdjsadjlk8*/

// console.log (a++);
// console.log (a++);



// ...........................................................................
//  Ispisivanje "price" kroz switch i while...



            // function tellStory(name, mood, activity) {
            //     var result = "";
            //     var i = 0;
            //     while (i < tellStory.length) {
            //         switch (i) {
            //             case 0:
            //                 result += name + " je bila ";
            //                 break;
            //             case 1:
            //                 result += mood + " danas. Odlučila je da ";
            //                 break;
            //             case 2:
            //                 result += activity + ".";
            //                 break;
            //         }
            //         i++;
            //     }
            //     return result;
            // }
            
            // // Testiranje funkcije
            // var name = "Ana";
            // var mood = "srećna";
            // var activity = "prošeta parkom";
            // var story = tellStory(name, mood, activity);
            // console.log(story);
            


// // ..........................................................................



//    OVO PROVERITI SA NEKIM  ???




// function validateNumber(number) {
//     // Provera da li je broj validan (primer validacije)
//     return !isNaN(number); // Vraća true ako je broj validan, inače false
// }

// function tellStory(name, mood, activity) {
//     var result = "";
//     var i = 0;
//     while (i < 3) {
//         switch (i) {
//             case 0:
//                 result += validateNumber(name) ? name + " je bio/la " : "Nevalidan broj za ime ";
//                 break;
//             case 1:
//                 result += validateNumber(mood) ? mood + " danas. Odlučio/la je da " : "Nevalidan broj za raspoloženje ";
//                 break;
//             case 2:
//                 result += validateNumber(activity) ? activity + "." : "Nevalidan broj za aktivnost ";
//                 break;
//         }
//         i++;
//     }
//     return result;
// }

// // Testiranje funkcije
// var name = "Ana";
// var mood = "srećan";
// var activity = "prošeta parkom";
// var story = tellStory(name, mood, activity);
// console.log(story);



// ...........................................................................



// let niz = [2, 5, 6, 8, 7, 9]
 
// function paranBroj() {
//     for(let i = 0; i < niz.length; i++) {
//         if(niz[i] % 2 === 0) {
//             console.log(niz[i])
//          }
//     }
// }
 
// paranBroj()


// ...........................................................................




// let niz = [2, 5, 6, 8, 7, 9];
// index = 0;
// rez = 0;

// function prosek (niz){
//   for(index = 0; index < niz.length; index++){
//     rez += niz[index] / 6;
//   }
//   console.log (rez);

// }

// prosek (niz)


// ...........................................................................



//    let niz = [2, 5, 6, 8, 7, 9];
// let zbir = 0;

// function sum(niz) {
//     for (let i = 0; i < niz.length; i++) {
//         if (niz[i] % 2 !== 0) {
//             zbir += niz[i]; // Dodajemo trenutni neparni broj na zbir
//         }
//     }
//     console.log(zbir);
// }
 
// sum(niz);


// ...........................................................................



//  NAJVECI BROJ U NIZU; !!!!!!!!!!!!!!!!!!!!!!!!!!!!


// let niz = [50, 4, 40, 5, 2, 10, 7, 9];
// let najveciBroj = niz[0];
// let index = 1;

// function najveci (niz){
//     while (index < niz.length){
//         if (niz[index] > najveciBroj) {
//             najveciBroj = niz[index];
//         }
//     index++
//     }
//     return najveciBroj;
// }
// console.log(najveci (niz));





// How many times is a number contained in an array
// Write a function named findNumber that:
// Takes 2 arguments: number, array
// Calculates how many times the number is contained in an array with numbers
// Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
// Call the function three times with different arrays.



// ...........................................................................




// let nizStringova = [ 'Danas', 'je', 'bio', 'lep', 'dan', '!' ];
// let brojacStringa = 0;
// function StringoviFunkcija(nizStringova) {

//   while (brojacStringa < nizStringova.length) {
//     console.log(nizStringova[brojacStringa]);
//     brojacStringa++;
//   }
// }

// StringoviFunkcija(nizStringova);


// ...........................................................................



// let niz = [2, 4, 7, 5, 10, 9];
// let zbir = 0;

// function paranBroj (niz){
//   for (i = 0; i < niz.length ; i++){
//      if (niz[i] % 2 === 0){
//        zbir += niz[i];
//      }
//   }
//   console.log (zbir);
// }
// paranBroj (niz)



// ...........................................................................
//  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  da klijent unese brojeve u niz i duzinu niza sam da napravi !!!
// ....................BITNOOOOOOOOO...........................



  let duzina = prompt ("unesi duzinu niza:");
  let niz = new Array(duzina);

  for (let i = 0; i < duzina; i++){
    niz[i] = prompt ("Unesi broj za ispunjavanje niza:");
  }

  for (let i = 0; i < duzina; i++){
    console.log (niz[i]);
  }

  for (let i = 0; i <= niz.length; i++){
    if(niz[i] % 2 === 0){
      console.log (niz[i]);
    }
  }


  // ...........................................................................
//  pravljenje proseka od brojeva niza.


  // let niz = [2, 4, 7, 5, 10, 9];
  // let suma = 0;

  // function prosek (niz){
  //    for (i = 0; i < niz.length; i++){
  //       suma += niz[i];
  //    }
  // let rez = suma / niz.length;
  // console.log(rez);
  // }
  // prosek (niz)


    // ...........................................................................


    

// function findNumber(array, type) {
//     // Create an empty array to store the result
//     let result = [];

//     // Check if the type argument is 'even' or 'odd'
//     if (type === 'even') {
//         // Find even numbers and push them into the result array
//         for (let number of array) {
//             if (number % 2 === 0) {
//                 result.push(number);
//             }
//         }
//     } else if (type === 'odd') {
//         // Find odd numbers and push them into the result array
//         for (let number of array) {
//             if (number % 2 !== 0) {
//                 result.push(number);
//             }
//         }
//     } else {
//         // If the type argument is neither 'even' nor 'odd', return an error message
//         return 'Invalid type. Please provide either "even" or "odd".';
//     }

//     // Return the result array
//     return result;
// }

// // Example usage:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(findNumber(numbers, 'even')); // Find and print even numbers
// console.log(findNumber(numbers, 'odd')); // Find and



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function findNumber(array, type){
//    if ( type === "even"){
//       for (i = 0; i < numbers.length; i++){
//         if ( numbers[i] % 2 === 0){
//            console.log (numbers[i]);
//         }
//       }
//    } else if ( type === "odd"){
//     for (i = 0; i < numbers.length; i++){
//         if (numbers[i] % 2 !== 0){
//             console.log (numbers[i]);
//         }
//     }
//    } else {
//      console.log ("Invalid input");
//    }

// }
// findNumber(numbers, "even");



    // ...........................................................................



    function findNumber(array, type) {
      let rezultat = [];
      
         if ( type === "even"){
           for ( let number of array){
              if (number % 2 === 0){
                  rezultat.push(number);
              }
           }
         } else if ( type === "odd"){
           for (let number of array){
              if (number % 2 !== 0){
                  rezultat.push(number);
              }
           }
         } else {
           console.log ("Los unos");
         }
         console.log (rezultat);
      }
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      
      findNumber(numbers, "odd");


 // ...........................................................................



 Want to know how you wiegh in chikens? No problem!

Write a function named weightInChickens that:
Takes an input weigh in kilograms
Calculates weight in chickens ( 1 chicken = 0.5kg )
The input should be entered through prompt
The result should be shown in the HTML of the page
Note:The html page needs to have title and result paragraph


 // ...........................................................................



Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :)