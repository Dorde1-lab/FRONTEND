// [18:43]  inheritance 



function Product(id, name, price) {
  this.id = Number(id) || 0;
  this.name = name || "---";
  this.price = Number(price) || 0;
 
  this.displayDetails = () => {
    console.log(`Id: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price} $`);
  };
}
 
function ElectricalDevice(id, name, price, brand, model) {
  Object.setPrototypeOf(this, new Product(id, name, price));
  this.brand = brand || "---";
  this.model = model || "---";
 
  this.displayDetails = () => {
    Object.getPrototypeOf(this).displayDetails();
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.model}`);
  };
}
 
function Laptop(id, name, price, brand, model, processor, isTouchScreen) {
  Object.setPrototypeOf(
    this,
    new ElectricalDevice(id, name, price, brand, model)
  );
 
  this.processor = processor || "---";
  this.isTouchScreen = isTouchScreen || false;
 
  this.info = () => {
    Object.getPrototypeOf(this).displayDetails();
    console.log(`Processor: ${processor}`);
    console.log(isTouchScreen ? "Touch screen" : "Regular screen");
  };
}
 



 
// function Clothes(id, name, price, size, material) {
//   Object.setPrototypeOf(this, new Product(id, name, price));
//   this.size = size || "---";
//   this.material = material || "---";
 
//   this.displayDetails = () => {
//     Object.getPrototypeOf(this).displayDetails();
//     console.log(`Size: ${size}`);
//     console.log(`Material: ${material}`);
//   };
// }
 
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
 
// console.log("\nClothes");
// const dress = new Clothes(3, "Little Black Dress", 35, "S", "cotton");
// dress.displayDetails();
 
 
// console.log("\nLaptop");
// const laptop = new Laptop(4,"Laptop",1700,"HP","Notebook - 15-ac650tu","Intel Core i5",true);
// console.log(laptop.name);
// laptop.info();






function person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function() {
      console.log(`{${this.firstName} ${this.lastName}}`)   }
}

function student(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new person(firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = () => {
    Object.getPrototypeOf(this).getFullName()
    console.log(`The student ${this.firstName} is studying in the ${this.academyName}`);
}
}

const student1 = new student("Marija", "Markovic", 22, "SEDC", 11);
const student2 = new student("Marko", "Markovic", 33, "SEDC", 4);
student1.getFullName();




function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth){
    Object.setPrototypeOf(this, new student(firstName, lastName, age, academyName, studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth || false;
    this.attendAdobeExam = function() {
        console.log(`The student ${this.firstName} is doing an adobe exam!`);
    }
}

const design1 = new DesignStudent ("Petar", "markovic", 22, "SEDC", 22, true)
design1.attendAdobeExam();


function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject){
    Object.setPrototypeOf(this, new student(firstName, lastName, age, academyName, studentId))

    this.hasIndividualProject = hasIndividualProject || false;
    this.hasGroupProject = hasGroupProject || false;
    this.doProject = function(type) {
        if(type === "individual"){
            console.log("individual");
            this.hasIndividualProject = true;
        } else if(type === "group") {
            console.log("Group");
            this.hasGroupProject = true;
        } else {
            console.log("no project");
        }
    }
}
const code = new CodeStudent("Marija", "Markovic", 22, "SEDC", 11, true, true);
code.doProject("individual")



function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart) {
    Object.setPrototypeOf(this, new student(firstName, lastName, age, academyName, studentId))
    this.academyPart = academyPart;
    this.attendCiscoExam = function() {
        console.log(`the student ${this.firstName} is doing a cisco exam!`)
    } 
}

const network = new NetworkStudent("Petar", "markovic", 22, "SEDC", 22, 55);
network.attendCiscoExam();
