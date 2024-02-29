

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
    







// vezba 1 - se nalazi na html 2

// let button = document.getElementById("btn");
// let ul = document.getElementById("ul");
// let h1 = document.getElementById("h1");


// button.addEventListener("click", function(){
// fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(first){
//         h1.innerText = first.academy;
//         first.students.forEach(function(student){
//             let li = document.createElement("li");
//             li.innerText = student;
//             ul.appendChild(li);

//         })
//     })
//     .catch(function(){
//         console.error("error");
//     })
// });


// vezba 2 - se nalazi na html 3
 

//  prvi nacin:

// const sendRequestiButton = document.getElementById("sendRequest");
// const personNameHeading = document.getElementById("personNameHeading");




// function onSendRequestClicked(){
//     fetch("https://swapi.dev/api/people/1")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         personNameHeading.innerHTML = data.name;                                     // interHTML a ne text  ?????

//         document.body.innerHTML += `
//         <table>
//            <tr>
//                 <th>Height</th>
//                 <th>Weight</th>
//                 <th>Eye color</th>
//                 <th>Hair color</th>
//            </tr>
//            <tr>
//                 <td>${data.height}</td>
//                 <td>${data.mass}</td>
//                 <td>${data.eye_color}</td>
//                 <td>${data.hair_color}</td>

//            </tr>
//         </table>
//         `

//     })
//     .catch(function(){
//         console.error("Star Wars API has failed");
//     })
// }

// sendRequestiButton.addEventListener("click", onSendRequestClicked);






//  Drugi nacin:

// const sendRequestiButton = document.getElementById("sendRequest");
// const personNameHeading = document.getElementById("personNameHeading");


// function setHeading(value){
//     personNameHeading.innerText = value;
// }


// function generateTable (data) {

//     document.body.innerHTML += `
//     <table>
//        <tr>
//             <th>Height</th>
//             <th>Weight</th>
//             <th>Eye color</th>
//             <th>Hair color</th>
//        </tr>
//        <tr>
//             <td>${data.height}</td>
//             <td>${data.mass}</td>
//             <td>${data.eye_color}</td>
//             <td>${data.hair_color}</td>

//        </tr>
//     </table>
//     `
// }


// function onSendRequestClicked(){
//     fetch("https://swapi.dev/api/people/1")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){

//         console.log(data);
//         setHeading(data.name);
//         generateTable(data);
//     })
//     .catch(function(){
//         console.error("Star Wars API has failed");
//     })
// }

// sendRequestiButton.addEventListener("click", onSendRequestClicked);






//  Treci nacin, dinamicka tabela na jedan nacin...... 


// const sendRequestiButton = document.getElementById("sendRequest");
// const personNameHeading = document.getElementById("personNameHeading");


// function setHeading(value){
//     personNameHeading.innerText = value;
// }


// function generateTable (data) {


//     const table = document.createElement("table");
//     const headingsTr = document.createElement("tr"); 

//     const heightCell = document.createElement("th");
//     heightCell.innerText = "Height";
//     headingsTr.appendChild(heightCell);

//     const weightCell = document.createElement("th");
//     weightCell.innerText = "Weight";
//     headingsTr.appendChild(weightCell);

//     const eyeColorCell = document.createElement("th");
//     eyeColorCell.innerText = "Eye Color";
//     headingsTr.appendChild(eyeColorCell);

//     const hairColorCell = document.createElement("th");
//     hairColorCell.innerText = "Hair Color";
//     headingsTr.appendChild(hairColorCell);

//     table.appendChild(headingsTr);



//     const contentTr = document.createElement("tr"); 
//     const heightValueCell = document.createElement("td"); 
//     heightValueCell.innerText = data.height;
//     contentTr.appendChild(heightValueCell);

//     const weightValueCell = document.createElement("td"); 
//     weightValueCell.innerText = data.mass;
//     contentTr.appendChild(weightValueCell);

//     const eyeColorValueCell = document.createElement("td"); 
//     eyeColorValueCell.innerText = data.eye_color;
//     contentTr.appendChild(eyeColorValueCell);

//     const hairColorValueCell = document.createElement("td"); 
//     hairColorValueCell.innerText = data.hair_color;
//     contentTr.appendChild(hairColorValueCell);

//     table.appendChild(contentTr);

//     document.body.appendChild(table);
// }




// function onSendRequestClicked(){
//     fetch("https://swapi.dev/api/people/1")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){

//         console.log(data);
//         setHeading(data.name);
//         generateTable(data);
//     })
//     .catch(function(){
//         console.error("Star Wars API has failed");
//     })
// }

// sendRequestiButton.addEventListener("click", onSendRequestClicked);







//  Treci nacin dinamicka tabela na drugi nacin:



const sendRequestiButton = document.getElementById("sendRequest");
const personNameHeading = document.getElementById("personNameHeading");


function setHeading(value){
    personNameHeading.innerText = value;
}


function generateTable (data) {


    const table = document.createElement("table");


    const headingsTr = document.createElement("tr");   
    //  ... da li sve atribute sa api a mozemo pretvoriti u niz??

    const headings = ["height", "weight", "Eye color", "Hair color"];

    headings.forEach(heading => {
         const cell = document.createElement("th");
         cell.innerText = heading;
         headingsTr.appendChild(cell);
    });

    table.appendChild(headingsTr);




    const propertyNames = [ "height", "mass", "eye_color", "hair_color"];
    const contentTr = document.createElement("tr");

    propertyNames.forEach(property => {
        console.log(property, data[property]);

        const cell = document.createElement("td");
        cell.innerText = data[property];
        contentTr.appendChild(cell);
});
table.appendChild(contentTr);

document.body.appendChild(table);
}



function onSendRequestClicked(){
    fetch("https://swapi.dev/api/people/1")
    .then(function(response){
        return response.json();
    })
    .then(function(data){

        console.log(data);
        setHeading(data.name);
        generateTable(data);
    })
    .catch(function(){
        console.error("Star Wars API has failed");
    })
}

sendRequestiButton.addEventListener("click", onSendRequestClicked);






//  3. zadatak




// function dogImage (){
//     fetch("https://dog.ceo/api/breeds/image/random")

//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         const imageUrl = data.message;

//         createImage(imageUrl);
//     })
//     .catch(function(error){
//         console.error(error);
//     })
// }

// function createImage(imageUrl){
//     const container = document.getElementById("container");
//     container.innerHTML = "";

//     const image = document.createElement("img");
//     image.src = imageUrl;
//     image.style.width = "300px";
//     image.style.height = "auto"; 
//     container.appendChild(image);
// }

// document.getElementById("sendRequest").addEventListener("click", dogImage);




function dogImage(){
    fetch("https://dog.ceo/api/breeds/image/random")

    .then(function(response){
        return response.json();
    })
    .then (function(data){
        const imageUrl = data.message;
        createImg (imageUrl)
    })
}

function createImg (imageUrl){

    const image = document.createElement("img");
    image.src = imageUrl;
    image.style.width = "300px";
    image.style.height = "auto";

    document.getElementById("container").appendChild(image);
}


document.getElementById("sendRequest").addEventListener("click", dogImage);