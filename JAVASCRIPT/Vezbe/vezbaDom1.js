//  const clickMeBtn = document.getElementById("clickMeBtn");
//  console.log(clickMeBtn);


//  function sayHello() {
//     console.log ("Hello World");
//  }

//  function printWin() {
//     console.log ("I'm the winner");
//  }

//  clickMeBtn.onclick = printWin;

//  const nameBtn = document.querySelector("#nameBtn");
//    function printFullName() {
//     console.log ("Jelena je kliknula");
//    }

//    console.log (nameBtn);

//    nameBtn.addEventListener("click", printFulName);
//    nameBtn.addEventListener("mouseenter", sayHello);
//    nameBtn.addEventListener("mouseleave", printWin);


// // ...........................................................................


// let dugme = document.getElementById("klik");

// function dugme1 (){
//     console.log ("Ciao Giorgio");
// }

// dugme.onclick = dugme1;


// // ...........................................................................
//                         VAZNOOO


// let ime = document.getElementById("ime");
// let prezime = document.getElementById("prezime");
// let sifra = document.getElementById("sifra");
// let email = document.getElementById("email");
// let dugme = document.getElementById("dugme");

// // function ispis (){

// let ime1 = ime.value;
// let prezime1 = prezime.value;
// let sifra1 = sifra.value;
// let email1 = email.value;

// let vezba = [ime1, prezime1, sifra1, email1];

// for (let i = 0; i < vezba.length; i++){
//     console.log (vezba[i]);
// }
// }


// dugme.onclick = ispis;


// // ...........................................................................




// // ...........................................................................
// ovo ispod je kod koji se moze staviti umesto FOR petlje da bi se ispisalo sve to
//  kao string u novom html dokumentu



// let vezba = [ime1, prezime1, sifra1, email1];

// // Kreirajte string od niza
// let stringNiza = vezba.join(', ');

// // Otvaranje novog prozora i postavljanje HTML sadržaja na string niza
// let noviProzor = window.open('');
// noviProzor.document.write(`<p>${stringNiza}</p>`);


// dugme.onclick = ispis;



// // // ...........................................................................


// noviProzor.document.body.innerHTML

// let inputs = document.getElementById("userInputs").children;
// let result = document.getElementById("result");
// let submitBtn = document.getElementById("submit");

// function getUserInfo(inputElements){
//     let result = "User: ";
//     for (let input of inputElements) {
//         result += input.value + " ";
//     }
//     result += "is registered!"
//     return result;
// }
// submitBtn.addEventListener("click", function(){
//     result.innerText = getUserInfo(inputs);})

