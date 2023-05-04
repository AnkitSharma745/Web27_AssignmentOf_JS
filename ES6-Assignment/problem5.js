//Given 2 numbers a and b print which is greater or "both equal".

let find= (a,b)=>{
let result = a > b ? a : b
let x = a == b ? true : false
if (x) {
  console.log("Both are equal")
}
else {
  console.log(result, "is greater")
}
}
find(2,4)