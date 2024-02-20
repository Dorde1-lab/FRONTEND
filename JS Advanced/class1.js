
// //  - niz brojeva deljivih sa 3 od 1 do 1000.

// let niz = [];

// for (let i = 1; i <= 1000; i++){
//     if (i % 3 === 0){
//         niz.push(i);
//     }
// }
// console.log(niz);



// //  - niz parnih brojeva deljivih sa 4 od 1 do 1000.


// let niz = [];
// let even;

// for (let i = 0; i <= 1000; i++){
//     if (i % 2 === 0 && i % 4 === 0){
//         niz.push(i);
//     }
//     }
// console.log(niz);



// niz brojeva od 1 do 1000 koji se zavrsavaju cifrom 1.


// let niz = [];


// for (let i = 0; i <= 1000; i++){
//     if (i % 10 === 1) {
//         niz.push(i);
//     }
// }
// console.log(niz);



// let niz = [];

// for (let i = 1; i <= 1000; i++){
//     if( i.toString().endsWith("1")){
//         niz.push(i);
//     }
// }
// console.log(niz);








function Student (firstName, lastName, age, email){
    this.firstName = firstName || "...";
    this.lastName = lastName || "...";
    this.age = Number(age) || 0;
    this.email = email || "no email";
}

let database = [];

const btnAdd = document.getElementById("btn");
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");


btnAdd.onclick = function(){

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;
    const email = emailInput.value;
    
    let isFormValide = true;

     if (!firstName){
        console.warn("First name not entered");
        isFormValide = false;
     }

     if (!lastName){
        console.warn("Last name not entered");
        isFormValide = false;

     }  

     if (!age){
        console.warn("Age not entered");
        isFormValide = false;

     } 

      if (!email){
        console.warn("Email  not entered");
        isFormValide = false;

     }

     if(isFormValide){
        const newStudent = new Student (firstName, lastName, age, email);
        database.push(newStudent);
        console.log('database', database);

 firstNameInput.value = "";
 lastNameInput.value = "";
 ageInput.value = "";
 emailInput.value = "";
     }

}

