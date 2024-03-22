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
// //         eat(checkAnimal) {
// //             if(checkAnimal instanceof Animal && this.type === "herbivore "){
// //                 console.log(`The animal ${this.name} is a herbivore and does not eat other animals`)
// //             } else if (checkAnimal instanceof Animal && this.type !== "herbivore") {
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






//   class Animal {
//     constructor(name, type, age, size){
//         this.name = name;
//         this.type = type;
//         this.age = Number(age);
//         this.size = size;
//         this.isEaten = false;
//         }

//         set type(index) {
//           const types = ["carnivore", "herbivore", "omnivore"];
//           if (types.includes(index)) {
//             this._type = index;
//           }
//         }
       
//         get type() {
//           return this._type;
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




//  ..................................exercice 2

// class Person {
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   getFullName () {
//     const fullName = `${this.firstName} ${this.lastName}`
//     console.log(fullName);
//   }
// }

// class Student extends Person{
//   constructor(firstName, lastName, age, academyName, studentId) {
//     super(firstName, lastName, age);
//     this.academyName = academyName;
//     this.studentId = Number(studentId);
//   }
//   study () {
//     super.getFullName();
//     console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
//   }
// }

// const student1 = new Student ("Pera", "Markovic", 22, "SEDC", 22);
// const student2 = new Student ("Maja", "Markovic", 44, "SEDC", 5);

// student1.study();









class Person {
    constructor(id, name, gender, age) {
      this.id = Number(id) || 0;
      this.name = name || "---";
      this.lastName = lastName || "---";
      this.firstName = firstName || "---";
      this.gender = gender.toLowerCase() || "---";
      this.age = Number(age) || 0;
    }
  
    set name(personName) {
      if (!personName || personName.length < 2 || !isNaN(personName)) {
        console.error(
          "Person name is not valid. It needs to have at least 3 characters. And cannot be number."
        );
      } else {
        this._name = personName;
      }
    }
  
    get name() {
      return `The name is ${this._name}`;
    }
  
    displayDetails() {
      console.log(`Id: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Age: ${this.age}`);
    }

    static isFemale(obj) {                                 //             ???????????????????????
      return obj.gender.toLowerCase() === "female";
    }
  }
  
  class Student extends Person {
    constructor(id, name, gender, age, academyName, academyYear) {
      super(id, name, gender, age);
  
      this.academyName = academyName || "---";
      this.academyYear = Number(academyYear) || 1;
    }
  
    displayInfo() {
      this.displayDetails();
      console.log(`Academy: ${this.academyName}`);
      console.log(`Year: ${this.academyYear}`);
    }
  }
  
  class Employee extends Person(Student) {
    constructor(id, name, gender, age, company, jobTitle) {
      super(id, name, gender, age);
  
      this.company = company || "---";
      this.jobTitle = jobTitle || "---";
    }
  
    // override function
    displayDetails() {
      super.displayDetails();
      console.log(`Company: ${this.company}`);
      console.log(`Job title: ${this.jobTitle}`);
    }
  }
  
  const person1 = new Person(1, "Aida P", "female", 22);
  const person2 = new Person(2, "Djordje L", "male", 20);
  
  // person1.name = 'F';
  
  person1.displayDetails();
  console.log("\n");
  person2.displayDetails();
  
  const st1 = new Student(3, "Milica D", "female", 20, "Qinshift academy", 1);

  console.log("displayDetails:");
  st1.displayDetails();
  console.log("\ndisplayInfo:");
  st1.displayInfo();
  console.log("\n:");
  
  const empl1 = new Employee(
    4,
    "Tamara Z",
    "female",
    20,
    "Microsoft",
    "Frontend developer"
  );
  empl1.displayDetails();
  
  // .................................STATIC METHOD

  Math.pow(3, 2);
  // console.log(Person.isFemale(person1));
  // console.log(Person.isFemale(person2));
  
  console.log(empl1 instanceof Person); //true
  console.log(empl1 instanceof Employee);
  console.log(empl1 instanceof Student); //false
  
  function whoAmI(obj) {
    if (obj instanceof Student) {
      console.log("IT IS A STUDENT");
    } else if (obj instanceof Employee) {
      console.log("IT IS AN EMPLOYEE");
    } else if (obj instanceof Person) {
      console.log("IT IS A PERSON");
    } else {
      console.log("Error");
    }
  }
  
  whoAmI(person1);
  whoAmI(st1);
  whoAmI(empl1);
  whoAmI({ test: 1234 });
  








//   SET    and    GET .....................


  // class Clothes extends Product {
  //   constructor(id, name, price, size, material) {
  //     super(id, name, price);
  //     this.size = size || "S";
  //     this.material = material || "---";
  //   }
  
  //   set size(newSize) {
  //     const uppercasedSize = newSize.toUpperCase(); //s => S
  //     const validSizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  
  //     if (validSizes.includes(uppercasedSize)) {
  //       this._size = uppercasedSize;
  //     } else {
  //       console.error("Size is not valid!");
  //       this._size = "S";
  //     }
  //   }
  
  //   get size() {
  //     return this._size.toUpperCase();
  //   }
  // }
  


  // .................................. the same 


  // class Person {
  //   constructor(id, name, gender, age) {
  //     this.id = Number(id) || 0;
  //     this.name = name || "---";
  //     this.lastName = lastName || "---";
  //     this.firstName = firstName || "---";
  //     this.gender = gender.toLowerCase() || "---";
  //     this.age = Number(age) || 0;
  //   }
  
  //   set name(personName) {
  //     if (!personName || personName.length < 2 || !isNaN(personName)) {
  //       console.error(
  //         "Person name is not valid. It needs to have at least 3 characters. And cannot be number."
  //       );
  //     } else {
  //       this._name = personName;
  //     }
  //   }
  
  //   get name() {
  //     return `The name is ${this._name}`;
  //   }
  
  //   displayDetails() {
  //     console.log(`Id: ${this.id}`);
  //     console.log(`Name: ${this.name}`);
  //     console.log(`Gender: ${this.gender}`);
  //     console.log(`Age: ${this.age}`);
  //   }}