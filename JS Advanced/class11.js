// // ....................       classes inheritance 


// class Product {
//   constructor(id, name, price) {
//     this.id = Number(id) || 0;
//     this.name = name || "---";
//     this.price = Number(price) || 0;
//   }
 
//   displayDetails() {
//     console.log(`Id: ${this.id}`);
//     console.log(`Name: ${this.name}`);
//     console.log(`Price: ${this.price} EUR`);
//   }
// }
 
// class ElectricalDevice extends Product {
//   constructor(id, name, price, brand, model) {
//     super(id, name, price);
 
//     this.brand = brand || "---";
//     this.model = model || "---";
//   }
 
//   displayDetails() {
//     super.displayDetails();
//     console.log(`Brand: ${this.brand}`);
//     console.log(`Model: ${this.model}`);
//   }
// }
// // ................................................................

// console.log("PRODUCT:");
// const product = new Product(1, "Dress", 35);
// product.displayDetails();
 
// console.log("\nELECTRICAL DEVICE:");
// const elDevice = new ElectricalDevice(
//   2,
//   "Headphones",
//   100,
//   "Philips",
//   "Fidelio L3"
// );
// elDevice.displayDetails();
 


// //...................................... exercice 1 

// class Animal {
//     constructor(name, type, age, size){
//         this.name = name;

//         const validValues = ["carnivore", "herbivore", "omnivore"];
//         if(validValues.includes(type)){
//           this.type = type;
//         } else {
//           this.type = "no animal"
//         };

//         this.age = Number(age);
//         this.size = size;
//         this.isEaten = false;
//         }
//         eat(checkAnimal) {
//             if(checkAnimal instanceof Animal && this.type === "herbivore "){
//                 console.log(`The animal ${this.name} is a herbivore and does not eat other animals`)
//             } else if (checkAnimal instanceof Animal && this.type !== "herbivore") {
//                 this.isEaten = true;
//                 console.log(`The animal ${this.name} ate the ${checkAnimal.name}.`)
//             } else if (Math.pow(checkAnimal, 2) > this.size){
//                 console.log(`The animal ${this.name} tried to eat the ${checkAnimal.name} but it was too large.`)
//             } else {
//                 console.log(`The animal ${this.name} is eating ${checkAnimal}.`)
//             }
//         }
// }

// const animal1 = new Animal ("pas", "carnivore", 22, 4, true);
// const animal2 = new Animal ("macka", "herbivore", 33, 2, false)

// animal1.eat(animal2);






  class Animal {
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = Number(age);
        this.size = size;
        this.isEaten = false;
        }

        set type(index) {
          const types = ["carnivore", "herbivore", "omnivore"];
          if (types.includes(index)) {
            this._type = index;
          }
        }
       
        get type() {
          return this._type;
        }

        eat(checkAnimal) {
            if(checkAnimal instanceof Animal && this.type === "herbivore "){
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`)
            } else if (checkAnimal instanceof Animal && this.type !== "herbivore") {
                this.isEaten = true;
                console.log(`The animal ${this.name} ate the ${checkAnimal.name}.`)
            } else if (Math.pow(checkAnimal, 2) > this.size){
                console.log(`The animal ${this.name} tried to eat the ${checkAnimal.name} but it was too large.`)
            } else {
                console.log(`The animal ${this.name} is eating ${checkAnimal}.`)
            }
        }
}

const animal1 = new Animal ("pas", "carnivore", 22, 4, true);
const animal2 = new Animal ("macka", "herbivore", 33, 2, false)

animal1.eat(animal2);


set type (index) {
  const types = ["sdasdas" "sda" "dasdas"];
  if (types.includes(index)){
    this._type = animalType;
  }
}


//  ..................................exercice 2
class Person {
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName () {
    const fullName = `${this.firstName} ${this.lastName}`
    console.log(fullName);
  }
}

class Student extends Person{
  constructor(firstName, lastName, age, academyName, studentId) {
    super(firstName, lastName, age);
    this.academyName = academyName;
    this.studentId = Number(studentId);
  }
  study () {
    super.getFullName();
    console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
  }
}

const student1 = new Student ("Pera", "Markovic", 22, "SEDC", 22);
const student2 = new Student ("Maja", "Markovic", 44, "SEDC", 5);

student1.study();


