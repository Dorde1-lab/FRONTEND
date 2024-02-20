
//     Domaci 1



// function speak(){
//     let name = document.getElementById("name").value;
//     let kind = document.getElementById("kind").value;
//     let message = document.getElementById("message").value;

//     let Animal = {
//         name: name,
//         kind: kind,
//         speak: function(){
//             console.log(`${this.name} says: '${message}'`)
//         } 
//     }
//     Animal.speak();

// }


// sa prompt- om (properti nema vrednost jer je unos iz input-a)


// let Animal = {
//      name: "",                   
//      kind: "",
//      message: "",
//     speak: function(){
//    console.log (`${this.name} says: '${this.message}'`)
//     }
// }

// Animal.name = prompt("Unesi ime zivotinje:");
// Animal.kind = prompt("Unesi vrstu zivotinje:");
// Animal.message = prompt("Kojim zvukom se oglasava ?");

// Animal.speak();



//     Domaci 2


// let book = {

//     title: prompt("Unesite naslov knjige:"),
//     author: prompt("Unesite ime autora:"),
//     readingStatus: confirm("Da li ste već pročitali knjigu?"), 
//     info: function() {

//         if (this.readingStatus) {
//             return `Već ste pročitali '${this.title}' od strane ${this.author}.`;
//         } else {
//             return `Još uvek treba da pročitate '${this.title}' od strane ${this.author}.`;
//         }
//     }
// };

// console.log(book.info());









//             VEZBA

// Create a student registry form. The form should have: First Name / Last Name / Age
// The form should have a save button which will create a student object and add it to an array (students). Log the array after every save to see the results in the console.



// let students = [];

// function Student (firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// document.getElementById("studentForm").addEventListener("submit", function(myFunction){
//     myFunction.preventDefault();

//     let firstName = document.getElementById("firstName").value;
//    let lastName = document.getElementById("lastName").value;
//    let age = parseInt(document.getElementById("age").value);

//    let student = new Student (firstName, lastName, age);

//    students.push(student);

//    console.log(students);
//    document.getElementById("studentForm").reset();

// })







