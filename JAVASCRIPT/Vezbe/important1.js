

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




