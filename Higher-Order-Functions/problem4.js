// Given an array of numbers print the product of all numbers

let arr = [1, 2]
let a = arr.reduce(function(a, b) {
  return a * b
})
console.log(a)