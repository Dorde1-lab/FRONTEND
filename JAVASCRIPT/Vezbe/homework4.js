

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
//      console.log ("Invalid");
//    }

// }
// findNumber(numbers, "odd");


// ...........................................................................


// let niz = ["Hello", "there", "students", "of", "SEDC", "!"];
// let rez = " ";

// function string(niz){
//     for (let i = 0; i < niz.length; i++){
//      rez += niz [i] + " ";
//     }
//     console.log (rez);

// }

// string(niz)


// ...........................................................................


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let odd = [];
// let even = [];

// function number(niz) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             odd.push(numbers[i] + " "); 
//         } else {
//             even.push(numbers[i] + "\n"); 
//         }
//     }
//     console.log(odd.join(""));
//     console.log(even.join(""));  
// }

// number(numbers);


// ...........................................................................


let arr = [3, 5, 6, 8, 11];
let min = arr[0];
let max = arr[0];


function minAndMacnumber(arr){
for (let i = 1; i < arr.length; i++){
    if (arr[i] > max){
        max = arr[i];
    }
    if (arr[i] < min){
        min = arr[i];
    }
}
let sum = max + min;

return {"max": max, "min": min, "sum": sum };

}
console.log(minAndMacnumber(arr))