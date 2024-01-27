// ...........................................................................


// let niz = [ "name", "mood", "activity" ];
// let index = 0;

// function tellStory(niz){
//      niz[0] = "ime";
//      niz[1] = "raspolozenje";
//      niz[2] = "aktivnost";

//     return niz;

// }

// console.log (tellStory(niz));


// ...........................................................................


// let niz = [ "name", "mood", "activity" ];
// let index = 0;
//      niz[0] = "ime";
//      niz[1] = "raspolozenje";
//      niz[2] = "aktivnost";

//     function tellStory (niz){
//         while (index < niz.length){
//             let recenica = (niz[index]);
//             index++
//         } return niz;
//     }


// console.log (tellStory (niz));



// ...........................................................................



// let niz = [1, 2, 3, 4, 5];
// let index = 0;
// let suma = 0;

// function zbir (niz) {
//      while (index < niz.length){
//         suma += niz[index];
//         index ++}
//     return suma;    
//     }

// console.log (zbir (niz));



// ...........................................................................!!!!!!!!!!



// let niz = [1, 2, 3, 4, 5];
// let index = 0;

// function validateNumber (niz){


//     while ( index < niz.length){
//         if ( isNaN(niz[index]) ) {

//             console.log ("Neki od brojeva nije validan.");
//         } else { switch(index){
//             case 0:
//                 console.log (niz[0]);
//                 break;

//         }         
//         }

//         }

     
//     }

//     validateNumber (niz)




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
