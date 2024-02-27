//  DOMACI





//    VAZNOOOOOOOOO !!!!!!!!!!!!!!!!!!!!!!!!!!11



function tabela(){

    let rows = parseInt(document.getElementById("rows").value);
    let columns = parseInt(document.getElementById("columns").value);

    let tabelaHTML = "<table>";

    for (let i = 1; i <= rows; i++){
        tabelaHTML += "<tr>";
        for (let j = 1; j <= columns; j++){
        tabelaHTML += "<td>Row-" + i + "Column-" + j + "</td>";
        }
        tabelaHTML += "</tr>";
    }
    tabelaHTML += "</table>";
    document.getElementById("divid").innerHTML = tabelaHTML;
}




function createTable() {

    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);
    

    let table = document.createElement("table");
    

    for (let i = 1; i <= rows; i++) {
      let row = table.insertRow();
      for (let j = 1; j <= cols; j++) {
        let cell = row.insertCell();
        cell.textContent = "Row-" + i + " Column-" + j;
      }
    }
    

    let tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
  }









//          VEZBA   ///


//  Na klik se dodaje datum

// document.getElementById("btn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = Date();
// })


//  Na klik se menja dugme u datum


// document.getElementById("btn").addEventListener("click", function(){
//     this.innerHTML = Date();
// })



//  ............


// let dugme = document.getElementById("btn");
// let header = document.getElementsByTagName("h2")[0]; 

// dugme.addEventListener("click", function(){
//     header.style.color = "red";
// });


//  ............



// let paragraph = document.getElementById("myParagraph");
// let btn = document.getElementById("myBtn");

// function changeElement(element){
//     element.style.color = "red";
//     element.style.backgroundColor = "blue";
//     element.style.fontSize = "34px";
// }

// btn.addEventListener("click", function(){
//     changeElement(paragraph);
// });


//  ............


// function myFunction(){
//     let x = document.getElementById("numb").value;
//     let text;
//     if(isNaN(x) || x < 1 || x > 20){
//         text = "Input not valid";
//     } else {
//         text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

