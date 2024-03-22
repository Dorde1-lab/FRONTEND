

const getYoungestAnimal = function (animal) {
    const newAnimal = [...animal].sort((a, b) => a.age - b.age);
    const minAge = newAnimal[0];
    return minAge;
}


const getFemaleAnimals = function(animal) {
    const newAnimal = [...animal].filter((element) => element.gender === "female");
    return newAnimal;
}


const getMaleAnimals = function(animal) {
    const newAnimal = [...animal]
    .filter((element) => element.gender === "male")
    .map((element) => element.name)
    return newAnimal;
}


export {
    getYoungestAnimal,
    getFemaleAnimals,
    getMaleAnimals
};