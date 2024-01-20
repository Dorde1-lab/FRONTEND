var unos = prompt ("Unesi godinu rodjenja:");

var godina = parseInt(unos);

if (!isNaN(godina)) {

    var znak = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];

    var znakindex = (unos - 4) % 12;
    console.log (znak[znakindex]);}
    else {
        console.log ("Nista");
    }