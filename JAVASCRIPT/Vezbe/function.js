// Vezba if else

// let money = prompt ("Koliko para imas?");
// let moneyNumber = parseInt(money);
// if (moneyNumber <=500) {
//     console.log("Kupi patike");
// }
// else {
//     console.log ("Skoci s mosta");
// }


// const wage = 500;
// let rezultat = 0;

// let role = prompt ("Napisi Ime").toLowerCase();

//  if (role==="senior") {
//     bonus=wage*3;
//  }
//  else  if (role==="medium") {
//     bonus=wage*2;
//  } else  if (role==="junior") {
//     bonus=wage*1.5;}
//     else {bonus=wage*1.1}
// console.log (`${role} zaradjuje ${bonus}`)


// U ovom primeru se vidi kako se mogu kombinovati strinogvi uz +

// const plata = 300; 
// let rezultat  = 0;

// let ime = prompt ("Ime zaposlenog").toLowerCase();

//     if (ime === "senior") {
//         rezultat = plata*3 ;
//     }
//     else {
//         rezultat = plata*1 ;
//     }
//     console.log ( ime, " zaradjuje ", rezultat ) 
//     console.log ( ime + " zaradjuje " + rezultat ) 



// const firstName = "Maja";
// const lastName = "Stefanovic";
// const fullName = firstName + " " + lastName;
// console.log("fullName:", fullName);

// var prom1 = "Dobar ";
// var prom2 = "dan";
// var rez = prom1.concat(prom2) + "!";
// console.log(rez);

//razlika izmedju obicne konkatenacije I interpolacije
// var rez1 = `tekst ${prom1} neki tekst ${prom2} još teksta`;
// var rez2 = "tekst " + prom1 + " neki tekst " + prom2 + " još teksta";
// console.log(rez1);
// console.log(rez2);


// var a = "2" + 4;

// console.log(a);
// var b = 2 + "4";
// console.log(typeof a );
// console.log(typeof b );

// var c = 'It\'s really nice to be a programmer';
// console.log(c);

// var a = 2 / "Djole";
// console.log(typeof a); 
// console.log(typeof a === "string");


// //Beware
// console.log(a == NaN);    // false
// console.log(a === NaN);    // false
// console.log(isNaN( a ));    // true
// //buuut
// var b = "foo";
// console.log(isNaN( b ));    // true -- ouch! Konvertuje vrednost u broj
// //ES6 to the rescue
// //finally
// console.log(Number.isNaN(b)) // proverava vrednost I da li je broj


// var provera = (10 === 10);
// console.log(typeof provera);
// console.log(typeof provera === "boolean");

// var djole = "Djole";

// // console.log(djole === "Djole");

// // LOGICAL OPERATORS
// var statusA = "open";
// var longitude = 41.44;
// var latitude = -32.12;

// // Logical AND
// var rez = (statusA === "open" && longitude > 0); // true and true = true
// console.log("rez: ", rez); //true because both conditions are true

// // Logical OR
// var rez = (statusA === "open" || latitude > 0);
// console.log("rez: ", rez); //true because the first condition is true

// // Logical NOT
// // Checks if the car value is NOT 'open'
// var rez2 = (statusA !== "open");
// console.log("rez", rez2); //false


// var pass = 50;	//pass mark
// var score = 90; //score
// var hasPassed = (score >= pass); //what is the value in hasPassed? 
// console.log(hasPassed);
// // var hasPassed = (score <= pass);
// // console.log(hasPassed);
// // An operand can be expression
// ( (score1 + score2) > (hightScore1 + heightScore2) )
// operand   //operator  //operand
// // An operand can be expression
// ( (5 < 2) && (2 >= 3) ) // result: false
// expression1   //expression2
//      operator

// console.log((5 < 2) && (2 >= 3)); //oba su false

// const a = true, b = false;
// const c = 4;
// // logical AND
// console.log(a && a); // true
// console.log(a && b);  // false
// console.log((c > 2) && (c < 2)); // false

// const a = true, b = false, c = 4;
// // logical OR
// console.log(a || b || false || false); // true
// console.log(b || b); // false
// console.log((c>2) || (c<2)); // true

// const a = true, b = false;
// // logical NOT
// console.log(!a); // false
// console.log(!b); // true


// var d = 42;
// var e = "foo";
// d < e;	 // false
// d > e;	 // false
// d == e;	 // false

// console.log(5 == "5") //tačno - string "5" se konvertuje u broj 5
// console.log(5 === "5") //netačno - iako bi se vrednosti poklopile, tipovi se ne slažu
// console.log(5 != "5") //netačno - string "5" se konvertuje u broj 5 i onda nisu nejednaki
// console.log(5 !== "5") //tačno - iako po vrednosti nisu nejednaki, različiti su im tipovi










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

//  izracunavanje povrsine kruga kroz funkciju
// varijabla kraj predstavlja pozivanje funkcije i ispis;



// function krug (raduis) {
//    let povrsina = Math.PI * Math.pow (radius, 2);
//    return povrsina; 
// }
// let radius = prompt("Upisi radius");
 
// radius = parseInt(radius);

// if (isNaN(radius) || radius <= 0) {
//     console.log ("unesi pravilan unos")
// } else {
//     let kraj = krug(radius);
//        console.log (kraj);
// }



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

// pogledatiiiiiiiiiii

// function y(a, b) {
//     let k;
//     let p;
//     if (a === b) {
//       k = a * b;
//     } else if (a > b || b > a) {
//       p = a * b;
     
//     }
//     return p, k;
//   }
   
//   let povrsina = y(2, 3);
//   console.log(povrsina);

// let numberInput = parseInt(input);


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

