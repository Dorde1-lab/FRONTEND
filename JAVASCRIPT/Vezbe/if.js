// var score = 50;
// // if(score > 100) {
// //     alert('You won!'); //Code Block
// // //     }
    
//     if(score >= 100) {
//         //code goes here
//         alert('You won!' + ' Your score is: ' + score);
//       }  else {
//         //otherwise, different code
//         alert(`You lost! Your score was: ${score}`);
//       }

//       //uslov ? izraz_tačno : izraz_netačno;
//       var x = 5; 
//       var a = 10; 
//       var b = 20; 
//       var z = ( x > 10 ? a : b); //ako je x veće od 10 vrednost će biti a, u suprotnom b

// Multiple Conditions

// let plata = 100;
// let dohodak = 0;

// let iznos = prompt ("Unesi ime pozicije:");
// let unos = iznos.toLowerCase();

// if (unos === "senior"){
//     dohodak = plata *3;
// }
// else if (unos === "junior"){
//     dohodak = plata * 2;
// }
// console.log ("Vas dohodak je" + " " + dohodak);



// We ask for an input from the user
// let input = prompt("Enter a number:");
// // We transform the input string in to a number
// let numberInput = parseInt(input);
// // We can now use the input as a number
// console.log(numberInput + 10);

// const aa = "AAAAaaa".toLowerCase();  //velika slova postaju mala
// const bb = "bbbbbb".toUpperCase();  //mala slova postaju velika
// console.log(aa);
// console.log(bb);

// let pare = prompt ("Koliko imas para?");
// let kolikoimaspara = parseInt(pare);   

// if (kolikoimaspara <=500) {
//     console.log ("Kupi nesto");
// } 
// else {
//     console.log ("Nema para");
// }






//   // Izračunavanje horoskopskog znaka
//   var zodiacIndex = (userYear - 4) % 12;
//   if (zodiacIndex < 0) {
//     zodiacIndex += 12; // Ako je rezultat negativan, dodajemo 12 da dobijemo ispravan indeks
//   }
//   var zodiacSign = zodiacSigns[zodiacIndex];

//   // Ispis rezultata
//   alert("Vaš kineski horoskopski znak je: " + zodiacSign);
// } else {
//   alert("Molimo unesite ispravnu godinu rođenja.");
// }



// var unos = prompt ("Unesi godinu rodjenja:");

// var godina = parseInt(unos);

// if (!isNaN(godina)) {

//     var znak = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

//     var znakindex = (unos - 4) % 12;
//     console.log (znak[znakindex]);}
//     else {
//         console.log ("Nista");
//     }


// TERNARNI IZRAZ UMESTO IF ELSE 

// var broj = 5;
// var rezultat = (broj > 0) ? "Pozitivan" : "Negativan";
// console.log(rezultat);
