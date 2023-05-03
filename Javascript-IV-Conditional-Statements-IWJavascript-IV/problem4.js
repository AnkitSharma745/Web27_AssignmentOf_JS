/*Problem 4:
Given stored username and password and input username and password, Print if the user can login or not.*/
let username = "ankit"
let userpass = 1253
let databasename = "ankit"
let databasepass = 1253
if (username == databasename && userpass == databasepass) {
  console.log("Login")
}
else {
  console.log("Details does not matches")
}