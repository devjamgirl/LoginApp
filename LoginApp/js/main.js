
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
// function register() {
//   var newAddress = document.getElementById("newEmail");
//   var newPswd = document.getElementById("newPassword");
//   var newResults = document.getElementById("Answer");
//
//   console.lot("new email " + newAddress);
// }
