// // //  primer 1



// class Animal {
//     constructor(name, gender, age) {
//         this.id = Math.floor(Math.random());
//         this.name = name;
//         this.gender = gender;
//         this.age = Number(age);
//     }
// }


// const animals = [
//     new Animal("Kitty", "female", 2),
//     new Animal("Rex", "male", 3),
//     new Animal("Bobby", "male", 4),
//     new Animal("Micka", "female", 1),
//   ];

//   import {getYoungestAnimal, getFemaleAnimals, getMaleAnimals} from "./animalsService.js"
//   console.log(getYoungestAnimal(animals));
//   console.log(getFemaleAnimals(animals));
//   console.log(getMaleAnimals(animals));




//  primer 2


class Product {
    constructor(name, category, price){
        this.id = Math.floor(Math.random());
        this.name = name;
        this.category = category;
        this.price = price;
    }
}


const products = [
    new Product("Laptop", "Electronics", 1700),
    new Product("Dress", "Clothing", 35),
    new Product("T-Shirt", "Clothing", 15),
    new Product("Vacuum cleaner", "Electronics", 70),
    new Product("Headphones", "Electronics", 60),
  ];



  import product from "./productsService.js";

  console.log(product.getProductsByCategory(products, "Electronics"));
  console.log(product.getSumOfPrices(products));
  console.log(product.getAveragePrice(products));
  console.log(product.getTheCheapestProduct(products));