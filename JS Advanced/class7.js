//  asynchronous functions



// function isUserDataValid(username, password){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             if (username === "aida" && password === "1234") {
//                 resolve ( "User data valid");                
//             } else {
//                 reject ("User data not valid");
//             }
//         }, 2000);
//     })
// }

// isUserDataValid("aida", "1234")
// .then((response) => {
//     console.log("response =>", response);
// })
// .catch((error) => {
//     console.error(error);
// });

// isUserDataValid("aida", "0000")
// .then((response) => {
//     console.log("response =>", response);
// })
// .catch((error) => {
//     console((error) =>{
//         console.error(error);
//     })
// });





//  promise chaining



// const groceriesCount = 4;
// const canClean = true;

// function getGroceries() {
//   return new Promise((resolve, reject) => {
//     console.log("Getting groceries...");
//     setTimeout(() => {
//       if (groceriesCount > 0) {
//         resolve(["meat", "paprika", "carrot", "peper"]);
//       } else {
//         reject("No enough groceries!");
//       }
//     }, 2000);
//   });
// }

// function cleanGroceries() {
//   return new Promise((resolve, reject) => {
//     console.log("Cleaning groceries...");

//     setTimeout(() => {
//       if (canClean) {
//         resolve("Cleaned!!!");
//       } else {
//         reject("Groceries cannot be cleaned!");
//       }
//     }, 1000);
//   });
// }

// function makeDinner() {
//   return new Promise((resolve, reject) => {
//     getGroceries()
//       .then((response) => {
//         console.log("response 1", response);
//         cleanGroceries()
//           .then((res) => {
//             console.log("response 2", res);
//             resolve('Dinner is ready! Enjoy it!!!');         // zasto ovde ima resole a za prethodnu funkciju nema. zasto ovde resole i reject u pozivu druge funkcije
//           })
//           .catch((err) => {
//             console.error("error 2", err);
//             reject(err);
//           });
//       })
//       .catch((error) => {
//         console.error("error 1", error);
//         reject(error);
//       });
//   });
// }

// makeDinner().then((res) => {
//   console.log(res);
// }).catch((error) => {
//   console.error(error);
// });


const groceriesCount = 4;
const canClean = true;


function getGroceries() {
    return new Promise ((resolve, reject) => {
        if(groceriesCount > 0){
            resolve(["paprika", "kupus", "pasulj"]);
        } else {
            reject("There is no groceries");
        }
    })
}

function cleanGroceries() {
    return new Promise((resolve, reject) => {
        if(canClean) {
            resolve("cleaned");
        } else {
            reject("not cleaned");
        }
    })
}

function makeDinner() {
    return new Promise((resolve, reject) => {
        getGroceries()
        .then((response1) => {
        console.log(response1);
            cleanGroceries()
            .then((response2) => {
            console.log(response2);
                resolve("Rucak je spreman");    // zasto ovaj resolve ovde u pozivu druge funkcije?
            })
            .catch((error) => {
            console.error(error);
            reject(error);                      // zasto ovaj resorejectlve ovde u pozivu druge funkcije?
            });
        })
        .catch((error) => {
            console.log(error);
            reject(error);
        })
    })
}

makeDinner()
.then((response) => {
    console.log (response);
})
.catch((error) => {
    console.log(error);
})
// zasto ovaj resolve ovde u pozivu druge funkcije?
//.................................... example 1 - instagram


// const memoryFull = false;
 
// function takePhoto() {
//   return new Promise((resolve, reject) => {
//     console.log('Taking photo....');
//     setTimeout(() => {
//       if (memoryFull) {
//         reject("Phone memorty is full!");
//       } else {
//         resolve("Photo saved.");
//       }
//     }, 3000);
//   });
// }
 
// function editPhoto() {
//   return new Promise((resolve, reject) => {
//     console.log('Editing photo....');
 
//     const answer = confirm("Do you want to edit photo? ");
 
//     if (answer) {
//       resolve("Photo is edited.");
//     } else {
//       reject("Photo not edited.");
//     }
//   });
// }
 
// function addPhotoToIG() {
//   takePhoto().then((response) => {
//       editPhoto().finally(() => {
//         console.log('%cPhoto successfully added to IG!', 'color:pink; font-size:16px;');
//       });
//     })
//     .catch((error) => {
//       console.error('Photo not added to instagram', error);
//     });
// }
 
// addPhotoToIG();




// example 2 - food


// const isSelected = false;
 
// function selectItemsFromMenu() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSelected) {
//         resolve("Items selected!");
//       } else {
//         reject("Items not selected");
//       }
//     }, 2000);
//   });
// }
 
// function confirmOrder () {
//   return new Promise((resolve, reject) => {
//     const answer = confirm("Do you want to confirm order ?");
 
//     if(answer) {
//       resolve('Order confirmed!');
//     } else {
//       reject('Order not confirmed!');
//     }
//   })
// }
 
// function orderFood() {
//     selectItemsFromMenu().then((response) => {
//         confirmOrder().then((res) => {
//             console.log("Order placed");
//         })
//         .catch((error) => {
//             console.error("Order refused");
//         });
//     })  .catch((error) => {
//         console.error("Items not selected");
//     })
// }
 
// orderFood();

// //  jednostavniji nacin da se uradi ova treca funkcija :

// async function orderFood2() {
//     try {
//         await selectItemsFromMenu();
//         await confirmOrder ();
        
//         console.log ("%cOrder is ready!", "color:green; font-size:16px");
//     } 
//     catch(error) {
//         console.error("error", error);
//     }
// }
// orderFood2()



