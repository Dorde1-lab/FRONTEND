// let byIdElement = $("#mainTitle").text(); 

// // console.log(allElements);
// console.log(byIdElement);




// let allElements = $("*"); 
// // gets all elements
// let byIdElement = $("#mainTitle"); 
// // gets element by id
// let byClassElements = $(".innerWrapper");
//  // gets elements by class name
// let byTagNameElements = $("p");
//  // gets elements by tag name
// let wrapperAndInnerWrapper = $(".wrapper,.innerWrapper");
//  // gets elements from multiple classes
// let firstParagraph = $("p:first");
//  // gets the first p element
// let lastParagraph = $("p:last"); 
// // gets the last p element
// let firstChildHeaders = $("h3:first-child");
//  // gets all the first h3 elements in their parents
// let lastChildParagraphs = $("p:last-child"); 
// // gets all the last p elements in their parents
// let secondChildParagraphs = $("p:nth-child(2)"); 
// // gets all the second place p elements in their parents
// console.log(firstParagraph.text());


// // selecting

// allElements.first();
// allElements.last();
// // Find elements in JQuery array
// allElements.find(".wrapper").find("p").last();
// // Get DOM element from JQuery array
// allElements[0];
// // Get all DOM elements from a JQuery array
// byClassElements.get();
// // Get next or previous element
// firstParagraph.next();
// firstParagraph.prev();



//  prva vezba...................

// $(document).ready(function(){
//  let div = $("#firstWrapper");
//  let par = $("p").first();
//  let h1 = $("h1").last();
//  let h3 = $("h3:first");
//  let button = $("button");
// })




// $("input").first().val();// get value from input
// secondChildParagraphs.hide();// hide elements
// secondChildParagraphs.show();// show elements
// byClassElements.first().html();// get innerHTML
// byClassElements.first().html(`<h1> This is a new h1! </h1>`);// set innerHTML
// byTagNameElements.last().text();// get text
// byTagNameElements.last().text("This is a new text");// set text
// byTagNameElements.last().css("color");// getting CSS
// byTagNameElements.last().css("color", "red");// Changing CSS
// $("h1").first().after("<p>new p tag after the h1</p>");
// $("h1").first().before("<p>new p tag before the h1</p>");




// vezba


// $(document).ready(function(){
//  $("h1").first().text("JQuery is awesome");
//  $("h1").first().after("<h2> Novi header </h2>");
//   $("button").css("background-color", "red");
// })


// eventListener 



// let button = $("button").first();
// // simple on event click
// button.on("click", function(){
//   console.log("Hello");
// })
// // Even simpler click event
// button.click(function(e){
//   console.log("HELLO AGAIN");})



// $(document).ready(function(){
// $("button").first().click(function(){
//     $("#secondWrapper").hide();
//     $("p").css("color", "green");
//     $("button").first().text("Don't click me");
// });
// });

$(document).ready(function(){
let pera = $("#secondWrapper").find("p").get();
 
pera.forEach(function(element, index){
    $(element).css("color", "red");
})
});