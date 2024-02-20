
let students = [];

document.getElementById("studentForm").addEventListener("submit", function(){
   let firstname = document.getElementById("firstname").value;
   let lastname = document.getElementById("lastname").value;
   let age = parseInt(document.getElementById("age").value);

   let student = new student (firstname, lastname, age);

   students.push = student;



})
console.log(students);