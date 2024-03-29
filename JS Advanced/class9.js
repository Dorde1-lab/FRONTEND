

// const course = {
//     title: "Advanced JavaScript",
//     maxStudents: 10,
//     numOfClasses: 15,
//     starting: '20.02.2024.',
//     ending: '28.03.2024.',
//     price: {
//       value: 1000,
//       currency: "EUR",
//     },
//     teachers: ["Aida", "Miroslav", "Almir"],
//   };


//   const {title, price:{value = "unknown", currency = "unknown"}} = course;

//   console.log(title, value, currency,);





// ................................... vezba 1 


// function Book(title, author, year) {
//     this.title =  title || '---';
//     this.author = author || '---';
//     this.year = Number(year);
//     this.ratings = [];
//     this.addRating = (rating) => {
//       const smallRating = ({ user = "unknown", grade, comment = "" } = rating);    //.....    mora da se stave zagrade() da bi se posle pusalo i da bi to bilo kao celina, gradi novi objekat

//       this.ratings.push(smallRating);
//     };
   
//     this.getAverageRating = () => {
//       let sum = 0;
//       this.ratings.forEach((rating) => {
//         sum += rating.grade;
//       });
//       let average = sum / this.ratings.length;
//       return average;
//     };
   
//     this.displayDetails = () => {
//       console.log(`${this.title} - ${this.author} Year: ${this.year}`);
//       if (this.ratings.length === 0) {
//         console.log(
//           `Book doesn't have ratings yet. Be the first one to add rating!`
//         );
//       } else {
//         console.log(`Average rating: ${this.getAverageRating()}`);
//       }
//     };
   
//     this.displayRatings = () => {
//       this.ratings.forEach((rating) => {
//         console.log(rating)
//       })
//     }
//   }


// const rating1 = {
//     grade: 5,
//     user: "john",
//     comment:
//       "I love it! It was exactly what I was looking for! Now my Harry Potter collection is more complete then ever before",
//     title: "Awesome!",
//     id: 12,
//     userId: 1,
//     userEmail: "john@john.com",
//     isVerified: true,
//   };
  
//   const rating2 = {
//     grade: 4,
//     user: "ana",
//     comment:
//       "This (the first in the series), or any other Harry Potter book for that matter, needs no introduction. Once you've followed Harry to Hogworts and back during his first term, you'll be coming back for more time and time again!",
//     title: "A great escape!",
//     id: 10,
//     userId: 2,
//     userEmail: "ana@ana.com",
//     isVerified: true,
//   };
  
//   const rating3 = {
//     grade: 3,
//     user: "tom",
//     comment: "Pages missing from my copy of the book.",
//     title: "Missing pages",
//     id: 11,
//     userId: 3,
//     userEmail: "tom@tom.com",
//     isVerified: true,
//   };
  
//   const book = new Book(
//     "Harry Potter and the Philosopher's Stone",
//     "J. K. Rowling",
//     "1997"
//   );
  
//   book.addRating(rating1);
//   book.addRating(rating2);
//   book.addRating(rating3);
  
//   book.displayDetails();
//   book.displayRatings();
  
//   console.log("\n");
//   const book2 = new Book("Atomic Habits", "James Clear", "2018");
//   book2.displayDetails();






//....................  vezba 2 - html 2



// button = document.getElementById("factButton");
// areaForAdding = document.getElementById("fact-text");
// img = document.getElementById("fact-img");

// button.addEventListener("click", fetcingImage);


// const textApi = () => {
//     return new Promise((resolve, reject) => {

//     fetch("https://meowfacts.herokuapp.com/")
//     .then(function(response) {
//        return response.json();
//     })
//     .then(function(data){
//         const dataText = data.data[0];
//         areaForAdding.innerHTML = dataText;
//         resolve(true);
//     }).catch((error) =>{
//         reject(error);
//     })
// })
// }

// const picApi = () => {
//     return new Promise((resolve, reject) =>{

//     fetch("https://random.dog/woof.json")
//     .then(function(response) {
//        return response.json();
//     })
//     .then(function(data){
//         const url = data.url;
//        img.src = url;
//        resolve(true);
//     }).catch((error) =>{
//         reject(error);
//     })
// })
// }

// function fetcingImage() {
//     return new Promise((resolve, reject) => {
//         textApi().then(() => {
//             picApi().then(() =>{
//                 resolve("Good job!");
//             }).catch(() =>{
//                 reject("Bad try!");
//             })
//         }).catch(() =>{
//             reject("Bad try!");
//         })
//     })
// }

// fetcingImage().then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.error(error);
// })



//....................  vezba 2 - html 2 - mala izmena u LISTENER u 



// button = document.getElementById("factButton");
// areaForAdding = document.getElementById("fact-text");
// img = document.getElementById("fact-img");



// const textApi = () => {
//     return new Promise((resolve, reject) => {
//         fetch("https://meowfacts.herokuapp.com/")
//         .then((response) => response.json())
//         .then((data) => {
//             areaForAdding.innerText = data.data[0];
//             resolve(true);
//         }) .catch((error) => {
//             reject(error);
//         })
//     })
// }

// const picApi = () => {
//     return new Promise((resolve, reject) => {
//         fetch("https://random.dog/woof.json")
//         .then((response) => response.json())
//         .then((data) => {
//             const url = data.url;
//             img.src = url;
//             resolve(true);
//         }) .catch((error) => {
//             reject(error);
//         })
//     })
// }

// const fetcingImage = () => {
//     return new Promise((resolve, reject) => {
//         textApi().then(() =>{
//             picApi().then(() => {
//                 resolve("Good job");
//             }).catch(() =>{
//                 reject("Bad try");
//             })
//          }).catch(() => {
//             reject("Bad try");
//      })
//   })
// }

// button.addEventListener("click", () => {
//     fetcingImage().then((response) => {
//         console.log(response);
//     }).catch((error) => {
//         console.error(error);
//     });
// });






//.......................................... vezba 2, drugi nacin


// const btn = document.getElementById("factButton");
// const text = document.getElementById("fact-text");
// const img = document.getElementById("fact-img");

// btn.addEventListener("click", () => {
//     fetch("https://meowfacts.herokuapp.com/")
//     .then((response) => response.json())
//     .then((data) => {
//         text.innerText = data.data[0];
//         fetch("https://random.dog/woof.json")
//         .then((response) => response.json())
//         .then((data) => {
//             const url = data.url;
//             img.src = url;
//         })
//         .catch((error) => console.error(error));
//     })
//     .catch((error) => console.error(error));
// })






const btn = document.getElementById("factButton");
const text = document.getElementById("fact-text");
const img = document.getElementById("fact-img");



const myFetch = (url) => fetch(url).then((result) => result.json())

const fetchFact = () => myFetch("https://meowfacts.herokuapp.com/");

const fetchImage = () => myFetch("https://random.dog/woof.json");


const getFact = () => {
  return new Promise((resolve, reject) => {
    fetchFact()
      .then((response) => {
        const fact = response.data[0];
        resolve(fact);// 'Neki text'
      })
      .catch((error) => {
        reject(error);
      });
  });
};

btn.addEventListener("click", () => {
  getFact()
    .then((fact) => {// 'Neki text' - ovaj fact hvatamo iz resolve u funkciji getFact
      fetchImage()
        .then((imageObject) => {
          const { url } = imageObject;
          text.innerText = fact;
          img.src = url;
        })
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
});



// //  gore argumenti

// //  dole u pozivu parametri se zovu ovi u zagradi (a,b);