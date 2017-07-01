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
//
// // lesson3
// var one = 12 + 18
// console.log
// var two = true
//
// var three = "let the sunshine"
//
// var four = [33, 20, 22]
var users = [
  {
  email: "romona@email.com",
  password: "pass123"
},
{
  email: "msbwood@email.com",
  password: "pass123"
},
{
  email: "dylann@email.com",
  password: "pass123"
}
]

function signOn() {
var address = document.getElementById("Email");
var pswd = document.getElementById("Password");
var results = document.getElementById("answer");


console.log("email is address " + address);
console.log("password is " + pswd);

  for(i = 0; i < users.length; i++) {
    console.log(users[i]);
    if(Email.value === users[i].email && Password.value ===users[i].password){
  console.log ("We have a match!");
answer.className = "Success"
 alert(" Success, You have mail!");
return
}
  };
}
console.log(signOn())
