
// // Provera koji je tip varijable ... IMPORTANT !!!

// var testvar= 5;
// alert (testvar); //shows 5
// alert (typeof testvar); //shows number 

// // Number 

// var first = 1;
// console.log( first, "first");

// // this is a string

// var age = "24";
// console.log(age, "age");

// // this is a number 

// var age = 24;
// console.log(age, "age");

// // This is a boolean

// var knowsHtml = true;
// var knowJS = false;
// console.log(knowsHtml, "knowsHtml");
// console.log(knowJS, "knowJS");

// // arithmetic operators

// var a = 5;
// var b = 2;
// console.log (a + b);
// console.log (a - b);
// console.log (a * b);
// console.log (a / b);
// console.log (a % b);
// console.log (a++);
// console.log (a);
// // u ovom se a uvecava za 1 u odnosu na prethodni rezultat
// console.log (a++);

// console.log (++a);

// c = 5;

// console.log (c++);

// console.log ( c + 9 );
// console.log (++c);



// //comparison operators
// var x = 5;
// var y = 2;
// console.log(x == y); //false
// console.log(x != y); //true
// console.log(x > y); //true
// console.log(x < y); //false
// console.log(x >= y); //true
// console.log(x <= y); //false
 
// //asignment operators
// var x = 5;
// x += 2; // 7
// console.log(x);
// x -= 2; // 5
// console.log(x);
// x *= 2; // 10
// console.log(x);
// x /= 2; // 5
// console.log(x);
// x %= 2; // 1
// console.log(x);


// //  povrsina

//   var a = 2;
//   var b = 2;
// console.log (a*b);

// // obim kruga

// var a = 2;
// var p = 1;
//  console.log (p*a);

//  /*jdsadksjdsaslkdjsadjlk8*/

// console.log (a++);
// console.log (a++);






            function tellStory(name, mood, activity) {
                var result = "";
                var i = 0;
                while (i < tellStory.length) {
                    switch (i) {
                        case 0:
                            result += name + " je bila ";
                            break;
                        case 1:
                            result += mood + " danas. Odlučila je da ";
                            break;
                        case 2:
                            result += activity + ".";
                            break;
                    }
                    i++;
                }
                return result;
            }
            
            // Testiranje funkcije
            var name = "Ana";
            var mood = "srećna";
            var activity = "prošeta parkom";
            var story = tellStory(name, mood, activity);
            console.log(story);
            


// ..........................................................................



function validateNumber(number) {
    // Provera da li je broj validan (primer validacije)
    return !isNaN(number); // Vraća true ako je broj validan, inače false
}

function tellStory(name, mood, activity) {
    var result = "";
    var i = 0;
    while (i < 3) {
        switch (i) {
            case 0:
                result += validateNumber(name) ? name + " je bio/la " : "Nevalidan broj za ime ";
                break;
            case 1:
                result += validateNumber(mood) ? mood + " danas. Odlučio/la je da " : "Nevalidan broj za raspoloženje ";
                break;
            case 2:
                result += validateNumber(activity) ? activity + "." : "Nevalidan broj za aktivnost ";
                break;
        }
        i++;
    }
    return result;
}

// Testiranje funkcije
var name = "Ana";
var mood = "srećan";
var activity = "prošeta parkom";
var story = tellStory(name, mood, activity);
console.log(story);
