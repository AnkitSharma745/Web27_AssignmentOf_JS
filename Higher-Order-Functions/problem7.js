let users = [
  { firstName: "Nrupul", lastName: "Dev", place: "Banglore" },
  { firstName: "Prateek", lastName: "Shukla", place: "Banglore" },
  { firstName: "Yogesh", lastName: "Bhat", place: "Kolkata" },
];

let a = users.map(function(a){
  let x= a.firstName+" "+a.lastName
  return x
})
console.log(a)