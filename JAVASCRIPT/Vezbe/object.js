// let podaci = {
//     ime: "Djordje",
//     godiste: 1995,
//     obrazovanje: "fakultet",
//     grad: "Beograd",

//     osnovniPodaci: function(){
//         console.log ("ime:" + this.ime)
//         console.log ("godiste:" + this.godiste)
//         console.log ("obrazovanje:" + this.obrazovanje)
//         console.log ("grad:" + this.grad)

//     }
// };
// podaci.osnovniPodaci();






// let podaci = {
//     ime: "Djordje",
//     godiste: 1995,
//     obrazovanje: "fakultet",
//     grad: "Beograd",
// }
// delete podaci.grad;             ......................... delete
// console.log(podaci);

// podaci.novo = 20;
// console.log(podaci);




let auto = {
    model: "Peugeot",
    color: "black",
    year: "2015",
    fuel: "5.5",

    consumption: function(distance){
        return distance / 100 * this.fuel
    }


}
console.log(auto.consumption(500));






// let trainer = { 
// 	name :  "Stefan",
// 	lastName: "Stefanovski",
// 	academy: "SEDC",
// 	lecture: "Objects"
// }


// delete trainer.lecture;
// trainer.age = 25;
// trainer.getFullName = function(){
//   return `${trainer.name} ${trainer.lastName}`;
// }
// console.log(trainer.getFullName());



// function pera (mama, tata, godine){
//     this.mojaMama = mama;
//     this.mojTata = tata;
//     this.mojeGodine = godine;
// }

// let mara = new pera ("vesna", "goran", "23");

// mara.zanimanje = "kkkkk";
// console.log (mara.zanimanje);

