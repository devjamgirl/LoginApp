//lesson 1
// //print hello world to the console
// console.log("hello world");
// //print hello world to the page (AKA the document)
// document.write("hello world")
// // prints message in pop-up box
// alert("Kiss me")
//
// lesson2
// var name = prompt("Whats your Name?")
// console.log(name)

// lesson3
var one = 12 + 18
console.log
var two = true

var three = "let the sunshine"

var four = [33, 20, 22]

// // This means if i is 0 and if i is less than or equql to 100 then add 5 to i
// for(var i = 0; i <= 100; i += 5) {
//   console.log(i);
// }
//
// var batman = {
// color:'black',
// alliance:'good',
// power:'rich'
// };
//
// var spiderman = {
//   color:'blue and red',
//   alliance:'good',
//   power: 'webslinger'
//
//
// var joker = {
//   color:'purple',
//   alliance:'bad',
//   power: 'crazy af'
// };
// console.log(batman);
// console.log(spiderman);
// console.log(joker);
// console.log(batman.color,spiderman.alliance,joker.power)
//
// function getValue() {
//   var input = document.getElementById('input');//grab value in input
//   document.write(input.value);
// }






// Create an array with multiple objects, each with multiple properties. Use a for loop to console.log the various properties.
// Create a copy of your template folder and paste it into your week8 folder.
// Rename it classwork (or something of your choosing). Open it in your texteditor.
// Make a div and give it an ID. Using JavaScript, put some text into that element.
//--answer below---
// creating an variable that grabs the element by id and then adds textcontent something inside the div
var yes = document.getElementById('yes');
yes.textContent = 'Something'

// Make a string variable and use that to put some text into an H1 using JavaScript.
var yellow = document.getElementById('yellow');
var one = 'string1';
yellow.textContent = one

// Make a function that takes a user's input (value) and then console.logs the value. Initialize the function (make it start) when you click a button.
function getValue(){
  var input2 = document.getElementById('input2');
 console.log(input2.value);
 input.value='';
}
// Make an array with five entries. Using a loop, console.log each entry.
var groceries = ['apples', 'patties','bread', 'juice', 'carrots']
// is i less than or equal to the
for ( var i = 0; i = groceries.length; i++){
  console.log(groceries[i]);
}
// Create an object with at least three properties. console.log each property.
 var carArray = [
   {
     name:'Honda',
     drivenTrain: 'FWD',
     doors: 4
   },
   name: 'Toyota',
   driveTrain: 'FWD',
   doors: 4
 }
 name: 'Mazda',
 driveTrain: 'FWD',
 doors:4
 }
 ]

 for(var i = 0; i < carArray; i++) {
   console.log(carArray[i].doors.trunkDoor);
 };
