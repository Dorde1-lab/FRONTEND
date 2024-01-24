



// FUNKCIJE !!!

// function mojafunkcija (x, y) {
//     let mnozenje = x * y;
//     let sabiranje = x + y;
//     console.log (mnozenje, 'Ovo je mnozenje');
//     console.log (sabiranje, 'Ovo je sabiranje');

// }
// mojafunkcija (2, 2);


// function povrsinakruga (radius) {
//     let povrsina = Math.PI * Math.pow(radius, 2);
//     return povrsina;
// }

// let radius = prompt("Unesite vrednost radijusa kruga:");

// radius = parseInt(radius);

// // Provera da li je uneta vrednost validan broj
// if (isNaN(radius) || radius <= 0) {
//     console.log("Molimo unesite validan pozitivan broj za radijus kruga.");
// } else {
//     // Poziv funkcije i ispis rezultata
//     let finalnapovrsina = povrsinakruga(radius);
//     console.log(`Površina kruga sa radijusom ${radius} je: ${finalnapovrsina}`);
// }


// function povrsinakruga (radius) {
//    let povrsina = Math.PI * Math.pow (radius, 2);
//    return povrsina;
// }

// let radius = prompt ("unesi radius");
// radius = parseInt(radius);

// if ( isNaN(radius) || radius <= 0) {
//     console.log ("Nije unet broj");
//  } else {

//    let rezultat =  povrsinakruga (radius);
//    console.log (rezultat);
//  }



//  izracunavanje povrsine kruga kroz funkciju
// varijabla kraj predstavlja pozivanje funkcije i ispis;




    // //  primer 2 


// function fun1 (a, b) {
//     return a + b;
// }

// function fun2 (a, b) {
//     return a * b; 
// }

// function fun3 (a, b) {
//     return a - b; 

// }

// function fun4 (a, b) {
//     return a / b;

// }

// let rezultat1 = fun1 (2, 3);
// let rezultat2 = fun2 (2, 3);
// let rezultat3 = fun3 (2, 3);
// let rezultat4 = fun4 (2, 3);

// console.log (rezultat1);
// console.log (rezultat2);
// console.log (rezultat3);
// console.log (rezultat4);


// let stranica1 = 3;
// let stranica2 = 2;
// function povrsina (stranica1, stranica2) {
//     let rezultat = stranica1 * stranica2;
//     console.log (rezultat, 'rezultat');

//     if (stranica1 === stranica2)
//     {
//         console.log ("Ovo je kvadrat");
//     } else {
//         console.log ("Ovo je pavougaonik");
//     }
// }

// povrsina (stranica1, stranica2);

// function povrsina (stranica1, stranica2){
//      let rezultat = stranica1 * stranica2;
//      console.log (rezultat);
//      if (stranica1 === stranica2)
//      {
//         console.log ("Ovo je kvadrat");
//      }
//     else {
//         console.log ("pravougonik");
//     }
//      }
//      povrsina (2, 3)

// .
// .
// .
// .
// .
// .


// function x (a, b) {
//     let = p = a * b;

//     if (a === b){
//     p = a * b;
//     console.log ("Povrsina kvadrata", p);
//     } else if 
//     (a > b || b > a) {
//     p = a * b;
//     console.log ("Povrsina pavougaonika", p);
//     } else {
//         console.log ("Nepoznata povrsina");
//     }
//     return p;
// }
//     let rezultat = x (3, 2);



// function temperatura (celzijus) {
//    let farenhajt = celzijus * 1.8 + 32;
//    return (farenhajt)
// }
// let farenhajt = temperatura(50)

// console.log (farenhajt);

// celzijus = prompt ("upisi temperaturu u celzijusu");

// tempcelzijus = parseInt(celzijus);
     

// function calculateAge (birthyear, currentyear) {
//        let godina = currentyear - birthyear;
//        return godina; 
// }
// console.log (calculateAge (1995, 2024));



// <<<<<<<< MISMATCH >>>>>>>


//   function calculateLoan   ( amount, months,interest,name ) {
// 	//lots and lots of code
//     console.log(name, amount, months, interest);
//   }

// calculateLoan(1000, 12, 7, "John Doe");	 //correct
// calculateLoan(1000, 12, 7, "John Doe", "Something Extra");	//extras are ignored
// calculateLoan(1000, 12);   //missing are passed as undefined


// <<<<<<<< DEFAULT PARAMETER >>>>>>>>


// function printValues(name = "Ivan", age, city) {
//     console.log(name, age, city);
//   }
//   printValues("Marija", 24, "Belgrade");
//   printValues("Marija ", 24, " Belgrade", 1998);
//   printValues("Marija ", 24);
//   printValues("Marija ", " Belgrade");
//   printValues(1, 2, 3);
//   printValues();
  


// <<<<<<<<< ARROW FONCTION >>>>>>>>

// var multiply = (x, y) => {
//     var tekst = "Ovo je funkcija";
//     console.log(tekst)
// };