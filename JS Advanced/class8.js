// //  DESTRUCTRING


// const student = {
//     id: 1001,
//     name: 'Alice',
//     age: 20,
//     address: {
//       street: '456 Elm St',
//       city: 'Somewhere',
//       country: 'USA'
//     },
//     grades: {
//       math: 90,
//       science: 85,
//       history: 95
//     }
//   };

//   function object () {
//     const {name, age = 18, address:{city = 'Belgrade'}} = student;
//     const info = {name, age, city};          //  izbacuje objekat 
//     console.log(info);
//     console.log(name, age, city);            //  izbacuje vrednosti name, age, city 


//     const{math, science, history} = student.grades;
//     const average = (math + science + history) / 3;
//     console.log(average);
    
//  };
//   object () 



// ARRAY:


// const studentSubjects = ['Math', 'Science', 'History'];
// const studentGrades = [90, 85, 95];


// const [Subject1, Subject2, Subject3] = studentSubjects;
// const [grade1, grade2, grade3] = studentGrades;

// console.log(`${Subject1} - ${grade1}`);
// console.log(`${Subject2} - ${grade2}`);
// console.log(`${Subject3} - ${grade3}`);






// console.log("Test");
// window.console.log('window test');

// alert("obavijest!!!");
// window.alert('jajaja');

// // THIS
// console.log('root', this);

// // function firstFunction() {
//   console.log('firstFunctions -> this', this);
// }

// firstFunction();
// window.firstFunction();

// const student = {
//   name: 'Niko Nikic',
//   displayThis: function () {
//     console.log('this inside student => ', this);
//   }
// }

// student.displayThis();

// function Student(name, age) {
//   this.name = name || '---';
//   this.age = age || 0;
// }

// const st1 = new Student('John', 20);
// console.log(st1.name);//John





// ........................... OBJECT DESTRUCTRING


// const myDog = {
//   name: "Bugsy",
//   color: "Black",
//   age: 4,
//   vacinations: {
//     vacination1: "12.12.2022.",
//     vacination2: "09.03.2023.",
//   },
//   bark: function () {
//     console.log("BARK BARK BARK!");
//   },
// };

// const dog2 = {
//   name: "Rex",
//   color: "Gray",
//   age: 2,
//   owner: "Ana",
// };
// function novaFunkcija (dog) {
//     const {owner} = dog;
// }
// novaFunkcija(dog2)


// const { name, color } = myDog;

// // console.log(`Dog ${myDog.name} has ${myDog.color} color.`);
// // console.log(`Dog ${name} has ${color} color.`);

// function displayOwner({ owner = "NO OWNER" }) {        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   const { owner = 'NO OWNER' } = dog;
//   console.log(`Owner is ${owner}`);
// }
// displayOwner(dog2);
// // displayOwner(myDog);

// console.log(myDog.owner); // undefined




// const book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publicationYear: 1925,
//   genre: "Fiction",
//   ratings: {
//     goodreads: 4.0,
//     amazon: 4.5,
//     barnesAndNoble: 4.2,
//   },
// };

// const average = ((book.ratings.goodreads + book.ratings.amazon + book.ratings.barnesAndNoble)/3).toFixed(2);
// console.log(`${book.title} (${book.author}) has ${average} average rating`);
// const title = book.title;
// const { title } = book;

// console.log(title);
// console.log(book);

// const {  title = '---',  author = '---',  ratings: { goodreads, amazon, barnesAndNoble }} = book;

// const average = ((goodreads + amazon + barnesAndNoble) / 3).toFixed(2);
// console.log(`${title} (${author}) has ${average} average rating`);






// // ARRAY DESTRUCTRING

// const subjects = ["Math", "Biology", "Chemistry", "Phisics"];
// // const firstSubject = subjects[0];//Math
// const [firstSubject, secondSubject, , fourthSubject] = subjects;

// console.log(`First subject is ${firstSubject}`);
// console.log(`Second subject is ${secondSubject}`);
// console.log(`Fourth subject is ${fourthSubject}`);

