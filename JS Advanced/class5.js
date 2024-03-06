


// .....................................................funkcija u nizu

// const numberState = [
//   (num) => (num % 2 === 0 ? "Even" : "Odd"),
//   (num) => (num >= 0 ? "Positive" : "Negative"),
// ];

// numberState[0](17);
// numberState[1](20);




// ......................................... ...........Sabiranje 3 funkcije u jednu  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





// function onlinePayment() {
//   console.log("online");
// }

// function cashPayment() {
//   console.log("cash");
// }

// function paypalPayment() {
// 	console.log("paypal");
//   }

// const preferedWay = "online";

// function getPaymentMethod() {
//   if (preferedWay === "online") {
//     return onlinePayment;
//   } else if (preferedWay === "cash") {
//     return cashPayment;
//   } else {
//     return paypalPayment;
//   }
// }

// function pay() {
//   const method = getPaymentMethod();                        // ubacis je u varijablu u drugoj funkciji 
//   method();
// }

// const payBtn = document.getElementById("payBtn");

// payBtn.addEventListener("click", pay);



// .........................................!!!!!!!!1


// function getLongestString() {
//   console.log("arguments", arguments);
//   let longest = '';

//   for (let i = 0; i < arguments.length; i++) {
// 	if(arguments[i].length >= longest.length) {              // provera koliki je i koji je najduzi string
// 		longest = arguments[i];// "Djordje"
// 	}
//   }

//   console.log('longest string is ', longest);
// }
// getLongestString("Milica", "Goran", "Djordje", "Sava", "Tamaraaaaaa");       // da li se ovo sad racuna kao niz ?




// // WARN: arguments is not accessible in arrow functions

// const getLongestString2 = () => {
// 	console.log("arguments", arguments);
// 	let longest = '';

// 	for (let i = 0; i < arguments.length; i++) {
// 	  if(arguments[i].length >= longest.length) {
// 		  longest = arguments[i];// "Djordje"
// 	  }
// 	}
// 	console.log('longest string is ', longest);
//   }
// getLongestString2("Milica", "Goran", "Djordje");





// ..................................





// const pets = ["Bobby", "Cicko", "Rex", "Kitty", "Bambi"];

// const grades = [5, 4, 5, 3, 5, 2, 1];

// const prices = [35, 17, 15];


// // reduce

// prices.reduce((result, element) => {
//   return (result += element);
// }, 0);



// // // sort

// const copyOfPrices = [...prices];
// copyOfPrices.sort();
// console.log(prices);
// console.log(copyOfPrices);


// const copyOfPrices2 = [...prices];
// copyOfPrices.sort((a, b) => a - b);
// console.log(copyOfPrices2);







// ..................................




// const pets = ["Bobby", "Cicko", "Rex", "Kitty", "Bambi"];

// const grades = [5, 4, 5, 3, 5, 2, 1];

// const prices = [35, 17, 15];



// const uppercasedPets = pets.map((element) => element.toUpperCase());
// console.log("uppercasedPets", uppercasedPets);

// const multipliedBy3 = grades.map((element) => element * 3);
// console.log("multipliedBy3", multipliedBy3);

// const betterGrades = grades.map((element) => {
//   if (element === 5) {
//     return element;
//   }
//   return element + 1;
// });
// console.log('betterGrades', betterGrades);




// .................................................filter

// const pets = ["Bobby", "Cicko", "Rex", "Kitty", "Bambi"];

// const grades = [5, 4, 5, 3, 5, 2, 1];

// const prices = [35, 17, 15];



// const petsWithB = pets.filter((element) => element.startsWith("B"));

// console.log(petsWithB); // ["Bobby", "Bambi"]
// console.log(pets); // ["Bobby", "Cicko", "Rex", "Kitty", "Bambi"]

// const evenNumbers = grades.filter((element) => (element % 2 === 0));
// console.log('evenNumbers', evenNumbers);

// const olderThan18 = employees.filter((element)=> (element.age > 18));
// console.log('olderThan18', olderThan18);

// const females = employees.filter((element) => element.gender === 'female');
// console.log('females', females);



// forEach

// console.log("Pets");
// pets.forEach((element) => {
//   console.log(element);
// });

// console.log("Grades");
// let sum = 0;
// const gradesGraterThan3 = [];
// grades.forEach((element) => {
//   if (element > 3) {
//     gradesGraterThan3.push(element);
//   }
//   console.log(element);
//   sum += element;
// });

// console.log("Sum of grades is ", sum);
// console.log("Average is ", sum / grades.length);

// console.log("Employees");
// let sumOfSalaries = 0;
// employees.forEach((element) => {
//   console.log(`${element.fName} - ${element.lName}`);
//   sumOfSalaries += element.salary;
// });

// console.log("Average salary is", sumOfSalaries / employees.length);









// //  Filter 

// const pets =  array.filter((element) => element.startsWith("b"));




 const students = () => {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then(response => response.json())
    .then(students => {
            const ex1 = students.filter(grades => grades.averageGrade > 3);
            console.log(ex1);
            const ex2 = students.filter(nameAndGrade => nameAndGrade.gender === "Female" && nameAndGrade.averageGrade === 5)
            console.log(ex2);   
            const ex3 = students.filter(fullName => fullName.gender === "male" && fullName.city === "Skopje" && fullName.age > 18)
            console.log(ex3);
            
    })

    }

    students();



  


