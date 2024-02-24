

// fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json")
    
//     .then(function(response){
//         console.log("fetch - success");
//         return response.json();
//     })
//     .then(function(jsResponse){
//         console.log(jsResponse);
//     })

//     .catch(function(){
//         console.error("fatch - error");
//     })





// const astrosList = document.getElementById("astros");

//     fetch("http://api.open-notify.org/astros.json")
//        .then(function(response){
//         return response.json();
//        })
//        .then(function(spaceData){
//         console.log(spaceData);
//         spaceData.people.forEach((astro) => {
//             const li = document.createElement("li");
//             li.innerText = astro.name;
//             astrosList.appendChild(li);
//         });
//         })
//         .catch(function(){
//             console.error("Route has failed");
//         });
    







// vezbe

let button = document.getElementById("btn");
let ul = document.getElementById("ul");
let h1 = document.getElementById("h1");


button.addEventListener("click", function(){
fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
    .then(function(response){
        return response.json();
    })
    .then(function(first){
        h1.innerText = first.academy;
        first.students.forEach(function(student){
            let li = document.createElement("li");
            li.innerText = student;
            ul.appendChild(li);

        })
    })
    .catch(function(){
        console.error("error");
    })
});