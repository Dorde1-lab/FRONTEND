
// ...........................................................................



// let niz = [2, 4, 1, 5, 2, 10, 7, 9];
// let suma = 0;
// let index = 0;

// function sabiranje (niz){
    
// while (index < niz.length){
// suma = suma + niz[index];
// index++}
// console.log (suma);

// }

// sabiranje (niz)
// console.log (suma);





// let niz = [2, 4, 1, 5, 2, 10, 7, 9];
// let suma = 0;
// let index = 0;

// while (index < niz.length){
// suma = suma + niz[index];
// index++

// }

// console.log (suma);



// ...........................................................................


// let nizStringova = [ 'Danas', 'je', 'bio', 'lep', 'dan', '!' ];
// let index = 0;

// while (index < nizStringova.length){
//     console.log (nizStringova[index]);
//      index++
// }



// let nizStringova = [ 'Danas', 'je', 'bio', 'lep', 'dan', '!' ];
// let index = 0;


// function funkcija (nizStringova) {

//     while (index < nizStringova.length){
//         console.log (nizStringova[index]);
//          index++
// }
// }
// funkcija (nizStringova)



// ...........................................................................




// let niz = [2, 4, 1, 5, 2, 10, 7, 9];
// let suma = 0;
// let index = 0;

// function sabiranje (niz){
    
// while (index < niz.length){
// suma = suma + niz[index];
// index++}
// console.log (suma);

// }

// sabiranje (niz);
// console.log (suma);



// ...........................................................................

//  NAJVECI BROJ U NIZU;


// let niz = [2, 4, 40, 5, 2, 10, 7, 9];
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





// ...........................................................................



// let broj = 101;
// zbirKvadrata = 0;

// function zbir () {
//     while (broj < 151){
//        zbirKvadrata = zbirKvadrata + Math.pow(broj, 2);
//        broj++
//     }
//     return zbirKvadrata;
// }
// console.log(zbir ());





// let broj = 101;
// let zbirKvadrata = 0;

// while (broj < 151) {
//     zbirKvadrata = zbirKvadrata + Math.pow(broj, 2);
//     broj++;
// }

// console.log("Zbir kvadrata brojeva između 101 i 150 je:", zbirKvadrata);



// // ...........................................................................


// let pocetniBroj = 101;
// let suma = 0;

// // function SquareNums(pocetniBroj){
//     while(pocetniBroj < 151) {
//         suma += Math.pow(pocetniBroj, 2);
//         pocetniBroj++;
//     }
//     console.log(suma);
// }
// SquareNums(pocetniBroj);


// // ...........................................................................


// let number = 1425;
// let numberString = number.toString();

// for (let i = 0; i < numberString.length; i++) {
//     console.log(numberString[i]);
// }



// // // ...........................................................................



// let number = 1425;

// // Iteriramo kroz broj sve dok ne postane 0
// while (number > 0) {
//     // Izdvajamo posljednju cifru broja koristeći % 10
//     let digit = number % 10;

//     // Ispisujemo izdvojenu cifru
//     console.log(digit);

//     // Uklanjamo posljednju cifru iz broja (math.floor uklanja poslednju cifru, 
//     // sto znaci da u svakoj interaciji radimo sa manjim brojem)
//     number = Math.floor(number / 10);
// }

// // ...........................................................................
//    FOR .......   OF 


// Definiramo niz objekata
// let ljudi = [
//     { ime: 'Ana', godine: 30 },
//     { ime: 'Marko', godine: 25 },
//     { ime: 'Petra', godine: 35 },
//     { ime: 'Ivan', godine: 40 }
// ];

// // Prikazujemo osobe starije od 30 godina
// for (let osoba of ljudi) {
//     if (osoba.godine > 30) {
//         console.log(osoba.ime + ' ima više od 30 godina.');
//     }
// }