// const colorTypes = ["RGB", "HEX", "HSL"];
// const colorValues = ["191, 34, 183", "#bf22b7", "303°, 70%, 44%"];
// // RGB - 191, 34, 183
// // HEX - #bf22b7

// const [rgb, hex, hsl] = colorTypes;
// const [rgbValue, hexValue, hslValue] = colorValues;

// console.log(`${rgb} - ${rgbValue}`);
// console.log(`${hex} - ${hexValue}`);
// console.log(`${hsl} - ${hslValue}`);



// //........................  IMPORTANT EXAMPLE   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function Car(brand, model, year, price) {
    this.brand = brand || "---";
    this.model = model || "---";
    this.year = Number(year) || 0;
    this.price = Number(price) || 0;
    this.owners = [];


    this.addOwner = function ({ id, fullName }) { 
        this.owners.push({id, fullName});  
      };


    this.displayOwners = function() {
      if(this.owners.length) {
        console.log('Owners: ');
        this.owners.forEach(({fullName}) => {
          console.log(fullName);
        });
      } else {
        console.log("This car is brand new - no previous owners.");
      }
    }
  
    this.displayDetails = function () {
      console.log(`${this.brand} ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Price: ${this.price} EUR`);
      this.displayOwners();
    };
  
    
  }

  const car1 = new Car("VW", "Golf VII", 2019, 15000);
  const car2 = new Car("Audi", "A3", "2022", 24000);
  
  const person1 = {
    id: 1,
    fullName: "Aida Pirusic",
    age: 12,
    favFood: ["chocolate", "water"],
  };
  
  const person2 = {
    id: 2,
    fullName: "Miroslav Popovic",
    age: 12,
    favFood: ["meat", "orange"],
  };
  
  const person3 = {
    id: 3,
    fullName: "Almir Vuk",
    age: 12,
    favFood: ["carrot", "water"],
  };
  
  car1.addOwner(person1);
  car1.addOwner(person2);
  car1.addOwner(person3);
  
  car1.displayDetails();
  console.log("\n");
  car2.displayDetails();
  
  // 2 456.45

















  const obj = {
  name: "Aida",
};

// ..........................................object.create        -      kopiranje objekta(stvaranje novog)

// const copy = { ...obj };
const copy = Object.create(obj);
copy.name = "Almir";



// ......................................Object.assign    -     spajanje dva objekta, ali tada svi objekti dobijaju i propertije drugo objekta. da se to izmeni, stavlja se {} !!!!!!!!!!!!

const studentBasicInfo = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
};

const studentAdditionalInfo = {
  address: "Other Adress",
  street: "Other Street",
  streetNumber: 12,
  mobile: "111 111 111",
};

const student = Object.assign({}, studentBasicInfo, studentAdditionalInfo);





//...................................... Object.keys            -     vraca niz naziva atributa 
// ......................................Object.values          -     vraca vrednost tih atributa
// ......................................Object.entries         -     vraca kombinaciju, niz koji sadrzi i atribut i njegovu vrednost.



console.log(Object.keys(student)); ``
console.log(Object.values(student));
console.log(Object.entries(student));








// .......................................................!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function mojaFunkcija() {
  return new Promise((resolve, reject) => {
    reject("Neka error poruka");                              // Asinhrona funkcija ima reject za error. 
  });
}

mojaFunkcija().catch((err) => {
  console.log(err);
});

function mojaFunkcija2() {
  throw new Error("Ovo je novi error");            // Sinhrona funkcija nema reject pa se error moze hendlovati na ovaj nacin i try, catch blok.
  console.log(student.firstName);
}

// mojaFunkcija2();

try {                                             // Sinhrona funkcija nema reject pa se error moze hendlovati na ovaj nacin i try, catch blok.
  mojaFunkcija2(); 
} catch (error) {
  console.log("Ovo ne radi !!!");
}

console.log('ovo opet se izvrsava');
  