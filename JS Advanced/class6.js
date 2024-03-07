// const myButton = document.getElementById("myButton");
// const ajaxButton = document.getElementById("ajaxButton");


// const displayTeacherName = () => {
//   console.log("Teacher: Aida P.");
// };

// const displayAcademyName = () => {
//   console.log("Quinshift academy 2024");
// };

// setTimeout(displayTeacherName, 3000); // on hold
// displayAcademyName(); // ne blokira ovu funkciju




// let counter = 1;
// let intervalId;

// const runTimer = () => {
//   console.log(counter);
//   counter++;

//   if(counter === 6){
//     clearInterval(intervalId);
//   }
// };

// intervalId = setInterval(runTimer, 2000);//346534tk=46464





let counter = 1;
let intervalId;

const brojac = () => {
    console.log(counter);
    counter++
    clearInterval(intervalId);
}

intervalId = setInterval(brojac, 2000);